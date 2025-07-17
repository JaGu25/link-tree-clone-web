import React from "react";
import styles from "./FeatureCard.module.css";

const FeatureCard = ({ icon: Icon, title, description, reverse = false }) => {
  return (
    <div className={styles.card}>
  {Icon && <Icon className={styles.icon} />}
  {reverse ? (
    <>
      <p className={styles.description}>{description}</p>
      <h3 className={styles.title}>{title}</h3>
    </>
  ) : (
    <>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </>
  )}
</div>
  );
};

export default FeatureCard;
