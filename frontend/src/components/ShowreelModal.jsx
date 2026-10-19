import React from 'react';
import { X } from 'lucide-react';

export const ShowreelModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="glass-panel max-w-4xl w-full rounded-3xl overflow-hidden p-4 relative border border-cyan-500/30 shadow-2xl">
        {/* Botón para cerrar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full glass-pill text-white hover:bg-cyan-500 hover:text-black transition-all cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Reproductor con video local de public */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden mt-8 bg-black relative">
          <video 
            className="w-full h-full object-cover"
            controls
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/ocean.mp4" type="video/mp4" />
            Tu navegador no soporta el formato de video.
          </video>
        </div>
      </div>
    </div>
  );
};