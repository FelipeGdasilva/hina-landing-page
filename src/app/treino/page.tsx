"use client";

import Link from 'next/link';
import { useTimer } from '../../hooks/useTimer';

export default function TreinoPage() {
  const { ativo, formatarTempo, alternarTimer } = useTimer();

  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center p-8 overflow-hidden">
      {/* Detalhes de HUD nas bordas */}
      <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500 opacity-50"></div>

      {/* Cabeçalho */}
      <header className="w-full max-w-5xl flex justify-between items-center mb-16 border-b border-white/10 pb-6 z-10">
        <div>
          <h1 className="text-3xl font-black italic tracking-tighter text-cyan-400">
            HINA <span className="text-white">ARENA</span>
          </h1>
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">Training Module v1.0</p>
        </div>
        
        <div className="flex gap-8 text-right">
          <Link href="/">
            <button className="text-xs border border-white/20 hover:bg-white/10 px-4 py-2 rounded-sm transition-all uppercase font-bold text-white">
              Sair
            </button>
          </Link>
        </div>
      </header>

      {/* Cronômetro Central */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center">
        <div className="relative w-64 h-64 mb-10 flex items-center justify-center">
          <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full"></div>
          <div className={`absolute inset-0 border-t-4 border-cyan-500 rounded-full ${ativo ? 'animate-spin' : ''}`}></div>
          
          <div className="flex flex-col items-center animate-pulse">
            <span className="text-7xl font-black font-mono tracking-tighter">
              {formatarTempo()}
            </span>
            <span className="text-cyan-400 text-sm font-bold tracking-[0.2em] uppercase">
              {ativo ? "TREINANDO" : "READY?"}
            </span>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-4xl font-black uppercase mb-2">Round 01</h2>
          <p className="text-gray-400 max-w-sm italic">"A vontade de vencer é importante, mas a vontade de se preparar é vital."</p>
        </div>

        {/* Botão de Ação */}
        <div className="flex gap-4">
          <button 
            onClick={alternarTimer}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-black px-10 py-4 rounded-none skew-x-[-10deg] transition-all active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            {ativo ? "PAUSAR ROUND" : "INICIAR ROUND"}
          </button>
        </div>
      </section>

      {/* Efeito de Brilho no Fundo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/5 rounded-full blur-[120px] -z-10"
        style={{ width: '800px', height: '800px' }}
      ></div>
    </main>
  );
}