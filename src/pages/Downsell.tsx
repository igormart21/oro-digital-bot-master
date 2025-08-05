
import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, X, Gift, Zap, Star, ArrowRight, AlertTriangle } from 'lucide-react';
import '../types/hotmart.d.ts';

const Downsell = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 14,
    seconds: 59
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
            <Clock className="w-4 h-4" />
            ÚLTIMA OPORTUNIDAD - ¡Esta oferta expira en instantes!
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-20 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7E57C2]/10 to-[#D4821A]/10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in w-full">
          <div className="mb-6">
            <span className="inline-block bg-[#D4821A] text-[#121212] px-6 py-3 rounded-full font-montserrat font-bold text-sm uppercase tracking-wide">
              ⚠️ ¡ESPERA! NO TE VAYAS
            </span>
          </div>
          
            <h1 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Última oportunidad para tener
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7E57C2] to-[#D4821A] mt-2">
              Typebot Pro por solo
            </span>
            <span className="block text-[#D4821A] mt-2">$15 USD</span>
          </h1>
          
          <p className="font-roboto text-lg sm:text-xl md:text-2xl mb-8 text-[#B0B0B0] max-w-3xl mx-auto leading-relaxed">
            Entiendo que tal vez $29 sea mucho ahora. ¿Qué tal una <strong className="text-[#D4821A]">oferta única</strong> solo para ti que llegaste hasta aquí?
          </p>
          
          {/* Countdown Timer */}
          <div className="bg-[#1E1E1E] border-2 border-[#D4821A] rounded-xl p-6 mb-8 max-w-md mx-auto">
            <div className="text-[#D4821A] font-montserrat font-bold mb-4">⏰ La oferta expira en:</div>
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
        </div>
      </section>

      {/* Oferta Especial */}
      <section className="py-16 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl mb-4 text-white">
              Oferta <span className="text-[#D4821A]">Única</span>
            </h2>
            <p className="font-roboto text-lg sm:text-xl text-[#B0B0B0] max-w-2xl mx-auto">
              Versión esencial con todo lo que necesitas para empezar
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-[#7E57C2] to-[#D4821A] p-1 rounded-3xl mb-8">
            <div className="bg-[#1E1E1E] p-8 rounded-3xl">
              <div className="text-center mb-8">
                <div className="text-[#808080] line-through text-xl mb-2 font-roboto">Era: $29 USD</div>
                <div className="text-6xl font-black text-[#D4821A] mb-4 font-montserrat">$15</div>
                <div className="text-[#B0B0B0] font-roboto">Por tiempo limitado</div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-montserrat font-bold text-xl mb-6 text-[#7E57C2] flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Lo que SÍ recibes:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Curso Typebot Pro Completo",
                      "10 módulos estructurados",
                      "15 embudos listos para usar",
                      "Integración WhatsApp + Instagram",
                      "Copys que venden",
                      "Licencia de reventa",
                      "Comunidad VIP",
                      "Soporte por 30 días"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-[#7E57C2] flex-shrink-0" />
                        <span className="font-roboto text-[#E0E0E0] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-montserrat font-bold text-xl mb-6 text-[#D4821A] flex items-center gap-2">
                    <X className="w-5 h-5" />
                    Lo que NO recibes:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Bono +1,000 flujos premium",
                      "Plantillas premium WordPress",
                      "Copys validados para anuncios",
                      "Soporte prioritario vitalicio",
                      "Actualizaciones automáticas",
                      "Consultoría personalizada"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <X className="w-4 h-4 text-[#D4821A] flex-shrink-0" />
                        <span className="font-roboto text-[#808080] text-sm line-through">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                {/* HOTMART - Sales Funnel Widget */}
                <div id="hotmart-sales-funnel"></div>
                <p className="text-xs text-[#B0B0B0] font-roboto mt-4">
                  ✅ Pago seguro | ✅ Garantía 7 días | ✅ Acceso instantáneo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que esta oferta existe */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-[#1E1E1E] border border-[#333] rounded-3xl p-8">
            <div className="text-center mb-8">
              <AlertTriangle className="w-12 h-12 text-[#D4821A] mx-auto mb-4" />
              <h2 className="font-montserrat font-black text-2xl sm:text-3xl mb-4 text-white">
                ¿Por qué existe esta oferta?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-[#121212] p-6 rounded-xl border border-[#333]">
                <Zap className="w-8 h-8 text-[#7E57C2] mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-lg mb-2 text-white">Recuperación de abandono</h3>
                <p className="font-roboto text-sm text-[#B0B0B0]">Demostraste interés real en el producto</p>
              </div>
              
              <div className="bg-[#121212] p-6 rounded-xl border border-[#333]">
                <Gift className="w-8 h-8 text-[#D4821A] mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-lg mb-2 text-white">Prueba de mercado</h3>
                <p className="font-roboto text-sm text-[#B0B0B0]">Validamos demanda con precio accesible</p>
              </div>
              
              <div className="bg-[#121212] p-6 rounded-xl border border-[#333]">
                <Star className="w-8 h-8 text-[#7E57C2] mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-lg mb-2 text-white">Construir audiencia</h3>
                <p className="font-roboto text-sm text-[#B0B0B0]">Preferimos tenerte como cliente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-center mb-12 text-white">
            Quienes ya empezaron están <span className="text-[#D4821A]">ganando</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[{
              name: "Carlos M.",
              result: "Primera venta en 3 días",
              quote: "Incluso con la versión básica ya logré mi primera venta. ¡Valió cada centavo!"
            }, {
              name: "Ana S.",
              result: "Bot funcionando 24/7",
              quote: "Increíble como el bot trabaja solo. Ya recuperé la inversión."
            }].map((testimonial, index) => (
              <div key={index} className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333] hover:border-[#7E57C2]/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#7E57C2] to-[#D4821A] rounded-full flex items-center justify-center font-montserrat font-bold text-white mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold text-white">{testimonial.name}</div>
                    <div className="font-roboto text-sm text-[#D4821A]">{testimonial.result}</div>
                  </div>
                </div>
                <p className="font-roboto text-[#B0B0B0] italic">"{testimonial.quote}"</p>
              </div>
            ))}
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
              Si sales de esta página, esta oferta de $15 USD <strong className="text-[#D4821A]">nunca más será ofrecida</strong>. El precio vuelve a $29 USD y no habrá segunda oportunidad.
            </p>
            <div className="text-[#D4821A] font-montserrat font-bold text-xl">
              ¡Solo {timeLeft.minutes}:{timeLeft.seconds.toString().padStart(2, '0')} restantes!
            </div>
          </div>
          
          {/* HOTMART - Sales Funnel Widget */}
          <div id="hotmart-sales-funnel-footer"></div>
          
          <p className="font-roboto text-[#808080] text-sm">
            Pago seguro | Garantía 7 días | Acceso instantáneo
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#0A0A0A] border-t border-[#333]">
        <div className="container mx-auto text-center">
          <p className="font-roboto text-[#D4821A] font-semibold mb-2">Garantía de satisfacción de 7 días o devolvemos el dinero</p>
          <p className="font-roboto text-[#666] text-sm">© 2024 Typebot Pro - Oferta Especial. Todos los derechos reservados.</p>
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

export default Downsell;
