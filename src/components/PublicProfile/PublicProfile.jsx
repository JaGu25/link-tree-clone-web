import React, { useEffect, useState } from "react";
import styles from "../ProfilePreview/ProfilePreview.module.css";
import {
  FcBusinessContact,
  FcBriefcase,
  FcStart,
  FcWorkflow,
} from "react-icons/fc";
import { FaRegCopyright } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { getPublicProfileService } from "../../services/profile.service";
import { useColor } from "../../context/ColorContext";

const PublicProfile = () => {
  const { userId } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { gradient, setMainColor } = useColor();

  const handleClick = async (link_id, url) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/linktree/click`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ link_id }),
      });
      window.open(url, "_blank");
    } catch (error) {
      console.error("Error registrando click:", error);
      window.open(url, "_blank");
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getPublicProfileService(userId);
        setProfileData(data);
        if (data?.profile?.main_color) {
          setMainColor(data.profile.main_color);
        }
      } catch (error) {
        console.error("Error cargando perfil público:", error);
      } finally {
        setLoading(false);
      }
    };
    if (userId) fetchProfile();
  }, [userId, setMainColor]);

  if (loading) return <p>Cargando...</p>;
  if (!profileData) return <p>Perfil no encontrado</p>;

  const { profile, links } = profileData;
  const orderedTitles = [
    "Instagram",
    "YouTube",
    "TikTok",
    "LinkedIn",
    "Mi Web",
  ];
  const icons = [
    FcWorkflow,
    FcBusinessContact,
    FcStart,
    FcBriefcase,
    FcWorkflow,
  ];

  return (
    <section className={styles.publicWrapper} style={{ background: gradient }}>
      <div className={styles.preview}>
        <img
          className={styles.avatar}
          src={`${import.meta.env.VITE_API_URL.replace("/api", "")}${
            profile.avatar_url
          }`}
          alt="Avatar"
        />
        <h2 className={styles.name}>{profile.name || "Usuario"}</h2>
        <p className={styles.bio}>{profile.bio}</p>

        <div className={styles.links}>
          {orderedTitles.map((title, index) => {
            const Icon = icons[index % icons.length];
            const link = links[index];

            return (
              link && (
                <a
                  key={index}
                  href="#"
                  className={styles.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.id, link.url);
                  }}
                >
                  <Icon className={styles.icon} />
                  {title}
                </a>
              )
            );
          })}
        </div>

        <div className={styles.footer}>
          <FaRegCopyright size={14} className={styles.footerIcon} />
          <span>{new Date().getFullYear()} Matias.front</span>
        </div>
      </div>
    </section>
  );
};

export default PublicProfile;
