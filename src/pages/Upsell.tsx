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
  return <div className="min-h-screen bg-[#121212] text-[#E0E0E0] font-light overflow-x-hidden">
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
              <img src="/lovable-uploads/7582d2f3-d396-4988-81c8-4226ae16afa6.png" alt="Digital Domination Bundle" className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500" />
            </div>
            
            <p className="font-roboto text-lg sm:text-xl text-[#B0B0B0] max-w-3xl mx-auto">
              Todo ilimitado, cero mensualidades. Herramientas de élite por una fracción de su valor real.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[{
            image: "/lovable-uploads/72fd2fa0-fcf7-4fc3-a0a9-b4bdcd7fb65c.png",
            title: "⚡ +2000 Plantillas de Automatizaciones para n8n (Con IA)",
            description: "Desbloquea el verdadero poder de la automatización con este megapack exclusivo de más de 2000 workflows listos para usar en n8n. Integraciones inteligentes, agentes autónomos, conexiones con GPT, scraping, CRM, redes sociales, e-commerce y mucho más — todo organizado, editable y preparado para que empieces a ahorrar horas de trabajo desde el primer día. ✅ Sin necesidad de programar ✅ Acceso de por vida ✅ Actualizaciones mensuales incluidas ✅ Compatible con n8n cloud y self-hosted ✅ Ideal para freelancers, agencias, creadores, marketers y developers. Una inversión mínima para automatizar tareas que antes te quitaban días"
          }, {
            icon: <Zap className="w-8 h-8 text-[#D4821A]" />,
            title: "+1000 Flujos Premium Listos y Editables",
            description: "Workflows listos para usar y facturar"
          }, {
            icon: <Target className="w-8 h-8 text-[#7E57C2]" />,
            title: "Curso: Método Typebot Pro",
            description: "🧠 No es un curso. Es un arma. El Método Typebot Pro es para quienes están listos para dejar de rogar por ventas y empezar a dominar un ejército de bots que venden solos, 24/7, sin descanso y sin piedad. Aquí no vas a \"aprender teoría\". Vas a construir bots que: * Capturan leads como trampas psicológicas * Calientan al prospecto con mensajes diseñados para romper objeciones * Cierres automáticos que facturan mientras tú duermes. Desde el primer módulo, vas a entender cómo manipular cada clique, cada paso y cada palabra que el usuario ve... hasta que no le quede otra opción que comprar. ⚠️ Advertencia: Esto no es para tibios. Es para los que quieren convertir tráfico frío en dinero caliente, usando inteligencia, estrategia y un toque de malicia."
          }, {
            icon: <Shield className="w-8 h-8 text-[#D4821A]" />,
            title: "Typebot Ilimitado",
            description: "Uso sin límites y sin pagar mensualidades"
          }, {
            image: "/lovable-uploads/a24fe8e0-854e-407e-b8af-5130c68b326a.png",
            title: "Pack de Páginas de Ventas de Alta Conversión",
            description: "¿Quieres aumentar tus ventas y convertir más clientes? Con el \"Pack Páginas de Ventas de Alta Conversión\", tendrás acceso a plantillas diseñadas estratégicamente para maximizar tus resultados. Ideal para emprendedores digitales, marketers y dueños de negocios que buscan destacar en un mercado competitivo. 🚀 ¿Qué incluye este pack? - Diseños listos para usar: Páginas profesionales, modernas y enfocadas en la persuasión. - Estructura comprobada: Elementos clave para captar la atención, gene"
          }, {
            image: "/lovable-uploads/effc0a9f-ef6c-443c-ac0b-f761f837fc06.png",
            title: "Copy para Anuncios que Convierten",
            description: "🔥 ¿Quieres multiplicar el poder de tu copy hasta 3 veces? Agrega AHORA el \"Arsenal de Anuncios Asesinos\" – 37 textos listos que ya han vendido millones, adaptables a tu nicho en menos de 5 minutos. ⚡ Solo copiar, pegar y ver cómo el clic se convierte en venta. 💀 Oferta ÚNICA: solo aquí, solo ahora. ⏳ Si cierras sin esto, estás dejando dinero sobre la mesa."
          }, {
            image: "/lovable-uploads/2cdc6d6f-f8b7-4e47-8b7f-3f355388d1fa.png",
            title: "Automatización y Recuperación de Ventas",
            description: "Tene acceso a mis Modelos de Copy para Automatización que utilizo para recuperar y vender mucho."
          }, {
            image: "/lovable-uploads/b5b69456-dd2d-40e8-9db9-e96ed91159a4.png",
            title: "Super Pack Canva",
            description: "Obtén más de 10.000 artes exclusivas para editar en Canva y transformar tus anuncios!"
          }, {
            image: "/lovable-uploads/c90672e4-0b4e-45b4-8e96-2ea6f974da03.png",
            title: "¡Súper Pack PLR!",
            description: "Millones de archivos, productos y recursos digitales. Listos. A tu nombre. ⚡ PLRs de alta conversión: ebooks, cursos, creativos, plantillas, embudos y más. ⚡ No pierdas meses creando. Solo personaliza, lanza y empieza a facturar. 🚀 Ideal para infoproductores, agencias, afiliados, freelancers y expertos en tráfico. 🧠 Acceso inmediato a un arsenal que te ahorra tiempo y multiplica tu lucro. 👉 Agrega el Super Pack PLR ahora y acelera tu imperio digital."
          }].map((item, index) => <div key={index} className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333] hover:border-[#7E57C2]/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-4">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-48 object-contain rounded-lg mb-2 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A]" />
                  ) : (
                    item.icon
                  )}
                </div>
                <h3 className="font-montserrat font-bold text-lg mb-3 text-white">{item.title}</h3>
                <p className="font-roboto text-[#B0B0B0] text-sm">{item.description}</p>
              </div>)}
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
            {[{
            icon: <Shield className="w-12 h-12 text-[#7E57C2]" />,
            title: "Todo ilimitado, cero mensualidades",
            description: "Olvídate de pagos recurrentes para siempre"
          }, {
            icon: <Zap className="w-12 h-12 text-[#D4821A]" />,
            title: "Plug & Play – instala y empieza a vender hoy mismo",
            description: "Configuración en minutos, ventas inmediatas"
          }, {
            icon: <Star className="w-12 h-12 text-[#7E57C2]" />,
            title: "Herramientas de élite por una fracción de su valor real",
            description: "Más de $2000 en valor por solo $49"
          }].map((benefit, index) => <div key={index} className="text-center bg-[#1E1E1E] p-8 rounded-xl border border-[#333] hover:border-[#7E57C2]/50 transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-4 text-white">{benefit.title}</h3>
                <p className="font-roboto text-[#B0B0B0]">{benefit.description}</p>
              </div>)}
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
                <img src="/lovable-uploads/7582d2f3-d396-4988-81c8-4226ae16afa6.png" alt="Digital Domination Bundle" className="w-full h-auto rounded-xl shadow-xl" />
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
    </div>;
};
export default Upsell;