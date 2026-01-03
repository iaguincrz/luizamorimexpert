
import { GoogleGenAI } from "@google/genai";

// Verificação segura para evitar quebra de execução no navegador
const getApiKey = () => {
  try {
    return process.env.API_KEY || '';
  } catch (e) {
    return '';
  }
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `Você é um assistente virtual do Luiz Amorim, Personal Trainer em Pirenópolis-GO.
        Dados do Luiz:
        - Nome: Luiz Amorim
        - Especialidade: Treinamento, reabilitação de lesões (Método MTOR), Consultoria On-line.
        - Conquista: Top 3 Classic Physique (Atleta).
        - Local: Pirenópolis, Goiás.
        - Objetivo: Agendar a primeira consulta gratuita.
        - Links: WhatsApp (https://api.whatsapp.com/send/?phone=5562993453916), Instagram (luizamorimpersonal).

        Sua tarefa é responder dúvidas de forma motivadora, técnica e profissional. Sempre incentive o usuário a clicar no botão de WhatsApp para falar diretamente com o Luiz para uma avaliação gratuita. Seja direto e humano, use um tom premium e focado em saúde e performance.`,
        tools: [{ googleSearch: {} }]
      }
    });

    return response.text || "Desculpe, tive um problema ao processar. Que tal falar com o Luiz diretamente no WhatsApp?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Opa! No momento estou focado em treinar. Fale diretamente com o Luiz no link do WhatsApp da página!";
  }
};
