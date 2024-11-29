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
        {/* Main content goes here */
        
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            {/* Conteúdo lado esquerdo, lista de endereços */
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Endereço 1", text: "123 Main St, City, Country" },
                { title: "Endereço 2", text: "456 Elm St, City, Country" },
                { title: "Endereço 3", text: "789 Oak St, City, Country" },
                { title: "Endereço 4", text: "101 Pine St, City, Country" },
                { title: "Endereço 5", text: "202 Maple St, City, Country" },
                { title: "Endereço 6", text: "303 Birch St, City, Country" },
                { title: "Endereço 7", text: "404 Cedar St, City, Country" },
                { title: "Endereço 8", text: "505 Walnut St, City, Country" },
                { title: "Endereço 9", text: "606 Cherry St, City, Country" },
              ].map((address, index) => (
                <div key={index} className="p-4 rounded-lg shadow-md bg-black-200 text-center border border-gray-300">
                  <h2 className="font-bold">{address.title}</h2>
                  <p>{address.text}</p>
                </div>
              ))}
            </div>
            }
          </div>
          <div className="w-full md:w-1/2 p-4">
            {/* Conteúdo lado direito, mapa */
            <div className="flex items-center justify-center h-full">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b6e4b0b1d!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611815470923!5m2!1sen!2sau"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              ></iframe>
            </div>
            }
          </div>
        </div>

        }
        </main>
        <footer className="bg-blue-500 text-white p-4 mt-auto">
          <div className="container mx-auto text-center">
            &copy; 2023 Your Company. All rights reserved.
          </div>
        </footer>
      </div>
    );
}