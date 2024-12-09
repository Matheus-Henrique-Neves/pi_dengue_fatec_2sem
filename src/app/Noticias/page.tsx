'use client'
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
//import Image from 'next/image';
import Link from "next/link"; // Certifique-se de importar Link corretamente.

const PaginaNoticia: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-blue-500 text-white p-4 shadow-md z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold text-left">Zero Dengue</div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
          <ul className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-8 ${isOpen ? "flex" : "hidden"} md:flex`}>
            <li className="flex items-center"><Link href="/" className="hover:underline block md:inline-block">Home</Link></li>
            <li className="flex items-center"><Link href="regiao" className="hover:underline block md:inline-block">Região</Link></li>
            <li className="flex items-center"><Link href="Noticias" className="hover:underline block md:inline-block">Noticias</Link></li>
            <li className="flex items-center"><Link href="Dados" className="hover:underline block md:inline-block">Dados</Link></li>
           
          </ul>
        </nav>
      </header>

      <main className="flex-grow pt-20 px-4">
        <section className="container mx-auto">
          {/* Imagem da Notícia */}
          <div className="w-full mb-6 flex justify-center">
            <img
              src="https://live.staticflickr.com/65535/53513156350_16bd2513ed_b.jpg"
              alt="Imagem da notícia"
              className="w-80% h-auto rounded-lg shadow-lg center"
            />
          </div>

          {/* Título e Corpo do Texto */}
          <div className="prose lg:prose-xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-5">Casos de Dengue Diminuem em Indaiatuba</h1>
            <p className="text-center">
            Indaiatuba, uma cidade localizada no interior de São Paulo, registrou uma redução significativa nos casos de dengue nos últimos meses. As autoridades locais têm se empenhado em campanhas de prevenção e conscientização, visando a eliminação de focos do mosquito Aedes aegypti, transmissor da doença.

Segundo dados da Secretaria Municipal de Saúde, o número de casos notificados caiu consideravelmente em comparação com o mesmo período do ano anterior. A cidade implementou diversas ações de combate ao mosquito, como a intensificação da fiscalização de terrenos baldios, o uso de larvicidas e a orientação à população sobre a importância de eliminar possíveis criadouros do mosquito, como recipientes com água parada.

Além disso, o apoio da comunidade tem sido crucial. Moradores têm participado ativamente das campanhas educativas, colaborando na vistoria de suas residências e no descarte correto de materiais que possam acumular água.

As autoridades de saúde afirmam que, apesar da diminuição dos casos, é essencial que a população continue atenta às medidas preventivas para evitar o retorno da epidemia. A cidade mantém um monitoramento constante e segue com estratégias para garantir que o controle da dengue seja eficaz a longo prazo.
           </p>
          </div>
        </section>
      </main>

      <footer className="bg-blue-500 text-white p-4 mt-12">
        <div className="container mx-auto text-center">
          &copy; 2024 - 2 semestre. PI Fatec Indaiatuba.
        </div>
      </footer>
    </div>
  );
};

export default PaginaNoticia;
