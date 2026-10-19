import React from 'react';
import { Search, ArrowUpRight } from 'lucide-react';

export const Navbar = ({ onOpenContact }) => {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between w-full max-w-6xl">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-bold text-xl tracking-wider text-cyan-400 group-hover:text-cyan-300 transition-colors">AQUA</span>
          <span className="text-xs text-gray-400 uppercase tracking-widest hidden sm:inline">| STUDIO</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-cyan-400 transition-colors">Inicio</a>
          <a href="#especies" className="hover:text-cyan-400 transition-colors">Especies</a>
          <a href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios</a>
          <a href="#nosotros" className="hover:text-cyan-400 transition-colors">Nosotros</a>
        </nav>

        <div className="flex items-center gap-3">
          <a 
            href="#especies"
            className="p-2.5 rounded-full glass-pill hover:bg-cyan-500/20 text-gray-200 transition-all cursor-pointer"
            title="Buscar Especie"
          >
            <Search size={18} />
          </a>
          <button 
            onClick={onOpenContact}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold text-sm px-5 py-2.5 rounded-full transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
          >
            <span>Iniciar Proyecto</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};