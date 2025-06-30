
import React, { useState, useEffect } from 'react';
import { ChevronDown, Bot, DollarSign, Users, Zap, Star, Clock, CheckCircle, ArrowRight, Play, Target, TrendingUp, Shield, Gift, Plus, Minus } from 'lucide-react';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] font-light">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      
      {/* Sticky CTA */}
      <div className="fixed top-0 left-0 right-0 bg-[#7E57C2] backdrop-blur-sm z-50 border-b border-[#7E57C2]/20">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <span className="font-montserrat font-semibold text-sm text-white">⚡ Solo quedan 100 accesos disponibles</span>
          <button onClick={scrollToOffer} className="bg-[#D4821A] hover:bg-[#E8941F] text-white px-6 py-2 rounded-lg font-montserrat font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D4821A]/25">
            Desbloquear mina
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7E57C2]/5 to-[#D4821A]/5"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto animate-fade-in">
          <div className="mb-8">
            <span className="inline-block bg-gradient-to-r from-[#7E57C2] to-[#D4821A] text-white px-6 py-3 rounded-full font-montserrat font-bold text-sm uppercase tracking-wide animate-pulse">
              ⚠️ Minería Digital Avanzada
            </span>
          </div>
          
          <h1 className="font-montserrat font-black text-4xl md:text-7xl lg:text-8xl mb-8 leading-tight">
            Automatiza ventas y gana en
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7E57C2] to-[#D4821A] mt-2">
              piloto automático
            </span>
          </h1>
          
          <p className="font-roboto text-xl md:text-2xl mb-8 text-[#B0B0B0] max-w-4xl mx-auto leading-relaxed">
            ¿Estás harto de rascarte los huevos viendo que otros facturan mientras tú paras?<br />
            <strong className="text-[#E0E0E0]">Crea y clona tu BOT Typebot que vende solo sin saber programar</strong>
          </p>
          
          <div className="mb-12">
            <div className="inline-flex items-center bg-[#1E1E1E] border border-[#7E57C2]/30 rounded-2xl px-8 py-4 mb-6">
              <DollarSign className="w-6 h-6 mr-3 text-[#D4821A]" />
              <span className="text-[#D4821A] font-montserrat font-bold text-lg">Factura $500-$2000 USD mensuales</span>
            </div>
          </div>
          
          <button onClick={scrollToOffer} className="bg-gradient-to-r from-[#7E57C2] to-[#D4821A] text-white px-12 py-5 rounded-2xl font-montserrat font-bold text-xl hover:shadow-2xl hover:shadow-[#7E57C2]/30 transition-all duration-300 hover:scale-105 mb-6">
            Desbloquear mina ahora
            <ArrowRight className="inline-block ml-3 w-5 h-5" />
          </button>
          
          <p className="font-roboto text-sm text-[#808080]">
            Por 15 dólares... menos que una hamburguesa, pero esto paga cada día
          </p>
        </div>
        
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#7E57C2]" />
        </div>
      </section>

      {/* Divisor */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#7E57C2]/30 to-transparent"></div>

      {/* Beneficios Principales */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Bot className="w-8 h-8 text-[#7E57C2]" />,
                title: "🚀 BOT que convierte 24/7",
                description: "Sin videos, sin cara, sin equipo. Tu bot trabaja mientras duermes."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-[#D4821A]" />,
                title: "💰 Duplica tu ingreso",
                description: "Vende como afiliado + revende el embudo completo."
              },
              {
                icon: <Clock className="w-8 h-8 text-[#7E57C2]" />,
                title: "⚡ Instalación en 3h",
                description: "Setup ultra-rápido, sin complicaciones técnicas."
              }
            ].map((benefit, index) => (
              <div key={index} className="group bg-[#1E1E1E] p-8 rounded-3xl border border-[#333] hover:border-[#7E57C2]/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#7E57C2]/10">
                <div className="mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse">
                  {benefit.icon}
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-4 text-white">{benefit.title}</h3>
                <p className="font-roboto text-[#B0B0B0] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#7E57C2]/30 to-transparent"></div>

      {/* Qué Incluye */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-montserrat font-black text-4xl md:text-5xl mb-4 text-white">
            Todo lo que
            <span className="text-[#7E57C2]"> obtienes</span>
          </h2>
          <p className="font-roboto text-xl text-[#B0B0B0] mb-16 max-w-3xl mx-auto">
            Este no es otro curso fail... es una puta herramienta de guerra digital que funciona AHORA
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
            {[
              "✅ +15 módulos completos (básico-avanzado)",
              "✅ +20 embudos editables/clonables", 
              "✅ Integración con IA, WhatsApp, Instagram, web",
              "✅ Copys que persuaden sin pensamiento",
              "✅ Estructura de automatización real que imprime dinero",
              "✅ Licencia de reventa incluida",
              "✅ Comunidad privada + soporte",
              "✅ Templates premium validados"
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-[#1E1E1E] p-6 rounded-2xl border border-[#333] hover:border-[#7E57C2]/30 transition-all duration-300">
                <span className="font-roboto text-lg text-[#E0E0E0]">{item}</span>
              </div>
            ))}
          </div>

          {/* Modelos de Flujos */}
          <div className="mb-8">
            <h3 className="font-montserrat font-bold text-2xl mb-8 text-white">
              🎯 Modelos de <span className="text-[#D4821A]">flujos listos</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              {[
                "🎰 Vender lotería con resultados en tiempo real (y cobrar por cada boleto vendido)",
                "🍔 Tomar pedidos automáticos en deliverys y calcular total + envío al instante",
                "🏠 Captar clientes para inmobiliarias sin mostrar la cara",
                "🚗 Mostrar autos y agendar test-drives sin contacto humano",
                "🍰 Hacer que pastelerías vendan solas por WhatsApp",
                "💈 Barberías que agendan clientes mientras duermen",
                "🦷 Clínicas que usan bots con IA para responder y captar pacientes",
                "💆 Estéticas vendiendo servicios con seguimiento automático",
                "📦 Tiendas online que cierran ventas sin Instagram ni equipo",
                "⚖ Captar clientes para abogados sin levantar un dedo",
                "📺 Vender IPTV directo al WhatsApp sin bloqueos ni caídas",
                "📶 Vender internet en zonas rurales sin llamadas ni visitas",
                "🏋 Gimnasios que llenan clases sin recepcionistas",
                "📊 Bots que consultan CNPJ, CEP, correos y más como si fueran hackers",
                "🤖 ChatGPT vendiendo como si fuera tu mejor closser"
              ].map((flow, index) => (
                <div key={index} className="bg-[#1E1E1E] p-4 rounded-xl border border-[#333] hover:border-[#D4821A]/30 transition-all duration-300 hover:transform hover:scale-105">
                  <span className="font-roboto text-sm text-[#E0E0E0] leading-relaxed">{flow}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-center mb-16 text-white">
            Cómo <span className="text-[#7E57C2]">funciona</span>
          </h2>
          
          <div className="space-y-8">
            {[
              {
                number: "01",
                title: "Activa tu BOT",
                description: "Configuras en minutos usando nuestras plantillas exactas"
              },
              {
                number: "02", 
                title: "Bot conversa y califica leads",
                description: "Tu bot trabaja 24/7 identificando clientes potenciales"
              },
              {
                number: "03",
                title: "Bot muestra productos",
                description: "Presenta automáticamente las soluciones perfectas para cada lead"
              },
              {
                number: "04",
                title: "BOT cierra ventas y tú recargas tu billetera",
                description: "Recibe pagos automáticos mientras haces otras cosas"
              }
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-8 bg-[#1E1E1E] p-8 rounded-3xl border border-[#333] hover:border-[#7E57C2]/50 transition-all duration-500 group">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#7E57C2] to-[#D4821A] rounded-full flex items-center justify-center font-montserrat text-2xl font-black text-white group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-montserrat font-bold text-2xl mb-3 text-white">{step.title}</h3>
                  <p className="font-roboto text-[#B0B0B0] text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Testimonios */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-montserrat font-black text-4xl text-center mb-16 text-white">
            Resultados <span className="text-[#7E57C2]">reales</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos M.",
                niche: "Marketing Digital",
                quote: "En 2 semanas ya recuperé la inversión. El bot cierra solo."
              },
              {
                name: "Ana L.",
                niche: "E-commerce", 
                quote: "Facturé $1,200 el primer mes sin tocar nada manualmente."
              },
              {
                name: "Diego R.",
                niche: "Consultoría",
                quote: "La licencia de reventa me generó $3,000 adicionales."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#1E1E1E] p-8 rounded-3xl border border-[#333] hover:border-[#7E57C2]/30 transition-all duration-300 hover:transform hover:scale-105">
                <p className="font-roboto text-[#E0E0E0] mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#7E57C2] to-[#D4821A] rounded-full flex items-center justify-center font-montserrat font-bold text-white mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold text-white">{testimonial.name}</div>
                    <div className="font-roboto text-sm text-[#B0B0B0]">{testimonial.niche}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta Principal */}
      <section id="offer" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-[#D4821A] text-[#121212] py-3 px-8 rounded-full inline-block mb-8 font-montserrat font-bold animate-pulse">
            🔥 PRECIO DE LANZAMIENTO - Este precio nunca vuelve
          </div>
          
          <h2 className="font-montserrat font-black text-5xl md:text-6xl mb-12 text-white">
            Acceso
            <span className="text-[#D4821A]"> premium</span>
          </h2>
          
          <div className="bg-gradient-to-r from-[#7E57C2] to-[#D4821A] p-1 rounded-3xl mb-12 max-w-lg mx-auto">
            <div className="bg-[#1E1E1E] p-10 rounded-3xl">
              <div className="text-[#808080] line-through text-xl mb-4 font-roboto">Precio normal: $97 USD</div>
              <div className="text-7xl font-black text-[#D4821A] mb-6 font-montserrat">$15</div>
              <div className="text-xl text-[#E0E0E0] mb-8 font-roboto">USD - Pago único</div>
              
              <div className="bg-[#7E57C2]/20 border-2 border-[#7E57C2] rounded-2xl p-6 mb-8">
                <div className="text-[#7E57C2] font-montserrat font-bold mb-4">⏰ En minutos sube el precio:</div>
                <div className="flex justify-center gap-4 text-2xl font-bold font-montserrat">
                  <div className="text-center">
                    <div className="bg-[#7E57C2] px-4 py-3 rounded-xl text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-[#808080] mt-2 font-roboto">HORAS</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#7E57C2] px-4 py-3 rounded-xl text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-[#808080] mt-2 font-roboto">MIN</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#7E57C2] px-4 py-3 rounded-xl text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-[#808080] mt-2 font-roboto">SEG</div>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-[#D4821A] to-[#E8941F] text-white py-5 px-8 rounded-2xl font-montserrat text-xl font-bold hover:shadow-2xl hover:shadow-[#D4821A]/25 transition-all duration-300 hover:scale-105 mb-6">
                🚀 SÍ, DESBLOQUEO MI MINA
              </button>
              
              <div className="text-sm text-[#B0B0B0] font-roboto">
                ✅ Acceso inmediato | ✅ Garantía 7 días | ✅ Soporte incluido
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonos */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-center mb-4 text-white">
            Bonos
            <span className="text-[#D4821A]"> exclusivos</span>
          </h2>
          <p className="font-roboto text-xl text-[#B0B0B0] text-center mb-16">
            Valor total: <span className="text-[#D4821A] font-bold">$847 USD</span> - GRATIS para los primeros 100
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "+1.000 flujos premium",
                value: "$197",
                description: "Embudos probados en múltiples nichos y mercados"
              },
              {
                title: "Templates para WhatsApp/Instagram/WordPress",
                value: "$297", 
                description: "Plantillas optimizadas para cada plataforma"
              },
              {
                title: "Copys validadas para anuncios y recuperación",
                value: "$197",
                description: "Textos que convierten probados en el mercado"
              },
              {
                title: "Derecho de reventa completo",
                value: "$156",
                description: "Revende todo el sistema y quédate con el 100%"
              }
            ].map((bonus, index) => (
              <div key={index} className="bg-[#1E1E1E] border-2 border-[#D4821A]/30 p-8 rounded-3xl hover:border-[#D4821A] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#D4821A]/10 group">
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="w-6 h-6 text-[#D4821A] group-hover:animate-pulse" />
                  <span className="bg-[#D4821A] text-[#121212] px-4 py-2 rounded-full font-montserrat text-sm font-bold">
                    VALOR: {bonus.value}
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-4 text-white">{bonus.title}</h3>
                <p className="font-roboto text-[#B0B0B0]">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-center mb-16 text-white">
            Preguntas
            <span className="text-[#7E57C2]"> frecuentes</span>
          </h2>
          
          <div className="space-y-4">
            {[
              {
                question: "¿Necesito saber programar?",
                answer: "Para nada. Todo está diseñado para que cualquier persona monte su bot en menos de 3 horas, sin conocimientos técnicos."
              },
              {
                question: "¿Realmente puedo ganar $500-$2000 mensuales?",
                answer: "Sí, nuestros estudiantes promedio alcanzan estos números después del primer mes. Depende de tu dedicación e implementación."
              },
              {
                question: "¿La licencia de reventa es real?",
                answer: "Totalmente real. Puedes revender el sistema completo y quedarte con el 100% de las ganancias. Es parte integral del curso."
              },
              {
                question: "¿Qué pasa si no me funciona?",
                answer: "Garantía total de 7 días. Si no estás satisfecho, te devolvemos cada centavo sin preguntas."
              },
              {
                question: "¿Cuánto tiempo tengo acceso?",
                answer: "Acceso de por vida al curso, actualizaciones gratuitas y acceso permanente a la comunidad exclusiva."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#1E1E1E] border border-[#333] rounded-2xl overflow-hidden hover:border-[#7E57C2]/50 transition-all duration-300">
                <button 
                  className="w-full p-8 text-left flex justify-between items-center hover:bg-[#222] transition-all duration-300 group"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="font-montserrat font-semibold text-xl text-white group-hover:text-[#7E57C2] transition-colors duration-300">{faq.question}</h3>
                  <div className={`transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                    <Plus className="w-6 h-6 text-[#7E57C2]" />
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-8 animate-fade-in">
                    <p className="font-roboto text-[#B0B0B0] leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#7E57C2]/20 to-[#D4821A]/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-montserrat font-black text-5xl md:text-6xl mb-8 text-white">
            El momento es
            <span className="text-[#D4821A]"> AHORA</span>
          </h2>
          
          <p className="font-roboto text-xl md:text-2xl mb-8 text-[#B0B0B0] max-w-3xl mx-auto leading-relaxed">
            Mientras lees esto, otros ya están implementando y generando sus primeros ingresos.
            <strong className="text-white"> ¿Vas a quedarte atrás?</strong>
          </p>
          
          <div className="bg-[#7E57C2]/20 border-2 border-[#7E57C2] rounded-2xl p-6 mb-8 max-w-md mx-auto">
            <div className="text-[#7E57C2] font-montserrat font-bold mb-2">⚠️ ÚLTIMO AVISO</div>
            <div className="text-white font-roboto">Solo quedan <span className="font-bold text-[#D4821A]">87 accesos</span> disponibles</div>
          </div>
          
          <button onClick={scrollToOffer} className="bg-gradient-to-r from-[#D4821A] to-[#E8941F] text-white px-12 py-6 rounded-2xl font-montserrat text-2xl font-bold hover:shadow-2xl hover:shadow-[#D4821A]/25 transition-all duration-300 hover:scale-105 mb-6">
            🚀 DESBLOQUEAR MI MINA DE ORO
          </button>
          
          <p className="font-roboto text-[#808080]">
            Inversión: $15 USD | Garantía 7 días | Acceso inmediato
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#0A0A0A] border-t border-[#333]">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <p className="font-roboto text-[#D4821A] font-semibold mb-2">Garantía de satisfacción 7 días o te devolvemos</p>
          </div>
          <div className="flex justify-center space-x-8 mb-6">
            <a href="#" className="font-roboto text-[#808080] hover:text-[#7E57C2] transition-colors duration-300">FAQ</a>
            <a href="#" className="font-roboto text-[#808080] hover:text-[#7E57C2] transition-colors duration-300">Soporte</a>
            <a href="#" className="font-roboto text-[#808080] hover:text-[#7E57C2] transition-colors duration-300">Términos</a>
          </div>
          <p className="font-roboto text-[#666] text-sm">© 2024 Minería Digital. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* CSS personalizado para animaciones */}
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
        `}
      </style>
    </div>
  );
};

export default Index;
