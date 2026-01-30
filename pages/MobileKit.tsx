import React from 'react';

export const MobileKit: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12 max-w-2xl bg-white dark:bg-background-dark min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Design System <span className="text-primary italic">Mobile</span></h1>
        <p className="text-sm text-gray-500">Composants UI adaptés pour les petits écrans.</p>
      </header>

      <section>
        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6">01. Mobile Inputs</h2>
        <div className="space-y-4">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-maastricht border border-gray-200 dark:border-gray-800 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-sm" placeholder="Rechercher un produit..." type="text" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6">02. Mobile Buttons</h2>
        <div className="space-y-3">
          <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-5 rounded-2xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-xl">shopping_bag</span>
            Ajouter au Panier
          </button>
          <button className="w-full bg-white dark:bg-maastricht border-2 border-primary text-primary font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-2">
            Voir les caractéristiques
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6">03. Mobile Cards</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-maastricht rounded-[2rem] p-4 shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col">
            <div className="aspect-square bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center mb-3 relative overflow-hidden p-2">
              <img alt="Product" class="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoD7c4UhKses74i_ceH9Wtq-Lpz4qEmP8oX5YviHOYgD2ORznQ_SSKWugB7DlKT6cUE97quIGAUOL8mf2rARJClF6t8MUqtQu0PTaCUv39YEhI9GPdeJkGMZMG522LKew0DBt08d2Wslg52SN4h8OO5UDQjrmzajV7RBIflFKoilvB7Q_nkD2oQc2XxA5fGpl8a6albzl9_K4JguiVWbNpMF_EwBUZBc5FvPS3nZQEmJKQgA9UKgodoorO4j4OG_lQnT5MOgu6PNA" />
              <span className="absolute top-2 right-2 bg-primary text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase">New</span>
            </div>
            <p className="text-[8px] text-gray-400 uppercase font-black mb-1">Logitech</p>
            <h3 className="text-sm font-bold mb-2 line-clamp-1 dark:text-white">MX Master 3S</h3>
            <div className="mt-auto">
              <span className="text-sm font-black text-primary">1 290 DH</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mobile Bottom Nav Simulation */}
      <div className="fixed bottom-0 inset-x-0 bg-white/90 dark:bg-maastricht/90 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 px-8 py-3 z-50 flex items-center justify-between">
        <button className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined text-2xl">home</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Accueil</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined text-2xl">grid_view</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Univers</span>
        </button>
        <div className="relative -top-8">
            <button className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-primary/40 ring-4 ring-white dark:ring-maastricht">
            <span className="material-symbols-outlined text-3xl">shopping_cart</span>
            </button>
        </div>
        <button className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined text-2xl">favorite</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Favoris</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined text-2xl">person</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Profil</span>
        </button>
      </div>
    </div>
  );
};
