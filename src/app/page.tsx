"use client"
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link'
import Carousel from '../app/components/carousel/Carosel';
import DengueOverview from "./components/Dengue/dengue";
import DengueChart from "./components/Dengue/denguechart";
import Box from "./components/diversos/box";
import NewsCard from "./components/diversos/Noticia";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-blue-500 text-white p-4 shadow-md z-10">
        <nav className="container mx-auto flex justify-between items-center">
         <Link href="/"> <div className="text-lg font-bold text-left">Zero Dengue</div></Link>
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
      <main className="flex-grow pt-16">
        <Carousel />
        <DengueOverview />
        <DengueChart />
        
        <div className="flex justify-center">
          <Box
          title="Quer saber mais?"
          paragraph="faça login para ter acesso a mais informações sobre a dengue na região de Indaiatuba."
          link={{
            href: "/Login",
            text: "Acessar"
          }}/>
          <Link href='../Noticias'> 
       <NewsCard
                imageSrc="https://live.staticflickr.com/65535/53513156350_16bd2513ed_b.jpg" // Substitua pela URL da imagem
                title="Casos de Dengue Diminuem em Indaiatuba"
                description="Casos de Dengue Diminuem em Indaiatuba apos ações de combate"
                timeInfo="Há 6 horas atrás"
        />
        </Link>
          </div>
         
        
        
      </main>
      <footer className="bg-blue-500 text-white p-4 mt-12 ">
        <div className="container mx-auto text-center">
          &copy; 2024 - 2 semestre. PI Fatec Indaiatuba.
        </div>
      </footer>
    </div>
  );
}