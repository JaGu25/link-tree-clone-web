import React from "react";
import styles from "./FAQ.module.css";

const FAQ = () => {
  return (
    <section className={styles.faqSection} id="faq">
      <h1>Preguntas Frecuentes</h1>

      <div className={styles.faqItem}>
        <h3>¿Puedo usar LinkTreePro gratis?</h3>
        <p>Sí, el plan gratuito te permite empezar sin costo y con todas las funciones esenciales.</p>
      </div>

      <div className={styles.faqItem}>
        <h3>¿Puedo cambiar de plan cuando quiera?</h3>
        <p>Sí, puedes cambiar o cancelar tu plan en cualquier momento desde tu panel de usuario.</p>
      </div>

      <div className={styles.faqItem}>
        <h3>¿Mis enlaces son seguros?</h3>
        <p>Claro, utilizamos protocolos seguros para proteger tus datos y los de tus visitantes.</p>
      </div>
    </section>
  );
};

export default FAQ;
