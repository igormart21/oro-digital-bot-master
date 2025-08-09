import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, AlertTriangle, Star, Zap, Download, Shield, Users, Gift, ArrowRight, Target, DollarSign, Bot } from 'lucide-react';
import '../types/hotmart.d.ts';

const Upsell = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 7,
    seconds: 32
  });

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

  // Hotmart widget initialization
  useEffect(() => {
    const loadHotmartScript = () => {
      if (document.getElementById('hotmart-checkout-script')) {
        return; // Script already loaded
      }

      const script = document.createElement('script');
      script.id = 'hotmart-checkout-script';
      script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
      script.onload = () => {
        if (window.checkoutElements) {
          window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
          window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel-footer');
        }
      };
      document.head.appendChild(script);
    };

    loadHotmartScript();
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] font-light overflow-x-hidden">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      
      {/* Alert Bar */}
      <div className="fixed top-0 left-0 right-0 bg-[#D4821A] backdrop-blur-sm z-50 border-b border-[#D4821A]/20">
        <div className="container mx-auto flex justify-center items-center py-2 px-4">
          <div className="flex items-center gap-2 text-[#121212] font-montserrat font-bold text-sm">
            <AlertTriangle className="w-4 h-4" />
            ⚠️ Última oportunidad: No te vayas sin tu arsenal digital completo
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-20 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7E57C2]/10 to-[#D4821A]/10"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto animate-fade-in w-full">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-[#7E57C2] to-[#D4821A] text-white px-6 py-3 rounded-full font-montserrat font-bold text-sm uppercase tracking-wide animate-pulse">
              🔥 OFERTA ÚNICA
            </span>
          </div>
          
          <h1 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            ⚠️ Última oportunidad: No te vayas sin
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7E57C2] to-[#D4821A] mt-2">
              tu arsenal digital completo
            </span>
          </h1>
          
          <p className="font-roboto text-lg sm:text-xl md:text-2xl mb-8 text-[#B0B0B0] max-w-4xl mx-auto leading-relaxed">
            Acabas de comprar Typebot Pro, pero <strong className="text-[#D4821A]">estás a solo un paso</strong> de tener la
            <strong className="text-white"> chave-mestra para dominar automação e vendas online</strong>
          </p>
          
          {/* Countdown Timer */}
          <div className="bg-[#1E1E1E] border-2 border-[#D4821A] rounded-xl p-6 mb-8 max-w-md mx-auto">
            <div className="text-[#D4821A] font-montserrat font-bold mb-4">⚡ Oferta válida solo en esta página y solo ahora:</div>
            <div className="flex justify-center gap-4 text-2xl font-bold font-montserrat">
              <div className="text-center">
                <div className="bg-[#D4821A] px-4 py-3 rounded-xl text-[#121212]">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-xs text-[#808080] mt-2 font-roboto">HORAS</div>
              </div>
              <div className="text-center">
                <div className="bg-[#D4821A] px-4 py-3 rounded-xl text-[#121212]">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-xs text-[#808080] mt-2 font-roboto">MIN</div>
              </div>
              <div className="text-center">
                <div className="bg-[#D4821A] px-4 py-3 rounded-xl text-[#121212]">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-xs text-[#808080] mt-2 font-roboto">SEG</div>
              </div>
            </div>
            <p className="text-sm text-[#B0B0B0] mt-4 font-roboto">
              Si cierras esta ventana, el precio volverá a $199
            </p>
          </div>
          
          {/* Product Visual */}
          <div className="mb-8 max-w-md mx-auto">
            <img 
              src="/lovable-uploads/7582d2f3-d396-4988-81c8-4226ae16afa6.png" 
              alt="Digital Domination Bundle - El Pack Definitivo"
              className="w-full h-auto rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Lo que incluye */}
      <section className="py-16 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl mb-4 text-white">
              🔥 Digital Domination Bundle
              <span className="block text-[#D4821A] text-2xl sm:text-3xl md:text-4xl mt-2">
                El Pack Definitivo para Automatizar, Vender y Escalar
              </span>
            </h2>
            
            {/* Product Hero Image */}
            <div className="mb-8 max-w-lg mx-auto">
              <img 
                src="/lovable-uploads/7582d2f3-d396-4988-81c8-4226ae16afa6.png" 
                alt="Digital Domination Bundle"
                className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <p className="font-roboto text-lg sm:text-xl text-[#B0B0B0] max-w-3xl mx-auto">
              Todo ilimitado, cero mensualidades. Herramientas de élite por una fracción de su valor real.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Bot className="w-8 h-8 text-[#7E57C2]" />,
                title: "+2000 Automation Templates for n8n (With AI)",
                description: "Automatización pesada para cualquier nicho"
              },
              {
                icon: <Zap className="w-8 h-8 text-[#D4821A]" />,
                title: "+1000 Flujos Premium Listos y Editables",
                description: "Workflows listos para usar y facturar"
              },
              {
                icon: <Target className="w-8 h-8 text-[#7E57C2]" />,
                title: "Curso: Método Typebot Pro",
                description: "Crea embudos conversacionales que venden 24/7"
              },
              {
                icon: <Shield className="w-8 h-8 text-[#D4821A]" />,
                title: "Typebot Ilimitado",
                description: "Uso sin límites y sin pagar mensualidades"
              },
              {
                icon: <DollarSign className="w-8 h-8 text-[#7E57C2]" />,
                title: "Pack de Páginas de Ventas de Alta Conversión",
                description: "Modelos listos para vender cualquier cosa"
              },
              {
                icon: <Star className="w-8 h-8 text-[#D4821A]" />,
                title: "Copy para Anuncios que Convierten",
                description: "Textos que convierten clics en ventas"
              },
              {
                icon: <ArrowRight className="w-8 h-8 text-[#7E57C2]" />,
                title: "Automatización y Recuperación de Ventas",
                description: "Secuencias para facturar en automático"
              },
              {
                icon: <Gift className="w-8 h-8 text-[#D4821A]" />,
                title: "Super Pack Canva",
                description: "Creativos listos para anuncios irresistibles"
              },
              {
                icon: <Download className="w-8 h-8 text-[#7E57C2]" />,
                title: "¡Súper Pack PLR!",
                description: "Productos listos para revender y monetizar al instante"
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333] hover:border-[#7E57C2]/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="font-montserrat font-bold text-lg mb-3 text-white">{item.title}</h3>
                <p className="font-roboto text-[#B0B0B0] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Tangíveis */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-center mb-12 text-white">
            Beneficios <span className="text-[#D4821A]">Tangibles</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-[#7E57C2]" />,
                title: "Todo ilimitado, cero mensualidades",
                description: "Olvídate de pagos recurrentes para siempre"
              },
              {
                icon: <Zap className="w-12 h-12 text-[#D4821A]" />,
                title: "Plug & Play – instala y empieza a vender hoy mismo",
                description: "Configuración en minutos, ventas inmediatas"
              },
              {
                icon: <Star className="w-12 h-12 text-[#7E57C2]" />,
                title: "Herramientas de élite por una fracción de su valor real",
                description: "Más de $2000 en valor por solo $49"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center bg-[#1E1E1E] p-8 rounded-xl border border-[#333] hover:border-[#7E57C2]/50 transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-4 text-white">{benefit.title}</h3>
                <p className="font-roboto text-[#B0B0B0]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-16 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-[#1E1E1E] border border-[#333] rounded-xl p-8 mb-8">
            <Users className="w-16 h-16 text-[#D4821A] mx-auto mb-6" />
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-4 text-white">
              Ya son más de 3.000 marketers
            </h2>
            <p className="font-roboto text-xl text-[#D4821A] font-bold">
              usando este pack para multiplicar sus ventas
            </p>
          </div>
        </div>
      </section>

      {/* Oferta Principal */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-[#7E57C2] to-[#D4821A] p-1 rounded-3xl mb-8">
            <div className="bg-[#1E1E1E] p-8 rounded-3xl">
              
              {/* Product Image in Offer */}
              <div className="mb-6 max-w-xs mx-auto">
                <img 
                  src="/lovable-uploads/7582d2f3-d396-4988-81c8-4226ae16afa6.png" 
                  alt="Digital Domination Bundle"
                  className="w-full h-auto rounded-xl shadow-xl"
                />
              </div>
              
              <div className="mb-8">
                <div className="text-[#808080] line-through text-2xl mb-2 font-roboto">Valor real: $500+ USD</div>
                <div className="text-7xl font-black text-[#D4821A] mb-4 font-montserrat">$49</div>
                <div className="text-[#B0B0B0] font-roboto text-lg">Oferta única solo en esta página</div>
              </div>
              
              <div className="bg-[#D4821A]/20 border-2 border-[#D4821A] rounded-xl p-6 mb-8">
                <div className="text-[#D4821A] font-montserrat font-bold mb-4 text-lg">⚡ Esta oferta expira en minutos:</div>
                <div className="flex justify-center gap-4 text-2xl font-bold font-montserrat">
                  <div className="text-center">
                    <div className="bg-[#D4821A] px-4 py-3 rounded-xl text-[#121212]">{timeLeft.hours.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-[#808080] mt-2 font-roboto">HORAS</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#D4821A] px-4 py-3 rounded-xl text-[#121212]">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-[#808080] mt-2 font-roboto">MIN</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#D4821A] px-4 py-3 rounded-xl text-[#121212]">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-[#808080] mt-2 font-roboto">SEG</div>
                  </div>
                </div>
              </div>
              
              {/* HOTMART - Sales Funnel Widget */}
              <div id="hotmart-sales-funnel" className="mb-6"></div>
              
              <div className="text-center mb-6">
                <a href="#" className="inline-block bg-[#333] text-[#808080] px-8 py-3 rounded-xl font-montserrat text-sm hover:bg-[#444] transition-colors">
                  No, prefiero seguir perdiendo ventas
                </a>
              </div>
              
              <p className="text-xs text-[#B0B0B0] font-roboto">
                ✅ Pago seguro | ✅ Garantía 7 días | ✅ Acceso instantáneo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia Anti-Medo */}
      <section className="py-16 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bg-[#7E57C2]/20 border-2 border-[#7E57C2] rounded-xl p-8">
            <Shield className="w-16 h-16 text-[#7E57C2] mx-auto mb-6" />
            <h2 className="font-montserrat font-black text-2xl sm:text-3xl mb-4 text-white">
              Garantía Anti-Miedo
            </h2>
            <p className="font-roboto text-lg text-[#E0E0E0] mb-6">
              <strong className="text-[#7E57C2]">Prueba sin riesgo:</strong> si no te encanta, te devolvemos el dinero en 7 días.
            </p>
            <p className="font-roboto text-[#B0B0B0]">
              Zero riesgo. Solo valor para tu negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Warning Final */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-[#7E57C2]/20 to-[#D4821A]/20">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bg-[#D4821A]/20 border-2 border-[#D4821A] rounded-xl p-8 mb-8">
            <AlertTriangle className="w-12 h-12 text-[#D4821A] mx-auto mb-4" />
            <h2 className="font-montserrat font-black text-2xl sm:text-3xl mb-4 text-white">
              ⚠️ ÚLTIMA ADVERTENCIA
            </h2>
            <p className="font-roboto text-lg text-[#E0E0E0] mb-6">
              Si sales de esta página, <strong className="text-[#D4821A]">perderás para siempre</strong> esta oportunidad única de tener el arsenal completo de automatización por solo $49 USD.
            </p>
            <div className="text-[#D4821A] font-montserrat font-bold text-xl">
              Esta página se cerrará automáticamente en {timeLeft.minutes}:{timeLeft.seconds.toString().padStart(2, '0')}
            </div>
          </div>
          
          {/* HOTMART - Sales Funnel Widget */}
          <div id="hotmart-sales-funnel-footer" className="mb-6"></div>
          
          <p className="font-roboto text-[#808080] text-sm">
            Pago seguro | Garantía 7 días | Acceso instantáneo
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#0A0A0A] border-t border-[#333]">
        <div className="container mx-auto text-center">
          <p className="font-roboto text-[#D4821A] font-semibold mb-2">Garantía de satisfacción de 7 días o devolvemos el dinero</p>
          <p className="font-roboto text-[#666] text-sm">© 2024 Digital Domination Bundle - Oferta Única. Todos los derechos reservados.</p>
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
        `}
      </style>
    </div>
  );
};

export default Upsell;