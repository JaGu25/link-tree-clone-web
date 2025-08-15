import React, {
  createContext,
  useReducer,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { refreshTokenService } from "../services/auth.service";

export const AuthContext = createContext(null);

const initialState = () => {
  const refreshToken = localStorage.getItem("refreshToken");
  return {
    accessToken: null,
    refreshToken: refreshToken || null,
    user: null,
    isAuthenticated: false,
  };
};

const ACTIONS = {
  SET_TOKENS: "SET_TOKENS",
  CLEAR_AUTH: "CLEAR_AUTH",
  SET_USER: "SET_USER",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_TOKENS:
      return {
        ...state,
        accessToken: action.payload.accessToken ?? state.accessToken,
        refreshToken:
          action.payload.refreshToken !== undefined
            ? action.payload.refreshToken
            : state.refreshToken,
        isAuthenticated:
          action.payload.isAuthenticated !== undefined
            ? action.payload.isAuthenticated
            : state.isAuthenticated,
      };
    case ACTIONS.CLEAR_AUTH:
      return {
        accessToken: null,
        refreshToken: null,
        user: null,
        isAuthenticated: false,
      };
    case ACTIONS.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, initialState);
  const isRefreshingRef = useRef(false);

  const setTokens = useCallback(
    ({ accessToken, refreshToken, isAuthenticated }) => {
      dispatch({
        type: ACTIONS.SET_TOKENS,
        payload: { accessToken, refreshToken, isAuthenticated },
      });
      if (refreshToken !== undefined) {
        if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
        else localStorage.removeItem("refreshToken");
      }
    },
    []
  );

  const clearAuth = useCallback(() => {
    dispatch({ type: ACTIONS.CLEAR_AUTH });
    localStorage.removeItem("refreshToken");
  }, []);

  const refreshAccessToken = useCallback(async () => {
    if (isRefreshingRef.current) return null;
    if (!state.refreshToken) {
      clearAuth();
      return null;
    }
    isRefreshingRef.current = true;
    try {
      const { accessToken, user } = await refreshTokenService(
        state.refreshToken
      );
      setTokens({ accessToken, isAuthenticated: true });
      if (user) dispatch({ type: ACTIONS.SET_USER, payload: user });
      return accessToken;
    } catch {
      clearAuth();
      return null;
    } finally {
      isRefreshingRef.current = false;
    }
  }, [state.refreshToken, setTokens, clearAuth]);

  useEffect(() => {
    if (!state.accessToken && state.refreshToken) {
      refreshAccessToken();
    }
  }, [state.accessToken, state.refreshToken, refreshAccessToken]);

  const login = useCallback(
    ({ accessToken, refreshToken, user }) => {
      setTokens({ accessToken, refreshToken, isAuthenticated: true });
      if (user) dispatch({ type: ACTIONS.SET_USER, payload: user });
    },
    [setTokens]
  );

  const logout = useCallback(() => {
    clearAuth();
  }, [clearAuth]);

  const fetchWithAuth = useCallback(
    async (input, init = {}) => {
      const withAuth = (token) => ({
        ...init,
        headers: {
          ...(init.headers || {}),
          Authorization: token ? `Bearer ${token}` : undefined,
          "Content-Type":
            (init.headers && init.headers["Content-Type"]) ||
            "application/json",
        },
      });
      let res = await fetch(input, withAuth(state.accessToken));
      if (res.status !== 401) return res;
      const newToken = await refreshAccessToken();
      if (!newToken) return res;
      return fetch(input, withAuth(newToken));
    },
    [state.accessToken, refreshAccessToken]
  );

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "refreshToken") {
        const rt = localStorage.getItem("refreshToken");
        if (!rt) clearAuth();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [clearAuth]);

  const value = useMemo(
    () => ({
      accessToken: state.accessToken,
      refreshToken: state.refreshToken,
      user: state.user,
      isAuthenticated: state.isAuthenticated,
      login,
      logout,
      refreshAccessToken,
      fetchWithAuth,
    }),
    [state, login, logout, refreshAccessToken, fetchWithAuth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
