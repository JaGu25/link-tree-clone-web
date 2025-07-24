import React from "react";
import styles from "../ProfilePreview/ProfilePreview.module.css";
import { FcBusinessContact, FcBriefcase, FcStart, FcWorkflow } from "react-icons/fc";
import { FaRegCopyright } from "react-icons/fa6";
import avatar from "../../assets/me.jpeg";

const PublicProfile = () => {
  return (
   <section className={styles.publicWrapper}>
      <div className={styles.preview}>
        <img className={styles.avatar} src={avatar} alt="Avatar" />
        <h2 className={styles.name}>Matías Albites</h2>
        <p className={styles.bio}>
          Desarrollador Frontend | Apasionado por la tecnología.
        </p>

        <div className={styles.links}>
          <a
            href="https://github.com"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <FcWorkflow className={styles.icon} />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <FcBusinessContact className={styles.icon} />
            LinkedIn
          </a>
          <a
            href="https://youtube.com"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <FcStart className={styles.icon} />
            YouTube
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox" className={styles.link}>
            <FcBriefcase className={styles.icon} />
            Contacto
          </a>
        </div>

        <div className={styles.footer}>
          <FaRegCopyright size={14} className={styles.footerIcon} />
          <span>2025 Matias.front</span>
        </div>
      </div>
    </section>
  );
};

export default PublicProfile;
