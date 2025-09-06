import { API_URL } from "../api/config.js";

export const getDashboardData = async (token) => {
  const res = await fetch(`${API_URL}/dashboard`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Error al obtener datos del dashboard");
  }

  return await res.json();
};
