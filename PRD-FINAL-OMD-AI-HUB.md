# OMD AI Hub — Product Requirements Document (PRD Final)
### SaaS Edition v3.0 | Março 2026 | Confidencial
**Empresa:** OlaMundoDigital (OMD)
**Produto:** OMD AI Hub — Plataforma SaaS de Inteligência Artificial Multi-Tenant
**Status:** Documento Final Consolidado (baseado em PRD ChatGPT v1 + PRD Claude v2)

---

## 📋 ÍNDICE

1. [Visão Estratégica do Produto](#1-visão-estratégica-do-produto)
2. [Posicionamento e Diferencial de Mercado](#2-posicionamento-e-diferencial-de-mercado)
3. [Hierarquia de Usuários e Papéis](#3-hierarquia-de-usuários-e-papéis)
4. [Arquitetura Multi-Tenant](#4-arquitetura-multi-tenant)
5. [Sistema de Contexto Inteligente (O Cérebro do Sistema)](#5-sistema-de-contexto-inteligente-o-cérebro-do-sistema)
6. [Módulos da Plataforma](#6-módulos-da-plataforma)
7. [Sistema de IA Multi-Modelos e Router Inteligente](#7-sistema-de-ia-multi-modelos-e-router-inteligente)
8. [Painéis por Tipo de Usuário](#8-painéis-por-tipo-de-usuário)
9. [Fluxos de Onboarding](#9-fluxos-de-onboarding)
10. [Modelo de Monetização SaaS](#10-modelo-de-monetização-saas)
11. [Arquitetura Técnica e Stack](#11-arquitetura-técnica-e-stack)
12. [Banco de Dados e Isolamento](#12-banco-de-dados-e-isolamento)
13. [Segurança, Privacidade e LGPD](#13-segurança-privacidade-e-lgpd)
14. [Requisitos Funcionais e Não-Funcionais](#14-requisitos-funcionais-e-não-funcionais)
15. [Roadmap de Desenvolvimento](#15-roadmap-de-desenvolvimento)
16. [Critérios de Aceite do MVP](#16-critérios-de-aceite-do-mvp)
17. [Visão de Futuro](#17-visão-de-futuro)
18. [Prompt Inicial para Antigravity](#18-prompt-inicial-para-antigravity)

---

## 1. Visão Estratégica do Produto

### 1.1 Definição

O **OMD AI Hub** é uma plataforma SaaS de Inteligência Artificial com arquitetura **multi-tenant**, desenvolvida pela OlaMundoDigital como produto próprio. Começa como ferramenta interna da agência e evolui para uma plataforma comercializável para clientes da OMD e para o mercado geral.

### 1.2 Proposta de Valor Central

> *"Um sistema de IA que já conhece o seu negócio antes de você fazer a primeira pergunta."*

Cada empresa que usa o sistema tem um **ambiente completo e isolado**, treinado com seus próprios dados, que personaliza automaticamente todas as respostas de IA sem que o usuário precise repetir informações a cada uso.

### 1.3 Evolução Estratégica

| Dimensão | PRD v1.0 (Uso Interno) | PRD v3.0 (SaaS Público) |
|---|---|---|
| **Público** | Apenas equipe OMD | OMD + Clientes OMD + Mercado geral |
| **Modelo** | Ferramenta interna gratuita | SaaS com planos pagos |
| **Contexto** | Fixo para a OMD | Dinâmico por tenant |
| **Receita** | Economia de custo | Nova fonte de receita recorrente |
| **Dados** | Compartilhados internamente | Isolados por tenant (zero vazamento) |

### 1.4 Missão

Ser o **sistema operacional de IA** para agências e empresas — centralizando múltiplas IAs, memória empresarial, agentes especializados e automação de fluxos em um único ambiente seguro e multi-tenant.

---

## 2. Posicionamento e Diferencial de Mercado

### 2.1 Diferenciais Competitivos

1. **Contexto Automático por Empresa** — A IA já sabe quem é a empresa antes de qualquer conversa
2. **Arquitetura Multi-Tenant Real** — Isolamento total por schema PostgreSQL (não apenas por filtro)
3. **IA Router Inteligente** — Sistema decide qual modelo usar baseado na tarefa
4. **Privacidade Garantida por Contrato** — SaaS com garantia explícita de que a OMD não acessa o conteúdo
5. **Dual Market** — Atende clientes da agência E mercado geral com o mesmo produto
6. **Automação de Fluxos** — Pipelines encadeados de agentes especializados

### 2.2 Público-Alvo

- **Primário:** Clientes da agência OMD (PMEs brasileiras)
- **Secundário:** Agências, criadores de conteúdo, empresas de marketing
- **Terciário:** Qualquer empresa que queira centralizar uso de IA com contexto proprietário

---

## 3. Hierarquia de Usuários e Papéis

### 3.1 Visão Geral

```
SISTEMA
   │
   ├── 🔴 Super Admin (OMD) — Controle total da plataforma
   │
   ├── 🔵 Cliente OMD (Tenant A)
   │       ├── Admin de Tenant
   │       └── Membros de Tenant
   │
   ├── 🟢 Usuario SaaS (Tenant B)
   │       ├── Admin de Tenant
   │       └── Membros de Tenant
   │
   └── 🟢 Usuario SaaS (Tenant C) [isolado]
```

### 3.2 Super Admin — OlaMundoDigital

Painel exclusivo acessível via `/admin` com autenticação de dois fatores obrigatória.

**Capacidades:**
- Criar, editar, suspender e excluir qualquer tenant
- Configurar Página de Contexto da própria OMD
- Configurar Página de Contexto de cada cliente individualmente
- Definir quais módulos cada tenant pode acessar por plano
- Visualizar métricas de uso de todos os tenants (anonimizadas)
- Gerenciar planos, cobranças e cupons
- Gerenciar chaves de API de todos os provedores
- Acessar logs de sistema e erros de API
- Ver alertas: tenants próximos do limite, falhas de cobrança

### 3.3 Cliente OMD

Empresas que contratam serviços da OMD e recebem acesso ao Hub como parte do pacote.

**Características:**
- Contexto do negócio pre-configurado pela OMD antes do primeiro acesso
- Sistema já conhece o negócio ao fazer login
- Todas as gerações partem do contexto do próprio negócio
- Não vê dados de outros clientes nem informações internas da OMD
- Pode ter Admin de Tenant para gerenciar equipe

### 3.4 Usuário SaaS (Mercado Geral)

Qualquer empresa ou profissional que contrata o Hub diretamente pelo site.

**Características:**
- Onboarding self-service completo
- Pagamento via cartão de crédito ou PIX com renovação automática
- Suporte via chat ou email
- OMD não acessa dados, histórico ou contexto
- Pode fazer upgrade/downgrade de forma autônoma
- Ambiente completamente isolado

### 3.5 Admin de Tenant

Dono da conta de cada empresa.

**Capacidades:**
- Convidar e gerenciar membros da equipe
- Definir permissões por membro
- Editar a Página de Contexto do seu tenant
- Ver métricas de uso da própria equipe

### 3.6 Membro de Tenant

Colaboradores de cada empresa.

**Capacidades:**
- Usar todos os módulos conforme permissões do Admin
- Ver histórico próprio
- Exportar outputs gerados

---

## 4. Arquitetura Multi-Tenant

### 4.1 Modelo de Isolamento

O sistema usa **isolamento por schema no PostgreSQL**. Cada tenant tem seu próprio schema no banco de dados, garantindo que nenhuma consulta de um tenant possa acessar dados de outro — nem por erro, nem por falha de segurança.

```
PostgreSQL
   │
   ├── schema: public (dados do sistema)
   ├── schema: tenant_omd (controle OMD)
   ├── schema: tenant_oficinabelasartes
   ├── schema: tenant_sindicosawards
   └── schema: tenant_saas_user123
```

### 4.2 Tabela de Isolamento de Dados

| Dado | Quem pode acessar | Isolamento |
|---|---|---|
| Contexto do negócio | Apenas o próprio tenant + Super Admin (leitura op.) | Schema separado |
| Histórico de conversas | Apenas o próprio usuário | Schema + filtro user_id |
| Outputs gerados | Apenas o tenant que gerou | Schema separado |
| Dados de cobrança | Super Admin + próprio tenant | Tabela criptografada |
| Métricas de uso | Super Admin vê totais anonimizados | Agregação sem conteúdo |

### 4.3 O que a OMD Vê de Usuários SaaS

| Dado do Usuário SaaS | OMD Acessa? | Observação |
|---|---|---|
| Nome, email de cadastro | ✅ Sim | Para suporte e cobrança |
| Plano e status de pagamento | ✅ Sim | Gestão financeira |
| Volume de tokens consumidos | ✅ Sim | Gestão de custo de API |
| Página de Contexto (conteúdo) | ❌ Não | Privacidade garantida |
| Histórico de conversas e prompts | ❌ Não | Privacidade garantida |
| Outputs gerados (textos, imagens) | ❌ Não | Privacidade garantida |

---

## 5. Sistema de Contexto Inteligente (O Cérebro do Sistema)

Esta é a **funcionalidade mais importante** do sistema. É o que diferencia o OMD AI Hub de um simples wrapper de IA.

### 5.1 O Que é a Página de Contexto

A Página de Contexto é o conjunto de informações que o sistema usa para personalizar todos os outputs de IA para cada tenant. Funciona como um **briefing permanente** que é injetado automaticamente em cada prompt, sem que o usuário precise repetir informações a cada uso.

### 5.2 Contexto da Própria OMD

Configurado exclusivamente pelo Super Admin. Usado quando a equipe da OMD usa o sistema para projetos próprios da agência.

**Campos:**
- Nome e história da agência
- Missão, visão e valores
- Tom de voz e personalidade da marca
- Público-alvo da agência
- Serviços oferecidos com descrição detalhada
- Diferenciais competitivos e cases
- Linguagem proibida e palavras de marca
- Modelos de proposta e formato de relatório
- Informações dos fundadores (para bio, entrevistas, conteúdo)

### 5.3 Contexto de Cliente OMD

Configurado pelo Super Admin (equipe OMD) antes de liberar o acesso.

**Campos:**
- Nome da empresa e segmento de atuação
- Produtos e serviços com descrição detalhada
- Público-alvo: demográfico, comportamental, dores e desejos
- Tom de voz: formal, descontraído, técnico, inspirador
- Canais ativos: Instagram, WhatsApp, Site, YouTube, LinkedIn
- Cores, fontes e identidade visual resumida
- Palavras e expressões da marca (e proibidas)
- Concorrentes principais e diferenciais competitivos
- Objetivos de marketing do período
- Histórico de campanhas relevantes
- CTA padrão por canal

### 5.4 Contexto de Usuário SaaS

Configurado pelo próprio usuário no onboarding e editável a qualquer momento.

**Campos:**
- Nome da empresa e segmento
- Produtos e serviços principais
- Público-alvo e persona
- Tom de voz preferido
- Canais de comunicação ativos
- Objetivo principal de uso da plataforma
- Upload de materiais de referência (opcional)

### 5.5 Injeção Automática de Contexto

Quando qualquer usuário usa um módulo, o contexto do seu tenant é automaticamente incluído no prompt enviado para a IA. O usuário não precisa repetir informações.

```
[CONTEXTO DO NEGÓCIO]
{dados completos da Página de Contexto do tenant}

[INSTRUÇÃO DO USUÁRIO]
{o que o usuário digitou no campo de instrução}
```

---

## 6. Módulos da Plataforma

Os módulos são idênticos para todos os tipos de usuário. A diferença está no **contexto injetado automaticamente**, que personaliza os resultados para cada tenant.

### 6.1 Módulo 1 — Copys e Conteúdo

Geração de posts, legendas, emails, roteiros, anúncios e descrições.

**Campos:**
- Canal (Instagram, WhatsApp, Email, YouTube, LinkedIn)
- Objetivo (engajamento, vendas, educação, lançamento)
- Tom (automático pelo contexto ou manual)
- Instrução livre
- Variações (gerar múltiplas versões)

### 6.2 Módulo 2 — Estratégia e Planejamento

Planejamento estratégico de marketing com IA.

**Funcionalidades:**
- Criação de funis de vendas
- Planejamento de campanhas
- Calendário de conteúdo
- Análise de concorrência

### 6.3 Módulo 3 — Agentes Especializados

Agentes com especialidades distintas disponíveis para todos os tenants.

| Agente | Especialidade |
|---|---|
| Agente Copy | Posts, anúncios, scripts |
| Agente Estratégia | Funis, planejamento, campanhas |
| Agente Criativo | Ideias, conceitos, branding |
| Agente Programador | Scripts, APIs, automação |
| Agente Pesquisa | Análise de mercado, tendências |
| Agente SEO | Conteúdo otimizado, meta tags |

### 6.4 Módulo 4 — Sistema de Memória (RAG)

Cada tenant terá sua própria base de conhecimento indexada.

**Fontes:**
- PDFs e documentos Word
- Sites e URLs
- Planilhas Excel/Google Sheets
- Playbooks e manuais internos
- Transcrições de áudios e vídeos

**Funcionamento:** A IA consulta a base de conhecimento do tenant antes de responder, tornando as respostas contextualizadas com o material proprietário da empresa.

### 6.5 Módulo 5 — Automação de Fluxos (Pipelines)

Criação de pipelines de IA que executam sequências automatizadas.

**Exemplo de pipeline:**
```
Briefing do Cliente
       ↓
Estratégia (Agente Estratégia)
       ↓
Geração de Copy (Agente Copy)
       ↓
Refinamento Criativo (Agente Criativo)
       ↓
Plano de Campanha Final (Output)
```

### 6.6 Módulo 6 — Pesquisa e Análise

Pesquisa web com IA + análise de dados.

**Funcionalidades:**
- Pesquisa com contexto do negócio
- Análise de tendências do setor
- Monitoramento de concorrência
- Relatórios de mercado

### 6.7 Módulo 7 — Geração de Imagens

Geração de imagens com contexto de branding do tenant.

**Funcionalidades:**
- Geração por prompt com contexto do negócio
- Aplicação automática de paleta de cores do tenant
- Exportação em múltiplos formatos

### 6.8 Módulo 8 — Chat Livre

Chat direto com IA usando o contexto do negócio como base.

**Funcionalidades:**
- Histórico de conversas por usuário
- Seleção de modelo de IA
- Exportação de conversa
- Pins de conversas importantes

### 6.9 Módulo 9 — Gestão de Projetos

Organização de projetos com IA integrada.

**Funcionalidades:**
- Criar projetos e tarefas
- Associar outputs de IA a projetos
- Timeline e progresso
- Colaboração entre membros do tenant

---

## 7. Sistema de IA Multi-Modelos e Router Inteligente

### 7.1 Modelos Suportados

| Provedor | Modelo | Uso Ideal |
|---|---|---|
| OpenAI | GPT-4o, GPT-4o-mini | Copywriting, criatividade |
| Anthropic | Claude 3.5 Sonnet, Haiku | Análise, raciocínio complexo |
| Google | Gemini 1.5 Pro, Flash | Pesquisa, multimodal |
| Mistral | Mistral Large, Small | Custo-benefício |
| Groq | Llama 3, Mixtral | Velocidade extrema |
| Perplexity | Sonar Pro | Pesquisa web em tempo real |

### 7.2 Router Inteligente de IA

O sistema decide automaticamente qual IA usar baseado na tarefa:

```
Tarefa detectada → Router analisa → IA selecionada

Copy / Criatividade  → GPT-4o
Análise / Raciocínio → Claude 3.5
Pesquisa Web        → Perplexity Sonar
Velocidade          → Groq
Multimodal          → Gemini 1.5
```

O usuário pode também selecionar manualmente o modelo desejado.

### 7.3 Gestão de Chaves de API

- Chaves armazenadas como variáveis de ambiente criptografadas (nunca no código)
- Gerenciadas exclusivamente pelo Super Admin
- Monitoramento de uso e custo por tenant
- Alertas de limite de token por plano

---

## 8. Painéis por Tipo de Usuário

### 8.1 Painel Super Admin (/admin)

**Dashboard:**
- Métricas da plataforma: tenants ativos, MRR atual e evolução
- Tenants com maior consumo (sem mostrar conteúdo)
- Alertas: tenants próximos do limite, falhas de cobrança

**Gestão de Tenants:**
- Listar todos com status, plano e data de criação
- Criar novo tenant (Cliente OMD ou SaaS)
- Editar plano, status e permissões
- Suspender ou excluir tenant
- Acessar Página de Contexto de Clientes OMD para editar

**Contexto da OMD:**
- Página dedicada para configurar o briefing completo da agência
- Usado quando a equipe OMD usa o sistema para projetos próprios

**Gestão de Planos:**
- Criar e editar planos com preço, limites e módulos incluídos
- Aplicar cupons e descontos por tenant
- Histórico de pagamentos e faturas

**Configurações do Sistema:**
- Gerenciar chaves de API de todos os provedores
- Definir limites de uso por plano
- Configurar provedores de pagamento

### 8.2 Painel do Cliente OMD

Ao fazer login, o cliente vê um sistema já configurado com o contexto do negócio dele.

**Acesso a:**
- Chat IA (com contexto do negócio carregado automaticamente)
- Todos os módulos da plataforma
- Histórico de conversas e outputs
- Gestão de projetos
- Exportação de conteúdo

### 8.3 Painel do Usuário SaaS

Idêntico ao do Cliente OMD em funcionalidades, mas:
- Configura o próprio contexto (sem intervenção da OMD)
- Gerencia o próprio plano e cobrança
- Suporte via chat (não tem gerente dedicado da OMD)

---

## 9. Fluxos de Onboarding

### 9.1 Onboarding — Cliente OMD

*Configurado pela equipe OMD antes do acesso do cliente. O cliente recebe o sistema pronto.*

1. OMD cria o tenant no Super Admin com nome e email do cliente
2. OMD preenche a Página de Contexto completa do cliente
3. OMD define o plano e os módulos disponíveis
4. Sistema envia email de boas-vindas com link de primeiro acesso
5. Cliente cria sua senha e já entra com tudo configurado
6. Tutorial rápido de 3 passos na primeira tela

### 9.2 Onboarding — Usuário SaaS

*Self-service completo. A OMD não intervém no processo.*

1. Usuário acessa o site e escolhe um plano
2. Cria conta com nome, email e senha
3. Realiza pagamento via cartão ou PIX
4. É redirecionado para o Assistente de Configuração de Contexto
5. Preenche as informações do negócio em 7 a 10 campos guiados
6. Pode pular e preencher depois, mas é incentivado a completar
7. Após configurar, acessa o sistema completo

### 9.3 Onboarding — Novo Membro de Tenant

1. Admin do tenant convida por email
2. Membro cria senha pelo link do convite
3. Acessa o sistema com as permissões definidas pelo admin
4. Já vê o contexto do negócio configurado pelo admin

---

## 10. Modelo de Monetização SaaS

### 10.1 Planos

| Plano | Preço/mês | Público | Recursos |
|---|---|---|---|
| **Starter** | R$ 97 | Freelancers, MEI | Chat IA, Módulo Copys, 100K tokens/mês |
| **Pro** | R$ 247 | PMEs, equipes pequenas | Todos os módulos, Agentes, RAG, 500K tokens/mês |
| **Agency** | R$ 497 | Agências, empresas | Multi-usuário (até 5), API, Analytics, 2M tokens/mês |
| **Enterprise** | Sob consulta | Grandes empresas | White-label, API prioritária, SLA, tokens ilimitados |
| **Cliente OMD** | Incluso no pacote OMD | Clientes da agência | Configurado pela OMD |

### 10.2 Add-ons

- Tokens extras: R$ 49 / 500K tokens
- Membros adicionais: R$ 37/mês cada
- Domínio personalizado: R$ 97/mês
- Suporte prioritário: R$ 197/mês

### 10.3 Política de Cobrança

- Cobrança recorrente mensal ou anual (desconto de 20% no anual)
- Pagamento via cartão de crédito ou PIX (integração Stripe + Pagar.me)
- Cancelamento sem multa a qualquer momento
- Dados exportáveis antes da exclusão da conta

---

## 11. Arquitetura Técnica e Stack

### 11.1 Stack Definida

| Camada | Tecnologia | Justificativa |
|---|---|---|
| **Frontend** | Next.js 14 + Tailwind CSS | SSR, performance, ecossistema |
| **Backend API** | Node.js + Express | Flexibilidade, integração com IAs |
| **Orquestrador IA** | LangChain / Vercel AI SDK | Router de modelos, RAG, agentes |
| **Banco Principal** | PostgreSQL (schema por tenant) | Isolamento real por schema |
| **Cache** | Redis | Sessions, cache de respostas |
| **Banco Vetorial** | Supabase Vector (pgvector) | RAG, memória semântica |
| **Autenticação** | JWT + bcrypt + 2FA (TOTP) | Segurança multi-camada |
| **Pagamentos** | Stripe + Pagar.me (PIX) | Mercado brasileiro |
| **Storage** | S3-compatible (Cloudflare R2) | Uploads, documentos RAG |
| **Deploy** | Docker + Coolify + Hostinger VPS | Controle total, custo baixo |
| **CI/CD** | GitHub Actions | Automação de deploy |
| **Monitoramento** | Sentry + Prometheus | Erros + métricas |

### 11.2 Diagrama de Arquitetura

```
Browser/Cliente
       │
  Next.js 14 (Frontend)
       │
  Node.js/Express (Backend API)
       │
  ┌────┼────────────┐
  │    │            │
Redis  PostgreSQL   LangChain (Orquestrador IA)
(cache) (schemas)        │
              ┌──────────┼────────────┐
              │          │            │
       Supabase Vector  OpenAI   Anthropic
       (pgvector RAG)   GPT-4o   Claude 3.5
                       Google    Groq
                       Gemini    Perplexity
```

### 11.3 Variáveis de Ambiente (Nunca no Código)

```env
# IAs
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
GOOGLE_AI_API_KEY=
GROQ_API_KEY=
PERPLEXITY_API_KEY=

# Banco
DATABASE_URL=
REDIS_URL=

# Pagamentos
STRIPE_SECRET_KEY=
PAGARME_API_KEY=

# Auth
JWT_SECRET=
TOTP_SECRET=

# Storage
R2_ACCESS_KEY=
R2_SECRET_KEY=
```

---

## 12. Banco de Dados e Isolamento

### 12.1 Estrutura por Schema

Cada tenant recebe um schema PostgreSQL dedicado com as seguintes tabelas:

```sql
-- Schema público (sistema)
public.tenants
public.plans
public.users
public.invoices
public.audit_logs

-- Schema do tenant (dados isolados)
tenant_{id}.context          -- Página de contexto
tenant_{id}.conversations    -- Histórico de chats
tenant_{id}.messages         -- Mensagens individuais
tenant_{id}.documents        -- Documentos RAG
tenant_{id}.document_chunks  -- Chunks vetorizados
tenant_{id}.agents           -- Agentes customizados
tenant_{id}.pipelines        -- Automações
tenant_{id}.projects         -- Projetos
tenant_{id}.outputs          -- Outputs gerados
tenant_{id}.members          -- Membros e permissões
```

### 12.2 Row Level Security (RLS)

RLS ativo em todas as tabelas de conteúdo. Mesmo que uma query vaze de um schema para outro, o RLS impede o acesso.

```sql
-- Política RLS exemplo
CREATE POLICY tenant_isolation ON messages
  USING (tenant_id = current_setting('app.tenant_id')::uuid);
```

---

## 13. Segurança, Privacidade e LGPD

### 13.1 Proteção de Dados

- Dados de cada tenant ficam em schema exclusivo no PostgreSQL
- RLS impede acesso cruzado mesmo por erro de query
- Chaves de API armazenadas em variáveis de ambiente criptografadas
- HTTPS obrigatório em todos os endpoints
- Tokens JWT com expiração de 24 horas
- 2FA obrigatório para Super Admin

### 13.2 Conformidade LGPD

- Usuário pode solicitar exportação de todos os seus dados
- Usuário pode solicitar exclusão completa da conta e dados
- Política de privacidade clara sobre o que é e não é acessado pela OMD
- Dados não são usados para treinar modelos de IA externos
- Logs de acesso mantidos por 90 dias e então excluídos

### 13.3 Garantias Explícitas para Usuário SaaS

O usuário SaaS paga pela plataforma e tem garantia explícita (na página de vendas e nos termos de uso) de que:

- ✅ A OMD não lê, não acessa e não usa o conteúdo gerado
- ✅ Seu contexto de negócio é privado e isolado
- ✅ Pode exportar e deletar tudo a qualquer momento
- ✅ Dados nunca são usados para treinar modelos de IA

### 13.4 Política de Acesso do Super Admin

O Super Admin da OMD tem acesso **técnico-operacional** (nome, email, plano, volume de tokens), mas é **tecnicamente impedido** de acessar conteúdos, históricos ou contexto de usuários SaaS. Essa garantia vai além de uma política — é implementada na arquitetura via schemas separados e ausência de queries cross-schema no código do Super Admin.

---

## 14. Requisitos Funcionais e Não-Funcionais

### 14.1 Requisitos Funcionais

| ID | Requisito | Prioridade | Tipo de Usuário |
|---|---|---|---|
| RF01 | Autenticação com email, senha e 2FA para Super Admin | Alta | Todos |
| RF02 | Isolamento total de dados por tenant (schema PostgreSQL) | Alta | Todos |
| RF03 | Página de Contexto configurável por tenant | Alta | Todos |
| RF04 | Injeção automática do contexto em todos os prompts | Alta | Todos |
| RF05 | Painel Super Admin com gestão de todos os tenants | Alta | OMD |
| RF06 | Criação de tenants do tipo Cliente OMD pelo Super Admin | Alta | OMD |
| RF07 | Onboarding self-service para usuários SaaS | Alta | SaaS |
| RF08 | Sistema de planos com limites de tokens e módulos | Alta | SaaS |
| RF09 | Cobrança recorrente via Stripe ou Pagar.me | Alta | SaaS |
| RF10 | Gestão de usuários por tenant (admin de tenant) | Média | Todos |
| RF11 | Histórico de conversas isolado por usuário e tenant | Alta | Todos |
| RF12 | Métricas de uso por tenant anonimizadas | Média | OMD |
| RF13 | Todos os 9 módulos de IA funcionando | Alta | Todos |
| RF14 | Exportação de outputs em DOCX e TXT | Média | Todos |
| RF15 | Router inteligente de modelos de IA | Média | Todos |
| RF16 | Sistema RAG com upload de documentos | Alta | Todos |
| RF17 | Automação de pipelines encadeados | Baixa | Todos |
| RF18 | 2FA para Super Admin obrigatório | Alta | OMD |

### 14.2 Requisitos Não-Funcionais

- **Segurança:** RLS ativo no PostgreSQL para todos os dados de tenant
- **Privacidade:** Conteúdo de usuários SaaS nunca acessível pela OMD
- **Performance:** Resposta da IA em no máximo 15 segundos
- **Disponibilidade:** Uptime de 99% no VPS Hostinger via Coolify
- **Escalabilidade:** Suporte a 500 tenants simultâneos no MVP
- **Conformidade:** LGPD — usuário pode solicitar exclusão de todos os seus dados

---

## 15. Roadmap de Desenvolvimento

| Fase | Período | Entregas Principais | Status |
|---|---|---|---|
| **F0** | Sem 1 | Estrutura multitenancy, schemas PostgreSQL, autenticação multi-role, layout base | Planejado |
| **F1** | Sem 2-3 | Painel Super Admin, gestão de tenants, Página de Contexto, deploy Coolify | Planejado |
| **F2** | Sem 4-5 | Módulo Copys com injeção de contexto, Módulo Estratégia, histórico por tenant | Planejado |
| **F3** | Sem 6-7 | Sistema de planos, cobrança recorrente Stripe/Pagar.me, onboarding SaaS | Planejado |
| **F4** | Sem 8-9 | Módulos restantes (Pesquisa, Imagens, Agentes, RAG), gestão de projetos | Planejado |
| **F5** | Sem 10 | Admin de tenant, convite de membros, site de vendas, página de planos pública | Planejado |
| **F6** | Sem 11-12 | Testes completos, refinamento de UX, lançamento para primeiros clientes OMD | Planejado |
| **F7** | Mês 4+ | Lançamento SaaS público, marketing, otimizações baseadas em feedback real | Futuro |
| **F8** | Mês 6+ | Router inteligente de IA, pipelines, marketplace de agentes | Futuro |
| **F9** | Mês 9+ | White-label, API pública, mobile app | Futuro |

---

## 16. Critérios de Aceite do MVP

| # | Critério | Como Validar |
|---|---|---|
| 1 | Super Admin cria tenant e usuário recebe email de acesso | Teste manual |
| 2 | Contexto configurado pela OMD aparece injetado nos prompts do cliente | Inspecionar request API |
| 3 | Usuário do Tenant A não consegue ver dados do Tenant B | Teste de segurança cruzado |
| 4 | Super Admin não consegue ler histórico de usuário SaaS | Tentar via Super Admin |
| 5 | Onboarding SaaS completo sem intervenção da OMD em menos de 5 minutos | Teste cronometrado |
| 6 | Pagamento SaaS gera acesso automático ao plano correto | Teste com cartão sandbox |
| 7 | Limite de tokens por plano é respeitado e notificado | Consumir o limite e verificar |
| 8 | Admin de tenant convida membro e membro acessa corretamente | Teste de convite |
| 9 | Exclusão de conta remove todos os dados do schema do tenant | Verificar banco pós-exclusão |
| 10 | Deploy via Coolify sobe sem erros e sistema é acessível pelo domínio | Deploy e acesso público |

---

## 17. Visão de Futuro

O OMD AI Hub tem potencial de evolução em múltiplas direções:

### 17.1 Curto Prazo (6-12 meses)
- Marketplace de agentes (venda e compra de agentes especializados)
- API pública para integrações externas
- Mobile app (React Native)
- White-label para outras agências

### 17.2 Médio Prazo (12-24 meses)
- **AI OS para Empresas** — Sistema operacional completo de IA para qualquer empresa
- Integrações nativas com n8n, Zapier, Make
- Relatórios automáticos de performance de conteúdo
- Integração com CRMs

### 17.3 Longo Prazo (24+ meses)
- **Hub Global de Agentes** — Plataforma de agentes especializados para qualquer setor
- Módulo de treinamento de LLMs customizados por tenant
- Enterprise: compliance avançado (SOC2, ISO 27001)

---

## 18. Prompt Inicial para Antigravity

Cole o prompt abaixo no Antigravity com **Planning Mode** ativo. Aguarde o plano ser gerado e revise antes de autorizar a execução.

```
Crie um sistema SaaS chamado OMD AI Hub para a agência OláMundoDigital.

ARQUITETURA: Multitenancy com isolamento por schema no PostgreSQL.

STACK:
- Frontend: Next.js 14 + Tailwind CSS
- Backend: Node.js + Express
- Banco: PostgreSQL (schema por tenant) + Redis
- Banco Vetorial: Supabase pgvector
- Deploy: Docker + Coolify no VPS Hostinger

TIPOS DE USUÁRIO:
1. Super Admin (OMD) — acesso total via painel separado em /admin
2. Cliente OMD — acesso com contexto pre-configurado pelo Super Admin
3. Usuário SaaS — onboarding self-service, pagamento via Stripe/Pagar.me

FUNCIONALIDADES FASE 0 (MVP Base):
- Autenticação JWT com roles: super_admin, tenant_admin, tenant_member
- 2FA obrigatório para super_admin (TOTP)
- Schema PostgreSQL separado por tenant
- Row Level Security (RLS) em todas as tabelas de conteúdo
- Página de Contexto por tenant: campos editáveis salvos no banco
- Injeção automática do contexto em todos os prompts de IA
- Painel Super Admin: criar/editar/suspender tenants, ver métricas de uso
- Módulo Copys: canal, objetivo, tom, instrução livre
- Integração com Anthropic Claude 3.5, OpenAI GPT-4o e Google Gemini
- Histórico de conversas isolado por usuário e tenant
- Chaves de API via variáveis de ambiente (nunca no código)
- Docker Compose com todos os serviços

PRIVACIDADE CRÍTICA:
Super Admin NÃO pode acessar conteúdo de tenants SaaS.
Apenas dados operacionais: nome, email, plano, volume de tokens consumidos.
Essa restrição deve ser arquitetural, não apenas política.

DESIGN: Premium, dark mode, glassmorphism sutil. 
Paleta: tons de azul/índigo escuros com acentos dourados/âmbar. 
Typography: Inter. Sem cores roxas/violeta.
```

---

## 📌 Próximos Passos

1. ✅ Validar e aprovar este PRD com a equipe da OMD
2. ⬜ Definir o domínio da plataforma (ex: `omdhub.com.br` ou `hub.olamundodigital.com.br`)
3. ⬜ Criar repositório privado no GitHub para o projeto
4. ⬜ Executar o prompt da Seção 18 com Planning Mode ativo
5. ⬜ Revisar o plano gerado antes de autorizar o código
6. ⬜ Configurar variáveis de ambiente no Coolify
7. ⬜ Deploy da Fase 0 e teste interno com a equipe OMD
8. ⬜ Convidar os primeiros 3 clientes OMD para beta fechado
9. ⬜ Coletar feedback e ajustar antes do lançamento SaaS público

---

*OláMundoDigital | OMD AI Hub PRD Final v3.0 | Março 2026 | Confidencial*
*Consolidado a partir do PRD ChatGPT v1.0 + PRD Claude v2.0*
*Gerado com suporte do Antigravity AI — Multi-Agent Orchestration*
