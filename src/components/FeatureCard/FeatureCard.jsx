import React from "react";
import styles from "./FeatureCard.module.css";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className={styles.card}>
      {Icon && <Icon className={styles.icon} />} {/* Icono */}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default FeatureCard;
