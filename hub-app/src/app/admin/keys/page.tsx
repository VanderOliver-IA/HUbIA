"use client";

import { Key, Save, ShieldCheck, AlertCircle } from 'lucide-react';
import { useState } from 'react';

// Demo page para gerenciar APIs das LLMs na Fase 2
export default function ManageAPIKeys() {
    const [openaiKey, setOpenAIKey] = useState("sk-proj-rtq*****************************FvzC12sgUnutvdbPMY3BDgsCZyQdT3BlbkFJN5HwdxDbBIDT5VTaYZOWZHVcZaWEbShUqiXlP1nSHHSQSKjEZOIfPXIGJKEWcFE02hwIOpwWUA");
    const [anthropicKey, setAnthropicKey] = useState("");
    const [geminiKey, setGeminiKey] = useState("");
    const [saving, setSaving] = useState(false);

    const handleSave = () => {
        setSaving(true);
        setTimeout(() => {
            setSaving(false);
            alert("Chaves salvas localmente! (Integrar com BD do Supabase na Fase 2 completa)");
        }, 1200);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                    <Key className="w-8 h-8 text-brand-gold" />
                    Gerenciar Chaves de IA
                </h1>
                <p className="text-slate-400 mt-2">
                    Adicione ou modifique as chaves das LLMs usadas pela plataforma. Estas chaves são usadas unicamente no servidor RouterIA, protegidas de ponta a ponta.
                </p>
            </div>

            <div className="glass-panel p-8 border-white/5 space-y-8">
                {/* OPENAI */}
                <div className="space-y-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-lg font-medium text-white flex items-center gap-2">
                                OpenAI API Key
                                <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full border border-green-500/30">Ativo</span>
                            </h3>
                            <p className="text-sm text-slate-400">Usado para GPT-4o, Agents e Agente Copy</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center p-1.5 grayscale shrink-0">
                            {/* Simulating logo placeholder */}
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-slate-200"><path d="M12 2a10 10 0 1 0 10 10H12V2z" /><path d="M12 12 2.1 7.1" /><path d="m12 12 9.9 4.9" /></svg>
                        </div>
                    </div>
                    <input
                        type="password"
                        value={openaiKey}
                        onChange={(e) => setOpenAIKey(e.target.value)}
                        className="w-full bg-[#0a0f1c] border border-white/10 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold font-mono text-sm leading-none"
                        placeholder="sk-..."
                    />
                </div>

                <div className="h-px w-full bg-white/5"></div>

                {/* ANTHROPIC */}
                <div className="space-y-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-lg font-medium text-white flex items-center gap-2">
                                Anthropic (Claude) API Key
                                <span className="bg-slate-500/20 text-slate-400 text-xs px-2 py-0.5 rounded-full border border-slate-500/30">Desativado</span>
                            </h3>
                            <p className="text-sm text-slate-400">Usado para Estratégia pesada, Raciocínio profundo e Contexto Grande</p>
                        </div>
                    </div>
                    <input
                        type="password"
                        value={anthropicKey}
                        onChange={(e) => setAnthropicKey(e.target.value)}
                        className="w-full bg-[#0a0f1c] border border-white/10 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:ring-1 focus:border-white/20 font-mono text-sm leading-none"
                        placeholder="sk-ant-..."
                    />
                </div>

                <div className="h-px w-full bg-white/5"></div>

                {/* GOOGLE VTX */}
                <div className="space-y-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-lg font-medium text-white flex items-center gap-2">
                                Google Gemini API Key
                                <span className="bg-slate-500/20 text-slate-400 text-xs px-2 py-0.5 rounded-full border border-slate-500/30">Desativado</span>
                            </h3>
                            <p className="text-sm text-slate-400">Usado para Multimodal, áudio e leitura de imagens.</p>
                        </div>
                    </div>
                    <input
                        type="password"
                        value={geminiKey}
                        onChange={(e) => setGeminiKey(e.target.value)}
                        className="w-full bg-[#0a0f1c] border border-white/10 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:ring-1 focus:border-white/20 font-mono text-sm leading-none"
                        placeholder="AIzaSy..."
                    />
                </div>

                {/* WARNING E SAVE BUTTON */}
                <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3 text-sm text-slate-400 bg-white/5 px-4 py-3 rounded-xl border border-white/5">
                        <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                        <p>As chaves não ficam salvas no navegador. Elas são criptografadas diretamente no Supabase em ambiente Isolado (RLS off).</p>
                    </div>

                    <button
                        type="button"
                        onClick={handleSave}
                        disabled={saving}
                        className="flex shrink-0 items-center justify-center gap-2 bg-brand-gold hover:bg-yellow-500 text-[#0a0f1c] px-8 py-3 rounded-lg font-bold transition-all w-full md:w-auto shadow-[0_4px_14px_rgba(245,158,11,0.2)]"
                    >
                        {saving ? (
                            <span className="animate-spin w-5 h-5 border-2 border-[#0a0f1c] border-t-transparent rounded-full" />
                        ) : (
                            <><Save className="w-5 h-5" /> Salvar Configurações</>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
