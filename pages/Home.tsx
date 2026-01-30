import React from 'react';
import { Page } from '../types';

interface HomeProps {
  setPage: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="space-y-12 pb-12">
      <div className="bg-princeton text-maastricht py-2 overflow-hidden whitespace-nowrap h-10">
        <div className="flex items-center justify-center gap-12 font-bold text-sm animate-marquee">
          <span>OFFRES FLASH : JUSQU'À -40% SUR LA GAMME PRO</span>
          <span className="hidden md:inline">•</span>
          <span>LIVRAISON GRATUITE DÈS 500 DH</span>
          <span className="hidden md:inline">•</span>
          <span>NOUVEAU : SOLUTIONS IT CLÉ EN MAIN</span>
        </div>
      </div>

      <section className="container mx-auto px-6 h-[60vh] min-h-[500px]">
        <div className="h-full flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-[60%] h-full group overflow-hidden rounded-[2.5rem] shadow-2xl cursor-pointer" onClick={() => setPage(Page.AUDIO_VIDEO)}>
            <div className="absolute inset-0 hero-gradient"></div>
            <img alt="Main Hero Image" class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVAVakhHKZ0nEtP9DtsocdzNsEzXFgIOkwlMzT-XDaG2SW3Tvr-mxzkBdlk4ZrA9dtaw_dfgpwd9eBRhqq3yysi0XSOT8q1GqaJQcxx0uAQDR6Qn896uyjFm8fsUrLWEPHtuLj-JsQDd38Ee73wlqQAwflocRdQ5uECJflddpYI32NDKIqEiF3QFJ7Qf6ECi2WYTEDuLNLyet7iGBmxvopyDDeI8rm1UyC4Vx8-6zZrkjOYh1LS6oEZRt8gXHYmaPawV5ZFg55JSw" />
            <div className="relative z-10 h-full flex flex-col justify-center px-12 lg:px-24 text-white space-y-10">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md w-fit">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Brand Excellence 2024
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-[0.9] tracking-tighter">
                L'Innovation <br /><span className="text-primary italic">Sans Limites</span>.
              </h1>
              <button className="bg-primary hover:bg-blue-600 px-12 py-5 rounded-full font-bold transition-all transform hover:scale-105 shadow-2xl text-lg w-fit">
                Explorer la Boutique
              </button>
            </div>
          </div>
          <div className="w-full md:w-[40%] h-full flex flex-col gap-4">
            <div className="relative flex-1 group overflow-hidden rounded-[2.5rem] bg-maastricht border border-gray-800 shadow-xl cursor-pointer" onClick={() => setPage(Page.B2B)}>
              <div className="absolute inset-0 bg-gradient-to-br from-maastricht to-primary/20 opacity-60"></div>
              <img alt="Solutions Pro" class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwbzTCGXQE5xmZXpbxDXd6YbU0c8sZeTSUMIdX66Uc4OA7EeKk2kOi1dR2RIPmLQzoZ7s1cTyL4YnKGWCuqFmIHX-i3-ari9FImWVMtIizZvQ-cn-KPfKMGJqC0IgkJEvY3mycL8qcXm93eo0jdY_Kjn0pumbUUqGgFejEHtgyqVSl5MdbKku-XK1uQOmMyZG71iAypemSpE3RCwbq8-k7Re1m6hPJ7xq0t7wuBXqnm5s5seQ4dwuSPoob3OIM-d4JUY_aEu25PvU" />
              <div className="relative z-10 h-full p-12 flex flex-col justify-between">
                <div>
                  <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">B2B & Enterprise</span>
                  <h2 class="text-3xl font-bold text-white mt-4 leading-tight">Solutions Pro<br />Sur-Mesure</h2>
                </div>
              </div>
            </div>
            <div className="relative flex-1 group overflow-hidden rounded-[2.5rem] bg-gray-100 dark:bg-maastricht/30 border border-gray-200 dark:border-gray-800 shadow-xl cursor-pointer" onClick={() => setPage(Page.PRODUCT_DETAIL)}>
              <img alt="Premium Category" class="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-40 group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoD7c4UhKses74i_ceH9Wtq-Lpz4qEmP8oX5YviHOYgD2ORznQ_SSKWugB7DlKT6cUE97quIGAUOL8mf2rARJClF6t8MUqtQu0PTaCUv39YEhI9GPdeJkGMZMG522LKew0DBt08d2Wslg52SN4h8OO5UDQjrmzajV7RBIflFKoilvB7Q_nkD2oQc2XxA5fGpl8a6albzl9_K4JguiVWbNpMF_EwBUZBc5FvPS3nZQEmJKQgA9UKgodoorO4j4OG_lQnT5MOgu6PNA" />
              <div className="relative z-10 h-full p-12 flex flex-col justify-between">
                <div>
                  <span className="text-princeton font-bold tracking-[0.2em] uppercase text-xs">Exclusivité</span>
                  <h2 class="text-3xl font-bold text-maastricht dark:text-white mt-4 leading-tight">Audiovisuel<br />Haut de Gamme</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Univers & Marques</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <button onClick={() => setPage(Page.AUDIO_VIDEO)} className="group relative h-48 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoD7c4UhKses74i_ceH9Wtq-Lpz4qEmP8oX5YviHOYgD2ORznQ_SSKWugB7DlKT6cUE97quIGAUOL8mf2rARJClF6t8MUqtQu0PTaCUv39YEhI9GPdeJkGMZMG522LKew0DBt08d2Wslg52SN4h8OO5UDQjrmzajV7RBIflFKoilvB7Q_nkD2oQc2XxA5fGpl8a6albzl9_K4JguiVWbNpMF_EwBUZBc5FvPS3nZQEmJKQgA9UKgodoorO4j4OG_lQnT5MOgu6PNA" alt="Audio" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute bottom-6 left-6 text-white text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Découvrir</span>
                    <h3 className="text-xl font-bold">Audio & Vidéo</h3>
                </div>
            </button>
            <button onClick={() => setPage(Page.SHURE_BRAND)} className="group relative h-48 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                    <span className="text-shure-green font-black text-3xl tracking-tighter">SHURE</span>
                </div>
                <div className="absolute bottom-6 left-6 text-white text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-shure-green">Brand</span>
                    <h3 className="text-xl font-bold">Legendary Performance</h3>
                </div>
            </button>
             <button onClick={() => setPage(Page.SUPPORT)} className="group relative h-48 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-gray-100 dark:bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-6xl">support_agent</span>
                </div>
                <div className="absolute bottom-6 left-6 text-maastricht dark:text-white text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Aide</span>
                    <h3 className="text-xl font-bold">SAV & Support</h3>
                </div>
            </button>
             <button onClick={() => setPage(Page.PRODUCT_DETAIL)} className="group relative h-48 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-gray-100 dark:bg-gray-800">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwbzTCGXQE5xmZXpbxDXd6YbU0c8sZeTSUMIdX66Uc4OA7EeKk2kOi1dR2RIPmLQzoZ7s1cTyL4YnKGWCuqFmIHX-i3-ari9FImWVMtIizZvQ-cn-KPfKMGJqC0IgkJEvY3mycL8qcXm93eo0jdY_Kjn0pumbUUqGgFejEHtgyqVSl5MdbKku-XK1uQOmMyZG71iAypemSpE3RCwbq8-k7Re1m6hPJ7xq0t7wuBXqnm5s5seQ4dwuSPoob3OIM-d4JUY_aEu25PvU" className="absolute inset-0 w-full h-full object-contain p-8 group-hover:scale-110 transition-transform" />
                <div className="absolute bottom-6 left-6 text-maastricht dark:text-white text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Featured</span>
                    <h3 className="text-xl font-bold">Sony A7 IV</h3>
                </div>
            </button>
        </div>
      </section>
    </div>
  );
};
