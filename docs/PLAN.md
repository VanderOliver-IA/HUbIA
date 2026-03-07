# Plano de Execução: OMD AI Hub

## Visão Geral
Construir a presença digital e o sistema SaaS para o **OMD AI Hub**. Em resposta à nova estratégia, o desenvolvimento ocorrerá em duas frentes independentes (repositórios separados) para garantir agilidade no lançamento e validação de mercado com captura de leads, antes da conclusão funcional do sistema.

## Decisões Arquiteturais e de Design
*   **Identidade Visual e Assets:** Gerados com IA (efeito Premium, Dark Mode, Glassmorphism, tons de índigo/dark blue), com espaço para o cliente ajustar futuramente.
*   **Copywriting:** Foco agressivo em conversão e dor do mercado (agências e PMEs precisando de IA com contexto).
*   **UI/UX:** Estado da arte (Next.js 14, Tailwind CSS, Framer Motion, possivelmente Magic UI/Aceternity UI para o efeito "WOW").
*   **Estrutura de Repositórios:** DOIS repositórios distintos:
    1.  `hub-sales-page` (Página de Vendas landing page)
    2.  `hub-app` (O SaaS em si)
*   **Sistema de Captura:** Lista de espera (form simples conectado ao Supabase ou serviço de e-mail temporário, de forma a capturar o e-mail do lead).

---

## 🚀 FASES DE DESENVOLVIMENTO

### Fase 1: Página de Vendas (Landing Page + Lista de Espera)
**Repositório:** `hub-sales-page`
**Stack:** Next.js 14, Tailwind V4, Framer Motion.
**Objetivo:** Uma página de conversão incrivelmente bonita para validar a ideia e capturar leads.
**Etapas:**
1.  Setup do projeto Next.js.
2.  Definição de Design System (Variáveis de cor, tipografia Inter).
3.  Criação da Copy da Página (Hero, Dores, Solução, Benefícios Arquitetura Multi-tenant, CTA).
4.  Criação de imagens/mockups ilustrativos com `generate_image`.
5.  Implementação do UI:
    *   Hero Section "WOW" com animações chamativas.
    *   Seção de "O Problema vs A Solução OMD".
    *   Mockups visuais de como será o painel.
    *   Formulário de Lista de Espera (Waitlist com integração simples ao Supabase).
6.  Polimento, SEO (Generative Engine Optimization) e auditorias de UI/UX.

### Fase 2: O Sistema Visual (Frontend Hub)
**Repositório:** `hub-app`
**Stack:** Next.js 14, Tailwind V4, Framer Motion, Shadcn UI.
**Objetivo:** Criar toda a "casca" do sistema para encantar o usuário, mostrar o valor e permitir navegação completa nos painéis, mesmo usando dados mockados por enquanto.
**Etapas:**
1.  Setup do projeto Next.js no segundo repositório.
2.  Criação das rotas e Layout Base (Sidebar, Header, Glassmorphism panels).
3.  Implementação das Views (com dados falsos/mockados):
    *   Painel do Usuário (Dashboard principal).
    *   Página de Chat IA (A principal interface do usuário).
    *   Página de Contexto Corporativo (Onde treinam a própria IA).
    *   Painel Super Admin da OMD.
4.  Implementação do fluxo de Onboarding Visual (Telas de passos de configuração de "Contexto").

### Fase 3: Integrações e Funcionalidades Reais (Backend + IA)
**Repositório:** `hub-app` (Continuando a Fase 2)
**Objetivo:** Dar vida à casca visual. (Detalhes implementados em ciclo futuro).
**Etapas iniciais:**
1.  Integração Supabase (Auth, Schemas PostgreSQL, RLS multi-tenant).
2.  Conexão com as APIs (OpenAI, Claude, etc) e Router Inteligente.
3.  Sistema de pagamento (Stripe/Pagar.me).

---

## 🛠️ Orquestração Inicial (A ser executada após aprovação)
Iremos alocar os agentes especializados da seguinte forma para a **Fase 1**:
*   `frontend-specialist`: Irá criar a estrutura da Landing Page, configurar animações e criar os componentes.
*   `seo-specialist` e `copywriter`: Vão gerar a copy focada em conversão para a Landing Page.
*   `backend-specialist` (ou `database-architect`): Irá estruturar uma tabela simples no Supabase para a tabela da Waitlist.

## Critérios de Aceite para a Fase 1:
- [ ] Landing page responsiva, rápida e linda.
- [ ] Formulário de captura funcionando (salvando e-mail no Supabase).
- [ ] Imagens/Mockups visuais atrativos gerados e inseridos.
