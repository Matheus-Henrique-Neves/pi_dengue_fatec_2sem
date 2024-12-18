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
  TooltipItem,
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
  // Definição do tipo para os dados da API
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

        // Validar se o retorno é JSON
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }

        const dengueData: DengueData[] = await response.json();

        // Validar se os dados possuem o formato esperado
        if (!Array.isArray(dengueData)) {
          throw new Error("Formato de dados inesperado da API");
        }

        // Extrair dados para os gráficos
        const casos = dengueData.map((x) => x.casos);
        const data = dengueData.map((x) =>
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
        label: "Casos de Dengue em Indaiatuba",
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
          label: (context: TooltipItem<'line'>) =>
            `Casos: ${context.raw}`,
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
        Monitoramento de Casos de Dengue em Indaiatuba
      </h3>
      <div className="relative h-96 w-full">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default DengueChart;
