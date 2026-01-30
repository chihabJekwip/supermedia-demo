import React from 'react';

export const ProductDetail: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 uppercase tracking-widest font-bold">
        <a className="hover:text-primary" href="#">Accueil</a>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <a className="hover:text-primary" href="#">Audio & Vidéo</a>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span className="text-maastricht dark:text-white">Sony Alpha A7 IV</span>
      </nav>

      <div className="grid grid-cols-12 gap-12 mb-24">
        <div className="col-span-12 lg:col-span-7">
          <div className="bg-white dark:bg-maastricht rounded-[2.5rem] p-12 flex items-center justify-center border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden group min-h-[500px]">
            <img alt="Sony Alpha A7 IV" class="max-w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwbzTCGXQE5xmZXpbxDXd6YbU0c8sZeTSUMIdX66Uc4OA7EeKk2kOi1dR2RIPmLQzoZ7s1cTyL4YnKGWCuqFmIHX-i3-ari9FImWVMtIizZvQ-cn-KPfKMGJqC0IgkJEvY3mycL8qcXm93eo0jdY_Kjn0pumbUUqGgFejEHtgyqVSl5MdbKku-XK1uQOmMyZG71iAypemSpE3RCwbq8-k7Re1m6hPJ7xq0t7wuBXqnm5s5seQ4dwuSPoob3OIM-d4JUY_aEu25PvU" />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 flex flex-col">
          <div className="mb-6 flex items-center gap-2">
            <div className="flex text-princeton">
              {[1,2,3,4].map(i => <span key={i} className="material-symbols-outlined fill-current text-sm">star</span>)}
              <span className="material-symbols-outlined text-sm">star_half</span>
            </div>
            <span className="text-xs font-bold text-gray-400">(124 Avis)</span>
          </div>
          
          <h1 className="text-5xl font-bold text-maastricht dark:text-white leading-tight mb-4">Sony Alpha A7 IV</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 leading-relaxed">
            Boîtier Nu | Capteur plein format 33 MP | Autofocus IA en temps réel | Vidéo 4K 60p 10 bits.
          </p>

          <div className="bg-gray-50 dark:bg-maastricht/50 p-8 rounded-3xl mb-10">
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-5xl font-black text-maastricht dark:text-white tracking-tighter">26 490 DH</span>
              <span className="text-xl text-gray-400 line-through">29 900 DH</span>
              <span className="bg-coral-red text-white text-[10px] font-bold px-3 py-1 rounded-full">-11%</span>
            </div>
            <p className="text-xs text-green-500 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              En stock - Expédition immédiate
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button className="w-full bg-maastricht dark:bg-white text-white dark:text-maastricht py-6 rounded-full font-bold text-lg hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-xl flex items-center justify-center gap-3">
              <span className="material-symbols-outlined">shopping_cart</span>
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
