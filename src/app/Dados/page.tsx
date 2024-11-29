"use client"
import Link from 'next/link';
import  { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import DengueComparisonChart from '../components/Dengue/dengueComparisonChart';
import DengueChart from '../components/Dengue/denguechart';

const DadosPage: React.FC = () => {
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
            <li className="flex items-center"><Link href="" className="hover:underline block md:inline-block">Home</Link></li>
            <li className="flex items-center"><Link href="regiao" className="hover:underline block md:inline-block">Região</Link></li>
            <li className="flex items-center"><Link href="Noticias" className="hover:underline block md:inline-block">Noticias</Link></li>
            <li className="flex items-center"><Link href="Dados" className="hover:underline block md:inline-block">Dados</Link></li>
            <li className="flex items-center"><Link href="/Login" className="hover:underline block md:inline-block bg-yellow-500 text-black px-4 py-2 rounded-md">Login</Link></li>
          </ul>
                </nav>
            </header>
            <main className="flex-grow pt-16">

<DengueComparisonChart />
<DengueChart/>


            </main>
            <footer className="bg-blue-500 text-white p-4 mt-12 ">
                <div className="container mx-auto text-center">
                    &copy; 2024 - 2 semestre. PI Fatec Indaiatuba.
                </div>
            </footer>
        </div>
    );
};


export default DadosPage;