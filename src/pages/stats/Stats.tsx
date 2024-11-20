import React from "react";
import { Bar, Line } from "react-chartjs-2";
import "./stats.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ChartOptions,
  Filler,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
const Stats = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "",
        data: [8000, 4000, 3500, 5000, 6000, 7000],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const createGradient = (ctx: any, area: any) => {
    if (!area) return null;
    const gradient = ctx.createLinearGradient(0, 0, 0, area.bottom);
    gradient.addColorStop(0, "rgba(181, 248, 198, 0.38)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    return gradient;
  };
  const data2 = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [3000, 9500, 4000, 9000, 7000, 8000],
        borderColor: "#00B42D",
        backgroundColor: (ctx: any) =>
          createGradient(ctx.chart.ctx, ctx.chart.chartArea),
        tension: 0,
        pointStyle: "circle",
        pointRadius: 0,
        pointHoverRadius: 8,
        fill: true,
      },
    ],
  };
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };
  return (
    <div className="stats_container">
      <h2>Creator Stats</h2>
      <div className="stats_header">
        <div className="stats_nav">
          <p className="stats_nav_active">Membership</p>
          <p>Earnings</p>
          <p>Posts</p>
          <p>Survey</p>
          <p>Trefic</p>
        </div>
        <select name="" id="">
          <option value="">Past 30 days</option>
        </select>
      </div>
      <div className="stats_gr_container">
        <div className="stats_l_container">
          <div className="stats_l_item">
            <div className="stats_l_text">
              <p>Free Members</p>
              <h4>20.2k</h4>
            </div>
            <div className="line_cnt">
              <Line data={data2} options={options} />
            </div>
          </div>
          <div className="stats_l_item">
            <div className="stats_l_text">
              <p>Free Members</p>
              <h4>20.2k</h4>
            </div>
            <div className="line_cnt">
              <Line data={data2} />
            </div>
          </div>
          <div className="stats_l_item">
            <div className="stats_l_text">
              <p>Free Members</p>
              <h4>20.2k</h4>
            </div>
            <div className="line_cnt">
              <Line data={data2} />
            </div>
          </div>
          <div className="stats_l_item">
            <div className="stats_l_text">
              <p>Free Members</p>
              <h4>20.2k</h4>
            </div>
            <div className="line_cnt">
              <Line data={data2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
