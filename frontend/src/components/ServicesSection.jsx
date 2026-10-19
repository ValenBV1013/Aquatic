import React from 'react';
import { ShieldCheck, Anchor, Cpu } from 'lucide-react';

export const ServicesSection = ({ services }) => {
  const icons = [<Cpu size={28} />, <ShieldCheck size={28} />, <Anchor size={28} />];

  return (
    <section id="servicios" className="relative z-10 max-w-6xl mx-auto px-6 py-16 scroll-mt-24">
      <div className="text-center max-w-xl mx-auto mb-12" data-aos="fade-up">
        <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
          NUESTRAS INICIATIVAS
        </span>
        <h2 className="text-3xl sm:text-4xl font-light text-white mt-1">
          Tecnología y Conservación
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          Unimos ingeniería digital e investigación marina para salvaguardar el océano.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services?.map((serv, i) => (
          <div 
            key={i} 
            data-aos="fade-up"
            data-aos-delay={i * 150}
            className="glass-panel p-8 rounded-3xl flex flex-col justify-between border border-white/10 hover:border-cyan-400/40 transition-all hover:-translate-y-1"
          >
            <div>
              <div className="p-3 bg-cyan-500/10 text-cyan-400 w-fit rounded-2xl mb-6">
                {icons[i % icons.length]}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{serv.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{serv.desc}</p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-cyan-400 font-semibold">
              <span>EXPLORAR MÁS</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};