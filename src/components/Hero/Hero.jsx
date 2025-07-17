import React from "react";
import styles from "./Hero.module.css";
import Button from "../button/button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Tu mundo digital, en un solo enlace</h1>
      <p>Crea un perfil inpactante para compartir tus redes, proyectos, tienda y 
        contenido exclusivo desde cualquier plataforma
      </p>
      <div className={styles.actions}>
    <Button text="Crea tu LinkTree Pro gratis" variant="white" />
      </div>
    </section>
  );
};

export default Hero;
