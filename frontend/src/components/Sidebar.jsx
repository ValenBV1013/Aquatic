import React from 'react';
import { Home, Fish, ShieldCheck, Heart, MessageSquare, Play } from 'lucide-react';

export const Sidebar = ({ onOpenShowreel, onOpenContact }) => {
  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6 glass-panel p-3 rounded-full">
      <a href="#home" title="Inicio" className="p-3 rounded-full bg-cyan-500 text-black hover:scale-110 transition-transform">
        <Home size={20} />
      </a>
      <a href="#especies" title="Especies" className="p-3 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-white/5 transition-all">
        <Fish size={20} />
      </a>
      <a href="#servicios" title="Servicios" className="p-3 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-white/5 transition-all">
        <ShieldCheck size={20} />
      </a>
      <a href="#especies" title="Favoritos" className="p-3 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-white/5 transition-all">
        <Heart size={20} />
      </a>
      <button onClick={onOpenContact} title="Contacto" className="p-3 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-white/5 transition-all">
        <MessageSquare size={20} />
      </button>

      <div className="w-8 h-[1px] bg-white/10 my-1"></div>

      <button onClick={onOpenShowreel} title="Ver Video" className="p-3 rounded-full text-cyan-400 hover:scale-110 transition-transform">
        <Play size={18} />
      </button>
    </aside>
  );
};