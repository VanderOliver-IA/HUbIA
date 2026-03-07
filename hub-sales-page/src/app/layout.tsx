import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'OMD AI Hub — A IA que conhece o seu negócio',
  description: 'O sistema SaaS de Inteligência Artificial Multi-Tenant definitivo para agências e empresas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} dark`}>
      <body className="min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Efeito visual de gradiente de fundo (Glows radiais estilo Apple/Premium) */}
        <div className="pointer-events-none fixed inset-0 z-0 flex justify-center">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-gold-soft blur-[120px] opacity-40"></div>
          <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-900/40 blur-[120px] opacity-50"></div>
        </div>
        
        <div className="relative z-10 flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
