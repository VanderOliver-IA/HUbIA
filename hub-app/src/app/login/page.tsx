"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Zap } from 'lucide-react';
import { supabase } from '@/lib/supabase/client';

export default function Login() {
    const [email, setEmail] = useState('omd.vandersonoliveira@gmail.com');
    const [password, setPassword] = useState('Entrar2026@');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');

        // Integração Real com Supabase Auth (Quando o URL estiver liberado no Coolify)
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            if (error.message.includes('FetchError') || error.message.includes('Unexpected token')) {
                setErrorMsg('⚠️ Erro de rede: Kong Gateway do Supabase não configurado publicamente no Coolify.');
            } else {
                setErrorMsg(error.message);
            }
        } else {
            router.push('/'); // Redirect home
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#060913]">
            <div className="pointer-events-none fixed -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-gold/10 blur-[120px]" />
            <div className="pointer-events-none fixed bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-900/30 blur-[120px]" />

            <div className="max-w-md w-full p-8 glass-panel z-10 mx-4">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-900/50 flex items-center justify-center border border-white/10 mb-4 shadow-[0_0_20px_rgba(79,70,229,0.2)]">
                        <Zap className="w-8 h-8 text-brand-gold" />
                    </div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Login HubIA</h2>
                    <p className="text-slate-400 mt-1">SaaS de Inteligência Artificial</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">E-mail Corporativo</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-[#0a0f1c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Senha</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-[#0a0f1c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold"
                            />
                        </div>
                    </div>

                    {errorMsg && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-lg">
                            {errorMsg}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand-gold hover:bg-yellow-500 text-[#0a0f1c] font-bold py-3 px-4 rounded-lg flex justify-center items-center h-12 transition-all shadow-[0_4px_14px_rgba(245,158,11,0.2)]"
                    >
                        {loading ? <span className="animate-spin w-5 h-5 border-2 border-[#0a0f1c] border-t-transparent rounded-full" /> : 'Acessar Plataforma'}
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4" /> Autenticação Multi-Tenant Segura via Supabase
                </div>
            </div>
        </div>
    );
}
