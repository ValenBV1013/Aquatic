import React, { useState } from 'react';
import { Search, Info, Eye } from 'lucide-react';

export const SpeciesSection = ({ species, onSelectAnimal }) => {
  const [filter, setFilter] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSpecies = species?.filter(item => {
    const matchesFilter = filter === 'todos' || item.type === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="especies" className="relative z-10 max-w-6xl mx-auto px-6 py-16 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10" data-aos="fade-up">
        <div>
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            BIODIVERSIDAD ACUÁTICA
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-white mt-1">
            Especies del Abismo
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-md">
            Haz clic en cualquier criatura para desplegar su ficha de investigación biológica.
          </p>
        </div>

        {/* Buscador y Filtros */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text"
              placeholder="Buscar especie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="glass-pill pl-10 pr-4 py-2 rounded-full text-sm text-white placeholder-gray-400 outline-none focus:border-cyan-400 border border-transparent w-full sm:w-48 transition-all"
            />
          </div>

          <div className="flex gap-2 glass-panel p-1 rounded-full text-xs">
            {['todos', 'peces', 'mamiferos', 'invertebrados'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-3 py-1.5 rounded-full capitalize transition-all ${
                  filter === type 
                    ? 'bg-cyan-500 text-black font-semibold' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid de Especies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSpecies?.map((animal, idx) => (
          <div 
            key={animal.id || idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            onClick={() => onSelectAnimal(animal)}
            className="glass-panel rounded-3xl overflow-hidden group cursor-pointer border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={animal.image} 
                alt={animal.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark via-transparent to-transparent opacity-80"></div>
              <span className="absolute top-3 left-3 glass-pill px-3 py-1 text-[10px] uppercase font-semibold text-cyan-300 rounded-full">
                {animal.category}
              </span>
              <div className="absolute bottom-3 right-3 p-2 rounded-full glass-panel text-white group-hover:bg-cyan-500 group-hover:text-black transition-all">
                <Eye size={16} />
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                {animal.name}
              </h3>
              <p className="text-xs text-gray-400 italic mb-3">{animal.scientific}</p>
              <p className="text-gray-300 text-xs line-clamp-2 leading-relaxed">
                {animal.desc}
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-[11px] text-cyan-400">
                <span>{animal.depth}</span>
                <span className="flex items-center gap-1 font-semibold group-hover:underline">
                  Ver Ficha <Info size={12} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};