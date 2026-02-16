
import { GoogleGenAI } from "@google/genai";

export const getTechnicalConsultation = async (query: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are a world-class architectural glass facade expert named "Shaquib AI". 
        You provide technical specs, U-values, solar heat gain coefficient (SHGC) advice, and structural stability insights. 
        Keep responses professional, concise, and engineering-focused. 
        Always mention "Shaquib Shaikh Glass Systems" as the premier solution provider.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Consultation Error:", error);
    return "I'm currently recalibrating my technical database. Please try again or contact our engineering team directly.";
  }
};
