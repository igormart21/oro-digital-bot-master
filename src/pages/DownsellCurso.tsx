import React, { useState, useEffect } from 'react';
import { ChevronDown, Bot, DollarSign, Zap, Star, Clock, CheckCircle, Target, TrendingUp, Shield, Gift, Plus, AlertTriangle, XCircle } from 'lucide-react';
import '../types/hotmart.d.ts';

const DownsellCurso = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 10,
    seconds: 0
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
    script.onload = () => {
      if (window.checkoutElements) {
        window.checkoutElements.init('salesFunnel').mount('#hotmart-downsell-curso');
        window.checkoutElements.init('salesFunnel').mount('#hotmart-downsell-curso-final');
      }
    };
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] font-light overflow-x-hidden">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />

      {/* Sticky Alert Bar */}
      <div className="fixed top-0 left-0 right-0 bg-red-600 z-50 border-b border-red-500">
        <div className="container mx-auto flex justify-center items-center py-2 px-4 gap-2">
          <AlertTriangle className="w-4 h-4 text-white flex-shrink-0" />
          <span className="font-montserrat font-bold text-xs sm:text-sm text-white text-center">
            🚨 ÚLTIMA OFERTA — Esto no se repetirá. $15 dólares una sola vez.
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-16 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-[#D4821A]/10"></div>

        <div className="relative z-10 max-w-4xl mx-auto w-full">
          {/* Badge urgência */}
          <div className="mb-6">
            <span className="inline-block bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wide animate-pulse">
              ⚠️ Oferta de Rescate — Solo por hoy
            </span>
          </div>

          {/* Headline emocional */}
          <h1 className="font-montserrat font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight px-2">
            Espera. Antes de irte,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7E57C2] to-[#D4821A] mt-2">
              tengo algo para ti.
            </span>
          </h1>

          <p className="font-roboto text-base sm:text-xl md:text-2xl mb-8 text-[#B0B0B0] max-w-3xl mx-auto leading-relaxed px-2">
            Sé que <strong className="text-white">$29 dólares se sintió mucho.</strong> Por eso quiero darte el
            <strong className="text-[#D4821A]"> Curso Typebot Pro completo por solo $15.</strong>
            <span className="block mt-2 text-sm sm:text-base text-[#808080]">Sin recortes. Sin versión básica. El mismo curso. El precio real es lo que cambia.</span>
          </p>

          {/* Countdown */}
          <div className="bg-[#1E1E1E] border-2 border-red-500 rounded-2xl p-4 sm:p-6 mb-8 max-w-md mx-auto">
            <div className="text-red-400 font-montserrat font-bold mb-3 text-sm sm:text-base">
              ⏰ Esta oferta desaparece en:
            </div>
            <div className="flex justify-center gap-3 sm:gap-4 font-bold font-montserrat">
              <div className="text-center">
                <div className="bg-red-600 px-3 sm:px-5 py-2 sm:py-3 rounded-xl text-white text-lg sm:text-2xl">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-[#808080] mt-1 sm:mt-2 font-roboto">HORAS</div>
              </div>
              <div className="text-center">
                <div className="bg-red-600 px-3 sm:px-5 py-2 sm:py-3 rounded-xl text-white text-lg sm:text-2xl">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-[#808080] mt-1 sm:mt-2 font-roboto">MIN</div>
              </div>
              <div className="text-center">
                <div className="bg-red-600 px-3 sm:px-5 py-2 sm:py-3 rounded-xl text-white text-lg sm:text-2xl">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-[#808080] mt-1 sm:mt-2 font-roboto">SEG</div>
              </div>
            </div>
            <p className="text-xs text-[#808080] mt-3 font-roboto">Si cierras esta página, la oferta desaparece para siempre.</p>
          </div>

          <div className="flex justify-center">
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4821A] animate-bounce" />
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"></div>

      {/* Lo que sientes vs Lo que ganas */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-center mb-10 text-white">
            Entiendo tu duda. Aquí está la
            <span className="text-[#D4821A]"> realidad:</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1E1E1E] border border-red-500/40 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 text-red-400" />
                <h3 className="font-montserrat font-bold text-lg text-red-400">Lo que piensas ahora:</h3>
              </div>
              <ul className="space-y-3 font-roboto text-[#B0B0B0] text-sm sm:text-base">
                {[
                  '"No tengo tiempo para aprender esto"',
                  '"Puede que no funcione para mí"',
                  '"No sé si vale la pena"',
                  '"Ya gasté dinero en cursos que no me dieron resultado"',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    <span className="italic">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1E1E1E] border border-[#7E57C2]/40 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-[#7E57C2]" />
                <h3 className="font-montserrat font-bold text-lg text-[#7E57C2]">La verdad real:</h3>
              </div>
              <ul className="space-y-3 font-roboto text-[#B0B0B0] text-sm sm:text-base">
                {[
                  'El curso está listo. Tú decides el ritmo.',
                  'Garantía de 7 días: si no te gusta, recuperas el dinero.',
                  '$15 cuesta menos que cualquier comida afuera.',
                  'Acá enseñamos con resultados reales, no teoría.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#7E57C2] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#7E57C2]/30 to-transparent"></div>

      {/* Qué incluye */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-montserrat font-black text-2xl sm:text-4xl mb-3 text-white">
            Todo lo que obtienes
            <span className="text-[#7E57C2]"> por $15</span>
          </h2>
          <p className="font-roboto text-[#B0B0B0] mb-10 text-sm sm:text-lg">El mismo paquete completo. Sin restricciones.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-10">
            {[
              '✅ Curso completo Typebot Pro (básico a avanzado)',
              '✅ +15 módulos estructurados paso a paso',
              '✅ +20 embudos editables y clonables',
              '✅ Integración con IA, WhatsApp, Instagram y web',
              '✅ Copys que persuaden sin esfuerzo',
              '✅ Automatización real que genera dinero',
              '✅ Licencia de reventa incluida',
              '✅ Comunidad privada + soporte',
              '✅ Plantillas premium validadas en el mercado',
            ].map((item, i) => (
              <div key={i} className="flex items-center bg-[#1E1E1E] p-4 sm:p-5 rounded-xl border border-[#333] hover:border-[#7E57C2]/30 transition-all duration-300">
                <span className="font-roboto text-sm sm:text-base text-[#E0E0E0]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4821A]/30 to-transparent"></div>

      {/* Benefícios rápidos */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-center mb-10 text-white">
            Por qué Typebot Pro
            <span className="text-[#D4821A]"> funciona</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Bot className="w-8 h-8 text-[#7E57C2]" />,
                title: '🚀 Bot que vende 24/7',
                description: 'Sin mostrar la cara, sin equipo. Tu bot trabaja mientras duermes.',
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-[#D4821A]" />,
                title: '💰 Ingresos reales',
                description: 'Vende como afiliado o revende el embudo completo con el 100% para ti.',
              },
              {
                icon: <Zap className="w-8 h-8 text-[#7E57C2]" />,
                title: '⚡ Listo en 3 horas',
                description: 'Configuración ultra rápida. Sin complicaciones técnicas, sin servidores.',
              },
            ].map((b, i) => (
              <div key={i} className="group bg-[#1E1E1E] p-6 sm:p-8 rounded-3xl border border-[#333] hover:border-[#7E57C2]/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#7E57C2]/10">
                <div className="mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse">
                  {b.icon}
                </div>
                <h3 className="font-montserrat font-bold text-lg sm:text-xl mb-3 text-white">{b.title}</h3>
                <p className="font-roboto text-[#B0B0B0] text-sm sm:text-base leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#7E57C2]/30 to-transparent"></div>

      {/* Depoimentos */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-montserrat font-black text-2xl sm:text-4xl mb-10 text-white">
            Lo que dicen quienes
            <span className="text-[#7E57C2]"> ya empezaron:</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: '"En 2 semanas ya había recuperado lo que pagué y generé mis primeros $300."',
                author: 'Diego M. — Venezuela',
              },
              {
                text: '"Dudé en comprar, pero la garantía me convenció. Ahora tengo 4 bots activos."',
                author: 'Mariana L. — México',
              },
              {
                text: '"Nunca pensé que por tan poco dinero aprendería algo tan poderoso."',
                author: 'Andrés P. — Colombia',
              },
            ].map((t, i) => (
              <div key={i} className="bg-[#1E1E1E] border border-[#333] rounded-2xl p-6 hover:border-[#D4821A]/30 transition-all duration-300">
                <p className="font-roboto text-[#B0B0B0] italic mb-4 text-sm sm:text-base">{t.text}</p>
                <p className="font-montserrat font-bold text-[#D4821A] text-sm">{t.author}</p>
                <div className="flex justify-center mt-2 gap-0.5">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4821A]/30 to-transparent"></div>

      {/* Oferta Principal */}
      <section id="oferta" className="py-12 sm:py-20 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-lg text-center">
          <div className="bg-red-600 text-white py-2 sm:py-3 px-4 sm:px-8 rounded-full inline-block mb-6 font-montserrat font-bold animate-pulse text-sm sm:text-base">
            🔥 ÚLTIMA OPORTUNIDAD — Este precio no vuelve
          </div>

          <h2 className="font-montserrat font-black text-3xl sm:text-5xl mb-8 text-white">
            Acceso
            <span className="text-[#D4821A]"> completo</span>
          </h2>

          <div className="bg-gradient-to-r from-[#7E57C2] to-[#D4821A] p-1 rounded-3xl">
            <div className="bg-[#1E1E1E] p-6 sm:p-10 rounded-3xl">
              <div className="text-[#808080] line-through text-lg sm:text-xl mb-3 font-roboto">Precio normal: $97 USD</div>
              <div className="text-[#808080] line-through text-base sm:text-lg mb-3 font-roboto">Oferta anterior: $29 USD</div>
              <div className="text-5xl sm:text-7xl font-black text-[#D4821A] mb-4 sm:mb-6 font-montserrat">$15</div>

              {/* Countdown dentro do card */}
              <div className="bg-[#7E57C2]/20 border-2 border-[#7E57C2] rounded-2xl p-4 sm:p-6 mb-6">
                <div className="text-[#7E57C2] font-montserrat font-bold mb-3 text-sm sm:text-base">⏰ El precio sube en:</div>
                <div className="flex justify-center gap-2 sm:gap-4 font-bold font-montserrat">
                  <div className="text-center">
                    <div className="bg-[#7E57C2] px-2 sm:px-4 py-2 sm:py-3 rounded-xl text-white text-sm sm:text-base">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-[#808080] mt-1 sm:mt-2 font-roboto">HORAS</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#7E57C2] px-2 sm:px-4 py-2 sm:py-3 rounded-xl text-white text-sm sm:text-base">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-[#808080] mt-1 sm:mt-2 font-roboto">MIN</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#7E57C2] px-2 sm:px-4 py-2 sm:py-3 rounded-xl text-white text-sm sm:text-base">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-[#808080] mt-1 sm:mt-2 font-roboto">SEG</div>
                  </div>
                </div>
              </div>

              {/* Widget Hotmart */}
              <div id="hotmart-downsell-curso" className="mb-6"></div>

              <div className="text-xs sm:text-sm text-[#B0B0B0] font-roboto">
                ✅ Acceso instantáneo &nbsp;|&nbsp; ✅ Garantía 7 días &nbsp;|&nbsp; ✅ Soporte incluido
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-10 sm:py-14 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-[#1E1E1E] border-2 border-[#7E57C2]/40 rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <Shield className="w-14 h-14 sm:w-20 sm:h-20 text-[#7E57C2] flex-shrink-0" />
            <div>
              <h3 className="font-montserrat font-black text-xl sm:text-2xl text-white mb-2">Garantía total de 7 días</h3>
              <p className="font-roboto text-[#B0B0B0] text-sm sm:text-base leading-relaxed">
                Si no estás satisfecho por cualquier motivo dentro de los primeros 7 días, te devolvemos <strong className="text-white">cada centavo</strong>. Sin preguntas, sin burocracia. El riesgo es 100% nuestro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-center mb-10 text-white">
            Preguntas
            <span className="text-[#7E57C2]"> frecuentes</span>
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                question: '¿Por qué $15 y no $29?',
                answer: 'Porque prefiero que entres a $15 y descubras el valor real del curso, que quedarte sin acceso. Una vez dentro, verás que vale mucho más.',
              },
              {
                question: '¿Es el mismo curso completo?',
                answer: 'Sí, es exactamente el mismo. No hay versión recortada. Recibes todo: los módulos, los embudos, las plantillas y la licencia de reventa.',
              },
              {
                question: '¿Necesito experiencia técnica?',
                answer: 'Ninguna. Está diseñado para que cualquier persona configure su primer bot en menos de 3 horas, desde cero.',
              },
              {
                question: '¿Esta oferta volverá a aparecer?',
                answer: 'No. Esta es la última oportunidad de acceder a este precio. Cuando cierre esta página, la oferta desaparece definitivamente.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-[#1E1E1E] border border-[#333] rounded-2xl overflow-hidden hover:border-[#7E57C2]/50 transition-all duration-300">
                <button
                  className="w-full p-5 sm:p-7 text-left flex justify-between items-center hover:bg-[#222] transition-all duration-300 group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <h3 className="font-montserrat font-semibold text-base sm:text-lg text-white group-hover:text-[#7E57C2] transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`transition-transform duration-300 flex-shrink-0 ${openFaq === i ? 'rotate-45' : ''}`}>
                    <Plus className="w-5 h-5 text-[#7E57C2]" />
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-5 sm:px-7 pb-5 sm:pb-7 animate-fade-in">
                    <p className="font-roboto text-[#B0B0B0] leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#7E57C2]/20 to-[#D4821A]/20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-montserrat font-black text-3xl sm:text-5xl mb-6 text-white">
            El momento es
            <span className="text-[#D4821A]"> AHORA</span>
          </h2>
          <p className="font-roboto text-base sm:text-xl mb-8 text-[#B0B0B0] leading-relaxed">
            Otros ya están automatizando sus ventas con Typebot.
            <strong className="text-white"> Por $15, hoy puedes empezar tú también.</strong>
          </p>

          <div className="bg-[#7E57C2]/20 border-2 border-[#7E57C2] rounded-2xl p-4 sm:p-6 mb-6 max-w-md mx-auto">
            <div className="text-[#7E57C2] font-montserrat font-bold mb-2 text-sm sm:text-base">⚠️ OFERTA FINAL</div>
            <div className="text-white font-roboto text-sm sm:text-base mb-4">
              Solo <span className="font-bold text-[#D4821A]">$15 USD</span> — garantía de 7 días incluida
            </div>
            {/* Widget Hotmart Final */}
            <div id="hotmart-downsell-curso-final"></div>
          </div>

          <p className="font-roboto text-[#808080] text-xs sm:text-sm">
            Inversión: $15 USD | Garantía 7 días | Acceso instantáneo
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-[#0A0A0A] border-t border-[#333]">
        <div className="container mx-auto text-center">
          <p className="font-roboto text-[#D4821A] font-semibold mb-4 text-sm sm:text-base">
            Garantía de satisfacción de 7 días o devolvemos el dinero
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="#" className="font-roboto text-[#808080] hover:text-[#7E57C2] transition-colors duration-300 text-sm">FAQ</a>
            <a href="#" className="font-roboto text-[#808080] hover:text-[#7E57C2] transition-colors duration-300 text-sm">Soporte</a>
            <a href="#" className="font-roboto text-[#808080] hover:text-[#7E57C2] transition-colors duration-300 text-sm">Términos</a>
          </div>
          <p className="font-roboto text-[#666] text-xs sm:text-sm">© 2024 Typebot Pro - Minería Digital. Todos los derechos reservados.</p>
        </div>
      </footer>

      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fade-in 0.8s ease-out; }
          .font-montserrat { font-family: 'Montserrat', sans-serif; }
          .font-roboto { font-family: 'Roboto', sans-serif; }
        `}
      </style>
    </div>
  );
};

export default DownsellCurso;
