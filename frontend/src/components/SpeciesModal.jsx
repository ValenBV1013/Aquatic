import React from 'react';
import { X, ShieldAlert, Compass, Waves } from 'lucide-react';

export const SpeciesModal = ({ animal, onClose }) => {
  if (!animal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="glass-panel max-w-2xl w-full rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl relative">
        {/* Botón Cerrar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full glass-pill text-white hover:bg-cyan-500 hover:text-black transition-all"
        >
          <X size={20} />
        </button>

        {/* Imagen Cabecera */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img 
            src={animal.image} 
            alt={animal.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark via-ocean-dark/40 to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full glass-pill">
              {animal.category}
            </span>
            <h2 className="text-3xl font-bold text-white mt-2">{animal.name}</h2>
            <p className="text-gray-300 italic text-sm">{animal.scientific}</p>
          </div>
        </div>

        {/* Detalle e Información */}
        <div className="p-6 space-y-6">
          <p className="text-gray-300 text-sm leading-relaxed">
            {animal.desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-4">
            <div className="flex items-center gap-3 glass-pill p-3 rounded-2xl">
              <Compass className="text-cyan-400 shrink-0" size={20} />
              <div>
                <p className="text-[10px] text-gray-400 uppercase">Profundidad</p>
                <p className="text-xs font-semibold text-white">{animal.depth}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 glass-pill p-3 rounded-2xl">
              <Waves className="text-cyan-400 shrink-0" size={20} />
              <div>
                <p className="text-[10px] text-gray-400 uppercase">Hábitat</p>
                <p className="text-xs font-semibold text-white">{animal.habitat}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 glass-pill p-3 rounded-2xl">
              <ShieldAlert className="text-cyan-400 shrink-0" size={20} />
              <div>
                <p className="text-[10px] text-gray-400 uppercase">Estado</p>
                <p className="text-xs font-semibold text-cyan-300">{animal.status}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button 
              onClick={onClose}
              className="px-6 py-2.5 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition-all text-sm"
            >
              Cerrar Ficha
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};