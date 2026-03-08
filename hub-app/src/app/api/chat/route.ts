import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 30;

// Rota de API (Backend) para enviar requests na OPEN_AI 
export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = await streamText({
        // Usa o modelo gpt-4o, e as chaves de .env.local via process.env
        model: openai('gpt-4o'),
        messages: messages, // Pass messages directly
        system: "Você é um assistente de inteligência artificial de altíssimo nível da OláMundoDigital, integrante do OMD AI Hub. Seu nome genérico é Assistente OMD. Você é especialista em Marketing, Copywriting e Sistemas Autônomos. Responda com linguagem culta, mas persuasiva.",
    });

    return result.toTextStreamResponse();
}
