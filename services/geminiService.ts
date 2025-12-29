
import { GoogleGenAI } from "@google/genai";
import { COURSES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCourseAdvice = async (userQuery: string) => {
  try {
    const courseList = COURSES.map(c => `- ${c.title}: ${c.description}`).join('\n');
    const prompt = `
      You are an expert academic advisor for "Skill Up Online (Private) Limited".
      
      Corporate Identity:
      Skill Up Online (Private) Limited is a SECP-registered e-learning provider dedicated to practical, career-focused training. We deliver short online courses, live workshops, and certifications in IT, business, finance, and professional skills. Using modern digital tools and AI-driven assessment, our platform makes learning flexible and directly applicable to work.

      Available Courses:
      ${courseList}

      Program Info:
      - 12-week weekend programs (Sat/Sun, ~2 hours/day)
      - Live Sessions on Google Meet
      - Fee: PKR 1000 for the entire course
      - Bank: Faysal Bank, Title: Skill Up Online (Private) Limited, IBAN: PK29FAYS3398787000006017

      User Query: "${userQuery}"

      Provide a helpful, professional, and encouraging response. Mention our SECP registration if relevant to build trust. Limit your response to 2-3 paragraphs.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble connecting to my knowledge base right now. Please check our course descriptions below or contact us on WhatsApp!";
  }
};
