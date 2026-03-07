export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">AI Command Center</h1>
        <p className="text-slate-400 mt-1">Visão geral da plataforma OMD AI Hub e consumo dos tenants.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 border-brand-gold/20">
          <h3 className="text-sm font-medium text-brand-gold mb-1">Tenants Ativos</h3>
          <p className="text-4xl font-bold text-white">12</p>
        </div>
        <div className="glass-panel p-6">
          <h3 className="text-sm font-medium text-slate-400 mb-1">Tokens Processados (24h)</h3>
          <p className="text-4xl font-bold text-white">1.8M</p>
        </div>
        <div className="glass-panel p-6">
          <h3 className="text-sm font-medium text-slate-400 mb-1">Status dos Modelos</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="flex items-center gap-1 text-sm text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full"><span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> OpenAI</span>
            <span className="flex items-center gap-1 text-sm text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Anthropic (Pausado)</span>
          </div>
        </div>
      </div>

      <div className="glass-panel p-8 mt-8 border-white/5">
        <h2 className="text-xl font-semibold text-white mb-4">Fluxos em Andamento</h2>
        <div className="text-center py-12 text-slate-500">
          <p>Nenhum fluxo rodando no momento. Vá para a tela de configurações para injetar as chaves das LLMs e iniciar a Fase 2 completa.</p>
        </div>
      </div>
    </div>
  );
}
