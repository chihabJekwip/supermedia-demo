import React from 'react';

export const BrandShure: React.FC = () => {
  return (
    <div className="bg-shure-black text-white min-h-screen">
      <section className="h-[70vh] w-full overflow-hidden relative flex items-center shure-gradient">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-8 w-px bg-shure-green"></div>
              <span className="text-shure-green font-bold tracking-[0.3em] uppercase text-sm">Partenaire Officiel</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold leading-none tracking-tighter mb-8">
              SHURE: Le Son de <br/><span className="text-shure-green italic">la Perfection.</span>
            </h1>
            <button className="bg-shure-green hover:bg-shure-green/90 text-shure-black px-12 py-5 rounded-full font-bold transition-all shadow-2xl text-lg">
              Acheter maintenant
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-shure-dark border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 group bg-shure-dark border border-white/10 hover:border-shure-green rounded-[2.5rem] p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden transition-colors">
              <div className="absolute top-0 right-0 p-8">
                <span className="bg-shure-green text-shure-black font-black px-4 py-1.5 rounded-full text-[10px] tracking-widest uppercase">Best Seller</span>
              </div>
              <div className="flex-1 space-y-6">
                <h3 className="text-4xl font-bold">SM7B Microphone Dynamique</h3>
                <p className="text-gray-400 leading-relaxed">Le micro favori des podcasteurs et des plus grands artistes mondiaux.</p>
                <span className="text-3xl font-bold text-shure-green">4 850 DH</span>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <img alt="SM7B" class="max-h-[350px] object-contain transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwbzTCGXQE5xmZXpbxDXd6YbU0c8sZeTSUMIdX66Uc4OA7EeKk2kOi1dR2RIPmLQzoZ7s1cTyL4YnKGWCuqFmIHX-i3-ari9FImWVMtIizZvQ-cn-KPfKMGJqC0IgkJEvY3mycL8qcXm93eo0jdY_Kjn0pumbUUqGgFejEHtgyqVSl5MdbKku-XK1uQOmMyZG71iAypemSpE3RCwbq8-k7Re1m6hPJ7xq0t7wuBXqnm5s5seQ4dwuSPoob3OIM-d4JUY_aEu25PvU" />
              </div>
            </div>
             <div className="bg-shure-dark border border-white/10 hover:border-shure-green rounded-[2.5rem] p-10 flex flex-col justify-between group transition-colors">
                <div className="aspect-square flex items-center justify-center mb-8">
                    <img alt="SM58" class="max-h-[250px] object-contain group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoD7c4UhKses74i_ceH9Wtq-Lpz4qEmP8oX5YviHOYgD2ORznQ_SSKWugB7DlKT6cUE97quIGAUOL8mf2rARJClF6t8MUqtQu0PTaCUv39YEhI9GPdeJkGMZMG522LKew0DBt08d2Wslg52SN4h8OO5UDQjrmzajV7RBIflFKoilvB7Q_nkD2oQc2XxA5fGpl8a6albzl9_K4JguiVWbNpMF_EwBUZBc5FvPS3nZQEmJKQgA9UKgodoorO4j4OG_lQnT5MOgu6PNA" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-2">SM58-LCE</h3>
                    <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <span className="text-2xl font-bold text-shure-green">1 490 DH</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
