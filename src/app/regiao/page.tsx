"use client"
import Link from "next/link";
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
            <li className="flex items-center"><Link href="" className="hover:underline block md:inline-block">Home</Link></li>
            <li className="flex items-center"><Link href="regiao" className="hover:underline block md:inline-block">Região</Link></li>
            <li className="flex items-center"><Link href="Noticias" className="hover:underline block md:inline-block">Noticias</Link></li>
            <li className="flex items-center"><Link href="Dados" className="hover:underline block md:inline-block">Dados</Link></li>
            <li className="flex items-center"><Link href="/Login" className="hover:underline block md:inline-block bg-yellow-500 text-black px-4 py-2 rounded-md">Login</Link></li>
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
                { title: "UBS I - Visconde de Indaiatuba", text: `Endereço: Avenida Visconde de Indaiatuba, 199. Telefone: 3825-6430. E-mail: saude.ubs1@indaiatuba.sp.gov.br` },
                { title: "UBS II - Cecap", text: `Endereço: Praça Vital Barnabé, 197 - Cecap. Telefone: 3875-5766 / 3875-6784. E-mail: saude.cecap@indaiatuba.sp.gov.br` },
                { title: "PSF Jardim Brasil", text: `Endereço: Avenida Luiz Carlos Prestes, Jardim Brasil. Telefone: 19 3835-6969` },
                { title: "PSF Jardim do Sol", text: `Endereço: Domingos Casa Grande, Jd Do Sol. Telefone: 19 3894-2097` },
                { title: "UBS Jardim Carlos Aldrovandi", text: `Endereço: Av. Ângelo Bertelli Netto, 1000 - Nucleo Res. Prof. Carlos Aldrovandi. Telefone: (19) 3835-5598` },
                { title: "UBS Parque Corolla", text: `Endereço: R. Nelson Nazário, 80 - Jardim Morada do Sol. Telefone: (19) 3894-2713` },
                { title: "UBS II Cecap", text: `Endereço: R. Vital Barnabé - Nucleo Hab. Brg. Faria Lima. Telefone: (19) 3875-5766` },
                { title: "UBS Jd Oliveira Camargo", text: `Endereço: R. Yoriko Gonçalves, 0 - Jardim Oliveira Camargo. Telefone: Indisponível` },
                { title: "UBS VII", text: `R. José de Campos, 709 - Jardim Morada do Sol. Telefone: (19) 3935-3338` },
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.3040999923337!2d-47.20515972466231!3d-23.085961179129367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b4b183d3173b%3A0xe4e10e5dd84bd49e!2sFatec%20Indaiatuba%20-%20Faculdade%20de%20Tecnologia%20de%20Indaiatuba%20Dr.%20Archimedes%20Lammoglia!5e0!3m2!1spt-BR!2sbr!4v1732846378488!5m2!1spt-BR!2sbr"
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