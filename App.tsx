import React, { useState } from 'react';
import { Page } from './types';
import { useTheme, useIsMobile } from './hooks';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { BrandShure } from './pages/BrandShure';
import { Support } from './pages/Support';
import { B2B } from './pages/B2B';
import { AudioVideo } from './pages/AudioVideo';
import { MobileKit } from './pages/MobileKit';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const { isDark, toggleTheme } = useTheme();
  const isMobile = useIsMobile();

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home setPage={setCurrentPage} />;
      case Page.PRODUCT_DETAIL:
        return <ProductDetail />;
      case Page.SHURE_BRAND:
        return <BrandShure />;
      case Page.SUPPORT:
        return <Support />;
      case Page.B2B:
        return <B2B />;
      case Page.AUDIO_VIDEO:
        return <AudioVideo />;
      case Page.MOBILE_KIT:
        return <MobileKit />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'dark' : ''} bg-background-light dark:bg-background-dark text-maastricht dark:text-white transition-colors duration-300`}>
      {/* 
        In a real app, B2B usually implies a different layout wrapper. 
        Here we control the Header variant via props.
        Mobile Kit page has its own header internal to the component to show the design system.
      */}
      {currentPage !== Page.MOBILE_KIT && (
        <Header 
            currentPage={currentPage} 
            setPage={setCurrentPage} 
            toggleTheme={toggleTheme} 
            isDark={isDark} 
        />
      )}
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Standard Footer (Hidden for Mobile Kit) */}
      {currentPage !== Page.MOBILE_KIT && (
        <footer className="bg-maastricht dark:bg-black text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1.5">
                                <svg className="w-full h-full text-primary fill-current" viewBox="0 0 100 100">
                                <path d="M80 30 L50 15 L20 30 L20 50 L50 65 L80 50 L80 70 L50 85 L20 70" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                                </svg>
                            </div>
                            <span className="text-2xl font-bold tracking-tighter uppercase">Supermedia</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Le leader marocain de la distribution technologique pour particuliers et professionnels.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-8 tracking-tight">Entreprise</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><button className="hover:text-primary transition-colors">À propos</button></li>
                            <li><button className="hover:text-primary transition-colors">Partenariats B2B</button></li>
                            <li><button className="hover:text-primary transition-colors">Carrières</button></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-8 tracking-tight">Support</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><button onClick={() => setCurrentPage(Page.SUPPORT)} className="hover:text-primary transition-colors">Centre d'aide</button></li>
                            <li><button className="hover:text-primary transition-colors">Livraison</button></li>
                            <li><button className="hover:text-primary transition-colors">Garantie</button></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-8 tracking-tight">Newsletter</h4>
                        <div className="flex gap-3 bg-white/5 p-1.5 rounded-full border border-white/10 focus-within:border-primary transition-all">
                            <input className="bg-transparent border-none focus:ring-0 px-5 py-2 text-sm flex-grow placeholder:text-gray-600" placeholder="Votre email" type="email" />
                            <button className="bg-primary hover:bg-blue-600 px-6 py-2 rounded-full font-bold transition-all text-sm">OK</button>
                        </div>
                    </div>
                </div>
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-medium text-gray-500 uppercase tracking-widest text-center">
                    <p>© 2024 Supermedia Morocco.</p>
                    <div className="flex gap-10">
                        <button className="hover:text-white transition-colors">Conditions</button>
                        <button className="hover:text-white transition-colors">Confidentialité</button>
                    </div>
                </div>
            </div>
        </footer>
      )}
    </div>
  );
};

export default App;
