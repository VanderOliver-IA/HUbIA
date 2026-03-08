"use client";

import { useChat } from '@ai-sdk/react';
import type { Message } from '@ai-sdk/react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function AgentChat() {
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="h-[calc(100vh-[12rem])] flex flex-col glass-panel border-brand-gold/10 overflow-hidden relative">
            {/* HEADER DO CHAT */}
            <div className="h-16 border-b border-white/5 bg-black/20 flex items-center px-6 gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-900 border border-indigo-400/30 flex items-center justify-center shrink-0">
                    <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-white font-semibold">Assistente OMD (Premium)</h2>
                    <p className="text-xs text-indigo-400 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Conectado via GPT-4o
                    </p>
                </div>
            </div>

            {/* ÁREA DE MENSAGENS */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-4">
                        <Sparkles className="w-12 h-12 text-brand-gold/30" />
                        <p className="text-center max-w-sm">
                            Inicie uma conversa. O agente responderá usando a API key da sua conta conectada ao servidor do Coolify.
                        </p>
                    </div>
                ) : (
                    messages.map(m => (
                        <div key={m.id} className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-slate-800 border fill-white' : 'bg-brand-gold/20 text-brand-gold border border-brand-gold/30'}`}>
                                {m.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4" />}
                            </div>
                            <div className={`max-w-[75%] rounded-2xl px-5 py-3 text-sm ${m.role === 'user'
                                ? 'bg-brand-gold text-[#0a0f1c] rounded-tr-none shadow-[0_4px_14px_rgba(245,158,11,0.15)] font-medium'
                                : 'bg-white/5 border border-white/5 text-slate-200 rounded-tl-none leading-relaxed'
                                }`}>
                                {/* Fallback de formatação na V1. Na fase 2 isso vai transformar Markdown */}
                                <div className="whitespace-pre-wrap">{m.content}</div>
                            </div>
                        </div>
                    ))
                )}

                {isLoading && (
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
                            <span className="w-3 h-3 bg-brand-gold rounded-full animate-bounce"></span>
                        </div>
                        <div className="bg-white/5 border border-white/5 text-slate-200 rounded-2xl rounded-tl-none px-5 py-3">
                            Processando raciocínio...
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* INPUT AREA */}
            <div className="p-4 bg-black/20 border-t border-white/5">
                <form onSubmit={handleSubmit} className="flex gap-3 max-w-4xl mx-auto">
                    <input
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Digite sua mensagem para a IA Inteligente..."
                        className="flex-1 bg-[#0a0f1c] border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:ring-1 focus:ring-brand-gold shadow-inner"
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="bg-brand-gold hover:bg-yellow-500 text-[#0a0f1c] px-5 py-3 rounded-xl font-bold flex items-center gap-2 transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Enviar <Send className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </div>
    );
}
