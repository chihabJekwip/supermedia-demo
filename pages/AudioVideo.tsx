import React from 'react';

export const AudioVideo: React.FC = () => {
  return (
    <div className="pb-12">
        <section className="px-4 mb-10 pt-6">
            <div className="relative h-[300px] rounded-[2rem] overflow-hidden shadow-2xl hero-gradient">
                <img alt="Audio Hero" class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoD7c4UhKses74i_ceH9Wtq-Lpz4qEmP8oX5YviHOYgD2ORznQ_SSKWugB7DlKT6cUE97quIGAUOL8mf2rARJClF6t8MUqtQu0PTaCUv39YEhI9GPdeJkGMZMG522LKew0DBt08d2Wslg52SN4h8OO5UDQjrmzajV7RBIflFKoilvB7Q_nkD2oQc2XxA5fGpl8a6albzl9_K4JguiVWbNpMF_EwBUZBc5FvPS3nZQEmJKQgA9UKgodoorO4j4OG_lQnT5MOgu6PNA" />
                <div className="relative z-10 h-full flex flex-col justify-center px-10 text-white space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-md w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Studio Pro
                    </div>
                    <h1 className="text-5xl font-bold leading-tight tracking-tight">
                        Audio, Vidéo <br/>& <span className="italic text-primary">Production</span>
                    </h1>
                </div>
            </div>
        </section>
        
        <section className="container mx-auto px-4 mb-16">
            <h2 className="text-2xl font-bold text-maastricht dark:text-white mb-6">Nos Catégories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {title: 'Microphones', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwbzTCGXQE5xmZXpbxDXd6YbU0c8sZeTSUMIdX66Uc4OA7EeKk2kOi1dR2RIPmLQzoZ7s1cTyL4YnKGWCuqFmIHX-i3-ari9FImWVMtIizZvQ-cn-KPfKMGJqC0IgkJEvY3mycL8qcXm93eo0jdY_Kjn0pumbUUqGgFejEHtgyqVSl5MdbKku-XK1uQOmMyZG71iAypemSpE3RCwbq8-k7Re1m6hPJ7xq0t7wuBXqnm5s5seQ4dwuSPoob3OIM-d4JUY_aEu25PvU'},
                    {title: 'Caméras', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoD7c4UhKses74i_ceH9Wtq-Lpz4qEmP8oX5YviHOYgD2ORznQ_SSKWugB7DlKT6cUE97quIGAUOL8mf2rARJClF6t8MUqtQu0PTaCUv39YEhI9GPdeJkGMZMG522LKew0DBt08d2Wslg52SN4h8OO5UDQjrmzajV7RBIflFKoilvB7Q_nkD2oQc2XxA5fGpl8a6albzl9_K4JguiVWbNpMF_EwBUZBc5FvPS3nZQEmJKQgA9UKgodoorO4j4OG_lQnT5MOgu6PNA'},
                    {title: 'Éclairage', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwbzTCGXQE5xmZXpbxDXd6YbU0c8sZeTSUMIdX66Uc4OA7EeKk2kOi1dR2RIPmLQzoZ7s1cTyL4YnKGWCuqFmIHX-i3-ari9FImWVMtIizZvQ-cn-KPfKMGJqC0IgkJEvY3mycL8qcXm93eo0jdY_Kjn0pumbUUqGgFejEHtgyqVSl5MdbKku-XK1uQOmMyZG71iAypemSpE3RCwbq8-k7Re1m6hPJ7xq0t7wuBXqnm5s5seQ4dwuSPoob3OIM-d4JUY_aEu25PvU'},
                    {title: 'Drones', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoD7c4UhKses74i_ceH9Wtq-Lpz4qEmP8oX5YviHOYgD2ORznQ_SSKWugB7DlKT6cUE97quIGAUOL8mf2rARJClF6t8MUqtQu0PTaCUv39YEhI9GPdeJkGMZMG522LKew0DBt08d2Wslg52SN4h8OO5UDQjrmzajV7RBIflFKoilvB7Q_nkD2oQc2XxA5fGpl8a6albzl9_K4JguiVWbNpMF_EwBUZBc5FvPS3nZQEmJKQgA9UKgodoorO4j4OG_lQnT5MOgu6PNA'}
                ].map((item, i) => (
                    <div key={i} className="group relative h-64 rounded-[1.5rem] overflow-hidden shadow-lg cursor-pointer">
                        <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 universe-card-overlay"></div>
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-white font-bold text-xl">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  );
};
