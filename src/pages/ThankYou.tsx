import React, { useEffect } from 'react';
import { CheckCircle, Gift, Star, Zap, ArrowRight, Users, Clock, Download } from 'lucide-react';
import '../types/hotmart.d.ts';

const ThankYou = () => {
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
      
      {/* Hero Section - Success */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-8 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7E57C2]/10 to-[#D4821A]/10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in w-full">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-[#7E57C2] to-[#D4821A] rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <span className="inline-block bg-[#D4821A] text-[#121212] px-6 py-3 rounded-full font-montserrat font-bold text-sm uppercase tracking-wide">
              🎉 ¡COMPRA EXITOSA!
            </span>
          </div>
          
          <h1 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            ¡Gracias por tu
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7E57C2] to-[#D4821A] mt-2">
              confianza!
            </span>
          </h1>
          
          <p className="font-roboto text-lg sm:text-xl md:text-2xl mb-8 text-[#B0B0B0] max-w-3xl mx-auto leading-relaxed">
            Tu inversión en <strong className="text-[#D4821A]">Typebot Pro</strong> ha sido confirmada. En pocos minutos recibirás todos los accesos y materiales en tu email.
          </p>
          
          {/* Status Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-[#1E1E1E] border border-[#7E57C2]/30 rounded-xl p-6">
              <CheckCircle className="w-8 h-8 text-[#7E57C2] mx-auto mb-4" />
              <h3 className="font-montserrat font-bold text-lg mb-2 text-white">Pago Confirmado</h3>
              <p className="font-roboto text-sm text-[#B0B0B0]">Tu transacción fue procesada exitosamente</p>
            </div>
            
            <div className="bg-[#1E1E1E] border border-[#D4821A]/30 rounded-xl p-6">
              <Clock className="w-8 h-8 text-[#D4821A] mx-auto mb-4" />
              <h3 className="font-montserrat font-bold text-lg mb-2 text-white">Preparando Accesos</h3>
              <p className="font-roboto text-sm text-[#B0B0B0]">Enviando credenciales a tu email</p>
            </div>
            
            <div className="bg-[#1E1E1E] border border-[#7E57C2]/30 rounded-xl p-6">
              <Gift className="w-8 h-8 text-[#7E57C2] mx-auto mb-4" />
              <h3 className="font-montserrat font-bold text-lg mb-2 text-white">Bonus Incluidos</h3>
              <p className="font-roboto text-sm text-[#B0B0B0]">Todos los extras están preparados</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="py-16 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl mb-4 text-white">
              ¿Qué sigue <span className="text-[#D4821A]">ahora?</span>
            </h2>
            <p className="font-roboto text-lg sm:text-xl text-[#B0B0B0] max-w-2xl mx-auto">
              En los próximos minutos recibirás todo lo que necesitas para empezar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-r from-[#7E57C2] to-[#D4821A] p-1 rounded-3xl">
              <div className="bg-[#1E1E1E] p-8 rounded-3xl h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#7E57C2] to-[#D4821A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-montserrat font-black text-white">1</span>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-4 text-white">Email de Bienvenida</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Credenciales de acceso a la plataforma",
                    "Link directo al área de miembros",
                    "Instrucciones para el primer acceso",
                    "Datos de contacto del soporte"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-[#7E57C2] flex-shrink-0" />
                      <span className="font-roboto text-[#E0E0E0] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#D4821A] to-[#7E57C2] p-1 rounded-3xl">
              <div className="bg-[#1E1E1E] p-8 rounded-3xl h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#D4821A] to-[#7E57C2] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-montserrat font-black text-white">2</span>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-4 text-white">Contenido Completo</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Acceso al curso Typebot Pro completo",
                    "15 embudos listos para usar",
                    "Plantillas y copys validados",
                    "Comunidad VIP de estudiantes"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-[#D4821A] flex-shrink-0" />
                      <span className="font-roboto text-[#E0E0E0] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-[#1E1E1E] border border-[#D4821A]/30 rounded-3xl p-8">
            <div className="text-center mb-8">
              <Zap className="w-12 h-12 text-[#D4821A] mx-auto mb-4" />
              <h2 className="font-montserrat font-black text-2xl sm:text-3xl mb-4 text-white">
                📧 ¡Revisa tu Email!
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#121212] p-6 rounded-xl border border-[#333]">
                <div className="text-center mb-4">
                  <Clock className="w-8 h-8 text-[#7E57C2] mx-auto mb-2" />
                  <h3 className="font-montserrat font-bold text-lg text-white">Tiempo de Entrega</h3>
                </div>
                <p className="font-roboto text-sm text-[#B0B0B0] text-center">
                  Los accesos llegan automáticamente en <strong className="text-[#D4821A]">5-10 minutos</strong> después de la confirmación del pago.
                </p>
              </div>
              
              <div className="bg-[#121212] p-6 rounded-xl border border-[#333]">
                <div className="text-center mb-4">
                  <Users className="w-8 h-8 text-[#D4821A] mx-auto mb-2" />
                  <h3 className="font-montserrat font-bold text-lg text-white">¿No llegó el email?</h3>
                </div>
                <p className="font-roboto text-sm text-[#B0B0B0] text-center">
                  Revisa tu <strong className="text-[#7E57C2]">spam/promociones</strong> o contáctanos por WhatsApp para ayuda inmediata.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-16 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-center mb-12 text-white">
            Te unes a <span className="text-[#D4821A]">miles</span> de emprendedores
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              name: "María L.",
              result: "€2,847 en 30 días",
              quote: "Increíble, mi primer embudo me generó más de lo esperado"
            }, {
              name: "Carlos R.",
              result: "Bot 24/7 funcionando",
              quote: "Ahora puedo dormir tranquilo, el bot trabaja por mí"
            }, {
              name: "Ana M.",
              result: "Primera venta en 3 días",
              quote: "No podía creer lo rápido que funcionó"
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
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#D4821A] fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#0A0A0A] border-t border-[#333]">
        <div className="container mx-auto text-center">
          <p className="font-roboto text-[#D4821A] font-semibold mb-4">¡Bienvenido a la familia Typebot Pro!</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
            <p className="font-roboto text-[#B0B0B0] text-sm">¿Necesitas ayuda? Contáctanos:</p>
            <div className="flex gap-4">
              <span className="font-roboto text-[#7E57C2] text-sm">📧 soporte@typebotpro.com</span>
              <span className="font-roboto text-[#D4821A] text-sm">📱 WhatsApp: +1 (xxx) xxx-xxxx</span>
            </div>
          </div>
          <p className="font-roboto text-[#666] text-sm">© 2024 Typebot Pro. Todos los derechos reservados.</p>
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
          
          @keyframes scale-in {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
          
          .animate-scale-in {
            animation: scale-in 0.6s ease-out;
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

export default ThankYou;