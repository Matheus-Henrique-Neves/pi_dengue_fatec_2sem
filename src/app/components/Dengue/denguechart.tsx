import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar os componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DengueChart: React.FC = () => {
  interface DengueData {
    casos: number;
    data_iniSE: string;
  }

  const [dataArray, setDataArray] = useState<string[]>([]);
  const [casosArray, setCasosArray] = useState<number[]>([]);
  const apiUrl = "https://api-dengue-fatec-2sem.onrender.com/apidengue/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const baraChartJS: DengueData[] = await response.json();

        const casos = baraChartJS.map((x) => x.casos);
        const data = baraChartJS.map((x) =>
          new Date(x.data_iniSE).toLocaleDateString()
        );

        setCasosArray(casos.reverse());
        setDataArray(data.reverse());
        
      } catch (error) {
        console.error("Erro ao buscar os dados da API:", error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: dataArray,
    datasets: [
      {
        label: "Casos de Dengue em indaiatuba",
        data: casosArray,
        borderColor: "#003E5C",
        backgroundColor: "rgba(0, 62, 92, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `Casos: ${context.raw}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="container mx-auto mt-6 p-4 bg-white shadow rounded-lg">
      <h3 className="text-xl font-bold text-center text-[#003E5C] mb-4">
        Monitoramento de Casos de Dengue em indaiatuba
      </h3>
      <div className="relative h-96 w-full">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default DengueChart;
