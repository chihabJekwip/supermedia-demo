import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setPage: (page: Page) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setPage, toggleTheme, isDark }) => {
  // B2B Header Variant
  if (currentPage === Page.B2B) {
    return (
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-maastricht/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <button onClick={() => setPage(Page.HOME)} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-maastricht dark:bg-white rounded-lg flex items-center justify-center p-1">
                <svg className="w-full h-full text-primary fill-current" viewBox="0 0 100 100">
                  <path d="M80 30 L50 15 L20 30 L20 50 L50 65 L80 50 L80 70 L50 85 L20 70" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tighter text-maastricht dark:text-white uppercase">Supermedia <span className="text-primary">Pro</span></span>
            </button>
            <nav className="hidden lg:flex items-center gap-8">
              <button className="font-medium hover:text-primary transition-colors">Solutions</button>
              <button className="font-medium hover:text-primary transition-colors">Services</button>
              <button className="font-medium hover:text-primary transition-colors text-primary border-b-2 border-primary">B2B Portal</button>
            </nav>
          </div>
          <div className="flex items-center gap-6">
             <button onClick={() => setPage(Page.HOME)} className="hidden xl:flex text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-primary">
                Retour au site
            </button>
            <button className="hidden xl:flex items-center gap-2 bg-maastricht text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary transition-all">
              <span className="material-symbols-outlined text-sm">contact_page</span>
              Espace Client
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" onClick={toggleTheme}>
              <span className="material-symbols-outlined dark:hidden">dark_mode</span>
              <span className="material-symbols-outlined hidden dark:block text-yellow-400">light_mode</span>
            </button>
          </div>
        </div>
      </header>
    );
  }

  // Shure Header Variant
  if (currentPage === Page.SHURE_BRAND) {
    return (
        <header className="sticky top-0 z-50 bg-shure-black/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
        <button onClick={() => setPage(Page.HOME)} className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
        <svg className="w-full h-full text-shure-black fill-current" viewBox="0 0 100 100">
        <path d="M80 30 L50 15 L20 30 L20 50 L50 65 L80 50 L80 70 L50 85 L20 70" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
        </svg>
        </div>
        <span className="text-2xl font-bold tracking-tighter text-white uppercase">Supermedia</span>
        </button>
        <nav className="hidden lg:flex items-center gap-8">
        <button className="font-medium text-shure-green hover:text-white transition-colors">Audio Pro</button>
        <button className="font-medium text-white hover:text-shure-green transition-colors">Microphones</button>
        <button className="font-medium text-white hover:text-shure-green transition-colors">Écouteurs</button>
        </nav>
        </div>
        <div className="flex items-center gap-6">
        <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-white">
        <span className="material-symbols-outlined">person</span>
        </button>
        <button onClick={toggleTheme} className="p-2 hover:bg-white/5 rounded-full transition-colors text-white">
            <span className="material-symbols-outlined dark:hidden">dark_mode</span>
            <span className="material-symbols-outlined hidden dark:block text-yellow-400">light_mode</span>
        </button>
        </div>
        </div>
        </header>
    );
  }

  // Standard Header
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-maastricht/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <button onClick={() => setPage(Page.HOME)} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-maastricht dark:bg-white rounded-lg flex items-center justify-center p-1">
              <svg className="w-full h-full text-primary fill-current" viewBox="0 0 100 100">
                <path d="M80 30 L50 15 L20 30 L20 50 L50 65 L80 50 L80 70 L50 85 L20 70" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tighter text-maastricht dark:text-white text-nowrap uppercase">Supermedia</span>
          </button>
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => setPage(Page.AUDIO_VIDEO)} className="font-medium hover:text-primary transition-colors">Univers</button>
            <button onClick={() => setPage(Page.SHURE_BRAND)} className="font-medium hover:text-primary transition-colors">Marques</button>
            <button onClick={() => setPage(Page.B2B)} className="font-medium hover:text-primary transition-colors">Solutions Pro</button>
            <button onClick={() => setPage(Page.SUPPORT)} className="font-medium hover:text-primary transition-colors">Support</button>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden xl:flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 w-80">
            <span className="material-symbols-outlined text-gray-400">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-full dark:placeholder-gray-500 text-maastricht dark:text-white" placeholder="Rechercher un produit..." type="text" />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors relative">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-[10px] text-white rounded-full flex items-center justify-center">2</span>
            </button>
            <button onClick={() => setPage(Page.MOBILE_KIT)} className="hidden md:block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" title="Mobile UI Kit">
              <span className="material-symbols-outlined">smartphone</span>
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" onClick={toggleTheme}>
              <span className="material-symbols-outlined dark:hidden">dark_mode</span>
              <span className="material-symbols-outlined hidden dark:block text-yellow-400">light_mode</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
