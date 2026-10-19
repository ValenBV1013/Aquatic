import React, { useState } from 'react';
import { X, Send, Mail, User, MessageSquare, CheckCircle } from 'lucide-react';

export const ContactModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="glass-panel max-w-lg w-full rounded-3xl p-8 relative border border-cyan-500/30 shadow-2xl overflow-hidden">
        {/* Fondo decorativo con resplandor cian */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-pill text-white hover:bg-cyan-500 hover:text-black transition-all"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full glass-pill">
                CONTACTO & COLABORACIÓN
              </span>
              <h3 className="text-2xl font-bold text-white mt-3">Inicia tu Proyecto Oceánico</h3>
              <p className="text-gray-300 text-xs mt-1">
                Envíanos tus requerimientos y nos pondremos en contacto contigo a la brevedad.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">Nombre Completo</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400" size={16} />
                  <input 
                    type="text"
                    required
                    placeholder="Ej. Valentina Blandón"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full glass-pill pl-10 pr-4 py-2.5 rounded-2xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-cyan-400 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">Correo Electrónico</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400" size={16} />
                  <input 
                    type="email"
                    required
                    placeholder="contacto@aquastudio.dev"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full glass-pill pl-10 pr-4 py-2.5 rounded-2xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-cyan-400 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">Mensaje o Propuesta</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3 text-cyan-400" size={16} />
                  <textarea 
                    rows="3"
                    required
                    placeholder="Describe los detalles de tu expedición o aplicación..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full glass-pill pl-10 pr-4 py-2.5 rounded-2xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-cyan-400 outline-none transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold rounded-2xl text-sm transition-all shadow-lg shadow-cyan-500/20 active:scale-95 mt-2"
              >
                <span>Enviar Propuesta</span>
                <Send size={16} />
              </button>
            </form>
          </>
        ) : (
          <div className="py-12 text-center space-y-4">
            <CheckCircle className="mx-auto text-cyan-400 animate-bounce" size={56} />
            <h3 className="text-2xl font-bold text-white">¡Mensaje Enviado!</h3>
            <p className="text-gray-300 text-sm max-w-xs mx-auto">
              Gracias por comunicarte con AQUA STUDIO. Hemos recibido tu propuesta con éxito.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};