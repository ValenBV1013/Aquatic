import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { WaterBackground } from './components/WaterBackground';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { SpeciesSection } from './components/SpeciesSection';
import { ServicesSection } from './components/ServicesSection';
import { SpeciesModal } from './components/SpeciesModal';
import { ShowreelModal } from './components/ShowreelModal';
import { ContactModal } from './components/ContactModal';

// Catálogo con Imágenes Precisas de Unsplash
const DEFAULT_DATA = {
  title: "Explora el Abismo Oceánico",
  description: "Descubre las maravillas de la vida marina, la biodiversidad de los arrecifes y las especies más fascinantes del océano profundo.",
  stats: {
    expeditions: "250+",
    divers: "120 Especies",
    oceans_explored: "15 Habitats"
  },
  species: [
    {
      id: "1",
      name: "Ballena Jorobada",
      scientific: "Megaptera novaeangliae",
      category: "Mamífero Marino",
      type: "mamiferos",
      depth: "0 - 200 metros",
      habitat: "Océanos globales",
      status: "Preocupación menor",
      image: "/ballena.jpg",
      desc: "Conocidas por sus espectaculares saltos fuera del agua y sus complejos cantos submarinos que pueden escucharse a kilómetros de distancia."
    },
    {
      id: "2",
      name: "Tortuga Laúd",
      scientific: "Dermochelys coriacea",
      category: "Reptil Marino",
      type: "invertebrados",
      depth: "Hasta 1,200 metros",
      habitat: "Océanos tropicales y templados",
      status: "En peligro crítico",
      image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80",
      desc: "La tortuga laúd es la especie de tortuga más grande del mundo. Posee un caparazón flexible lechoso y puede sumergirse a profundidades abismales."
    },
    {
      id: "3",
      name: "Manta Raya Gigante",
      scientific: "Mobula birostris",
      category: "Pez Cartilaginoso",
      type: "peces",
      depth: "0 - 120 metros",
      habitat: "Arrecifes y mar abierto",
      status: "Vulnerable",
      image: "/mantaraya.jpg",
      desc: "Con una envergadura de hasta 7 metros, navegan suavemente filtrando plancton a través de sus agallas."
    },
    {
      id: "4",
      name: "Tiburón Ballena",
      scientific: "Rhincodon typus",
      category: "Pez Cartilaginoso",
      type: "peces",
      depth: "0 - 700 metros",
      habitat: "Aguas cálidas y tropicales",
      status: "En peligro",
      image: "https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&w=800&q=80",
      desc: "El pez más grande del planeta. A pesar de su imponente tamaño de más de 12 metros, es un dócil gigante filtrador totalmente inofensivo."
    },
    {
      id: "5",
      name: "Delfín Mular",
      scientific: "Tursiops truncatus",
      category: "Mamífero Marino",
      type: "mamiferos",
      depth: "0 - 200 metros",
      habitat: "Costas y océanos mundiales",
      status: "Preocupación menor",
      image: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=800&q=80",
      desc: "Conocidos por su alta inteligencia, interacción social compleja y uso de ecolocalización para navegar en las aguas del océano."
    },
    {
      id: "6",
      name: "Medusa Luna",
      scientific: "Aurelia aurita",
      category: "Invertebrado",
      type: "invertebrados",
      depth: "0 - 40 metros",
      habitat: "Aguas costeras globales",
      status: "Abundante",
      image: "https://images.pexels.com/photos/1000654/pexels-photo-1000654.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "Cuerpo translúcido fascinante con reflejos bioluminiscentes. Flotan en las corrientes marinas alimentándose de zooplancton."
    }
  ],
  services: [
    {
      title: "Monitoreo Biológico Submarino",
      desc: "Sistemas de visión e IA instalados en arrecifes para rastrear poblaciones marinas en tiempo real."
    },
    {
      title: "Conservación de Hábitats",
      desc: "Restauración activa de arrecifes de coral y zonas protegidas mar adentro."
    },
    {
      title: "Expediciones Educativas",
      desc: "Inmersiones científicas guiadas y telemetría de vida marina para investigación global."
    }
  ]
};

export default function App() {
  const [data, setData] = useState(DEFAULT_DATA);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/data/';
    axios.get(apiUrl)
      .then(res => {
        if (res.data) setData(res.data);
      })
      .catch(err => {
        console.log("Usando catálogo local verificado", err);
      });
  }, []);

  return (
    <div id="home" className="relative min-h-screen selection:bg-cyan-500 selection:text-black">
      <WaterBackground />

      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <Sidebar 
        onOpenShowreel={() => setIsShowreelOpen(true)} 
        onOpenContact={() => setIsContactOpen(true)} 
      />

      <main className="lg:pl-16">
        <HeroSection 
          data={data} 
          onOpenShowreel={() => setIsShowreelOpen(true)} 
          onSelectAnimal={setSelectedAnimal}
        />
        
        <StatsSection stats={data?.stats} />

        <SpeciesSection 
          species={data?.species} 
          onSelectAnimal={setSelectedAnimal} 
        />

        <ServicesSection services={data?.services} />

        <section id="nosotros" className="relative z-10 max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
          <div className="glass-panel p-10 rounded-3xl text-center max-w-3xl mx-auto border border-cyan-500/20" data-aos="fade-up">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">NUESTRO COMPROMISO</span>
            <h2 className="text-3xl font-light text-white mt-2 mb-4">Preservando el Océano Digital y Real</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              AQUA STUDIO combina el desarrollo de software de vanguardia con la ciencia marina para generar conciencia, visualizar datos de biodiversidad y proteger los hábitats abismales del mundo.
            </p>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition-all text-sm shadow-lg shadow-cyan-500/20"
            >
              Unirse al Proyecto
            </button>
          </div>
        </section>
      </main>

      {/* Modales */}
      <SpeciesModal 
        animal={selectedAnimal} 
        onClose={() => setSelectedAnimal(null)} 
      />

      <ShowreelModal 
        isOpen={isShowreelOpen} 
        onClose={() => setIsShowreelOpen(false)} 
      />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}