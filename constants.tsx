
import { ImageItem, FeatureItem, StepItem } from './types';

export const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5562993453916&text=Olá Luiz, vim através do seu site e gostaria de agendar minha primeira consulta gratuita.&type=phone_number&app_absent=0";
export const INSTAGRAM_URL = "https://www.instagram.com/luizamorimpersonal/";

export const HERO_IMAGES = [
  "https://i.imgur.com/KrSM1Dw.jpeg",
  "https://i.imgur.com/2r4ZlIm.jpeg",
  "https://i.imgur.com/EOl6IGk.jpeg",
  "https://i.imgur.com/cnrFmPK.jpeg"
];

export const GALLERY_IMAGES: ImageItem[] = [
  { url: "https://i.imgur.com/oPGZSHX.jpeg", alt: "Resultado Luiz Amorim 1" },
  { url: "https://i.imgur.com/wvse8jL.jpeg", alt: "Resultado Luiz Amorim 2" },
  { url: "https://i.imgur.com/NwE2dHy.jpeg", alt: "Resultado Luiz Amorim 3" },
  { url: "https://i.imgur.com/Cx3OEgH.png", alt: "Resultado Luiz Amorim 4" },
  { url: "https://i.imgur.com/gcylqSP.png", alt: "Resultado Luiz Amorim 5" },
  { url: "https://i.imgur.com/puxngmJ.png", alt: "Resultado Luiz Amorim 6" },
  { url: "https://i.imgur.com/2wFQcPq.png", alt: "Resultado Luiz Amorim 7" },
  { url: "https://i.imgur.com/0vE5B4F.png", alt: "Resultado Luiz Amorim 8" },
  { url: "https://i.imgur.com/OqhOGtw.png", alt: "Resultado Luiz Amorim 9" },
  { url: "https://i.imgur.com/bAecOHS.png", alt: "Resultado Luiz Amorim 10" },
  { url: "https://i.imgur.com/GcSIUY2.png", alt: "Resultado Luiz Amorim 11" },
  { url: "https://i.imgur.com/YACY1XA.png", alt: "Resultado Luiz Amorim 12" },
  { url: "https://i.imgur.com/6YHp25x.png", alt: "Resultado Luiz Amorim 13" },
  { url: "https://i.imgur.com/8qEmYSK.png", alt: "Resultado Luiz Amorim 14" },
  { url: "https://i.imgur.com/F1OxWWv.png", alt: "Resultado Luiz Amorim 15" },
  { url: "https://i.imgur.com/IxkDvVw.png", alt: "Resultado Luiz Amorim 16" }
];

export const FEATURES: FeatureItem[] = [
  {
    title: "Avaliação Honestíssima",
    description: "Sem promessas vazias. Analiso sua biomecânica e saúde atual para traçar o caminho real.",
    icon: "fa-solid fa-clipboard-check"
  },
  {
    title: "Especialista MTOR",
    description: "Foco total em treinamento e reabilitação de lesões com metodologia científica.",
    icon: "fa-solid fa-bone"
  },
  {
    title: "Atendimento Personalizado",
    description: "Você não é apenas um número. Cada treino é planejado exclusivamente para seu objetivo.",
    icon: "fa-solid fa-user-gear"
  },
  {
    title: "Mindset de Atleta",
    description: "Top 3 Classic Physique. Trago a disciplina do palco para o seu dia a dia.",
    icon: "fa-solid fa-trophy"
  },
  {
    title: "Clareza nos Processos",
    description: "Você entende o 'porquê' de cada exercício. Autonomia gera resultados duradouros.",
    icon: "fa-solid fa-lightbulb"
  },
  {
    title: "Consultoria On-line",
    description: "Leve meu método para qualquer lugar do mundo com suporte constante.",
    icon: "fa-solid fa-mobile-screen-button"
  }
];

export const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Contato no WhatsApp",
    description: "Você clica no botão e me envia uma mensagem. Respondo rápido para alinharmos."
  },
  {
    number: "02",
    title: "Agendamento",
    description: "Escolhemos o melhor horário para sua primeira consulta gratuita presencial ou online."
  },
  {
    number: "03",
    title: "Avaliação & Plano",
    description: "Identifico seus pontos de melhoria e já saímos com o primeiro direcionamento."
  }
];
