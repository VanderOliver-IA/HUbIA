"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, KeyRound, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Futuro: Integrar com API/Supabase Route
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000); // reseta para fins de demo
      setEmail("");
    }
  };

  return (
    <main className="min-h-screen pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HERO SECTION */}
        <div className="text-center pt-16 pb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold-soft bg-brand-gold-soft/20 text-brand-gold text-sm font-medium tracking-wide">
              <Sparkles className="w-4 h-4" />
              OMD AI Hub — The Next Generation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-tight"
          >
            A IA que <span className="text-brand-gold text-glow">já conhece</span> o seu negócio.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Chega de repetir briefings e escrever prompts gigantes toda vez. OMD AI Hub é a plataforma multi-tenant que treina um <span className="text-white font-semibold">Cérebro Exclusivo</span> para sua marca com isolamento total.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-md mx-auto"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail profissional"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-gold to-yellow-600 text-[#0a0f1c] font-bold shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all flex border border-transparent hover:border-white/50 items-center justify-center min-w-44 whitespace-nowrap"
                >
                  Entrar na VIP
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-5 py-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 font-medium"
              >
                🎉 Você está na lista! Em breve entraremos em contato.
              </motion.div>
            )}
            <p className="text-xs text-slate-500 mt-4">Zero spam. Você será o primeiro a ser avisado no lançamento oficial.</p>
          </motion.div>
        </div>


        {/* SYSTEM MOCKUP SHOWCASE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative mx-auto mt-12 w-full max-w-6xl glass-panel-gold-accent p-2 md:p-4 overflow-hidden"
        >
          {/* Mockup wrapper */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0f1c]">
            {/* Imagem do Dashboard Mockup (A ser inserida da pasta public) */}
            <div className="w-full h-auto aspect-[16/10] bg-brand-indigo-light relative flex items-center justify-center">
              <Image
                src="/images/dashboard_mockup_v1_1772905780143.png"
                alt="OMD AI Hub Dashboard Interface"
                fill
                className="object-cover"
                priority
              />
              {/* O overlay gradiente dá a sensação do app estar integrado à página */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0f1c] to-transparent"></div>
            </div>
          </div>
        </motion.div>


        {/* VALUE PROPOSITIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8"
          >
            <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 border border-brand-gold/20">
              <KeyRound className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Contexto Permanente</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Sua marca, sua voz, seu público. O sistema retém o briefing da sua empresa e o injeta silenciosamente em todos os comandos.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8"
          >
            <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Agentes em Fluxo</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Encare tarefas complexas criando pipelines de IA. Um agente planeja o conteúdo e outro finaliza o texto. Tudo automatizado.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-panel p-8"
          >
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Isolamento Garantido</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Arquitetura avançada de banco de dados (Row Level Security). Seus dados não treinam outras IAs e nunca se misturam.</p>
          </motion.div>
        </div>

        {/* WORKFLOW SHOWCASE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Orquestre agentes como <span className="text-brand-gold">Maestro</span></h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">Crie Workflows visuais. Conecte agentes especialistas para que trabalhem juntos analisando sua estratégia de marketing e criando material sem o seu monitoramento constante. É simplesmente ligar os pontos e apertar "Run".</p>
            <ul className="space-y-4">
              {["Router de Modelos (GPT-4o, Claude 3.5, Gemini)", "Base de Memória RAG Própria", "Controle de Tokens Inteligente"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-brand-gold blur opacity-20"></div>
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-brand-gold/30">
              <Image
                src="/images/workflow_mockup_v1_1772905859421.png"
                alt="OMD AI Hub Workflows"
                width={800}
                height={600}
                className="object-cover w-full scale-[1.02] opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
