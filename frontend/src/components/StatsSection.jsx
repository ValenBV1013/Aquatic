import React from 'react';

export const StatsSection = ({ stats }) => {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-12" data-aos="fade-up">
      <div className="glass-panel p-8 rounded-3xl grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        <div className="pt-4 sm:pt-0">
          <h2 className="text-4xl font-bold text-cyan-400">{stats?.expeditions || "250+"}</h2>
          <p className="text-sm text-gray-400 mt-1 uppercase tracking-wider">Proyectos Completados</p>
        </div>
        <div className="pt-4 sm:pt-0">
          <h2 className="text-4xl font-bold text-cyan-400">{stats?.divers || "120+"}</h2>
          <p className="text-sm text-gray-400 mt-1 uppercase tracking-wider">Clientes Satisfechos</p>
        </div>
        <div className="pt-4 sm:pt-0">
          <h2 className="text-4xl font-bold text-cyan-400">{stats?.oceans_explored || "15+"}</h2>
          <p className="text-sm text-gray-400 mt-1 uppercase tracking-wider">Países Alcanzados</p>
        </div>
      </div>
    </section>
  );
};