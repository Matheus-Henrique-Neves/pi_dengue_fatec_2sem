"use client"
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function RegiaoPage() {
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
              <li className="flex items-center"><a href="#home" className="hover:underline block md:inline-block">Home</a></li>
              <li className="flex items-center"><a href="#about" className="hover:underline block md:inline-block">Região</a></li>
              <li className="flex items-center"><a href="#services" className="hover:underline block md:inline-block">Noticias</a></li>
              <li className="flex items-center"><a href="#contact" className="hover:underline block md:inline-block">dados</a></li>
              <li className="flex items-center"><a href="#contact" className="hover:underline block md:inline-block">Ações de Combate</a></li>
              <li className="flex items-center"><a href="#contact" className="hover:underline block md:inline-block bg-yellow-500 text-black px-4 py-2 rounded-md">Login</a></li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow pt-16">
        {/* Main content goes here */}
        </main>
        <footer className="bg-blue-500 text-white p-4 mt-auto">
          <div className="container mx-auto text-center">
            &copy; 2023 Your Company. All rights reserved.
          </div>
        </footer>
      </div>
    );
}