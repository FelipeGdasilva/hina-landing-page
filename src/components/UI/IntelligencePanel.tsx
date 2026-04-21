import React from 'react';

const PROTOCOLOS = [
  { id: 'tecnico', nome: 'Técnico', treino: 2, descanso: 1, cor: 'text-cyan-400', borda: 'hover:border-cyan-500/50' },
  { id: 'sparring', nome: 'Sparring', treino: 3, descanso: 1, cor: 'text-red-500', borda: 'hover:border-red-500/50' },
  { id: 'cardio', nome: 'Cardio', treino: 5, descanso: 2, cor: 'text-yellow-400', borda: 'hover:border-yellow-400/50' },
];

interface IntelligencePanelProps {
  onSelectMode: ( treino: number, descanso: number, rounds: number) => void;
}

export const IntelligencePanel = ({ onSelectMode }: IntelligencePanelProps) => {
  return (
    <div className="bg-white/5 border border-white/10 p-5 rounded-sm backdrop-blur-md w-full max-w-md mb-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">System_Protocol_Select</h3>
        <div className="flex gap-1">
            <div className="w-1 h-1 bg-cyan-500 animate-pulse"></div>
            <div className="w-1 h-1 bg-cyan-500/50"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-3">
        {PROTOCOLOS.map((p) => (
          <button
            key={p.id}
            onClick={() => onSelectMode(p.treino *60, p.descanso *60, 1)} // Exemplo: treino em segundos, descanso em segundos, rounds fixos
            className={`flex flex-col items-center justify-center p-3 border border-white/5 bg-black/20 ${p.borda} transition-all duration-300 group`}
          >
            <span className={`text-2xl font-black italic ${p.cor} group-hover:scale-110 transition-transform`}>
              {p.treino}m
            </span>
            <span className="text-[9px] uppercase text-gray-500 font-bold tracking-tighter mt-1 group-hover:text-white">
              {p.nome}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};