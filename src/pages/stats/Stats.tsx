import React, { useEffect, useState } from "react";
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
        label: "Free Members",
        data: [8000, 4000, 3500, 5000, 6000, 7000],
        backgroundColor: "#07642A",
        borderColor: "#07642A",
        borderWidth: 1,
      },
      {
        label: "New",
        data: [7000, 3000, 3000, 4500, 5500, 6500],
        backgroundColor: "#C43517",
        borderColor: "#C43517",
        borderWidth: 1,
      },
      {
        label: "Upgraded to paid",
        data: [6000, 2000, 2500, 4000, 5000, 6000],
        backgroundColor: "#505050",
        borderColor: "#505050",
        borderWidth: 1,
      },
      {
        label: "Canceled",
        data: [5000, 1000, 2000, 3500, 4500, 5500],
        backgroundColor: "#A15C07",
        borderColor: "#A15C07",
        borderWidth: 1,
      },
    ],
  };
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    setViewportWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const options2: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true, // Display legend (optional)
        position: "bottom", // Place legend at the bottom
        labels: {
          font: {
            size: 24,
          },
          boxWidth: 16,
          boxHeight: 16,
          padding: 32,
        },
      },
      tooltip: {
        enabled: true, // Enable tooltips (optional)
      },
      title: {
        display: true, // Enable the title
        text: "Analysis", // Title text
        font: {
          size: 48, // Font size
          weight: "bold", // Font weight
        },
        padding: {
          top: 0,
          bottom: 29,
        },
        align: "start",
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Disable vertical grid lines
        },
        title: {
          display: false,
          text: "Months",
        },
        ticks: {
          font: {
            size: 20, // Default font size for y-axis labels
          },
        },
      },

      y: {
        grid: {
          color: "#505050", // Change the grid line color
          lineWidth: 0.5, // Set the thickness of the grid lines
          drawTicks: false, // Disable ticks on the grid lines
        },
        title: {
          display: false,
          text: "Values",
        },
        ticks: {
          font: {
            size: 22,
          },
        },
        beginAtZero: true,
      },
    },
  };
  const options2Moble: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true, // Display legend (optional)
        position: "bottom", // Place legend at the bottom
        labels: {
          font: {
            size: 8,
          },
          boxWidth: 5,
          boxHeight: 5,
          padding: 2,
        },
      },
      tooltip: {
        enabled: true, // Enable tooltips (optional)
      },
      title: {
        display: true, // Enable the title
        text: "Analysis", // Title text
        font: {
          size: 12, // Font size
          weight: "bold", // Font weight
        },
        padding: {
          top: 0,
          bottom: 5,
        },
        align: "start",
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Disable vertical grid lines
        },
        title: {
          display: false,
          text: "Months",
        },
        ticks: {
          font: {
            size: 5, // Default font size for y-axis labels
          },
        },
      },

      y: {
        grid: {
          color: "#505050", // Change the grid line color
          lineWidth: 0.5, // Set the thickness of the grid lines
          drawTicks: false, // Disable ticks on the grid lines
        },
        title: {
          display: false,
          text: "Values",
        },
        ticks: {
          font: {
            size: 7,
          },
        },
        beginAtZero: true,
      },
    },
  };
  const createGradient = (ctx: any, area: any) => {
    if (!area) return null;
    const gradient = ctx.createLinearGradient(0, 0, 0, area.bottom);
    gradient.addColorStop(0, "rgba(181, 248, 198, 0.38)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    return gradient;
  };
  const createGradient2 = (ctx: any, area: any) => {
    if (!area) return null;
    const gradient = ctx.createLinearGradient(0, 0, 0, area.bottom);
    gradient.addColorStop(0, "rgba(237, 41, 57, 0.384178");
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
  const data3 = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [3000, 9500, 4000, 9000, 7000, 8000],
        borderColor: "#ED2939",
        backgroundColor: (ctx: any) =>
          createGradient2(ctx.chart.ctx, ctx.chart.chartArea),
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
              <div className="line_text">
                <p>Free Members</p>
                <h4>20.2k</h4>
              </div>
            </div>
            <div className="line_cnt">
              <Line data={data2} options={options} />
            </div>
          </div>
          <div className="stats_l_item">
            <div className="stats_l_text">
              <div className="line_text">
                <p>Free Members</p>
                <h4>20.2k</h4>
              </div>
            </div>
            <div className="line_cnt">
              <Line data={data3} options={options} />
            </div>
          </div>
          <div className="stats_l_item">
            <div className="stats_l_text">
              <div className="line_text">
                <p>Free Members</p>
                <h4>20.2k</h4>
              </div>
            </div>
            <div className="line_cnt">
              <Line data={data2} options={options} />
            </div>
          </div>
          <div className="stats_l_item">
            <div className="stats_l_text">
              <div className="line_text">
                <p>Free Members</p>
                <h4>20.2k</h4>
              </div>
            </div>
            <div className="line_cnt">
              <Line data={data3} options={options} />
            </div>
          </div>
        </div>
        <div className="stats_b_container">
          <Bar
            data={data}
            options={viewportWidth > 800 ? options2 : options2Moble}
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
