import { motion } from 'motion/react';
import { ShieldCheck, MessageSquare, Bot, Cpu, Zap, ArrowRight, Check, Phone, Globe } from 'lucide-react';
import { getWaLink } from '../lib/whatsapp';

export default function TechProposal() {
  return (
    <div className="bg-[#0A0F1C] min-h-screen font-sans text-slate-300 selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] sm:top-[-20%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] sm:bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-[#0A0F1C]/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center sticky top-14 z-40">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-emerald-400" />
            <div className="text-2xl font-black tracking-tight text-white uppercase">
              Adnove<span className="text-emerald-400">.</span>
            </div>
          </div>
          <div className="text-xs font-mono text-emerald-400/80 px-3 py-1 bg-emerald-400/10 rounded-full border border-emerald-400/20">
            PROPOSTA_COMERCIAL // FORTUNATO
          </div>
        </header>

        {/* Hero */}
        <section className="py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300 mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Atualização do Sistema: Mecânica Fortunato
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 tracking-tighter mb-6 leading-[1.1]">
                A Oficina do Futuro<br />Não Perde Clientes.
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light">
                Automatize seu atendimento com IA e tenha uma presença online imbatível. Feche mais orçamentos enquanto você foca no serviço.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href={getWaLink("Olá! Quero dar o próximo passo e escalar minha oficina.")}
                  target="_blank" rel="noopener noreferrer"
                  className="relative group overflow-hidden rounded-xl bg-emerald-500 px-8 py-4 text-emerald-950 font-bold transition-all hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  <span className="relative">Quero mais clientes agora</span>
                  <ArrowRight className="w-5 h-5 relative" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pain points with Tech Vibe */}
        <section className="py-24 px-6 md:px-12 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Falhas no Sistema <span className="text-red-500 animate-pulse">Detectadas</span></h2>
                <p className="text-slate-400 mb-8 text-lg">Seu pior concorrente não é outra oficina, é o tempo de resposta no WhatsApp.</p>
                
                <div className="space-y-6">
                  {['Demora para responder orçamentos', 'Áudios longos sem tempo para ouvir', 'Sem site profissional para gerar confiança'].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 bg-red-500/5 border border-red-500/10 p-4 rounded-xl"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-red-500 font-bold">!</span>
                      </div>
                      <span className="text-slate-200">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 blur-3xl"></div>
                <div className="relative bg-[#0F172A] border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Cpu className="w-32 h-32" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" /> Protocolo de Correção
                  </h3>
                  <div className="space-y-4 relative z-10">
                     <div className="flex items-center justify-between border-b border-white/5 pb-4">
                       <span className="text-slate-400">Tempo de Resposta:</span>
                       <span className="text-emerald-400 font-mono font-bold">Imediato (0s)</span>
                     </div>
                     <div className="flex items-center justify-between border-b border-white/5 pb-4">
                       <span className="text-slate-400">Processamento de Áudio:</span>
                       <span className="text-emerald-400 font-mono font-bold">Ativado</span>
                     </div>
                     <div className="flex items-center justify-between pb-2">
                       <span className="text-slate-400">Presença Digital:</span>
                       <span className="text-emerald-400 font-mono font-bold">Nível Premium</span>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing / Offers */}
        <section id="investimento" className="py-24 px-6 md:px-12 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">Investimento</h2>
              <p className="text-xl text-slate-400">Desbloqueie o potencial máximo da sua oficina.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative">
              {/* Proposal 1 - Landing Page */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-b from-blue-500/50 to-transparent rounded-[2rem] blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-[#0A0F1C] border border-white/10 rounded-[2rem] p-8 md:p-10 h-full flex flex-col">
                  <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Globe className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Landing Page PRO</h3>
                  <p className="text-slate-400 mb-8 font-light min-h-[48px]">Uma página de alta conversão, desenhada para provar sua autoridade.</p>
                  
                  <div className="mb-8 p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                    <div className="text-sm text-slate-500 font-mono mb-2 uppercase">Assinatura Anual (12x)</div>
                    <div className="flex items-start text-blue-400">
                      <span className="text-2xl font-bold mt-1 mr-1">R$</span>
                      <span className="text-6xl md:text-7xl font-black tracking-tighter">60</span>
                      <span className="text-3xl font-bold mt-2">,41</span>
                    </div>
                    <div className="mt-2 text-sm text-slate-500">Ou R$ 697 no PIX à vista</div>
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {["Design ultra-moderno e focado no cliente", "Hospedagem rápida inclusa", "Configuração de domínio personalida", "Botões flutuantes de WhatsApp"].map((feature, i) => (
                      <li key={i} className="flex gap-3 text-slate-300 items-start">
                        <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={getWaLink("Olá! Quero selecionar o Pacote Landing Page PRO (12x R$ 60,41).")}
                    target="_blank" rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 font-bold hover:bg-blue-500 hover:text-white transition-all text-center block"
                  >
                    Selecionar Pacote Web
                  </a>
                </div>
              </motion.div>

              {/* Proposal 2 - AI Agent */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative z-10"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 rounded-[2rem] blur opacity-30 group-hover:opacity-70 transition duration-500 animate-pulse"></div>
                <div className="relative bg-[#0F172A] border border-emerald-500/30 rounded-[2rem] p-8 md:p-10 h-full flex flex-col shadow-2xl flex-grow md:-translate-y-6">
                  
                  <div className="absolute -top-4 right-8">
                    <div className="bg-emerald-500 text-slate-900 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-emerald-500/20">
                      Mais Escolhido
                    </div>
                  </div>

                  <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Bot className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Agente de IA Neural</h3>
                  <p className="text-slate-400 mb-8 font-light min-h-[48px]">Seu melhor funcionário. Trabalha 24/7, ouve áudios e agenda serviços automaticamente.</p>
                  
                  <div className="mb-8 p-6 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl border border-emerald-500/20">
                    <div className="text-sm text-emerald-500/70 font-mono mb-2 uppercase">Assinatura Anual (12x)</div>
                    <div className="flex items-start text-emerald-400 drop-shadow-lg">
                      <span className="text-2xl font-bold mt-1 mr-1">R$</span>
                      <span className="text-6xl md:text-7xl font-black tracking-tighter shadow-emerald-400">77</span>
                      <span className="text-3xl font-bold mt-2">,74</span>
                    </div>
                    <div className="mt-2 text-sm text-slate-400">Ou R$ 897 no PIX à vista</div>
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {["Atendimento instantâneo humanizado", "Compreensão perfeita de áudios", "Captura de leads 24h por dia", "Libera seu tempo para gerenciar a oficina"].map((feature, i) => (
                      <li key={i} className="flex gap-3 text-slate-200 items-start">
                        <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={getWaLink("Olá! Quero selecionar o Pacote Agente de IA Neural (12x R$ 77,74).")}
                    target="_blank" rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl bg-emerald-500 text-[#0A0F1C] font-black text-lg hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 transition-all text-center block"
                  >
                    Selecionar Automação IA
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-slate-500 font-mono text-sm">PROPOSTA_VALIDADE_7_DIAS</p>
            </div>
          </div>
        </section>
        
        <footer className="py-8 text-center text-slate-600 font-mono text-sm border-t border-white/5">
          SYSTEM_BY_ADNOVE &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
