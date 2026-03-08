"use client";

import { Building2, Target, MessageSquareQuote, CheckCircle2, Save, Info, Users2, Sparkles, Sliders } from 'lucide-react';

export default function ContextPage() {
    return (
        <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* CABEÇALHO */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                        <Sparkles className="w-8 h-8 text-brand-gold" />
                        Cérebro IA: Contexto do Negócio
                    </h1>
                    <p className="text-slate-400 mt-1">Este briefing será injetado automaticamente em todas as conversas e gerações de conteúdo.</p>
                </div>
                <button className="bg-brand-gold hover:bg-yellow-500 text-[#0a0f1c] px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                    <Save className="w-4 h-4" /> Salvar Contexto
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* PERFIL DA EMPRESA */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="glass-panel p-6 border-white/5 h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                                <Building2 className="w-5 h-5 text-indigo-400" />
                            </div>
                            <h2 className="text-lg font-semibold text-white">Perfil da Empresa</h2>
                        </div>
                        
                        <div className="space-y-4 flex-1">
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Nome da Marca</label>
                                <input 
                                    type="text" 
                                    placeholder="Ex: OláMundoDigital"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-brand-gold transition-all"
                                    defaultValue="OláMundoDigital"
                                />
                            </div>
                            
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Descrição do Negócio</label>
                                <textarea 
                                    rows={4}
                                    placeholder="O que sua empresa faz? Qual sua missão?"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-brand-gold transition-all resize-none"
                                    defaultValue="Agência de inovação e marketing digital focada em acelerar negócios através de inteligência artificial e processos automatizados."
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Setor</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm"
                                        defaultValue="Marketing/Tecnologia"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Tamanho</label>
                                    <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none">
                                        <option>1-10</option>
                                        <option selected>11-50</option>
                                        <option>51-200</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PÚBLICO E PERSONA */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="glass-panel p-6 border-white/5 h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                <Target className="w-5 h-5 text-emerald-400" />
                            </div>
                            <h2 className="text-lg font-semibold text-white">Público-Alvo</h2>
                        </div>

                        <div className="space-y-4 flex-1">
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Avatar / Persona Ideal</label>
                                <textarea 
                                    rows={3}
                                    placeholder="Descreva quem é seu cliente ideal..."
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-brand-gold"
                                    defaultValue="Donos de PMEs, gestores de marketing e empreendedores que buscam escala e eficiência através da tecnologia."
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Dores Principais</label>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {['Falta de Tempo', 'Custo Alto', 'Baixa Escala', 'Tecnologia Complexa'].map(tag => (
                                        <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-400">
                                            {tag}
                                        </span>
                                    ))}
                                    <button className="text-[10px] font-bold px-2 py-1 rounded-md bg-brand-gold/10 border border-brand-gold/30 text-brand-gold">+ Adicionar</button>
                                </div>
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 flex items-start gap-3">
                                <Users2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                                <div className="text-xs text-slate-400">
                                    <p className="font-semibold text-indigo-300 mb-1">Dica da IA</p>
                                    Defina seu nicho claramente para que a IA gere copys mais persuasivos e segmentados.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TOM DE VOZ E DIRETRIZES */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="glass-panel p-6 border-white/5 h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                                <Sliders className="w-5 h-5 text-orange-400" />
                            </div>
                            <h2 className="text-lg font-semibold text-white">Tom de Voz</h2>
                        </div>

                        <div className="space-y-6 flex-1">
                            {/* SLIDERS DE TOM (Visualmente idêntico à referência) */}
                            <div className="space-y-4">
                                {[
                                    { label: 'Profissional', value: 85 },
                                    { label: 'Inovador', value: 95 },
                                    { label: 'Empático', value: 60 },
                                    { label: 'Autoritário', value: 40 }
                                ].map(slider => (
                                    <div key={slider.label} className="space-y-1.5">
                                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                            <span>{slider.label}</span>
                                            <span>{slider.value}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-brand-gold/40 to-brand-gold rounded-full shadow-[0_0_8px_rgba(245,158,11,0.3)]"
                                                style={{ width: `${slider.value}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4 border-t border-white/5">
                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-3">Diretrizes de Conteúdo</label>
                                <div className="space-y-2">
                                    {[
                                        'Sempre focar em benefícios práticos',
                                        'Usar "Nós" em vez de "Eu"',
                                        'Evitar jargões técnicos excessivos',
                                        'Finalizar sempre com um CTA forte'
                                    ].map(rule => (
                                        <div key={rule} className="flex items-center gap-2 group cursor-pointer">
                                            <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                                            <span className="text-xs text-slate-300 group-hover:text-white transition-colors">{rule}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BASE DE CONHECIMENTO (RAG) - PRÉVIA */}
            <div className="glass-panel p-6 border-white/5">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                            <MessageSquareQuote className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-white">Memória Empresarial (Arquivos)</h2>
                            <p className="text-xs text-slate-500">O Cérebro pesquisará nestes documentos antes de responder.</p>
                        </div>
                    </div>
                    <button className="text-sm font-bold text-brand-gold hover:text-yellow-500 flex items-center gap-2">
                        + Subir Documentos
                    </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center text-red-400 font-bold text-[10px]">PDF</div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-white truncate">Proposta-Padrao.pdf</p>
                            <p className="text-[10px] text-slate-500">2.4 MB • 12/03/24</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 opacity-50">
                        <div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-[10px]">DOCX</div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-white truncate">Tabela-Precos-2026.docx</p>
                            <p className="text-[10px] text-slate-500">1.1 MB • Pendente</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl border border-dashed border-white/10 flex items-center justify-center text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                        Espaço Vazio
                    </div>
                    <div className="p-4 rounded-xl border border-dashed border-white/10 flex items-center justify-center text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                        Espaço Vazio
                    </div>
                </div>
            </div>
        </div>
    );
}
