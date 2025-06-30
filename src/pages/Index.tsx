
import React, { useState, useEffect } from 'react';
import { ChevronDown, Bot, DollarSign, Users, Zap, Star, Clock, CheckCircle, ArrowRight, Play, Target, TrendingUp, Shield, Gift } from 'lucide-react';

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
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Sticky CTA */}
      <div className="fixed top-0 left-0 right-0 bg-purple-600 text-white py-3 px-4 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <span className="font-bold text-sm md:text-base">🔥 Solo quedan {87} accesos disponibles</span>
          <button 
            onClick={scrollToOffer}
            className="bg-white text-purple-600 px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Desbloquear Ahora
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">
              ⚠️ ALERTA URGENTE
            </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            Estás a punto de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse">
              desbloquear una
            </span>
            <span className="block text-yellow-400">MINA DE ORO</span>
            digital
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            🤖 Automatiza tus ventas sin programar. Aprende a crear un <strong className="text-purple-400">BOT que vende solo</strong>... 
            y gana dinero revendiendo ese mismo sistema a afiliados.
          </p>
          
          <div className="mb-8">
            <div className="inline-flex items-center bg-green-500/20 border border-green-500 rounded-full px-6 py-3 mb-4">
              <DollarSign className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-green-400 font-bold">Gana $500-$2000 USD mensuales</span>
            </div>
          </div>
          
          <button 
            onClick={scrollToOffer}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-purple-500/25 transition-all transform hover:scale-105 animate-pulse"
          >
            Desbloquear Mina de Oro Ahora
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </button>
          
          <p className="text-sm text-gray-400 mt-4">
            ⏰ Oferta limitada: Solo 100 accesos | Precio normal: $297 USD
          </p>
        </div>
        
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            ¿Qué obtienes con esta
            <span className="text-purple-400"> ARMA DIGITAL</span>?
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            No es solo un curso... es tu <strong>arsenal completo</strong> para dominar el juego digital sin mostrar la cara
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="w-12 h-12 text-purple-400" />,
                title: "Bot Automatizado Completo",
                description: "Sistema 100% automatizado que vende por ti 24/7, sin que tengas que estar presente"
              },
              {
                icon: <DollarSign className="w-12 h-12 text-green-400" />,
                title: "Licencia de Reventa",
                description: "Revende este mismo sistema a otros y quédate con el 100% de las ganancias"
              },
              {
                icon: <Users className="w-12 h-12 text-blue-400" />,
                title: "Comunidad Exclusiva",
                description: "Acceso VIP a grupo privado con estrategias avanzadas y networking"
              },
              {
                icon: <Zap className="w-12 h-12 text-yellow-400" />,
                title: "Configuración Express",
                description: "Monta tu sistema en menos de 2 horas, sin conocimientos técnicos"
              },
              {
                icon: <Target className="w-12 h-12 text-red-400" />,
                title: "Funnels Probados",
                description: "Templates de embudos que han generado más de $100K en ventas"
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-purple-400" />,
                title: "Escalabilidad Infinita",
                description: "Multiplica tus ingresos sin aumentar tu tiempo de trabajo"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Cómo funciona este
            <span className="text-purple-400"> SISTEMA</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16">
            4 pasos simples para convertirte en el <strong>amo del funnel digital</strong>
          </p>
          
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Configura tu Bot",
                description: "Siguiendo nuestras plantillas exactas, montas tu bot de ventas en menos de 2 horas",
                icon: <Bot className="w-8 h-8" />
              },
              {
                step: "02",
                title: "Activa el Piloto Automático",
                description: "Tu sistema empieza a trabajar 24/7, capturando leads y cerrando ventas mientras duermes",
                icon: <Play className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Cobra las Ganancias",
                description: "Recibe pagos automáticos en tu cuenta cada vez que el bot hace una venta",
                icon: <DollarSign className="w-8 h-8" />
              },
              {
                step: "04",
                title: "Escala y Revende",
                description: "Usa la licencia de reventa para multiplicar tus ingresos vendiendo el sistema a otros",
                icon: <TrendingUp className="w-8 h-8" />
              }
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-8 bg-gray-800/30 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-2xl font-black">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-purple-400">{step.icon}</div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Selling Proposition */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            ¿Por qué este curso es
            <span className="text-yellow-400"> ÚNICO</span>?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-yellow-500">
              <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Licencia de Reventa Incluida</h3>
              <p className="text-gray-300">Eres el ÚNICO que puede revender este sistema. No hay competencia, no hay saturación.</p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-purple-500">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Comunidad Exclusiva</h3>
              <p className="text-gray-300">Acceso VIP a estrategias que NO se comparten en ningún otro lugar del internet.</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-8 rounded-2xl border border-green-500">
            <h3 className="text-3xl font-bold mb-4 text-green-400">
              🎯 GARANTÍA BRUTAL: Si no recuperas tu inversión en 30 días, te devolvemos TODO
            </h3>
            <p className="text-xl text-gray-300">
              Estamos tan seguros de que esto funciona, que asumimos todo el riesgo por ti.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="offer" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-red-500 text-white py-2 px-6 rounded-full inline-block mb-6 animate-pulse">
            🔥 OFERTA LIMITADA - Solo 100 accesos
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Precio de
            <span className="text-green-400"> LANZAMIENTO</span>
          </h2>
          
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-3xl mb-8 max-w-md mx-auto">
            <div className="bg-gray-900 p-8 rounded-3xl">
              <div className="text-gray-400 line-through text-xl mb-2">Precio normal: $297 USD</div>
              <div className="text-6xl font-black text-green-400 mb-4">$15</div>
              <div className="text-xl text-gray-300 mb-6">USD - Pago único</div>
              
              <div className="bg-red-500/20 border border-red-500 rounded-xl p-4 mb-6">
                <div className="text-red-400 font-bold mb-2">⏰ Esta oferta expira en:</div>
                <div className="flex justify-center gap-4 text-2xl font-bold">
                  <div className="text-center">
                    <div className="bg-red-500 px-3 py-2 rounded">{timeLeft.hours.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-gray-400 mt-1">HORAS</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-500 px-3 py-2 rounded">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-gray-400 mt-1">MIN</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-500 px-3 py-2 rounded">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-gray-400 mt-1">SEG</div>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-xl text-xl font-bold hover:shadow-2xl hover:shadow-green-500/25 transition-all transform hover:scale-105 mb-4">
                🚀 DESBLOQUEAR ACCESO AHORA
              </button>
              
              <div className="text-sm text-gray-400">
                ✅ Acceso inmediato | ✅ Garantía 30 días | ✅ Soporte incluido
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            BONOS
            <span className="text-yellow-400"> EXCLUSIVOS</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16">
            Valor total de los bonos: <span className="text-green-400 font-bold">$847 USD</span> - GRATIS para los primeros 100
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Templates de Email Marketing",
                value: "$197",
                description: "50+ plantillas de emails que convierten al 15%+",
                icon: <Gift className="w-8 h-8 text-yellow-400" />
              },
              {
                title: "Script de Llamadas de Cierre",
                value: "$297",
                description: "El guión exacto para cerrar ventas por teléfono",
                icon: <Gift className="w-8 h-8 text-yellow-400" />
              },
              {
                title: "Masterclass: Tráfico Gratuito",
                value: "$397",
                description: "Cómo generar leads sin gastar en publicidad",
                icon: <Gift className="w-8 h-8 text-yellow-400" />
              }
            ].map((bonus, index) => (
              <div key={index} className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 p-6 rounded-2xl hover:border-yellow-500 transition-all hover:transform hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  {bonus.icon}
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    VALOR: {bonus.value}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{bonus.title}</h3>
                <p className="text-gray-300">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Preguntas
            <span className="text-purple-400"> FRECUENTES</span>
          </h2>
          
          <div className="space-y-4">
            {[
              {
                question: "¿Necesito conocimientos técnicos?",
                answer: "Para nada. Todo está diseñado para que cualquier persona, sin importar su nivel técnico, pueda implementarlo en menos de 2 horas."
              },
              {
                question: "¿Realmente puedo ganar $500-$2000 USD mensuales?",
                answer: "Sí, pero depende de tu dedicación. Nuestros estudiantes promedio generan entre $500-$2000 USD mensuales después del primer mes de implementación."
              },
              {
                question: "¿La licencia de reventa es real?",
                answer: "Totalmente real. Puedes revender este sistema completo y quedarte con el 100% de las ganancias. Es parte del curso."
              },
              {
                question: "¿Qué pasa si no funciona para mí?",
                answer: "Garantía total de 30 días. Si no recuperas tu inversión, te devolvemos cada centavo sin preguntas."
              },
              {
                question: "¿Cuánto tiempo tengo acceso?",
                answer: "Acceso de por vida al curso, actualizaciones gratuitas y acceso permanente a la comunidad exclusiva."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800/50 transition-all"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  <ChevronDown className={`w-6 h-6 text-purple-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            El momento es
            <span className="text-yellow-400"> AHORA</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Mientras lees esto, otros ya están implementando este sistema y generando sus primeros ingresos.
            <strong className="text-white"> ¿Vas a quedarte atrás?</strong>
          </p>
          
          <div className="bg-red-500/20 border border-red-500 rounded-xl p-6 mb-8 max-w-md mx-auto">
            <div className="text-red-400 font-bold mb-2">⚠️ ÚLTIMO AVISO</div>
            <div className="text-white">Solo quedan <span className="font-bold text-yellow-400">87 accesos</span> disponibles</div>
          </div>
          
          <button 
            onClick={scrollToOffer}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-6 rounded-full text-2xl font-bold hover:shadow-2xl hover:shadow-green-500/25 transition-all transform hover:scale-105 mb-6"
          >
            🚀 DESBLOQUEAR MI MINA DE ORO
          </button>
          
          <p className="text-gray-400">
            Precio de lanzamiento: $15 USD | Garantía 30 días | Acceso inmediato
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 Mina de Oro Digital. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Términos de uso | Política de privacidad | Soporte</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
