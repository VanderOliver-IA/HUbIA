import { Users, Zap, TrendingUp, Shield, Star, Heart, Flame } from 'lucide-react';

const mockUsers = [
  { id: 1, name: "Vander Oliver", email: "vander@omd.com", plan: "Super Admin", xp: 12500, streak: 45, hearts: 5, status: "Active" },
  { id: 2, name: "Ana Souza", email: "ana.s@gmail.com", plan: "Premium", xp: 8400, streak: 12, hearts: 3, status: "Active" },
  { id: 3, name: "Carlos Melo", email: "carlos@tech.br", plan: "Free", xp: 1200, streak: 0, hearts: 1, status: "Inactive" },
  { id: 4, name: "Juliana Lima", email: "juli@design.co", plan: "Premium", xp: 5600, streak: 28, hearts: 4, status: "Active" },
  { id: 5, name: "Ricardo Dias", email: "ric@vendas.com", plan: "Pro", xp: 3200, streak: 5, hearts: 2, status: "Churned" },
];

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
            <Zap className="w-8 h-8 text-brand-gold" />
            AI Command Center
          </h1>
          <p className="text-slate-400 mt-1">Dados reais de performance e engajamento dos 55 usuários ativos.</p>
        </div>
        <div className="bg-brand-gold/10 border border-brand-gold/20 px-4 py-2 rounded-xl">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">Status do Sistema: Operacional</span>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-panel p-6 border-brand-gold/20 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-brand-gold" />
            </div>
            <h3 className="text-sm font-medium text-slate-400">Total de Usuários</h3>
            <p className="text-4xl font-bold text-white mt-1">55</p>
          </div>
          <div className="mt-4 flex items-center gap-1 text-xs text-green-400 font-medium">
            <TrendingUp className="w-3 h-3" /> +14% vs mês passado
          </div>
        </div>

        <div className="glass-panel p-6 border-white/5 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-indigo-400" />
            </div>
            <h3 className="text-sm font-medium text-slate-400">Tokens Processados</h3>
            <p className="text-4xl font-bold text-white mt-1">2.4M</p>
          </div>
          <p className="mt-4 text-xs text-slate-500">Média de 43k per tenant</p>
        </div>

        <div className="glass-panel p-6 border-white/5 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
              <Star className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-sm font-medium text-slate-400">Conversão Premium</h3>
            <p className="text-4xl font-bold text-white mt-1">68%</p>
          </div>
          <p className="mt-4 text-xs text-slate-500">Alta retenção na Fase 2</p>
        </div>

        <div className="glass-panel p-6 border-white/5 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-4">
              <Flame className="w-5 h-5 text-brand-gold" />
            </div>
            <h3 className="text-sm font-medium text-slate-400">Média de Streak</h3>
            <p className="text-4xl font-bold text-white mt-1">14 dias</p>
          </div>
          <p className="mt-4 text-xs text-slate-500">Engajamento gamificado ativo</p>
        </div>
      </div>

      {/* DETAILED USER TABLE (VISUAL DEMO) */}
      <div className="glass-panel overflow-hidden border-white/5">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Gestão de Usuários (Amostra de 55)</h2>
          <button className="text-sm text-brand-gold hover:underline">Ver todos os usuários</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 text-slate-400 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Usuário</th>
                <th className="px-6 py-4 font-semibold text-center">Plano</th>
                <th className="px-6 py-4 font-semibold text-center">XP</th>
                <th className="px-6 py-4 font-semibold text-center">Streak</th>
                <th className="px-6 py-4 font-semibold text-center">Corações</th>
                <th className="px-6 py-4 font-semibold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mockUsers.map(user => (
                <tr key={user.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-gold/20 to-indigo-500/20 flex items-center justify-center border border-white/10 text-white font-bold text-xs">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white group-hover:text-brand-gold transition-colors">{user.name}</p>
                        <p className="text-xs text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${user.plan === 'Super Admin' ? 'bg-brand-gold/10 border-brand-gold/30 text-brand-gold' : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400'}`}>
                      {user.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-300 font-mono">{user.xp}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-1 text-orange-400 text-sm font-bold">
                      <Flame className="w-4 h-4 fill-orange-400/20" /> {user.streak}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-0.5 text-pink-500">
                      {[...Array(5)].map((_, i) => (
                        <Heart key={i} className={`w-3.5 h-3.5 ${i < user.hearts ? 'fill-pink-500' : 'text-slate-700'}`} />
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={`text-xs font-medium ${user.status === 'Active' ? 'text-green-400' : user.status === 'Churned' ? 'text-red-400' : 'text-slate-500'}`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 border-white/5">
          <h3 className="text-white font-medium mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-brand-gold" /> Atividade dos Grupos
          </h3>
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Engajamento Diário</span>
                <span>92%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-brand-gold w-[92%] rounded-full shadow-[0_0_10px_rgba(245,158,11,0.3)]"></div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Uso de IA por Tenant</span>
                <span>75%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-[75%] rounded-full shadow-[0_0_10px_rgba(79,70,229,0.3)]"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-6 border-white/5 flex items-center justify-center text-center">
          <div>
            <div className="w-12 h-12 rounded-full bg-brand-gold/5 flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-brand-gold/60" />
            </div>
            <p className="text-sm text-slate-300 font-medium">Arquitetura Multi-Tenant Ativa</p>
            <p className="text-xs text-slate-500 mt-1">Schemas PostgreSQL isolados para todos os 55 usuários.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
