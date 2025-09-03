import React, { useContext, useEffect, useState } from "react";
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
import { AuthContext } from "../../context/AuthContext";
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
  const { fetchWithAuth } = useContext(AuthContext);
  const [dashboardData, setDashboardData] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("daily");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await fetchWithAuth("http://localhost:3001/api/dashboard");
        if (!res.ok) throw new Error("Error al obtener dashboard");
        const data = await res.json();
        setDashboardData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDashboard();
  }, [fetchWithAuth]);

  if (!dashboardData) return <div className={styles.dashboard}>Cargando...</div>;

  const visits = dashboardData.visits[selectedFilter];

  const totalClicks = dashboardData.clicks.reduce((sum, c) => sum + c.count, 0);

  const clicks = dashboardData.clicks.slice(0, 5);

  const colors = ["#7c3aed", "#a78bfa", "#c4b5fd", "#ede9fe", "#d8b4fe"];

  const pieData = {
    labels: clicks.map(c => c.title),
    datasets: [
      {
        data: clicks.map(c => c.count),
        backgroundColor: colors.slice(0, clicks.length),
        borderWidth: 0,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
  };

  const lineData = {
    labels: visits.trend.labels,
    datasets: [
      {
        label: "Visitas",
        data: visits.trend.datasets[0].data,
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

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Dashboard</h1>

      <div className={styles.grid}>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h2 className={styles.cardTitle}>Visitas</h2>
              <p className={styles.cardSubtitle}>Tendencia por día, semana o mes</p>
            </div>
            <div className={styles.filters}>
              {["daily", "weekly", "monthly"].map(f => (
                <button
                  key={f}
                  className={`${styles.filterBtn} ${selectedFilter === f ? styles.active : ""}`}
                  onClick={() => setSelectedFilter(f)}
                >
                  {f === "daily" ? "Día" : f === "weekly" ? "Semana" : "Mes"}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.statBox}>
              <p className={styles.statLabel}>Total visitas</p>
              <p className={styles.statValue}>{visits.total}</p>
            </div>
            <div className={styles.statBox}>
              <p className={styles.statLabel}>Promedio</p>
              <p className={styles.statValue}>{visits.average}</p>
            </div>
            <div className={styles.statBox}>
              <p className={styles.statLabel}>Máximo</p>
              <p className={styles.statValue}>{visits.max}</p>
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
              <p className={styles.cardSubtitle}>Distribución de clics en tu Linktree</p>
            </div>
          </div>

          <div className={`${styles.chartWrapper} ${styles.pie}`}>
            <Pie data={pieData} options={pieOptions} />
          </div>

          <div className={styles.legend}>
            {clicks.map((c, i) => (
              <div className={styles.legendItem} key={i}>
                <span className={styles.dot} style={{ backgroundColor: colors[i] }}></span>
                {c.title}
                <span className={styles.legendValue}>
                  {c.count} ({totalClicks > 0 ? ((c.count / totalClicks) * 100).toFixed(1) : 0}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
