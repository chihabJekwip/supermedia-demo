import React from 'react';

export const B2B: React.FC = () => {
  return (
    <div>
      <section className="relative min-h-[600px] flex items-center overflow-hidden hero-b2b-gradient">
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
            <img alt="Corporate AV Solution" class="w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwbzTCGXQE5xmZXpbxDXd6YbU0c8sZeTSUMIdX66Uc4OA7EeKk2kOi1dR2RIPmLQzoZ7s1cTyL4YnKGWCuqFmIHX-i3-ari9FImWVMtIizZvQ-cn-KPfKMGJqC0IgkJEvY3mycL8qcXm93eo0jdY_Kjn0pumbUUqGgFejEHtgyqVSl5MdbKku-XK1uQOmMyZG71iAypemSpE3RCwbq8-k7Re1m6hPJ7xq0t7wuBXqnm5s5seQ4dwuSPoob3OIM-d4JUY_aEu25PvU" />
        </div>
        <div className="container mx-auto px-6 relative z-10 py-24 text-white">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary px-3 py-1 rounded text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Solutions Entreprises</span>
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tighter">
              Solutions <br/> <span className="text-primary">Audiovisuelles</span> <br/> pour Entreprises.
            </h1>
            <p className="text-xl text-silver-grey font-light leading-relaxed mb-12 max-w-2xl">
              De la conception à l'installation, nous équipons vos espaces professionnels avec les dernières technologies de collaboration.
            </p>
            <button className="bg-primary hover:bg-white hover:text-maastricht text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl flex items-center gap-3">
                Demander un audit gratuit
                <span className="material-symbols-outlined">trending_flat</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-maastricht text-white">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-5xl font-bold mt-6 mb-12 tracking-tight">Plus qu'un fournisseur, <br/><span className="text-silver-grey italic">votre partenaire technique</span>.</h2>
                    <div className="space-y-10">
                        <div className="flex gap-6">
                            <div className="w-16 h-16 shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-4xl">architecture</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Ingénierie & Design</h4>
                                <p className="text-gray-400">Étude acoustique, plans d'intégration et modélisation 3D.</p>
                            </div>
                        </div>
                         <div className="flex gap-6">
                            <div className="w-16 h-16 shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-4xl">construction</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Installation</h4>
                                <p className="text-gray-400">Pose par nos techniciens certifiés et configuration complète.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};
