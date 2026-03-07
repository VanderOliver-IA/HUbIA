import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { Bot, Settings, Key, LayoutDashboard, Users, Zap } from 'lucide-react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'OMD AI Hub | Dashboard',
  description: 'AI Command Center',
};

// Layout principal do painel do SaaS (Fase 2)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} dark`}>
      <body className="min-h-screen bg-[#060913] text-[#e2e8f0] flex relative overflow-hidden">

        {/* SIDEBAR (UX Premium de Admin) */}
        <aside className="w-64 border-r border-white/5 bg-[#0a0f1c]/80 backdrop-blur-xl flex flex-col z-20">
          <div className="h-16 flex items-center px-6 border-b border-white/5">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-brand-gold" />
              OMD Hub
            </span>
          </div>

          <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
            <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors">
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link href="/agents" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors">
              <Bot className="w-5 h-5" />
              <span>Agentes IA</span>
            </Link>
            <Link href="/tenants" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors">
              <Users className="w-5 h-5" />
              <span>Tenants (Clientes)</span>
            </Link>
            <div className="pt-6 pb-2 px-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Super Admin</p>
            </div>
            <Link href="/admin/keys" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-brand-gold/10 text-brand-gold hover:bg-brand-gold/20 transition-colors">
              <Key className="w-5 h-5" />
              <span>Gerenciar APIs LLM</span>
            </Link>
            <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
              <span>Configurações</span>
            </Link>
          </nav>

          <div className="p-4 border-t border-white/5">
            <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-gold to-orange-500" />
              <div className="text-left">
                <p className="text-sm font-medium text-white">Vander Oliver</p>
                <p className="text-xs">Super Admin</p>
              </div>
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
          {/* Efeitos de Glow no fundo da main area */}
          <div className="pointer-events-none fixed -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-gold/5 blur-[120px]" />
          <div className="pointer-events-none fixed bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-900/20 blur-[120px]" />

          {/* Topbar com Breadcrumbs (Placeholder) e Account info */}
          <header className="h-16 border-b border-white/5 bg-transparent backdrop-blur-sm flex items-center justify-between px-8 z-10 shrink-0">
            <div className="text-sm text-slate-400">Hub / Visão Geral</div>
          </header>

          <div className="flex-1 overflow-y-auto p-8 z-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
