/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import CorporateProposal from './components/CorporateProposal';
import TechProposal from './components/TechProposal';
import AggressiveProposal from './components/AggressiveProposal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activeProposal, setActiveProposal] = useState<1 | 2 | 3>(1);

  return (
    <div className="min-h-screen font-sans">
      {/* Switcher Bar - Only meant for the agency to preview versions */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900 text-white p-3 flex justify-center items-center gap-4 text-sm shadow-xl border-b border-white/10">
        <span className="font-semibold text-slate-300">Escolha a versão da proposta:</span>
        <button 
          onClick={() => setActiveProposal(1)}
          className={`px-4 py-1.5 rounded-full transition-all ${activeProposal === 1 ? 'bg-blue-600 text-white font-bold' : 'bg-slate-800 hover:bg-slate-700'}`}
        >
          Opção 1: Corporativa
        </button>
        <button 
          onClick={() => setActiveProposal(2)}
          className={`px-4 py-1.5 rounded-full transition-all ${activeProposal === 2 ? 'bg-emerald-500 text-slate-900 font-bold' : 'bg-slate-800 hover:bg-slate-700'}`}
        >
          Opção 2: Moderna/Tech
        </button>
        <button 
          onClick={() => setActiveProposal(3)}
          className={`px-4 py-1.5 rounded-full transition-all ${activeProposal === 3 ? 'bg-yellow-500 text-black font-bold' : 'bg-slate-800 hover:bg-slate-700'}`}
        >
          Opção 3: Agressiva/Conversão
        </button>
      </div>

      <div className="pt-14">
        {activeProposal === 1 && <CorporateProposal />}
        {activeProposal === 2 && <TechProposal />}
        {activeProposal === 3 && <AggressiveProposal />}
      </div>
      <FloatingWhatsApp />
    </div>
  );
}
