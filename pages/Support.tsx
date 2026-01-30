import React from 'react';

export const Support: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="bg-maastricht dark:bg-black px-4 py-20 text-center relative overflow-hidden">
        <div className="relative z-10 text-white">
          <h2 className="text-4xl font-bold mb-4">Centre d'Aide & Support</h2>
          <p className="text-white/60 text-lg mb-12">Recherchez parmi nos guides et solutions</p>
          <div className="max-w-2xl mx-auto relative group">
            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-2xl">search</span>
            <input className="w-full bg-white text-maastricht rounded-2xl py-6 pl-16 pr-6 shadow-2xl focus:ring-4 focus:ring-primary/50 text-lg" placeholder="Décrivez votre problème (ex: retour, garantie)..." type="text" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: 'local_shipping', title: 'Suivi Commande', desc: 'Localisez votre colis en temps réel' },
            { icon: 'verified_user', title: 'Garanties', desc: 'Politiques de retour et SAV' },
            { icon: 'construction', title: 'Assistance Pro', desc: 'Guides techniques et pilotes' },
            { icon: 'headset_mic', title: 'Contact Direct', desc: 'Chat, email et téléphone' }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-maastricht p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-transform cursor-pointer group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Questions Fréquentes</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <details className="bg-white dark:bg-maastricht rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden group">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg">
              Quels sont les délais de livraison ?
              <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-primary">expand_more</span>
            </summary>
            <div className="px-6 pb-6 text-gray-500 dark:text-gray-400 leading-relaxed">
              Pour toute commande passée avant 14h, l'expédition est effectuée le jour même. La livraison standard prend généralement entre 24h et 48h ouvrables sur tout le Maroc.
            </div>
          </details>
           <details className="bg-white dark:bg-maastricht rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden group">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg">
              Proposez-vous une installation à domicile ?
              <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-primary">expand_more</span>
            </summary>
            <div className="px-6 pb-6 text-gray-500 dark:text-gray-400 leading-relaxed">
               Oui, pour les équipements audiovisuels haut de gamme et les solutions IT complexes, Supermedia propose un service d'installation par des techniciens certifiés.
            </div>
          </details>
        </div>
      </section>
    </div>
  );
};
