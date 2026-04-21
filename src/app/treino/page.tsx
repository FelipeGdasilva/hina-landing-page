"use client";

import Link from 'next/link';
import { useTimer } from '../../hooks/useTimer';
import { ActionButton } from '../../components/UI/ActionButton';
import { TimerDisplay } from '../../components/UI/TimerDisplay';
import { SettingsCard } from '../../components/UI/SettingsCard';
export default function TreinoPage() {
  const { ativo, formatarTempo, alternarTimer, tipo, roundAtual, mudarConfiguracao } = useTimer();

  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center p-8 overflow-hidden">
     <SettingsCard onSelect={mudarConfiguracao} />
      {/* Detalhes de HUD e Cabeçalho (Mantenha como você já tem) */}
      <header className="w-full max-w-5xl flex justify-between items-center mb-16 border-b border-white/10 pb-6 z-10">
        <div>
          <h1 className="text-3xl font-black italic tracking-tighter text-cyan-400">
            HINA <span className="text-white">ARENA</span>
          </h1>
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">Training Module v1.0</p>
        </div>
        <Link href="/">
           <button className="text-xs border border-white/20 hover:bg-white/10 px-4 py-2 rounded-sm transition-all font-bold text-white uppercase">
              Sair
           </button>
        </Link>
      </header>

      {/* --- CRONÔMETRO CENTRAL (USANDO COMPONENTES UI) --- */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center">
        
        <TimerDisplay tempo={formatarTempo()} estaAtivo={ativo} tipo={tipo} />

        <div className="text-center mb-10">
       <h2 className="text-4xl font-black uppercase mb-2 text-white">
    {/* Se for treino, mostra o número do round. Se for descanso, avisa o usuário */}
    {tipo === 'TREINO' ? `Round ${roundAtual.toString().padStart(2, '0')}` : 'Descanso'}
    </h2>
          <p className="text-gray-400 max-w-sm italic text-sm">
        {tipo === 'TREINO' 
      ? "Foque na técnica e na respiração!" 
      : "Recupere o fôlego para o próximo round."}
       </p>
     </div>

        <div className="flex gap-4">
          <ActionButton onClick={alternarTimer}>
            {ativo ? 'PAUSAR ROUND' : 'INICIAR ROUND'}
          </ActionButton>
        </div>
      </section>

      {/* Efeito de Brilho no Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/5 rounded-full blur-[120px] -z-10 w-[800px] h-[800px]" />
    </main>
  );
}