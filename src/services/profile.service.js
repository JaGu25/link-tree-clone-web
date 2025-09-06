import { API_URL } from "../api/config.js";

export const getProfileService = async (token) => {
  const res = await fetch(`${API_URL}/linktree`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error("Error al obtener el perfil");
  return res.json();
};

export const createProfileService = async (formData, token) => {
  const res = await fetch(`${API_URL}/linktree`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Error al guardar el perfil");
  }

  return res.json();
};

export const getPublicProfileService = async (userId) => {
  try {
    const res = await fetch(`${API_URL}/linktree/public?user_id=${userId}`);
    if (!res.ok) throw new Error("Error al obtener perfil público");
    return await res.json();
  } catch (error) {
    console.error("getPublicProfileService:", error);
    throw error;
  }
};

export const registerVisitService = async (user_id) => {
  try {
    const response = await fetch(`${API_URL}/linktree/visit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id }),
    });
    if (!response.ok) throw new Error("Error al registrar visita");
    return await response.json();
  } catch (error) {
    console.error("registerVisitService:", error);
    throw error;
  }
};
