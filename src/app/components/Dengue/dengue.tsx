import React from 'react';

const DengueOverview: React.FC = () => {
    const cards = [
        {
            title: "Vetor Transmissor",
            text: "Dengue é transmitida às pessoas através das picadas de mosquitos infectados da espécie Aedes aegypti (também levam a Zika e Chikungunya). Eles preferem picar pessoas e vivem em ambientes internos e externos, perto das pessoas.",
        },
        {
            title: "Arbovirose",
            text: "É a mais importante arbovirose (doença transmitida por artrópodes) que afeta o homem, especialmente em países tropicais, onde o meio ambiente favorece o desenvolvimento e a geração do Aedes aegypti.",
        },
        {
            title: "Aspectos Epidemiológicos",
            text: "A dengue é uma doença febril aguda de etiologia viral, com evolução benigna na forma clássica, e grave na forma hemorrágica. A dengue hemorrágica é um nível muito grave da doença e se não tratada rapidamente pode ser fatal.",
        },
        {
            title: "Problema Antigo",
            text: "A dengue não é um problema exclusivo à atualidade. Apresentamos um grande histórico no Brasil de surtos e epidemias, o que se intensifica pela fácil reprodução dos mosquitos transmissores, que crescem cada vez em maior escala.",
        },
        {
            title: "Conscientização Necessária",
            text: "Por conta do fator de aumento dos casos de dengue, está claro a necessidade que temos da realização em maior escala de conscientização a respeito dessa doença crescente. A população precisa estar por dentro dessa situação de saúde pública.",
        },
        {
            title: "Órgãos de Saúde",
            text: "Ao longo das últimas décadas, mesmo com a intensa dedicação e empenho dos órgãos públicos, vemos dificuldades de empenhar a população no assunto, enfrentando uma briga intensa para a resolução desse problema coletivo.",
        },
    ];

    return (
        <div className="container mx-auto mt-6 px-4">
            {/* Visão Geral */}
            <div className="text-center mb-8">
                <h3 className="text-4xl font-extrabold text-[#003E5C] tracking-tight leading-tight">
                    A dengue no Brasil
                </h3>
                <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                    A dengue representa um grave problema de saúde pública no Brasil, e está presente atualmente na nossa cidade.
                    Ela se dá por uma doença viral e é transmitida por um mosquito, o Aedes aegypti. Sua infecção pode ser não
                    assintomática, como pode também apresentar maiores sintomas e levar até o óbito. Apesar das tentativas de
                    conscientização constante, nesse ano o aumento dos casos vem se agravando, contando com muitas ocorrências recentes,
                    levando algumas cidades a declarar estado de emergência devido à gravidade e quantidade de casos.
                </p>
            </div>


            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-4 border-t-4 border-blue-600 hover:shadow-xl transition"
                    >
                        <h5 className="text-lg font-semibold text-blue-700 mb-2">{card.title}</h5>
                        <p className="text-gray-600">{card.text}</p>
                    </div>
                ))}
            </div>

            {/* Monitoramento */}
            <div className="mt-12 flex justify-center">
                <div className="bg-blue-100 rounded-lg shadow-lg p-6 max-w-sm text-center">
                    <h5 className="text-lg font-semibold text-blue-700">Monitoramento de Casos!</h5>
                    <p className="text-gray-600 mt-2">
                        Acompanhe em tempo real os casos de dengue na sua região através de nosso gráfico.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DengueOverview;