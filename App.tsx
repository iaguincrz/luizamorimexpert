
import React, { useState } from 'react';
import { 
  WHATSAPP_URL, 
  INSTAGRAM_URL, 
  HERO_IMAGES, 
  GALLERY_IMAGES, 
  FEATURES, 
  STEPS 
} from './constants';
import Lightbox from './components/Lightbox';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen selection:bg-whatsapp selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-12 pt-12">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGES[0]} 
            alt="Luiz Amorim Hero" 
            className="w-full h-full object-cover grayscale-[20%] brightness-[40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1 mb-6 text-xs font-bold uppercase tracking-widest bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
              Personal Trainer & Reabilitação
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Eu sou <span className="text-whatsapp">Luiz Amorim</span>, seu novo parceiro de performance em Pirenópolis.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 font-light">
              Recupere sua mobilidade, supere lesões crônicas e alcance a estética de um atleta com acompanhamento de elite.
            </p>
            
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 bg-whatsapp text-black font-bold text-lg rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(37,211,102,0.4)]"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
              Agendar Primeira Consulta Gratuita
            </a>
            <p className="mt-4 text-zinc-500 text-sm flex items-center gap-2">
              <i className="fa-solid fa-clock-rotate-left"></i>
              Resposta rápida • Sem compromisso
            </p>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-whatsapp/20 rounded-2xl blur-xl group-hover:bg-whatsapp/30 transition duration-500"></div>
                <img 
                  src={HERO_IMAGES[1]} 
                  alt="Luiz Amorim Perfil" 
                  className="relative rounded-2xl w-full h-[500px] object-cover shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-8">Muito prazer, sou Luiz.</h2>
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p>
                  Minha missão vai muito além de "contar repetições". Como atleta <span className="text-white font-semibold">Top 3 Classic Physique</span>, entendo que a estética é consequência de uma biomecânica perfeita.
                </p>
                <p>
                  Sou especialista no <span className="text-white font-semibold">Método MTOR</span>, focado em treinamento e reabilitação de lesões. Seja para sair do sedentarismo sem dor ou para buscar o próximo nível da consultoria on-line, eu desenho o mapa para você chegar lá.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Consultoria On-line disponível para todo o mundo",
                    "Foco em Reabilitação de Lesões (MTOR)",
                    "Protocolos testados em atletas de alto rendimento",
                    "Acompanhamento direto e sem intermediários"
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <i className="fa-solid fa-circle-check text-whatsapp mt-1"></i>
                      <span className="text-zinc-300">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS (GALLERY) */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Resultados Reais</h2>
            <p className="text-zinc-500">Transformações físicas e superações que provam o método.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((img, index) => (
              <div 
                key={index} 
                className="group relative cursor-pointer overflow-hidden rounded-xl aspect-[3/4]"
                onClick={() => setSelectedImage(img.url)}
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <i className="fa-solid fa-magnifying-glass-plus text-3xl text-white"></i>
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-center text-xs text-zinc-600 italic">
            *Resultados podem variar de pessoa para pessoa. Fotos autorizadas pelos alunos.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">Por que treinar comigo?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <div key={i} className="p-8 bg-zinc-950 border border-zinc-800 rounded-2xl hover:border-whatsapp/50 transition-colors group">
                <div className="w-14 h-14 bg-zinc-800 flex items-center justify-center rounded-xl mb-6 group-hover:bg-whatsapp group-hover:text-black transition-colors">
                  <i className={`${feature.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 bg-whatsapp text-black">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-extrabold mb-6">Chega de tentar e não ver mudança.</h2>
          <p className="text-black/80 mb-8 text-lg">
            Você não precisa de mais um "treino genérico". Você precisa de direção e técnica correta.
          </p>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
          >
            Falar agora com o Luiz no WhatsApp
          </a>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">Sua Jornada Começa Aqui</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-zinc-800 z-0"></div>
            {STEPS.map((step, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-whatsapp text-black rounded-full flex items-center justify-center mx-auto mb-8 font-black text-2xl shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-zinc-500">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-whatsapp font-medium flex items-center justify-center gap-2">
              <i className="fa-solid fa-gift"></i>
              Primeira consulta gratuita e sem compromisso.
            </p>
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (CARROSSEL) */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Bastidores & Autoridade</h2>
          <div className="flex gap-4 overflow-x-auto pb-8 snap-x scrollbar-hide">
            {[HERO_IMAGES[2], HERO_IMAGES[3], ...HERO_IMAGES].map((url, i) => (
              <div key={i} className="min-w-[300px] h-[400px] snap-center rounded-2xl overflow-hidden relative group">
                <img src={url} alt={`Expert ${i}`} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <p className="text-white text-sm font-semibold">Atendimento Personalizado</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 bg-gradient-premium relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">O shape que você quer está a um <span className="text-whatsapp">"Olá"</span> de distância.</h2>
          <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
            Não deixe para segunda-feira o que podemos avaliar hoje. Vagas para consultoria e presencial são limitadas.
          </p>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-12 py-6 bg-whatsapp text-black font-extrabold text-xl rounded-2xl animate-float shadow-[0_10px_40px_rgba(37,211,102,0.3)]"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            Quero minha avaliação gratuita
          </a>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 bg-black border-t border-zinc-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-1">Luiz Amorim</h3>
            <p className="text-zinc-600 text-sm">Personal Trainer • Pirenópolis, GO</p>
          </div>
          
          <div className="flex gap-6 text-2xl">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-whatsapp transition-colors">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>

          <p className="text-zinc-700 text-xs">
            © {new Date().getFullYear()} Luiz Amorim Personal. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* FLOATING ELEMENTS */}
      <a 
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-whatsapp text-black w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform md:hidden"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>

      {/* AI ASSISTANT */}
      <AIChat />

      {/* LIGHTBOX */}
      <Lightbox 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />

    </div>
  );
};

export default App;
