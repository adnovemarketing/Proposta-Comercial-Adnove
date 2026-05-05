import { motion } from 'motion/react';
import { AlertTriangle, TrendingUp, HandCoins, PhoneOff, ArrowRightSquare, CheckSquare, Zap } from 'lucide-react';
import { getWaLink } from '../lib/whatsapp';

export default function AggressiveProposal() {
  return (
    <div className="bg-[#111111] min-h-screen font-sans text-white">
      {/* Top Warning Bar */}
      <div className="bg-yellow-500 text-black px-4 py-2 text-center text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2">
        <AlertTriangle className="w-5 h-5" /> Proposta Estratégica: Mecânica Fortunato
      </div>

      <header className="py-6 px-6 md:px-12 flex justify-center border-b border-white/10">
        <div className="text-3xl font-black tracking-tighter text-white uppercase italic">
          ADNOVE<span className="text-yellow-500">.</span>AGENCY
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6 md:px-12 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase leading-[1]">
              Quantos clientes você perdeu <span className="text-yellow-500">hoje</span> por demorar a responder?
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-10">
              Enquanto você está com a mão na graxa, a concorrência está agendando os clientes que te mandaram mensagem. <strong className="text-white">Isso acaba hoje.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Problem (Aggressive) */}
      <section className="py-12 bg-red-600 px-6 md:px-12 transform -skew-y-2 my-12 relative z-20">
        <div className="max-w-5xl mx-auto transform skew-y-2">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tight mb-4">A Dura Realidade:</h2>
              <p className="text-xl font-bold mb-6 text-red-100">O cliente não espera. Se ele manda um áudio e você demora 2 horas para ouvir, ele já fechou com outro.</p>
              <ul className="space-y-4 font-bold text-lg">
                <li className="flex items-center gap-3"><PhoneOff className="w-6 h-6 text-black" /> <span className="text-white">Orçamentos ignorados</span></li>
                <li className="flex items-center gap-3"><PhoneOff className="w-6 h-6 text-black" /> <span className="text-white">Áudios acumulados</span></li>
                <li className="flex items-center gap-3"><PhoneOff className="w-6 h-6 text-black" /> <span className="text-white">Falta de profissionalismo online</span></li>
              </ul>
            </div>
            <div className="bg-black p-8 rounded-2xl shadow-2xl border border-red-500/50 relative">
               <div className="absolute -top-4 -right-4 bg-yellow-500 text-black font-black px-4 py-2 rounded-lg rotate-12">
                 A SOLUÇÃO
               </div>
               <h3 className="text-3xl font-black text-yellow-500 mb-4">A Máquina de Vendas</h3>
               <p className="text-gray-300 font-medium text-lg leading-relaxed mb-6">
                 Vamos implementar um sistema duplo: Uma página de alta conversão para dar autoridade, e uma IA implacável no WhatsApp para fechar os clientes na hora.
               </p>
               <div className="flex items-center gap-2 text-white font-bold text-xl uppercase tracking-wider">
                 <Zap className="w-6 h-6 text-yellow-500" /> Domínio Total
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Direct and Bold */}
      <section className="py-24 px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">Planos de Ação</h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Landing Page */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] border-2 border-[#333] rounded-2xl p-8 flex flex-col"
            >
              <h3 className="text-3xl font-black text-white uppercase mb-2">Estrutura Web</h3>
              <p className="text-slate-400 font-medium mb-6 min-h-[48px]">Sua oficina parecendo uma concessionária premium na internet.</p>
              
              <div className="bg-black p-6 rounded-xl border border-[#333] mb-8 text-center">
                <div className="text-yellow-500 font-black text-sm tracking-widest uppercase mb-2">12 Parcelas de</div>
                <div className="flex justify-center items-start text-white">
                  <span className="text-3xl font-bold mt-1">R$</span>
                  <span className="text-7xl font-black tracking-tighter">60</span>
                  <span className="text-3xl font-bold mt-2">,41</span>
                </div>
                <div className="mt-3 text-slate-500 font-bold">À vista: R$ 697</div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {["Página de alta conversão", "Gatilhos mentais de confiança", "Botão WhatsApp flutuante", "Hospedagem 1 ano grátis"].map((f, i) => (
                   <li key={i} className="flex gap-3 font-bold text-slate-300">
                     <CheckSquare className="w-6 h-6 text-yellow-500 flex-shrink-0" /> {f}
                   </li>
                ))}
              </ul>

              <a 
                href={getWaLink("Olá! Quero fechar a Estrutura Web (12x R$ 60,41) e parar de perder dinheiro.")}
                target="_blank" rel="noopener noreferrer"
                className="w-full bg-[#333] text-white font-black uppercase tracking-widest py-4 rounded-lg hover:bg-white hover:text-black transition-colors text-center block mt-auto"
              >
                Quero o Site
              </a>
            </motion.div>

            {/* IA Agent */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-yellow-500 rounded-2xl p-8 flex flex-col text-black transform md:scale-105 shadow-[0_0_50px_rgba(234,179,8,0.2)] border-4 border-yellow-400 relative z-10"
            >
              <div className="absolute top-0 right-0 bg-black text-yellow-500 font-black px-4 py-2 rounded-bl-xl rounded-tr-xl uppercase tracking-widest text-sm">
                Alto Retorno
              </div>

              <h3 className="text-3xl font-black uppercase mb-2 mt-4">Robô de Vendas</h3>
              <p className="text-black/70 font-bold mb-6 min-h-[48px]">Ouve áudios, entende o problema e agenda clientes 24h por dia.</p>
              
              <div className="bg-black text-white p-6 rounded-xl mb-8 text-center shadow-inner">
                <div className="text-yellow-500 font-black text-sm tracking-widest uppercase mb-2">12 Parcelas de</div>
                <div className="flex justify-center items-start text-white drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                  <span className="text-3xl font-bold mt-1">R$</span>
                  <span className="text-7xl font-black tracking-tighter">77</span>
                  <span className="text-3xl font-bold mt-2">,74</span>
                </div>
                <div className="mt-3 text-slate-400 font-bold">À vista: R$ 897</div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {["Reconhece áudios longos", "Linguagem de mecânico", "Integração direta no zap", "Nunca dorme, não tira folga"].map((f, i) => (
                   <li key={i} className="flex gap-3 font-black text-black">
                     <TrendingUp className="w-6 h-6 text-black flex-shrink-0" /> {f}
                   </li>
                ))}
              </ul>

              <a 
                href={getWaLink("Olá! Quero Ligar o Robô de Vendas de IA (12x R$ 77,74) agora.")}
                target="_blank" rel="noopener noreferrer"
                className="w-full bg-black text-yellow-500 font-black uppercase tracking-widest py-5 rounded-lg hover:bg-[#222] transition-colors shadow-2xl flex items-center justify-center gap-2 text-xl text-center mt-auto"
              >
                Ligar Automação <ArrowRightSquare className="w-6 h-6" />
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 text-center px-6 border-t border-white/5">
        <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">Pare de Perder Dinheiro Hoje.</h2>
        <a 
          href={getWaLink("Olá! Quero dominar o mercado com o Combo Completo (Página + Agente de IA).")}
          target="_blank" rel="noopener noreferrer"
          className="inline-block bg-white text-black font-black uppercase tracking-widest py-5 px-10 text-xl md:text-2xl rounded-xl hover:bg-yellow-500 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)] text-center"
        >
          Quero o Combos Completo (1 + 2)
        </a>
        <p className="mt-6 font-bold text-slate-500 uppercase tracking-widest text-sm">Válido para aprovação nas próximas 48h</p>
      </section>
    </div>
  );
}
