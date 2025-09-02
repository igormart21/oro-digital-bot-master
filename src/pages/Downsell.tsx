import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, AlertTriangle, Star, Zap, Download, Shield, Users, Gift, ArrowRight, Target, DollarSign, Bot, Infinity, Server, Calendar, CreditCard } from 'lucide-react';
import '../types/hotmart.d.ts';
const Downsell = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 4,
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
  return <div className="min-h-screen bg-[#121212] text-[#E0E0E0] font-light overflow-x-hidden">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      
      {/* Alert Bar */}
      <div className="fixed top-0 left-0 right-0 bg-[#D4821A] backdrop-blur-sm z-50 border-b border-[#D4821A]/20">
        <div className="container mx-auto flex justify-center items-center py-2 px-4">
          <div className="flex items-center gap-2 text-[#121212] font-montserrat font-bold text-sm">
            <AlertTriangle className="w-4 h-4" />
            🚨 ÚLTIMA OPORTUNIDAD: Solo $15 dólares - ¡Nunca más pagarás mensualidades!
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-20 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7E57C2]/10 to-[#D4821A]/10"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto animate-fade-in w-full">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-[#7E57C2] to-[#D4821A] text-white px-6 py-3 rounded-full font-montserrat font-bold text-sm uppercase tracking-wide animate-pulse">
              💥 OFERTA ESPECIAL
            </span>
          </div>
          
          <h1 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            🔥 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7E57C2] to-[#D4821A] mt-2">
              TYPEBOT ILIMITADO
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl text-white mt-4">
              Por solo <span className="text-[#D4821A]">$15 dólares</span> - ¡DE POR VIDA!
            </span>
          </h1>
          
          {/* Video Section - moved here */}
          <div className="relative bg-[#1E1E1E] rounded-xl overflow-hidden border-2 border-[#D4821A]/30 hover:border-[#D4821A]/60 transition-all duration-300 mb-8">
            <div className="aspect-video">
              <iframe src="https://player.vimeo.com/video/1056373518?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" className="w-full h-full" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Typebot Ilimitado Demo" />
            </div>
          </div>
          
          <div className="bg-[#1E1E1E] border-2 border-[#D4821A] rounded-xl p-6 mb-8 max-w-4xl mx-auto">
            <p className="font-roboto text-lg sm:text-xl md:text-2xl mb-4 text-white leading-relaxed">
              <strong className="text-[#D4821A]">⚠️ ÚLTIMA CHANCE:</strong> Obtén acceso VITALÍCIO al Typebot más poderoso del mercado
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm font-roboto">
              <div className="flex items-center gap-2">
                <Infinity className="w-5 h-5 text-[#7E57C2]" />
                <span>Bots ilimitados</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#7E57C2]" />
                <span>Chats sin límite</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-[#7E57C2]" />
                <span>Sin servidor necesario</span>
              </div>
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="bg-[#1E1E1E] border-2 border-[#D4821A] rounded-xl p-6 mb-8 max-w-md mx-auto">
            <div className="text-[#D4821A] font-montserrat font-bold mb-4">⚡ Esta oferta desaparece en:</div>
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
              Si cierras esta página, perderás esta oportunidad para siempre
            </p>
          </div>
        </div>
      </section>

      {/* Automation Sales Copy Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-[#7E57C2]/20 to-[#D4821A]/20 border border-[#D4821A] rounded-xl p-8 text-center">
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-6 text-white">
              🚀 Automatiza tu <span className="text-[#D4821A]">IMPERIO DIGITAL</span>
            </h2>
            <p className="font-roboto text-lg sm:text-xl text-[#B0B0B0] mb-8 leading-relaxed">
              Convierte cada visitante en cliente mientras duermes. Tu negocio funcionando 24/7 sin que muevas un dedo.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333]">
                <Bot className="w-12 h-12 text-[#D4821A] mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-xl mb-3 text-white">Ventas Automáticas</h3>
                <p className="font-roboto text-[#B0B0B0] text-sm">
                  Tus bots cualifican leads, presentan ofertas irresistibles y cierran ventas mientras tú disfrutas tu tiempo libre
                </p>
              </div>
              
              <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333]">
                <Users className="w-12 h-12 text-[#7E57C2] mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-xl mb-3 text-white">Atención al Cliente</h3>
                <p className="font-roboto text-[#B0B0B0] text-sm">
                  Respuestas instantáneas, soporte técnico perfecto y clientes satisfechos sin contratar personal adicional
                </p>
              </div>
              
              <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333]">
                <Target className="w-12 h-12 text-[#D4821A] mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-xl mb-3 text-white">Lead Generation</h3>
                <p className="font-roboto text-[#B0B0B0] text-sm">
                  Captura emails, números de teléfono y datos valiosos de cada visitante de forma natural y efectiva
                </p>
              </div>
              
              <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333]">
                <Zap className="w-12 h-12 text-[#7E57C2] mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-xl mb-3 text-white">Follow-up Inteligente</h3>
                <p className="font-roboto text-[#B0B0B0] text-sm">
                  Secuencias de seguimiento que nutren prospectos hasta convertirlos en clientes recurrentes
                </p>
              </div>
            </div>

            <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-6 text-white">
              🔗 Integra con <span className="text-[#D4821A]">TODO lo que necesitas</span>
            </h2>
            <p className="font-roboto text-lg sm:text-xl text-[#B0B0B0] mb-6 leading-relaxed">
              Conecta tu Typebot con las plataformas que ya usas y potencia tu negocio al máximo
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-3 bg-[#1E1E1E] p-4 rounded-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="font-roboto text-white">WhatsApp Business</span>
              </div>
              <div className="flex items-center gap-3 bg-[#1E1E1E] p-4 rounded-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="font-roboto text-white">Instagram Direct</span>
              </div>
              <div className="flex items-center gap-3 bg-[#1E1E1E] p-4 rounded-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="font-roboto text-white">Facebook Messenger</span>
              </div>
              <div className="flex items-center gap-3 bg-[#1E1E1E] p-4 rounded-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="font-roboto text-white">Telegram</span>
              </div>
              <div className="flex items-center gap-3 bg-[#1E1E1E] p-4 rounded-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="font-roboto text-white">Shopify</span>
              </div>
              <div className="flex items-center gap-3 bg-[#1E1E1E] p-4 rounded-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="font-roboto text-white">WooCommerce</span>
              </div>
              <div className="flex items-center gap-3 bg-[#1E1E1E] p-4 rounded-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="font-roboto text-white">Zapier</span>
              </div>
              <div className="flex items-center gap-3 bg-[#1E1E1E] p-4 rounded-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="font-roboto text-white">Google Sheets</span>
              </div>
              <div className="flex items-center gap-3 bg-[#1E1E1E] p-4 rounded-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="font-roboto text-white">Mailchimp</span>
              </div>
            </div>
            <p className="font-roboto text-sm text-[#B0B0B0] mt-6">
              Y muchas más... Sin límites de integraciones, sin costos adicionales
            </p>
          </div>
        </div>
      </section>

      {/* Problema y Solución */}
      <section className="py-16 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-8 text-white">
              💸 ¿Cansado de <span className="text-red-400">SANGRAR DINERO</span> cada mes?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-900/20 border border-red-500 rounded-xl p-6">
                <h3 className="font-montserrat font-bold text-xl mb-4 text-red-400">❌ Con otras plataformas:</h3>
                <ul className="space-y-3 text-left font-roboto">
                  <li className="flex items-start gap-2">
                    <CreditCard className="w-5 h-5 text-red-400 mt-0.5" />
                    <span>$49/mes mínimo por funciones básicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
                    <span>Límites absurdos de bots y conversaciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Server className="w-5 h-5 text-red-400 mt-0.5" />
                    <span>Necesitas configurar servidores complejos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-red-400 mt-0.5" />
                    <span>Pagas $588+ al año sin parar</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-900/20 border border-green-500 rounded-xl p-6">
                <h3 className="font-montserrat font-bold text-xl mb-4 text-green-400">✅ Con Typebot Ilimitado:</h3>
                <ul className="space-y-3 text-left font-roboto">
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-green-400 mt-0.5" />
                    <span><strong>$15 dólares UNA SOLA VEZ</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Infinity className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>Bots y chats 100% ILIMITADOS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>Instalación en 2 clics, SIN servidores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Gift className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>VITALÍCIO - nunca más pagas</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#7E57C2]/20 to-[#D4821A]/20 border border-[#D4821A] rounded-xl p-6">
              <p className="font-roboto text-xl text-white mb-4">
                <strong className="text-[#D4821A]">MATEMÁTICA SIMPLE:</strong>
              </p>
              <p className="font-montserrat text-2xl font-bold">
                Otras plataformas: $588+ al año 📈<br />
                <span className="text-[#D4821A]">Typebot Ilimitado: $15 PARA SIEMPRE 💪</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Características Explosivas */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl mb-4 text-white">
              🚀 Typebot Ilimitado
              <span className="block text-[#D4821A] text-2xl sm:text-3xl md:text-4xl mt-2">
                La Máquina de Ventas que Nunca Duerme
              </span>
            </h2>
            <p className="font-roboto text-lg sm:text-xl text-[#B0B0B0] max-w-3xl mx-auto">
              Construye ejércitos de bots que vendan por ti 24/7, sin límites, sin mensualidades, sin complicaciones
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[{
            icon: <Bot className="w-12 h-12 text-[#7E57C2]" />,
            title: "Bots Ilimitados",
            description: "Crea tantos bots como necesites. Sin restricciones, sin límites artificiales. Tu creatividad es el único límite."
          }, {
            icon: <Infinity className="w-12 h-12 text-[#D4821A]" />,
            title: "Conversaciones Sin Fin",
            description: "Millones de chats simultáneos. Cada conversación es una oportunidad de venta que nunca se pierde."
          }, {
            icon: <Server className="w-12 h-12 text-[#7E57C2]" />,
            title: "Zero Configuración",
            description: "Olvídate de servidores, hosting y configuraciones técnicas. Instala en 2 clics y empieza a vender."
          }, {
            icon: <Shield className="w-12 h-12 text-[#D4821A]" />,
            title: "Acceso Vitalicio",
            description: "Paga una vez, úsalo para siempre. Sin trucos, sin renovaciones, sin sorpresas en tu tarjeta."
          }, {
            icon: <Zap className="w-12 h-12 text-[#7E57C2]" />,
            title: "Instalación Instantánea",
            description: "De la compra a tu primer bot funcionando en menos de 5 minutos. Plug & play real."
          }, {
            icon: <Target className="w-12 h-12 text-[#D4821A]" />,
            title: "Conversiones Brutales",
            description: "Cada bot está diseñado para una cosa: convertir visitantes en clientes que pagan."
          }].map((feature, index) => <div key={index} className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333] hover:border-[#7E57C2]/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-montserrat font-bold text-lg mb-3 text-white text-center">{feature.title}</h3>
                <p className="font-roboto text-[#B0B0B0] text-sm text-center">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonios Rápidos */}
      <section className="py-16 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-12 text-white">
            Lo que dicen quienes ya lo tienen:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[{
            text: "\"En 2 semanas recuperé la inversión. Ya van 3 meses facturando con mis bots.\"",
            author: "Miguel R. - Dropshipper"
          }, {
            text: "\"Dejé de pagar $79/mes. Ahora tengo 47 bots funcionando sin parar.\"",
            author: "Laura S. - Coach Online"
          }, {
            text: "\"Mi mejor inversión. Los bots venden mientras duermo.\"",
            author: "Carlos M. - Infoproductor"
          }].map((testimonial, index) => <div key={index} className="bg-[#1E1E1E] border border-[#333] rounded-xl p-6">
                <p className="font-roboto text-[#B0B0B0] mb-4 italic">{testimonial.text}</p>
                <p className="font-montserrat font-bold text-[#D4821A]">{testimonial.author}</p>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Urgencia y Escasez */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 border-2 border-red-500 rounded-xl p-8 text-center">
            <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-6 text-white">
              ⚠️ ADVERTENCIA SERIA
            </h2>
            <div className="space-y-4 font-roboto text-lg">
              <p className="text-white">
                <strong className="text-red-400">Esta página se cierra en minutos</strong> y esta oferta de $15 dólares 
                <strong className="text-red-400"> NUNCA MÁS volverá a estar disponible.</strong>
              </p>
              <p className="text-[#B0B0B0]">
                El precio normal de Typebot Ilimitado es <span className="line-through text-red-400">$197 dólares</span>. 
                Esta es una oferta de última oportunidad SOLO para quienes llegaron hasta aquí.
              </p>
              <p className="text-white font-bold">
                Si cierras esta página, <span className="text-red-400">perderás $168 dólares de descuento</span> y tendrás que conformarte 
                con herramientas limitadas que te sangran dinero cada mes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Principal */}
      <section className="py-16 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-[#7E57C2] to-[#D4821A] p-1 rounded-3xl mb-8">
            <div className="bg-[#1E1E1E] p-8 rounded-3xl">
              
              <div className="mb-8">
                <div className="text-[#808080] line-through text-2xl mb-2 font-roboto">Precio normal: $197 USD</div>
                <div className="text-7xl font-black text-[#D4821A] mb-4 font-montserrat">$15</div>
                <div className="text-[#B0B0B0] font-roboto text-lg mb-2">
              </div>
                <div className="text-green-400 font-montserrat font-bold text-xl">¡Ahorras $168 dólares!</div>
              </div>
              
              
              
              {/* CTA Button */}
              <a href="https://pay.hotmart.com/I101182851S?off=1wg01ej9&checkoutMode=10" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-[#7E57C2] to-[#D4821A] text-white font-montserrat font-bold text-xl px-12 py-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mb-6 w-full max-w-md mx-auto">
                🚀 QUIERO TYPEBOT ILIMITADO POR $15
              </a>
              
              <div className="grid md:grid-cols-3 gap-4 mt-8 text-sm font-roboto">
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Pago 100% Seguro</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <Shield className="w-5 h-5" />
                  <span>Garantía 7 días</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <Download className="w-5 h-5" />
                  <span>Acceso inmediato</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1E1E1E] border border-[#333] rounded-xl p-6">
            <h3 className="font-montserrat font-bold text-xl mb-4 text-white">
              💡 Lo que obtienes AHORA MISMO:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left font-roboto">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <span>Typebot Ilimitado (Licencia Vitalicia)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <span>Bots y conversaciones sin límite</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <span>Instalación automática en 2 clics</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <span>Sin necesidad de servidor propio</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <span>Actualizaciones gratuitas de por vida</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <span>Soporte técnico incluido</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer con segundo botón */}
      <section className="py-8 px-4 sm:px-6 bg-[#121212] border-t border-[#333]">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="font-roboto text-[#B0B0B0] mb-6">
            ¿Aún tienes dudas? Recuerda: <span className="text-[#D4821A] font-bold">Garantía de 7 días o tu dinero de vuelta</span>
          </p>
          
          <p className="font-roboto text-xs text-[#808080]">
            Esta oferta es válida solo en esta página y por tiempo limitado.
          </p>
        </div>
      </section>

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
export default Downsell;