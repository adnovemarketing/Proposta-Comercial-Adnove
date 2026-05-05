import { motion } from 'motion/react';
import { ShieldCheck, MessageSquare, Clock, ArrowRight, CheckCircle2, Phone, MonitorSmartphone, CarFront } from 'lucide-react';
import { getWaLink } from '../lib/whatsapp';

export default function CorporateProposal() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-4 px-6 md:px-12 flex justify-between items-center sticky top-14 z-40">
        <div className="text-2xl font-bold tracking-tight text-blue-900 border-l-4 border-blue-600 pl-2">
          Adnove
        </div>
        <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
          Proposta Comercial
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-blue-900 text-white overflow-hidden py-24 px-6 md:px-12">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white via-blue-900 to-blue-900"></div>
        <div className="max-w-5xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-blue-800 text-blue-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Para: Mecânica e Elétrica Fortunato
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Profissionalize <span className="text-blue-300">sua oficina</span> e pare de perder clientes.
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Traga sua oficina mecânica para o padrão das grandes concessionárias, respondendo clientes instantaneamente e passando confiança logo no primeiro contato.
            </p>
            <a 
              href={getWaLink("Olá! Gostaria de saber mais detalhes sobre a proposta para profissionalizar minha oficina.")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Quero mais clientes agora <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="bg-blue-800/50 p-6 rounded-2xl border border-blue-700/50 backdrop-blur-sm max-w-sm w-full shadow-2xl relative">
               <div className="absolute -top-4 -right-4 bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                 <MessageSquare className="text-white w-6 h-6" />
               </div>
               <div className="aspect-video bg-slate-900 rounded-xl mb-4 overflow-hidden flex items-center justify-center border border-slate-700">
                  <CarFront className="w-16 h-16 text-slate-700" />
               </div>
               <div className="space-y-3">
                 <div className="h-2 bg-blue-700/50 rounded w-3/4"></div>
                 <div className="h-2 bg-blue-700/50 rounded w-1/2"></div>
                 <div className="h-2 bg-blue-700/50 rounded w-5/6"></div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain vs Solution */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O Cenário Atual vs A Solução</h2>
             <p className="text-lg text-slate-600 max-w-2xl mx-auto">Entendemos os desafios que oficinas enfrentam com atendimento online e como superá-los.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8 text-red-500" />,
                title: "Demora no Atendimento",
                desc: "Clientes no WhatsApp exigem respostas rápidas e procuram o concorrente se não forem atendidos.",
                fix: "Atendimento 24h instantâneo."
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-red-500" />,
                title: "Áudios Ignorados",
                desc: "É difícil parar o serviço na oficina para ouvir áudios longos de clientes com dúvidas.",
                fix: "IA que reconhece e responde áudios."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
                title: "Falta de Presença Digital",
                desc: "Sem um site profissional, a oficina parece amadora em comparações com grandes centros automotivos.",
                fix: "Landing Page profissional de alta conversão."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-xl shadow-sm border border-slate-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-6">{item.desc}</p>
                <div className="flex items-center gap-2 text-blue-700 font-semibold bg-blue-50 py-2 px-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>{item.fix}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services and Pricing */}
      <section id="proposta" className="py-24 px-6 md:px-12 bg-slate-100 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">O Investimento</h2>
             <p className="text-xl text-slate-600">Soluções definitivas para alavancar a Mecânica Fortunato</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200 flex flex-col h-full"
            >
              <div className="mb-6 flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl">
                 <MonitorSmartphone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Landing Page Profissional</h3>
              <p className="text-slate-500 mb-8 min-h-[48px]">A vitrine online perfeita para transmitir confiança e captar mais agendamentos.</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  "Design moderno e responsivo focada em conversão",
                  "Hospedagem e domínio inclusos no primeiro ano",
                  "Botões estratégicos de contato (WhatsApp)",
                  "Estrutura otimizada para SEO (Google)"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-2">Investimento parcelado:</div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold text-slate-400">12x de</span>
                  <span className="text-5xl md:text-6xl font-black text-blue-900 tracking-tighter">R$ 60<span className="text-3xl">,41</span></span>
                </div>
                <div className="text-slate-500">ou <strong className="text-slate-800">R$ 697</strong> à vista no PIX</div>
              </div>

              <a 
                href={getWaLink("Olá! Quero aprovar a proposta da Landing Page Profissional (12x R$ 60,41).")}
                target="_blank" rel="noopener noreferrer"
                className="w-full bg-blue-900 text-white font-bold text-lg py-4 rounded-xl hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20 text-center block"
              >
                Aprovar Landing Page
              </a>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-2xl relative flex flex-col h-full transform md:-translate-y-4 border border-blue-500/30 ring-4 ring-blue-900/10"
            >
              <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-emerald-400 text-white font-bold px-6 py-2 rounded-full shadow-lg border border-white/20 uppercase tracking-widest text-sm">
                  Retorno Imediato
                </span>
              </div>
              
              <div className="mb-6 mt-4 flex items-center justify-center w-16 h-16 bg-white/10 text-emerald-400 rounded-2xl">
                 <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Agente de IA no WhatsApp</h3>
              <p className="text-slate-300 mb-8 min-h-[48px]">Nunca mais perca um cliente porque estava com as mãos na graxa.</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  "Atendimento automático e inteligente 24h/dia",
                  "Reconhecimento avançado de áudios",
                  "Agenda horários enquanto você trabalha",
                  "Respostas humanizadas (não parece um robô)"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-200 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-black/40 p-6 rounded-2xl border border-white/10 mb-8 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 pointer-events-none"></div>
                <div className="relative">
                  <div className="text-sm text-slate-300 font-medium uppercase tracking-wider mb-2">Investimento parcelado:</div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-bold text-slate-400">12x de</span>
                    <span className="text-5xl md:text-6xl font-black text-emerald-400 tracking-tighter shadow-emerald-400/20 drop-shadow-xl">R$ 77<span className="text-3xl">,74</span></span>
                  </div>
                  <div className="text-slate-400">ou <strong className="text-white">R$ 897</strong> à vista no PIX</div>
                </div>
              </div>

              <a 
                href={getWaLink("Olá! Quero aprovar a proposta do Agente de IA no WhatsApp (12x R$ 77,74).")}
                target="_blank" rel="noopener noreferrer"
                className="w-full bg-emerald-500 text-slate-900 font-black text-lg py-4 rounded-xl hover:bg-emerald-400 transition-colors shadow-xl shadow-emerald-500/20 text-center block"
              >
                Aprovar Agente de IA
              </a>
            </motion.div>

          </div>
          
          {/* CTA Group */}
          <div className="mt-20 text-center">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Pronto para transformar sua oficina?</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a 
                 href={getWaLink("Olá! Quero fechar as DUAS soluções (Landing Page + Agente de IA) para a Mecânica Fortunato.")}
                 target="_blank" rel="noopener noreferrer" 
                 className="bg-slate-900 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-slate-800 transition-colors shadow-lg text-center"
               >
                 Quero as DUAS Soluções
               </a>
               <a 
                 href={getWaLink("Olá! Tenho algumas dúvidas sobre a proposta e gostaria de falar com um consultor.")}
                 target="_blank" rel="noopener noreferrer" 
                 className="bg-white text-slate-700 border-2 border-slate-300 font-bold text-lg py-4 px-10 rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-colors text-center"
               >
                 Falar com Consultor
               </a>
            </div>
            <p className="mt-6 text-slate-500 text-sm">Os valores desta proposta são válidos por 7 dias úteis.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
        <div className="text-2xl font-bold tracking-tight text-white mb-2">Adnove</div>
        <p className="mb-6">Transformando negócios locais com tecnologia.</p>
        <p className="text-xs">&copy; 2026 Agência Adnove. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
