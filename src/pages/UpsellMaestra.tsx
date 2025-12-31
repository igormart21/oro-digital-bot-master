import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, AlertTriangle, Star, Zap, Download, Shield, Users, Gift, ArrowRight, Target, DollarSign, Bot, Code, Laptop, Crown, Rocket } from 'lucide-react';
import '../types/hotmart.d.ts';

const UpsellMaestra = () => {
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
        return;
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
    <div className="min-h-screen bg-[#0a0a1a] text-[#E0E0E0] font-light overflow-x-hidden">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      
      {/* Alert Bar */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[#D4821A] to-[#C9A227] backdrop-blur-sm z-50 border-b border-[#D4821A]/20">
        <div className="container mx-auto flex justify-center items-center py-2 px-4">
          <div className="flex items-center gap-2 text-[#0a0a1a] font-montserrat font-bold text-sm">
            <Crown className="w-4 h-4" />
            🔥 OFERTA EXCLUSIVA - Solo aparece UNA VEZ
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-24 pb-12 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a3a]/50 to-[#0a0a1a]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4821A] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C9A227] rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto animate-fade-in w-full">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-[#D4821A] to-[#C9A227] text-[#0a0a1a] px-6 py-3 rounded-full font-montserrat font-bold text-sm uppercase tracking-wide animate-pulse shadow-lg shadow-[#D4821A]/30">
              🧠 LICENCIA MAESTRA
            </span>
          </div>
          
          <h1 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            ¿Quieres vender el Typebot Ilimitado
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4821A] via-[#C9A227] to-[#D4821A] mt-2">
              como si fuera tuyo?
            </span>
          </h1>
          
          <p className="font-roboto text-lg sm:text-xl md:text-2xl mb-8 text-[#B0B0B0] max-w-4xl mx-auto leading-relaxed">
            Acabas de adquirir el acceso ilimitado para usar el sistema...
            <br />
            <strong className="text-[#D4821A]">¿Y si ahora pudieras venderlo con tu marca, a tu precio, y quedarte con el 100% de las ganancias?</strong>
          </p>
          
          {/* Countdown Timer */}
          <div className="bg-[#1a1a3a] border-2 border-[#D4821A] rounded-xl p-6 mb-8 max-w-md mx-auto shadow-lg shadow-[#D4821A]/20">
            <div className="text-[#D4821A] font-montserrat font-bold mb-4">⚡ Esta oferta aparece SOLO UNA VEZ:</div>
            <div className="flex justify-center gap-4 text-2xl font-bold font-montserrat">
              <div className="text-center">
                <div className="bg-gradient-to-b from-[#D4821A] to-[#C9A227] px-4 py-3 rounded-xl text-[#0a0a1a] shadow-lg">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-xs text-[#808080] mt-2 font-roboto">HORAS</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-b from-[#D4821A] to-[#C9A227] px-4 py-3 rounded-xl text-[#0a0a1a] shadow-lg">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-xs text-[#808080] mt-2 font-roboto">MIN</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-b from-[#D4821A] to-[#C9A227] px-4 py-3 rounded-xl text-[#0a0a1a] shadow-lg">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-xs text-[#808080] mt-2 font-roboto">SEG</div>
              </div>
            </div>
            <p className="text-sm text-[#B0B0B0] mt-4 font-roboto">
              Si sales de esta página, no podrás volver a verla.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 bg-[#0f0f2a]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl mb-4 text-white">
              💥 Esta es tu oportunidad única de obtener:
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Download className="w-10 h-10" />,
                title: "Derechos de reventa ilimitados",
                description: "Vende el sistema las veces que quieras, a quien quieras"
              },
              {
                icon: <Code className="w-10 h-10" />,
                title: "Código fuente completo y editable",
                description: "Acceso total al código para personalizar como desees"
              },
              {
                icon: <Laptop className="w-10 h-10" />,
                title: "Acceso marca blanca",
                description: "Usa tu logo, colores y dominio propio"
              },
              {
                icon: <DollarSign className="w-10 h-10" />,
                title: "Cobra lo que quieras",
                description: "Tú decides el precio y ganas para siempre"
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Sin comisiones",
                description: "Sin intermediarios. Sin límites. 100% tuyo"
              },
              {
                icon: <Rocket className="w-10 h-10" />,
                title: "Listo para vender",
                description: "Incluye archivos, instrucciones y plantilla de ventas"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a1a3a] to-[#0f0f2a] p-6 rounded-xl border border-[#D4821A]/30 hover:border-[#D4821A] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#D4821A]/20">
                <div className="mb-4 text-[#D4821A]">
                  {item.icon}
                </div>
                <h3 className="font-montserrat font-bold text-lg mb-2 text-white flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#C9A227]" />
                  {item.title}
                </h3>
                <p className="font-roboto text-[#B0B0B0] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Can You Do Section */}
      <section className="py-16 px-4 sm:px-6 bg-[#0a0a1a]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-center mb-12 text-white">
            💼 ¿Qué puedes hacer con esta licencia?
          </h2>
          
          <div className="bg-gradient-to-br from-[#1a1a3a] to-[#0f0f2a] p-8 rounded-2xl border border-[#D4821A]/30">
            <div className="space-y-6">
              {[
                "Vender el mismo sistema que acabas de comprar como si fuera tuyo",
                "Crear tu propio SaaS sin desarrollar nada",
                "Integrar en tu agencia o infonegocio",
                "Ofrecerlo a tus clientes como producto premium",
                "Construir una nueva fuente de ingresos 100% tuya"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#D4821A] to-[#C9A227] rounded-full flex items-center justify-center text-[#0a0a1a] font-bold shadow-lg shadow-[#D4821A]/20 group-hover:scale-110 transition-transform">
                    ✓
                  </div>
                  <p className="font-roboto text-lg text-[#E0E0E0] group-hover:text-white transition-colors">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-block bg-[#1a1a3a] border border-[#D4821A]/50 rounded-xl p-6">
              <Gift className="w-10 h-10 text-[#D4821A] mx-auto mb-4" />
              <p className="font-roboto text-[#B0B0B0]">
                🎁 Incluye archivos, instrucciones, plantilla de ventas y soporte inicial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Notice */}
      <section className="py-12 px-4 sm:px-6 bg-[#0f0f2a]">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bg-gradient-to-r from-[#D4821A]/20 to-[#C9A227]/20 border-2 border-[#D4821A] rounded-xl p-8">
            <AlertTriangle className="w-12 h-12 text-[#D4821A] mx-auto mb-4" />
            <p className="font-montserrat font-bold text-xl text-white mb-4">
              🚫 Esta licencia <span className="text-[#D4821A]">no está disponible al público general</span>
            </p>
            <p className="font-roboto text-lg text-[#B0B0B0]">
              Solo aquí, solo ahora.
            </p>
          </div>
          
          <div className="mt-8 bg-[#1a1a3a] border border-[#C9A227]/30 rounded-xl p-6">
            <p className="font-montserrat text-xl text-[#C9A227] italic">
              "Mientras otros promocionan... tú vendes el sistema completo."
            </p>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-12 px-4 sm:px-6 bg-[#0a0a1a]">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bg-red-900/20 border-2 border-red-500/50 rounded-xl p-8">
            <h3 className="font-montserrat font-bold text-2xl text-red-400 mb-4">
              ⚠️ Advertencia:
            </h3>
            <p className="font-roboto text-lg text-[#E0E0E0] mb-4">
              Esta oferta aparece <strong className="text-red-400">solo una vez</strong> y está <strong className="text-red-400">limitada a licencias seleccionadas</strong>.
            </p>
            <p className="font-roboto text-[#B0B0B0]">
              Si sales de esta página, no podrás volver a verla.
            </p>
          </div>
        </div>
      </section>

      {/* Main Offer */}
      <section className="py-16 px-4 sm:px-6 bg-[#0f0f2a]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-[#D4821A] to-[#C9A227] p-1 rounded-3xl mb-8 shadow-2xl shadow-[#D4821A]/30">
            <div className="bg-[#0a0a1a] p-8 rounded-3xl">
              
              <Crown className="w-16 h-16 text-[#D4821A] mx-auto mb-6" />
              
              <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-white mb-6">
                LICENCIA MAESTRA
                <span className="block text-[#D4821A] text-xl sm:text-2xl mt-2">
                  Typebot Ilimitado (Marca Blanca)
                </span>
              </h3>
              
              {/* Guarantees */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-[#1a1a3a] px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-[#C9A227]" />
                  <span className="text-sm font-roboto text-white">Garantía de satisfacción</span>
                </div>
                <div className="flex items-center gap-2 bg-[#1a1a3a] px-4 py-2 rounded-full">
                  <Zap className="w-5 h-5 text-[#C9A227]" />
                  <span className="text-sm font-roboto text-white">Activación inmediata</span>
                </div>
                <div className="flex items-center gap-2 bg-[#1a1a3a] px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-[#C9A227]" />
                  <span className="text-sm font-roboto text-white">Acceso vitalicio</span>
                </div>
              </div>
              
              {/* Timer in Offer */}
              <div className="bg-[#D4821A]/20 border-2 border-[#D4821A] rounded-xl p-6 mb-8">
                <div className="text-[#D4821A] font-montserrat font-bold mb-4 text-lg">⚡ Esta oferta expira en:</div>
                <div className="flex justify-center gap-4 text-2xl font-bold font-montserrat">
                  <div className="text-center">
                    <div className="bg-gradient-to-b from-[#D4821A] to-[#C9A227] px-4 py-3 rounded-xl text-[#0a0a1a] shadow-lg">{timeLeft.hours.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-[#808080] mt-2 font-roboto">HORAS</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-b from-[#D4821A] to-[#C9A227] px-4 py-3 rounded-xl text-[#0a0a1a] shadow-lg">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-[#808080] mt-2 font-roboto">MIN</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-b from-[#D4821A] to-[#C9A227] px-4 py-3 rounded-xl text-[#0a0a1a] shadow-lg">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-[#808080] mt-2 font-roboto">SEG</div>
                  </div>
                </div>
              </div>
              
              {/* HOTMART - Sales Funnel Widget */}
              <div id="hotmart-sales-funnel" className="mb-6"></div>
              
              {/* CTA Button */}
              <button className="w-full max-w-xl mx-auto block bg-gradient-to-r from-[#D4821A] to-[#C9A227] hover:from-[#C9A227] hover:to-[#D4821A] text-[#0a0a1a] font-montserrat font-black text-lg sm:text-xl py-5 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#D4821A]/40 mb-6">
                🟡 SÍ, QUIERO REVENDERLO Y TENER MI PROPIO SISTEMA
              </button>
              
              <div className="text-center mb-6">
                <a href="#" className="inline-block bg-[#333] text-[#808080] px-8 py-3 rounded-xl font-montserrat text-sm hover:bg-[#444] transition-colors">
                  No, prefiero que otros vendan por mí
                </a>
              </div>
              
              <p className="text-xs text-[#B0B0B0] font-roboto">
                ✅ Pago seguro | ✅ Garantía 7 días | ✅ Acceso instantáneo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Warning */}
      <section className="py-12 px-4 sm:px-6 bg-[#0a0a1a]">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="font-montserrat font-bold text-lg sm:text-xl text-[#D4821A]">
            ⚠️ No lo dejes pasar. La próxima vez podrías estar comprándole a alguien que sí dijo que sí.
          </p>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 sm:px-6 bg-[#0f0f2a]">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bg-gradient-to-br from-[#1a1a3a] to-[#0f0f2a] border-2 border-[#C9A227]/50 rounded-xl p-8">
            <Shield className="w-16 h-16 text-[#C9A227] mx-auto mb-6" />
            <h2 className="font-montserrat font-black text-2xl sm:text-3xl mb-4 text-white">
              Garantía de Satisfacción
            </h2>
            <p className="font-roboto text-lg text-[#E0E0E0] mb-6">
              <strong className="text-[#C9A227]">Prueba sin riesgo:</strong> si no te encanta, te devolvemos el dinero en 7 días.
            </p>
            <p className="font-roboto text-[#B0B0B0]">
              Zero riesgo. Solo oportunidades para tu negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 bg-[#050510] border-t border-[#333]">
        <div className="container mx-auto max-w-4xl text-center">
          <div id="hotmart-sales-funnel-footer" className="mb-6"></div>
          <p className="font-roboto text-sm text-[#808080]">
            © 2024 Typebot Ilimitado - Licencia Maestra. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Custom Styles */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        
        .font-roboto {
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default UpsellMaestra;
