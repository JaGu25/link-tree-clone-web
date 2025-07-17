import React from "react";
import styles from "./Features.module.css";
import FeatureCard from "../FeatureCard/FeatureCard";
import { FaLink, FaPaintBrush, FaChartLine } from "react-icons/fa";


const Features = () => {
    return (
        <>
            <section className={styles.features} id="features">
                <h2>Características que destacan</h2>
                <p>Todo lo que necesitas para crear, personalizar y compartir tu perfil unico</p>
                <div className={styles.grid}>
                    <FeatureCard
                        icon={FaLink}
                        title="Centraliza tus enlaces"
                        description="Organiza todas tus redes, tiendas y enlaces importantes en un solo lugar, accesible desde cualquier dispositivo."
                    />

                    <FeatureCard
                        icon={FaPaintBrush}
                        title="Personalización Avanzada"
                        description="Colores, tipografía, fondos animados y estilos únicos para reflejar tu marca o personalidad."
                    />

                    <FeatureCard
                        icon={FaChartLine}
                        title="Analítica en tiempo real"
                        description="Mide el rendimiento de tus enlaces y optimiza tu impacto digital con estadísticas detalladas."
                    />

                </div>
            </section>

            <section className={styles.featuresAlt}>
                <h2>Usadas por creadores y marcas líderes</h2>
                <div className={styles.grid}>
                    <FeatureCard
                        reverse={true}
                        description="LinkTreePro ha transformado la forma en la que conecto con mis seguidores. ¡Super recomendado!"
                        title="María G. - Influencer"
                    />
                    <FeatureCard
                        reverse={true}
                        description="Ahora mis clientes encuentran todos mis servicios en un solo click. Fácil y rápido."
                        title="Carlos M. - Emprendedor"
                    />
                    <FeatureCard
                        reverse={true}
                        description="Me encanta poder personalizar mi perfil a mi estilo. Las estadísticas me ayudan a mejorar cada día."
                        title="Laura F. - Creadora de contenido"
                    />
                </div>
            </section>
        </>
    );
};

export default Features;
