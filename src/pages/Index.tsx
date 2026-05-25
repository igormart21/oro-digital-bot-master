import React, { useState, useEffect } from 'react';
import { ChevronDown, Bot, DollarSign, Users, Zap, Star, Clock, CheckCircle, ArrowRight, Play, Target, TrendingUp, Shield, Gift, Plus, Minus } from 'lucide-react';
import '../types/hotmart.d.ts';
const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 20,
    seconds: 0
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openBonusFlows, setOpenBonusFlows] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return {
            ...prev,
            seconds: prev.seconds - 1
          };
        } else if (prev.minutes > 0) {
          return {
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59
          };
        } else if (prev.hours > 0) {
          return {
            hours: prev.hours - 1,
            minutes: 59,
            seconds: 59
          };
        }
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
        window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
        window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel-final');
      }
    };
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const checkoutUrl = "https://pay.hotmart.com/C101183936X?off=jfkg7xvw&checkoutMode=10";
  return <div className="min-h-screen bg-[#121212] text-[#E0E0E0] font-light overflow-x-hidden">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      
      {/* Sticky CTA */}
      <div className="fixed top-0 left-0 right-0 bg-[#7E57C2] backdrop-blur-sm z-50 border-b border-[#7E57C2]/20">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-2 sm:py-4 px-4 sm:px-6 gap-2 sm:gap-0">
          <span className="font-montserrat font-semibold text-xs sm:text-sm text-white text-center">⚡ Solo quedan 87 accesos disponibles</span>
          
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-16 sm:pt-20 pb-8 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7E57C2]/5 to-[#D4821A]/5"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto animate-fade-in w-full">
          <div className="mb-6 sm:mb-8">
            <span className="inline-block bg-gradient-to-r from-[#7E57C2] to-[#D4821A] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wide animate-pulse">
              ⚠️ Minería Digital Avanzada
            </span>
          </div>
          
          <h1 className="font-montserrat font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 leading-tight px-2">
            Curso Typebot Pro: Automatiza ventas y gana en
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7E57C2] to-[#D4821A] mt-1 sm:mt-2">
              piloto automático
            </span>
          </h1>

          {/* Vimeo Video */}
          <div className="mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
            <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <iframe src="https://player.vimeo.com/video/1113437964?h=0&badge=0&autopause=0&player_id=0&app_id=58479" className="w-full h-full" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Typebot Pro Video"></iframe>
            </div>
          </div>
          
          <p className="font-roboto text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-[#B0B0B0] max-w-4xl mx-auto leading-relaxed px-2">
            <strong className="text-[#E0E0E0]">Domina Typebot de básico a avanzado y crea BOTs que venden solos</strong>
          </p>
          
          <div className="mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-[#1E1E1E] border border-[#7E57C2]/30 rounded-xl sm:rounded-2xl px-4 sm:px-8 py-3 sm:py-4 mb-4 sm:mb-6 mx-2">
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-[#D4821A]" />
              <span className="text-[#D4821A] font-montserrat font-bold text-sm sm:text-lg">Factura $500-$2000 USD mensuales</span>
            </div>
          </div>
          
          
          
          <p className="font-roboto text-xs sm:text-sm text-[#808080] px-2">Por 29 dólares... menos que un tanque de gasolina, pero esto paga todos los días</p>
        </div>
        
        <div className="absolute bottom-4 sm:bottom-8 animate-bounce">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#7E57C2]" />
        </div>
      </section>

      {/* Divisor */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#7E57C2]/30 to-transparent"></div>

      {/* Main Benefits */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12">
            {[{
            icon: <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-[#7E57C2]" />,
            title: "🚀 Typebot que convierte 24/7",
            description: "Sin videos, sin cara, sin equipo. Tu bot Typebot trabaja mientras duermes."
          }, {
            icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4821A]" />,
            title: "💰 Duplica tus ingresos",
            description: "Vende como afiliado + revende el embudo completo."
          }, {
            icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#7E57C2]" />,
            title: "⚡ Instalación en 3h",
            description: "Configuración ultra rápida, sin complicaciones técnicas."
          }].map((benefit, index) => <div key={index} className="group bg-[#1E1E1E] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#333] hover:border-[#7E57C2]/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#7E57C2]/10">
                <div className="mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse">
                  {benefit.icon}
                </div>
                <h3 className="font-montserrat font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-white">{benefit.title}</h3>
                <p className="font-roboto text-[#B0B0B0] leading-relaxed text-sm sm:text-base">{benefit.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#7E57C2]/30 to-transparent"></div>

      {/* What's Included */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-white">
            Todo lo que
            <span className="text-[#7E57C2]"> obtienes</span>
          </h2>
          <p className="font-roboto text-lg sm:text-xl text-[#B0B0B0] mb-12 sm:mb-16 max-w-3xl mx-auto px-2">
            Typebot Pro: curso completo de básico a avanzado - no es otro curso que falla, es una herramienta de guerra digital
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 text-left mb-12 sm:mb-16">
            {["✅ Curso completo Typebot Pro (básico-avanzado)", "✅ +15 módulos Typebot estructurados", "✅ +20 embudos Typebot editables/clonables", "✅ Integración con IA, WhatsApp, Instagram, web", "✅ Copys que persuaden sin pensar", "✅ Estructura real de automatización que imprime dinero", "✅ Licencia de reventa incluida", "✅ Comunidad privada + soporte", "✅ Plantillas premium validadas"].map((item, index) => <div key={index} className="flex items-center bg-[#1E1E1E] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#333] hover:border-[#7E57C2]/30 transition-all duration-300">
                <span className="font-roboto text-sm sm:text-lg text-[#E0E0E0]">{item}</span>
              </div>)}
          </div>

          {/* Flow Models */}
          <div className="mb-6 sm:mb-8">
            <h3 className="font-montserrat font-bold text-xl sm:text-2xl mb-6 sm:mb-8 text-white">
              🎯 Modelos de <span className="text-[#D4821A]">flujo listos</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-left">
              {["🎰 Vender lotería con resultados en tiempo real (y cobrar por cada ticket vendido)", "🍔 Tomar pedidos de delivery automático y calcular total + envío al instante", "🏠 Captar clientes para inmobiliaria sin mostrar la cara", "🚗 Mostrar autos y agendar test-drives sin contacto humano", "🍰 Hacer que panaderías vendan solas vía WhatsApp", "💈 Barberías que agendan clientes mientras duermen", "🦷 Clínicas usando bots IA para responder y captar pacientes", "💆 Estéticas vendiendo servicios con follow-up automático", "📦 Tiendas online que cierran ventas sin Instagram ni equipo", "⚖ Captar clientes para abogados sin mover un dedo", "📺 Vender IPTV directo al WhatsApp sin bloqueos ni caídas", "📶 Vender internet en zonas rurales sin llamadas ni visitas", "🏋 Gimnasios que llenan clases sin recepcionistas", "📊 Bots que consultan CNPJ, CEP, emails y más como hackers", "🤖 ChatGPT vendiendo como tu mejor closer"].map((flow, index) => <div key={index} className="bg-[#1E1E1E] p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#333] hover:border-[#D4821A]/30 transition-all duration-300 hover:transform hover:scale-105">
                  <span className="font-roboto text-xs sm:text-sm text-[#E0E0E0] leading-relaxed">{flow}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-center mb-12 sm:mb-16 text-white">
            Cómo <span className="text-[#7E57C2]">funciona</span>
          </h2>
          
          <div className="space-y-6 sm:space-y-8">
            {[{
            number: "01",
            title: "Activa tu BOT",
            description: "Configura en minutos usando nuestras plantillas exactas"
          }, {
            number: "02",
            title: "Bot conversa y califica leads",
            description: "Tu bot trabaja 24/7 identificando clientes potenciales"
          }, {
            number: "03",
            title: "Bot muestra productos",
            description: "Presenta automáticamente soluciones perfectas para cada lead"
          }, {
            number: "04",
            title: "BOT cierra ventas y tú recargas la billetera",
            description: "Recibe pagos automáticos mientras haces otras cosas"
          }].map((step, index) => <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 bg-[#1E1E1E] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#333] hover:border-[#7E57C2]/50 transition-all duration-500 group">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#7E57C2] to-[#D4821A] rounded-full flex items-center justify-center font-montserrat text-xl sm:text-2xl font-black text-white group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="font-montserrat font-bold text-xl sm:text-2xl mb-2 sm:mb-3 text-white">{step.title}</h3>
                  <p className="font-roboto text-[#B0B0B0] text-base sm:text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Real Testimonials from WhatsApp */}
      

      {/* Main Offer */}
      <section id="offer" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-[#D4821A] text-[#121212] py-2 sm:py-3 px-4 sm:px-8 rounded-full inline-block mb-6 sm:mb-8 font-montserrat font-bold animate-pulse text-sm sm:text-base">
            🔥 PRECIO DE LANZAMIENTO - Este precio nunca vuelve
          </div>
          
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl md:text-6xl mb-8 sm:mb-12 text-white">
            Acceso
            <span className="text-[#D4821A]"> premium</span>
          </h2>
          
          <div className="bg-gradient-to-r from-[#7E57C2] to-[#D4821A] p-1 rounded-2xl sm:rounded-3xl mb-8 sm:mb-12 max-w-lg mx-auto">
            <div className="bg-[#1E1E1E] p-6 sm:p-10 rounded-2xl sm:rounded-3xl">
              <div className="text-[#808080] line-through text-lg sm:text-xl mb-3 sm:mb-4 font-roboto">Precio normal: $97 USD</div>
              <div className="text-5xl sm:text-7xl font-black text-[#D4821A] mb-4 sm:mb-6 font-montserrat">$29</div>
              
              <div className="bg-[#7E57C2]/20 border-2 border-[#7E57C2] rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
                <div className="text-[#7E57C2] font-montserrat font-bold mb-3 sm:mb-4 text-sm sm:text-base">⏰ El precio sube en minutos:</div>
                <div className="flex justify-center gap-2 sm:gap-4 text-lg sm:text-2xl font-bold font-montserrat">
                  <div className="text-center">
                    <div className="bg-[#7E57C2] px-2 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-white text-sm sm:text-base">{timeLeft.hours.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-[#808080] mt-1 sm:mt-2 font-roboto">HORAS</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#7E57C2] px-2 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-white text-sm sm:text-base">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-[#808080] mt-1 sm:mt-2 font-roboto">MIN</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#7E57C2] px-2 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-white text-sm sm:text-base">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-[#808080] mt-1 sm:mt-2 font-roboto">SEG</div>
                  </div>
                </div>
              </div>
              
              {/* CTA Widget Hotmart */}
              <div id="hotmart-sales-funnel" className="mb-6"></div>
              
              <div className="text-xs sm:text-sm text-[#B0B0B0] font-roboto">
                ✅ Acceso instantáneo | ✅ Garantía 7 días | ✅ Soporte incluido
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-center mb-3 sm:mb-4 text-white">
            Bonos
            <span className="text-[#D4821A]"> exclusivos</span>
          </h2>
          <p className="font-roboto text-lg sm:text-xl text-[#B0B0B0] text-center mb-12 sm:mb-16">
            Valor total: <span className="text-[#D4821A] font-bold">$847 USD</span> - GRATIS para los primeros 100
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[{
            title: "+1,000 flujos premium",
            value: "$197",
            description: "Más de 1000 embudos probados en múltiples nichos y mercados",
            showFlows: true
          }, {
            title: "Plantillas para WhatsApp / Instagram / WordPress",
            value: "$297",
            description: "Plantillas optimizadas para cada plataforma",
            showFlows: false
          }, {
            title: "Copys validados para anuncios y recuperación",
            value: "$197",
            description: "Textos que convierten probados en el mercado",
            showFlows: false
          }, {
            title: "Derechos de reventa completos",
            value: "$156",
            description: "Revende todo el sistema y quédate con el 100%",
            showFlows: false
          }].map((bonus, index) => <div key={index} className="bg-[#1E1E1E] border-2 border-[#D4821A]/30 p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:border-[#D4821A] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#D4821A]/10 group">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4821A] group-hover:animate-pulse" />
                  <span className="bg-[#D4821A] text-[#121212] px-3 sm:px-4 py-1 sm:py-2 rounded-full font-montserrat text-xs sm:text-sm font-bold">
                    VALOR: {bonus.value}
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-white">{bonus.title}</h3>
                <p className="font-roboto text-[#B0B0B0] mb-3 sm:mb-4 text-sm sm:text-base">{bonus.description}</p>
                
                {bonus.showFlows && <div>
                    <button onClick={() => setOpenBonusFlows(!openBonusFlows)} className="flex items-center gap-2 text-[#D4821A] font-montserrat font-semibold hover:text-[#E8941F] transition-colors duration-300 mb-3 sm:mb-4 text-sm sm:text-base">
                      Ver modelos incluidos
                      <div className={`transition-transform duration-300 ${openBonusFlows ? 'rotate-45' : ''}`}>
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </button>
                    
                    {openBonusFlows && <div className="bg-[#121212] rounded-lg sm:rounded-xl p-3 sm:p-4 animate-fade-in">
                        <div className="grid gap-1 sm:gap-2 text-xs">
                          {["🎰 Vender lotería con resultados en tiempo real (y cobrar por cada ticket vendido)", "🍔 Tomar pedidos de delivery automático y calcular total + envío al instante", "🏠 Captar clientes para inmobiliaria sin mostrar la cara", "🚗 Mostrar autos y agendar test-drives sin contacto humano", "🍰 Hacer que panaderías vendan solas vía WhatsApp", "💈 Barberías que agendan clientes mientras duermen", "🦷 Clínicas usando bots IA para responder y captar pacientes", "💆 Estéticas vendiendo servicios con follow-up automático", "📦 Tiendas online que cierran ventas sin Instagram ni equipo", "⚖ Captar clientes para abogados sin mover un dedo", "📺 Vender IPTV directo al WhatsApp sin bloqueos ni caídas", "📶 Vender internet en zonas rurales sin llamadas ni visitas", "🏋 Gimnasios que llenan clases sin recepcionistas", "📊 Bots que consultan CNPJ, CEP, emails y más como hackers", "🤖 ChatGPT vendiendo como tu mejor closer"].map((flow, flowIndex) => <div key={flowIndex} className="text-[#B0B0B0] font-roboto leading-relaxed border-l-2 border-[#D4821A]/30 pl-2 sm:pl-3 py-1 text-xs sm:text-sm">
                              {flow}
                            </div>)}
                        </div>
                      </div>}
                  </div>}
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-center mb-12 sm:mb-16 text-white">
            Preguntas
            <span className="text-[#7E57C2]"> frecuentes</span>
          </h2>
          
          <div className="space-y-3 sm:space-y-4">
            {[{
            question: "¿Necesito saber programar?",
            answer: "Para nada. Todo está diseñado para que cualquiera pueda configurar su bot en menos de 3 horas, sin conocimientos técnicos."
          }, {
            question: "¿Realmente puedo ganar $500-$2000 mensuales?",
            answer: "Sí, nuestros estudiantes promedio alcanzan estas cifras después del primer mes. Depende de tu dedicación e implementación."
          }, {
            question: "¿La licencia de reventa es real?",
            answer: "Totalmente real. Puedes revender el sistema completo y quedarte con el 100% de las ganancias. Es parte integral del curso."
          }, {
            question: "¿Qué pasa si no me funciona?",
            answer: "Garantía total de 7 días. Si no estás satisfecho, devolvemos hasta el último centavo sin preguntas."
          }, {
            question: "¿Por cuánto tiempo tengo acceso?",
            answer: "Acceso de por vida al curso, actualizaciones gratuitas y acceso permanente a la comunidad exclusiva."
          }].map((faq, index) => <div key={index} className="bg-[#1E1E1E] border border-[#333] rounded-xl sm:rounded-2xl overflow-hidden hover:border-[#7E57C2]/50 transition-all duration-300">
                <button className="w-full p-6 sm:p-8 text-left flex justify-between items-center hover:bg-[#222] transition-all duration-300 group" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <h3 className="font-montserrat font-semibold text-lg sm:text-xl text-white group-hover:text-[#7E57C2] transition-colors duration-300 pr-4">{faq.question}</h3>
                  <div className={`transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-45' : ''}`}>
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#7E57C2]" />
                  </div>
                </button>
                {openFaq === index && <div className="px-6 sm:px-8 pb-6 sm:pb-8 animate-fade-in">
                    <p className="font-roboto text-[#B0B0B0] leading-relaxed text-base sm:text-lg">{faq.answer}</p>
                  </div>}
              </div>)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#7E57C2]/20 to-[#D4821A]/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8 text-white">
            El momento es
            <span className="text-[#D4821A]"> AHORA</span>
          </h2>
          
          <p className="font-roboto text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-[#B0B0B0] max-w-3xl mx-auto leading-relaxed px-2">
            Mientras lees esto, otros ya están dominando Typebot y generando sus primeros ingresos.
            <strong className="text-white"> ¿Te vas a quedar atrás?</strong>
          </p>
          
          <div className="bg-[#7E57C2]/20 border-2 border-[#7E57C2] rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 max-w-md mx-auto">
            <div className="text-[#7E57C2] font-montserrat font-bold mb-2 text-sm sm:text-base">⚠️ ÚLTIMA ADVERTENCIA</div>
            <div className="text-white font-roboto text-sm sm:text-base">Solo quedan <span className="font-bold text-[#D4821A]">87 accesos</span> disponibles</div>
            
            {/* Final CTA Widget Hotmart */}
            <div id="hotmart-sales-funnel-final" className="mt-4"></div>
          </div>
          
          
          
          <p className="font-roboto text-[#808080] text-sm sm:text-base">Inversión: $29 USD | Garantía 7 días | Acceso instantáneo</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-[#0A0A0A] border-t border-[#333]">
        <div className="container mx-auto text-center">
          <div className="mb-4 sm:mb-6">
            <p className="font-roboto text-[#D4821A] font-semibold mb-2 text-sm sm:text-base">Garantía de satisfacción de 7 días o devolvemos el dinero</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-4 sm:mb-6">
            <a href="#" className="font-roboto text-[#808080] hover:text-[#7E57C2] transition-colors duration-300 text-sm sm:text-base">FAQ</a>
            <a href="#" className="font-roboto text-[#808080] hover:text-[#7E57C2] transition-colors duration-300 text-sm sm:text-base">Soporte</a>
            <a href="#" className="font-roboto text-[#808080] hover:text-[#7E57C2] transition-colors duration-300 text-sm sm:text-base">Términos</a>
          </div>
          <p className="font-roboto text-[#666] text-xs sm:text-sm">© 2024 Typebot Pro - Minería Digital. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
          
          .font-montserrat {
            font-family: 'Montserrat', sans-serif;
          }
          
          .font-roboto {
            font-family: 'Roboto', sans-serif;
          }
          
          /* Hotmart Widget Responsiveness */
          #hotmart-sales-funnel,
          #hotmart-sales-funnel-final {
            min-height: 50px;
          }
          
          @media (max-width: 640px) {
            #hotmart-sales-funnel,
            #hotmart-sales-funnel-final {
              transform: scale(0.95);
              transform-origin: center;
            }
          }
        `}
      </style>
    </div>;
};
export default Index;