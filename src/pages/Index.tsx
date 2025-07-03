
import React, { useState, useEffect } from 'react';
import { ChevronDown, Bot, DollarSign, Users, Zap, Star, Clock, CheckCircle, ArrowRight, Play, Target, TrendingUp, Shield, Gift, Plus, Minus } from 'lucide-react';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
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

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const checkoutUrl = "https://pay.hotmart.com/X95603477Q?off=yz1gz1p6&checkoutMode=10";

  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] font-light overflow-x-hidden">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      
      {/* Sticky CTA */}
      <div className="fixed top-0 left-0 right-0 bg-[#7E57C2] backdrop-blur-sm z-50 border-b border-[#7E57C2]/20">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-2 sm:py-4 px-4 sm:px-6 gap-2 sm:gap-0">
          <span className="font-montserrat font-semibold text-xs sm:text-sm text-white text-center">⚡ Only 87 accesses left available</span>
          <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="bg-[#D4821A] hover:bg-[#E8941F] text-white px-4 sm:px-6 py-2 rounded-lg font-montserrat font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D4821A]/25 whitespace-nowrap">
            Unlock mine
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-16 sm:pt-20 pb-8 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7E57C2]/5 to-[#D4821A]/5"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto animate-fade-in w-full">
          <div className="mb-6 sm:mb-8">
            <span className="inline-block bg-gradient-to-r from-[#7E57C2] to-[#D4821A] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wide animate-pulse">
              ⚠️ Advanced Digital Mining
            </span>
          </div>
          
          <h1 className="font-montserrat font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 leading-tight px-2">
            Typebot Pro Course: Automate sales and earn on
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7E57C2] to-[#D4821A] mt-1 sm:mt-2">
              autopilot
            </span>
          </h1>

          {/* Vimeo Video */}
          <div className="mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
            <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://player.vimeo.com/video/1059454468?h=0&badge=0&autopause=0&player_id=0&app_id=58479" 
                className="w-full h-full" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                title="Typebot Pro Video"
              ></iframe>
            </div>
          </div>
          
          <p className="font-roboto text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-[#B0B0B0] max-w-4xl mx-auto leading-relaxed px-2">
            <strong className="text-[#E0E0E0]">Master Typebot from basic to advanced and create BOTs that sell by themselves</strong>
          </p>
          
          <div className="mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-[#1E1E1E] border border-[#7E57C2]/30 rounded-xl sm:rounded-2xl px-4 sm:px-8 py-3 sm:py-4 mb-4 sm:mb-6 mx-2">
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-[#D4821A]" />
              <span className="text-[#D4821A] font-montserrat font-bold text-sm sm:text-lg">Invoice $500-$2000 USD monthly</span>
            </div>
          </div>
          
          <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#7E57C2] to-[#D4821A] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-montserrat font-bold text-lg sm:text-xl hover:shadow-2xl hover:shadow-[#7E57C2]/30 transition-all duration-300 hover:scale-105 mb-4 sm:mb-6 inline-block mx-2">
            Unlock mine now
            <ArrowRight className="inline-block ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          
          <p className="font-roboto text-xs sm:text-sm text-[#808080] px-2">For 19 dollars... less than a burger, but this pays every day</p>
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
            {[
              {
                icon: <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-[#7E57C2]" />,
                title: "🚀 Typebot that converts 24/7",
                description: "No videos, no face, no team. Your Typebot bot works while you sleep."
              },
              {
                icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4821A]" />,
                title: "💰 Double your income",
                description: "Sell as an affiliate + resell the complete funnel."
              },
              {
                icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#7E57C2]" />,
                title: "⚡ Installation in 3h",
                description: "Ultra-fast setup, no technical complications."
              }
            ].map((benefit, index) => (
              <div key={index} className="group bg-[#1E1E1E] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#333] hover:border-[#7E57C2]/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#7E57C2]/10">
                <div className="mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse">
                  {benefit.icon}
                </div>
                <h3 className="font-montserrat font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-white">{benefit.title}</h3>
                <p className="font-roboto text-[#B0B0B0] leading-relaxed text-sm sm:text-base">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#7E57C2]/30 to-transparent"></div>

      {/* What's Included */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-white">
            Everything you
            <span className="text-[#7E57C2]"> get</span>
          </h2>
          <p className="font-roboto text-lg sm:text-xl text-[#B0B0B0] mb-12 sm:mb-16 max-w-3xl mx-auto px-2">
            Typebot Pro: complete course from basic to advanced - it's not another fail course, it's a digital warfare tool
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 text-left mb-12 sm:mb-16">
            {[
              "✅ Complete Typebot Pro course (basic-advanced)",
              "✅ +15 structured Typebot modules",
              "✅ +20 editable/clonable Typebot funnels",
              "✅ Integration with AI, WhatsApp, Instagram, web",
              "✅ Copies that persuade without thinking",
              "✅ Real automation structure that prints money",
              "✅ Resale license included",
              "✅ Private community + support",
              "✅ Validated premium templates"
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-[#1E1E1E] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#333] hover:border-[#7E57C2]/30 transition-all duration-300">
                <span className="font-roboto text-sm sm:text-lg text-[#E0E0E0]">{item}</span>
              </div>
            ))}
          </div>

          {/* Flow Models */}
          <div className="mb-6 sm:mb-8">
            <h3 className="font-montserrat font-bold text-xl sm:text-2xl mb-6 sm:mb-8 text-white">
              🎯 Ready <span className="text-[#D4821A]">flow models</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-left">
              {[
                "🎰 Sell lottery with real-time results (and charge for each ticket sold)",
                "🍔 Take automatic delivery orders and calculate total + shipping instantly",
                "🏠 Capture clients for real estate without showing face",
                "🚗 Show cars and schedule test-drives without human contact",
                "🍰 Make bakeries sell alone via WhatsApp",
                "💈 Barbershops that schedule clients while sleeping",
                "🦷 Clinics using AI bots to respond and capture patients",
                "💆 Aesthetics selling services with automatic follow-up",
                "📦 Online stores that close sales without Instagram or team",
                "⚖ Capture clients for lawyers without lifting a finger",
                "📺 Sell IPTV direct to WhatsApp without blocks or crashes",
                "📶 Sell internet in rural areas without calls or visits",
                "🏋 Gyms that fill classes without receptionists",
                "📊 Bots that query CNPJ, CEP, emails and more like hackers",
                "🤖 ChatGPT selling like your best closer"
              ].map((flow, index) => (
                <div key={index} className="bg-[#1E1E1E] p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#333] hover:border-[#D4821A]/30 transition-all duration-300 hover:transform hover:scale-105">
                  <span className="font-roboto text-xs sm:text-sm text-[#E0E0E0] leading-relaxed">{flow}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-center mb-12 sm:mb-16 text-white">
            How it <span className="text-[#7E57C2]">works</span>
          </h2>
          
          <div className="space-y-6 sm:space-y-8">
            {[
              {
                number: "01",
                title: "Activate your BOT",
                description: "Configure in minutes using our exact templates"
              },
              {
                number: "02",
                title: "Bot converses and qualifies leads",
                description: "Your bot works 24/7 identifying potential customers"
              },
              {
                number: "03",
                title: "Bot shows products",
                description: "Automatically presents perfect solutions for each lead"
              },
              {
                number: "04",
                title: "BOT closes sales and you refill your wallet",
                description: "Receive automatic payments while doing other things"
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 bg-[#1E1E1E] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#333] hover:border-[#7E57C2]/50 transition-all duration-500 group">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#7E57C2] to-[#D4821A] rounded-full flex items-center justify-center font-montserrat text-xl sm:text-2xl font-black text-white group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="font-montserrat font-bold text-xl sm:text-2xl mb-2 sm:mb-3 text-white">{step.title}</h3>
                  <p className="font-roboto text-[#B0B0B0] text-base sm:text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Testimonials */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-center mb-12 sm:mb-16 text-white">
            Real <span className="text-[#7E57C2]">results</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Carlos M.",
                niche: "Digital Marketing",
                quote: "In 2 weeks I already recovered the investment. The bot closes by itself."
              },
              {
                name: "Ana L.",
                niche: "E-commerce",
                quote: "I invoiced $1,200 the first month without touching anything manually."
              },
              {
                name: "Diego R.",
                niche: "Consulting",
                quote: "The resale license generated an additional $3,000 for me."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#1E1E1E] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#333] hover:border-[#7E57C2]/30 transition-all duration-300 hover:transform hover:scale-105">
                <p className="font-roboto text-[#E0E0E0] mb-4 sm:mb-6 italic text-sm sm:text-base">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#7E57C2] to-[#D4821A] rounded-full flex items-center justify-center font-montserrat font-bold text-white mr-3 sm:mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold text-white text-sm sm:text-base">{testimonial.name}</div>
                    <div className="font-roboto text-xs sm:text-sm text-[#B0B0B0]">{testimonial.niche}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Offer */}
      <section id="offer" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-[#D4821A] text-[#121212] py-2 sm:py-3 px-4 sm:px-8 rounded-full inline-block mb-6 sm:mb-8 font-montserrat font-bold animate-pulse text-sm sm:text-base">
            🔥 LAUNCH PRICE - This price never returns
          </div>
          
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl md:text-6xl mb-8 sm:mb-12 text-white">
            Premium
            <span className="text-[#D4821A]"> access</span>
          </h2>
          
          <div className="bg-gradient-to-r from-[#7E57C2] to-[#D4821A] p-1 rounded-2xl sm:rounded-3xl mb-8 sm:mb-12 max-w-lg mx-auto">
            <div className="bg-[#1E1E1E] p-6 sm:p-10 rounded-2xl sm:rounded-3xl">
              <div className="text-[#808080] line-through text-lg sm:text-xl mb-3 sm:mb-4 font-roboto">Normal price: $97 USD</div>
              <div className="text-5xl sm:text-7xl font-black text-[#D4821A] mb-4 sm:mb-6 font-montserrat">$19</div>
              
              <div className="bg-[#7E57C2]/20 border-2 border-[#7E57C2] rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
                <div className="text-[#7E57C2] font-montserrat font-bold mb-3 sm:mb-4 text-sm sm:text-base">⏰ Price goes up in minutes:</div>
                <div className="flex justify-center gap-2 sm:gap-4 text-lg sm:text-2xl font-bold font-montserrat">
                  <div className="text-center">
                    <div className="bg-[#7E57C2] px-2 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-white text-sm sm:text-base">{timeLeft.hours.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-[#808080] mt-1 sm:mt-2 font-roboto">HOURS</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#7E57C2] px-2 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-white text-sm sm:text-base">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-[#808080] mt-1 sm:mt-2 font-roboto">MIN</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#7E57C2] px-2 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-white text-sm sm:text-base">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-[#808080] mt-1 sm:mt-2 font-roboto">SEC</div>
                  </div>
                </div>
              </div>
              
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-[#D4821A] to-[#E8941F] text-white py-4 sm:py-5 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-montserrat text-lg sm:text-xl font-bold hover:shadow-2xl hover:shadow-[#D4821A]/25 transition-all duration-300 hover:scale-105 mb-4 sm:mb-6 inline-block">
                🚀 YES, I UNLOCK MY MINE
              </a>
              
              <div className="text-xs sm:text-sm text-[#B0B0B0] font-roboto">
                ✅ Instant access | ✅ 7-day guarantee | ✅ Support included
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-center mb-3 sm:mb-4 text-white">
            Exclusive
            <span className="text-[#D4821A]"> bonuses</span>
          </h2>
          <p className="font-roboto text-lg sm:text-xl text-[#B0B0B0] text-center mb-12 sm:mb-16">
            Total value: <span className="text-[#D4821A] font-bold">$847 USD</span> - FREE for the first 100
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "+1,000 premium flows",
                value: "$197",
                description: "More than 1000 funnels tested in multiple niches and markets",
                showFlows: true
              },
              {
                title: "Templates for WhatsApp/Instagram/WordPress",
                value: "$297",
                description: "Optimized templates for each platform",
                showFlows: false
              },
              {
                title: "Validated copies for ads and recovery",
                value: "$197",
                description: "Converting texts tested in the market",
                showFlows: false
              },
              {
                title: "Complete resale rights",
                value: "$156",
                description: "Resell the entire system and keep 100%",
                showFlows: false
              }
            ].map((bonus, index) => (
              <div key={index} className="bg-[#1E1E1E] border-2 border-[#D4821A]/30 p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:border-[#D4821A] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#D4821A]/10 group">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4821A] group-hover:animate-pulse" />
                  <span className="bg-[#D4821A] text-[#121212] px-3 sm:px-4 py-1 sm:py-2 rounded-full font-montserrat text-xs sm:text-sm font-bold">
                    VALUE: {bonus.value}
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-white">{bonus.title}</h3>
                <p className="font-roboto text-[#B0B0B0] mb-3 sm:mb-4 text-sm sm:text-base">{bonus.description}</p>
                
                {bonus.showFlows && (
                  <div>
                    <button 
                      onClick={() => setOpenBonusFlows(!openBonusFlows)} 
                      className="flex items-center gap-2 text-[#D4821A] font-montserrat font-semibold hover:text-[#E8941F] transition-colors duration-300 mb-3 sm:mb-4 text-sm sm:text-base"
                    >
                      View included models
                      <div className={`transition-transform duration-300 ${openBonusFlows ? 'rotate-45' : ''}`}>
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </button>
                    
                    {openBonusFlows && (
                      <div className="bg-[#121212] rounded-lg sm:rounded-xl p-3 sm:p-4 animate-fade-in">
                        <div className="grid gap-1 sm:gap-2 text-xs">
                          {[
                            "🎰 Sell lottery with real-time results (and charge for each ticket sold)",
                            "🍔 Take automatic delivery orders and calculate total + shipping instantly",
                            "🏠 Capture clients for real estate without showing face",
                            "🚗 Show cars and schedule test-drives without human contact",
                            "🍰 Make bakeries sell alone via WhatsApp",
                            "💈 Barbershops that schedule clients while sleeping",
                            "🦷 Clinics using AI bots to respond and capture patients",
                            "💆 Aesthetics selling services with automatic follow-up",
                            "📦 Online stores that close sales without Instagram or team",
                            "⚖ Capture clients for lawyers without lifting a finger",
                            "📺 Sell IPTV direct to WhatsApp without blocks or crashes",
                            "📶 Sell internet in rural areas without calls or visits",
                            "🏋 Gyms that fill classes without receptionists",
                            "📊 Bots that query CNPJ, CEP, emails and more like hackers",
                            "🤖 ChatGPT selling like your best closer"
                          ].map((flow, flowIndex) => (
                            <div key={flowIndex} className="text-[#B0B0B0] font-roboto leading-relaxed border-l-2 border-[#D4821A]/30 pl-2 sm:pl-3 py-1 text-xs sm:text-sm">
                              {flow}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-center mb-12 sm:mb-16 text-white">
            Frequently asked
            <span className="text-[#7E57C2]"> questions</span>
          </h2>
          
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                question: "Do I need to know how to program?",
                answer: "Not at all. Everything is designed so anyone can set up their bot in less than 3 hours, without technical knowledge."
              },
              {
                question: "Can I really earn $500-$2000 monthly?",
                answer: "Yes, our average students reach these numbers after the first month. It depends on your dedication and implementation."
              },
              {
                question: "Is the resale license real?",
                answer: "Totally real. You can resell the complete system and keep 100% of the profits. It's an integral part of the course."
              },
              {
                question: "What if it doesn't work for me?",
                answer: "Total 7-day guarantee. If you're not satisfied, we'll refund every cent without questions."
              },
              {
                question: "How long do I have access?",
                answer: "Lifetime access to the course, free updates and permanent access to the exclusive community."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#1E1E1E] border border-[#333] rounded-xl sm:rounded-2xl overflow-hidden hover:border-[#7E57C2]/50 transition-all duration-300">
                <button 
                  className="w-full p-6 sm:p-8 text-left flex justify-between items-center hover:bg-[#222] transition-all duration-300 group" 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="font-montserrat font-semibold text-lg sm:text-xl text-white group-hover:text-[#7E57C2] transition-colors duration-300 pr-4">{faq.question}</h3>
                  <div className={`transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-45' : ''}`}>
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#7E57C2]" />
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 animate-fade-in">
                    <p className="font-roboto text-[#B0B0B0] leading-relaxed text-base sm:text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#7E57C2]/20 to-[#D4821A]/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8 text-white">
            The moment is
            <span className="text-[#D4821A]"> NOW</span>
          </h2>
          
          <p className="font-roboto text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-[#B0B0B0] max-w-3xl mx-auto leading-relaxed px-2">
            While you read this, others are already mastering Typebot and generating their first income.
            <strong className="text-white"> Are you going to stay behind?</strong>
          </p>
          
          <div className="bg-[#7E57C2]/20 border-2 border-[#7E57C2] rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 max-w-md mx-auto">
            <div className="text-[#7E57C2] font-montserrat font-bold mb-2 text-sm sm:text-base">⚠️ LAST WARNING</div>
            <div className="text-white font-roboto text-sm sm:text-base">Only <span className="font-bold text-[#D4821A]">87 accesses</span> left available</div>
          </div>
          
          <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#D4821A] to-[#E8941F] text-white px-8 sm:px-12 py-5 sm:py-6 rounded-xl sm:rounded-2xl font-montserrat text-xl sm:text-2xl font-bold hover:shadow-2xl hover:shadow-[#D4821A]/25 transition-all duration-300 hover:scale-105 mb-4 sm:mb-6 inline-block">
            🚀 UNLOCK MY GOLD MINE
          </a>
          
          <p className="font-roboto text-[#808080] text-sm sm:text-base">Investment: $19 USD | 7-day guarantee | Instant access</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-[#0A0A0A] border-t border-[#333]">
        <div className="container mx-auto text-center">
          <div className="mb-4 sm:mb-6">
            <p className="font-roboto text-[#D4821A] font-semibold mb-2 text-sm sm:text-base">7-day satisfaction guarantee or we refund</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-4 sm:mb-6">
            <a href="#" className="font-roboto text-[#808080] hover:text-[#7E57C2] transition-colors duration-300 text-sm sm:text-base">FAQ</a>
            <a href="#" className="font-roboto text-[#808080] hover:text-[#7E57C2] transition-colors duration-300 text-sm sm:text-base">Support</a>
            <a href="#" className="font-roboto text-[#808080] hover:text-[#7E57C2] transition-colors duration-300 text-sm sm:text-base">Terms</a>
          </div>
          <p className="font-roboto text-[#666] text-xs sm:text-sm">© 2024 Typebot Pro - Digital Mining. All rights reserved.</p>
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

export default Index;
