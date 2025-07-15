
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Star, Zap } from "lucide-react";

const Downsell = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <div className="bg-red-600 text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            ÚLTIMA CHANCE - Esta oferta expira em breve!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Espera! Não vá embora ainda...
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
            Entendo que o investimento pode parecer alto. Que tal uma <span className="font-bold text-red-600">oferta especial</span> só para você?
          </p>
          
          {/* Countdown Timer Visual */}
          <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 max-w-md mx-auto mb-8">
            <p className="text-red-800 font-semibold">⏰ Oferta expira em:</p>
            <div className="text-2xl font-bold text-red-600">14:59</div>
            <p className="text-sm text-red-700">minutos restantes</p>
          </div>
        </div>

        {/* Video Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Assista esta mensagem especial:
          </h2>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <iframe 
              src="https://player.vimeo.com/video/1101531216?h=0&badge=0&autopause=0&player_id=0&app_id=58479" 
              className="w-full h-full" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
              title="Oferta Especial Downsell"
            ></iframe>
          </div>
        </div>

        {/* Special Offer Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-2 border-red-200 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-center">
              <CardTitle className="text-2xl md:text-3xl mb-2">
                🔥 OFERTA EXCLUSIVA DE DOWNSELL
              </CardTitle>
              <CardDescription className="text-red-100 text-lg">
                Versão Essencial com 70% de Desconto
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl text-gray-500 line-through">R$ 497</span>
                  <span className="text-4xl md:text-5xl font-bold text-green-600">R$ 147</span>
                </div>
                <p className="text-gray-600">ou 12x de R$ 14,70</p>
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mt-4 inline-block">
                  <p className="text-yellow-800 font-semibold">💰 Você economiza R$ 350!</p>
                </div>
              </div>

              {/* What's Included */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-center">✅ O que você recebe:</h3>
                  <ul className="space-y-3">
                    {[
                      "Typebot Pro Licença Vitalícia",
                      "Todos os Templates Essenciais",
                      "Integração com WhatsApp",
                      "Suporte por 30 dias",
                      "Treinamento Básico (2 horas)",
                      "Comunidade VIP"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-center">🚫 Não inclui:</h3>
                  <ul className="space-y-3 text-gray-600">
                    {[
                      "Templates Premium Avançados",
                      "Mentoria Individual",
                      "Suporte Prioritário Vitalício",
                      "Certificação Oficial",
                      "Atualizações Automáticas",
                      "Consultoria Estratégica"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="w-5 h-5 text-red-400 flex-shrink-0">❌</span>
                        <span className="line-through">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Urgency Elements */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold text-red-700">Por que esta oferta é limitada?</h3>
                </div>
                <ul className="space-y-2 text-red-700">
                  <li>• Apenas para pessoas que assistiram ao vídeo completo</li>
                  <li>• Máximo de 50 pessoas por dia</li>
                  <li>• Preço volta ao normal em 15 minutos</li>
                  <li>• Não será oferecida novamente</li>
                </ul>
              </div>

              <!-- HOTMART - Sales Funnel Widget -->
              <!--- sales funnel container --->
              <div id="hotmart-sales-funnel-downsell" className="mb-8"></div>
              
              <!--- script load and setup --->
              <script src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"></script>
              <script>
                checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel-downsell')
              </script>
              <!-- HOTMART - Sales Funnel Widget -->

              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-xl font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  🔥 QUERO APROVEITAR ESTA OFERTA AGORA
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Pagamento 100% seguro • Garantia de 7 dias
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Proof */}
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Veja o que nossos clientes estão dizendo:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Maria Santos",
                text: "Mesmo com a versão essencial consegui automatizar meu atendimento e aumentar minhas vendas em 150%!",
                rating: 5
              },
              {
                name: "João Silva", 
                text: "Por R$ 147 foi o melhor investimento que fiz. Já recuperei o valor na primeira semana!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-3">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Final Warning */}
        <div className="text-center">
          <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-yellow-800 mb-2">⚠️ ATENÇÃO</h3>
            <p className="text-yellow-700">
              Se você sair desta página, perderá para sempre esta oportunidade única. 
              O preço voltará para R$ 497 e não haverá uma segunda chance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downsell;
