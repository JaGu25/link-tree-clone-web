import React from "react";
import { Line, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    ArcElement,
} from "chart.js";

import styles from "./dashboard.module.css";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    ArcElement
);

const Dashboard = () => {
    const lineData = {
    labels: [
        "Hoy 1h",
        "Hoy 2h",
        "Hoy 3h",
        "Hoy 4h",
        "Hoy 5h",
        "Hoy 6h",
        "Hoy 7h",
        "Hoy 8h",
        "Hoy 9h",
        "Hoy 10h",
    ],
    datasets: [
        {
        label: "Visitas",
        data: [10, 8, 15, 18, 22, 17, 25, 28, 26, 20],
        borderColor: "#7c3aed",
        backgroundColor: "rgba(124, 58, 237, 0.2)",
        tension: 0.4,
        pointBackgroundColor: "#7c3aed",
        },
    ],
    };

    const lineOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
    maintainAspectRatio: false,
    };

    const pieData = {
    labels: ["GitHub", "LinkedIn", "YouTube", "Contacto"],
    datasets: [
        {
        data: [412, 356, 128, 96],
        backgroundColor: ["#7c3aed", "#a78bfa", "#c4b5fd", "#ede9fe"],
        borderWidth: 0,
        },
    ],
    };

    const pieOptions = {
    responsive: true,
    plugins: {
        legend: { display: false },
    },
    maintainAspectRatio: false,
    };

    return (
    <div className={styles.dashboard}>
        <h1 className={styles.title}>Dashboard</h1>

        <div className={styles.grid}>

        <div className={styles.card}>
            <div className={styles.cardHeader}>
            <div>
                <h2 className={styles.cardTitle}>Visitas</h2>
                <p className={styles.cardSubtitle}>
                Tendencia por día, semana o mes
                </p>
            </div>
            <div className={styles.filters}>
                <button className={`${styles.filterBtn} ${styles.active}`}>
                Día
                </button>
                <button className={styles.filterBtn}>Semana</button>
                <button className={styles.filterBtn}>Mes</button>
            </div>
            </div>

            <div className={styles.stats}>
            <div className={styles.statBox}>
                <p className={styles.statLabel}>Total visitas</p>
                <p className={styles.statValue}>269</p>
            </div>
            <div className={styles.statBox}>
                <p className={styles.statLabel}>Promedio</p>
                <p className={styles.statValue}>19</p>
            </div>
            <div className={styles.statBox}>
                <p className={styles.statLabel}>Máximo</p>
                <p className={styles.statValue}>30</p>
            </div>
            </div>

            <div className={styles.chartWrapper}>
            <Line data={lineData} options={lineOptions} />
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.cardHeader}>
            <div>
                <h2 className={styles.cardTitle}>Clics por enlace</h2>
                <p className={styles.cardSubtitle}>
                Distribución de clics en tu Linktree
                </p>
            </div>
            </div>

            <div className={`${styles.chartWrapper} ${styles.pie}`}>
            <Pie data={pieData} options={pieOptions} />
            </div>

            <div className={styles.legend}>
            <div className={styles.legendItem}>
                <span className={`${styles.dot} ${styles.dot1}`}></span> GitHub
                <span className={styles.legendValue}>412 (41.5%)</span>
            </div>
            <div className={styles.legendItem}>
                <span className={`${styles.dot} ${styles.dot2}`}></span> LinkedIn
                <span className={styles.legendValue}>356 (35.9%)</span>
            </div>
            <div className={styles.legendItem}>
                <span className={`${styles.dot} ${styles.dot3}`}></span> YouTube
                <span className={styles.legendValue}>128 (12.9%)</span>
            </div>
            <div className={styles.legendItem}>
                <span className={`${styles.dot} ${styles.dot4}`}></span> Contacto
                <span className={styles.legendValue}>96 (9.7%)</span>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Dashboard;
