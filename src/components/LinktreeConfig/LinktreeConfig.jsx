import React, { useEffect, useState } from "react";
import styles from "./LinktreeConfig.module.css";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Button from "../../components/Button/Button";
import {
  getProfileService,
  createProfileService,
} from "../../services/profile.service";
import { useUser } from "../../context/UserContext";
import { useColor } from "../../context/ColorContext";

const LinktreeConfig = () => {
  const { loading, setLoading, message, setMessage, getValidToken } = useUser();
  const { setMainColor, palette, mainColor } = useColor();

  const [formData, setFormData] = useState({
    username: "",
    bio: "",
    avatarFile: null,
    avatarPreview: "",
    links: ["", "", "", ""],
    extraLink: "",
    main_color: "#5f5fff",
    is_public: true,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = await getValidToken();
        const data = await getProfileService(token);

        setFormData((prev) => ({
          ...prev,
          username: data.profile.username || "",
          bio: data.profile.bio || "",
          avatarPreview: data.profile.avatar_url || "",
          links: data.links?.slice(0, 4).map((l) => l.url) || ["", "", "", ""],
          extraLink: data.links?.[4]?.url || "",
          main_color: data.profile.main_color || "#5f5fff",
          is_public: data.profile.is_public ?? true,
        }));

        if (data.profile.main_color) {
          setMainColor(data.profile.main_color);
        }
      } catch (error) {
        console.log("No hay perfil aún", error);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (field === "main_color") {
      setMainColor(value);
    }
  };

  const handleLinkChange = (index, value) => {
    const newLinks = [...formData.links];
    newLinks[index] = value;
    setFormData((prev) => ({ ...prev, links: newLinks }));
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert("El avatar no puede superar los 2MB");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      avatarFile: file,
      avatarPreview: URL.createObjectURL(file),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!formData.username.trim()) {
      alert("El nombre de usuario es obligatorio");
      setLoading(false);
      return;
    }

    try {
      const token = await getValidToken();

      const payload = new FormData();
      payload.append("username", formData.username);
      payload.append("bio", formData.bio);
      payload.append("main_color", formData.main_color);
      payload.append("is_public", formData.is_public ? 1 : 0);
      if (formData.avatarFile) payload.append("avatar", formData.avatarFile);

      const links = [...formData.links, formData.extraLink]
        .filter((l) => l)
        .map((url) => ({ title: url, url }));
      payload.append("links", JSON.stringify(links));

      await createProfileService(payload, token);

      setMessage("Perfil guardado con éxito!");
    } catch (error) {
      console.error(error);
      setMessage("Error al guardar el perfil");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <h2 className={styles.pageTitle}>Configura tu Linktree</h2>
        </div>

        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>Nombre de usuario</label>
            <input
              type="text"
              placeholder="@tuusuario"
              value={formData.username}
              onChange={(e) => handleChange("username", e.target.value)}
            />

            <label>Biografía</label>
            <textarea
              placeholder="Cuéntanos algo sobre ti"
              value={formData.bio}
              onChange={(e) => handleChange("bio", e.target.value)}
            />

            <label>Avatar (Subir Imagen)</label>
            <input type="file" accept="image/*" onChange={handleAvatarUpload} />
            {formData.avatarPreview && (
              <img
                src={formData.avatarPreview}
                alt="Avatar preview"
                style={{ width: "100px", height: "100px", marginTop: "10px" }}
              />
            )}

            <label>Enlaces populares</label>
            {formData.links.map((link, i) => {
              const placeholders = [
                "https://instagram.com/usuario",
                "https://youtube.com/@usuario",
                "https://tiktok.com/@usuario",
                "https://linkedin.com/in/usuario",
              ];
              return (
                <input
                  key={i}
                  type="url"
                  placeholder={placeholders[i]}
                  value={link}
                  onChange={(e) => handleLinkChange(i, e.target.value)}
                />
              );
            })}

            <label>Agregar otro enlace</label>
            <input
              type="url"
              placeholder="https://miweb.com"
              value={formData.extraLink}
              onChange={(e) => handleChange("extraLink", e.target.value)}
            />

            <label>Color principal</label>
            <input
              type="color"
              value={formData.main_color}
              onChange={(e) => handleChange("main_color", e.target.value)}
            />

            {palette.length > 0 && (
              <div className={styles.palettePreview}>
                {palette.map((c, i) => (
                  <div
                    key={i}
                    className={styles.colorBox}
                    style={{ backgroundColor: c }}
                    onClick={() => handleChange("main_color", c)}
                    title={c}
                  />
                ))}
              </div>
            )}

            <div className={styles.actionsRow}>
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  id="public"
                  checked={formData.is_public}
                  onChange={(e) => handleChange("is_public", e.target.checked)}
                />
                <label htmlFor="public">Hacer mi perfil público</label>
              </div>

              <div className={styles.buttonContainer}>
                <Button
                  text={loading ? "Guardando..." : "Guardar cambios"}
                  type="submit"
                />
              </div>
            </div>
            {message && <p style={{ marginTop: "10px" }}>{message}</p>}
          </form>
        </div>

        <div className={styles.publicLink}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Ver mi Linktree público
          </a>
        </div>
      </div>
    </>
  );
};

export default LinktreeConfig;
