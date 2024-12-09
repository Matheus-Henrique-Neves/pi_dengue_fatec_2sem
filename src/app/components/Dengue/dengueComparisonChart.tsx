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

const DengueComparisonChart: React.FC = () => {
    const [dataArray, setDataArray] = useState<string[]>([]);
    const [casosArray, setCasosArray] = useState<number[]>([]);
    const [casosEstMaxArray, setCasosEstMaxArray] = useState<number[]>([]);
    const [casosEstMinArray, setCasosEstMinArray] = useState<number[]>([]);
    const [casosEstArray, setCasosEstArray] = useState<number[]>([]);
    const apiUrl = "https://api-dengue-fatec-2sem.onrender.com/apidengue/";

    useEffect(() => {
        const fetchData = async () => {
            type ApiResponse = {
                casos: number;
                casos_est_max: number;
                casos_est_min: number;
                casos_est: number;
                data_iniSE: string;
            };

            try {
                const response = await fetch(apiUrl);
                const dataFromApi: ApiResponse[] = await response.json();

                const casos = dataFromApi.map((x) => x.casos);
                const casosEstMax = dataFromApi.map((x) => x.casos_est_max);
                const casosEstMin = dataFromApi.map((x) => x.casos_est_min);
                const casosEst = dataFromApi.map((x) => x.casos_est);
                const data = dataFromApi.map((x) =>
                    new Date(x.data_iniSE).toLocaleDateString()
                );

                setCasosArray(casos.reverse());
                setCasosEstMaxArray(casosEstMax.reverse());
                setCasosEstMinArray(casosEstMin.reverse());
                setCasosEstArray(casosEst.reverse());
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
                label: "Casos de Dengue",
                data: casosArray,
                borderColor: "#003E5C",
                backgroundColor: "rgba(0, 62, 92, 0.2)",
                borderWidth: 2,
                fill: false,
            },
            {
                label: "Casos Estimados Máximos",
                data: casosEstMaxArray,
                borderColor: "#FF5733",
                backgroundColor: "rgba(255, 87, 51, 0.2)",
                borderWidth: 2,
                fill: false,
            },
            {
                label: "Casos Estimados Mínimos",
                data: casosEstMinArray,
                borderColor: "#33FF57",
                backgroundColor: "rgba(51, 255, 87, 0.2)",
                borderWidth: 2,
                fill: false,
            },
            {
                label: "Casos Estimados",
                data: casosEstArray,
                borderColor: "#FFC300",
                backgroundColor: "rgba(255, 195, 0, 0.2)",
                borderWidth: 2,
                fill: false,
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
                    label: (context: TooltipItem<'line'>) => `Casos: ${context.raw}`,
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
        <div>
            <div className="mt-12 flex justify-center">
                <div className="bg-blue-100 rounded-lg shadow-lg p-6 max-w-sm text-center">
                    <h5 className="text-lg font-semibold text-blue-700">
                        Monitoramento de Casos!
                    </h5>
                    <p className="text-gray-600 mt-2">
                        Acompanhe em tempo real os casos de dengue na sua região através de
                        nosso gráfico.
                    </p>
                </div>
            </div>

            <div className="container mx-auto mt-6 p-4 bg-white shadow rounded-lg">
                <h3 className="text-xl font-bold text-center text-[#003E5C] mb-4">
                    Comparação de Casos de Dengue
                </h3>
                <div className="relative h-96 w-full">
                    <Line data={chartData} options={chartOptions} />
                </div>
            </div>
        </div>
    );
};

export default DengueComparisonChart;

