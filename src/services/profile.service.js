const API_URL = "http://localhost:3001/api";

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
