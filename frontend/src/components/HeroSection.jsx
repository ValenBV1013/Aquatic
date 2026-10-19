import React, { useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';

export const HeroSection = ({ data, onOpenShowreel, onSelectAnimal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const speciesList = data?.species || [];
  const currentAnimal = speciesList.length > 0 ? speciesList[currentIndex] : null;

  const handleNext = (e) => {
    e.stopPropagation(); // Evita abrir la modal al hacer clic en la flecha
    if (speciesList.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % speciesList.length);
    }
  };

  return (
    <section className="relative pt-36 pb-12 px-6 max-w-6xl mx-auto z-10 flex flex-col gap-12">
      <div className="max-w-2xl" data-aos="fade-up" data-aos-duration="1000">
        <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3">
          EXPLORACIÓN ABRUMADORA — BIODIVERSIDAD SUBACUÁTICA
        </p>
        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white leading-tight mb-6">
          {data?.title || "Explora el Abismo Oceánico"}
        </h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          {data?.description || "Descubre las maravillas de la vida marina, la biodiversidad de los arrecifes y las especies más fascinantes del océano profundo."}
        </p>
        
        <div className="flex items-center gap-4">
          <a href="#especies" className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3.5 rounded-full transition-all">
            <span>Ver Especies</span>
            <ArrowRight size={18} />
          </a>
          <button 
            onClick={onOpenShowreel}
            className="flex items-center gap-3 glass-pill px-6 py-3.5 rounded-full text-white hover:bg-white/15 transition-all cursor-pointer"
          >
            <Play size={16} className="fill-current text-cyan-400" />
            <span>Ver Showreel</span>
          </button>
        </div>
      </div>

      {/* Tarjeta Destacada Interactiva (Carrusel) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          onClick={() => currentAnimal && onSelectAnimal && onSelectAnimal(currentAnimal)}
          className="md:col-span-2 glass-panel p-6 rounded-3xl relative overflow-hidden group cursor-pointer border border-white/10 hover:border-cyan-500/40 transition-all min-h-[260px] flex flex-col justify-between" 
          data-aos="fade-right" 
          data-aos-delay="200"
        >
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              {currentAnimal?.category || "MAMÍFERO MARINO"}
            </span>
            <h3 className="text-3xl font-semibold text-white mt-2">
              {currentAnimal?.name || "Ballena Jorobada"}
            </h3>
            <p className="text-gray-300 text-sm mt-2 max-w-sm">
              {currentAnimal?.scientific ? `${currentAnimal.scientific} — ${currentAnimal.desc.substring(0, 70)}...` : "Megaptera novaeangliae — Gigantes migratorios de los océanos."}
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between mt-6">
            <span className="text-sm font-mono text-cyan-400">
              0{currentIndex + 1} / 0{speciesList.length || 6}
            </span>
            <button 
              onClick={handleNext}
              className="p-3 bg-white/10 hover:bg-cyan-500 hover:text-black rounded-full transition-all active:scale-90"
              title="Siguiente especie"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Imagen de fondo dinámica */}
          <img 
            src={currentAnimal?.image || "https://images.unsplash.com/photo-1568430460488-390757452d9a?auto=format&fit=crop&w=1000&q=80"} 
            alt="Destacado"
            className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700" 
          />
        </div>

        <div className="glass-panel p-6 rounded-3xl flex flex-col justify-between bg-gradient-to-b from-cyan-950/30 to-ocean-dark border border-white/10" data-aos="fade-left" data-aos-delay="400">
          <div>
            <h4 className="text-xl font-semibold text-white mb-2">Preservación Marina</h4>
            <p className="text-sm text-gray-400">Creamos expediciones digitales para registrar y salvar especies amenazadas.</p>
          </div>
          <a href="#especies" className="mt-8 self-end p-4 bg-cyan-500 text-black rounded-full hover:scale-110 transition-transform">
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};