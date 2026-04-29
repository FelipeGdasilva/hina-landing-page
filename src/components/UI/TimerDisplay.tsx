interface TimerDisplayProps {
  tempo: string;
  estaAtivo: boolean;
  tipo: 'TREINO' | 'DESCANSO'; // Adicionamos essa linha aqui!
}

export function TimerDisplay({ tempo, estaAtivo, tipo }: TimerDisplayProps) {
  // Criamos uma variável de cor que muda baseada no tipo
  const corPrincipal = tipo === 'TREINO' ? 'border-cyan-500' : 'border-purple-500';
  const corBrilho = tipo === 'TREINO' ? 'shadow-cyan-500/20' : 'shadow-purple-500/20';
  const textoCor = tipo === 'TREINO' ? 'text-cyan-400' : 'text-purple-400';

  return (
    <div className={`relative w-64 h-64 mb-10 flex items-center justify-center transition-colors duration-500`}>
      {/* Círculo de borda estático */}
      <div className={`absolute inset-0 border-2 ${corPrincipal} opacity-20 rounded-full`}></div>
      
      {/* Círculo com animação de giro */}
      <div className={`absolute inset-0 border-t-4 ${corPrincipal} rounded-full ${estaAtivo ? 'animate-spin' : ''}`}></div>

      <div className="flex flex-col items-center animate-pulse text-center">
        <span className="text-7xl font-black font-mono tracking-tighter text-white">
          {tempo}
        </span>
        <span className={`${textoCor} text-sm font-bold tracking-[0.2em] uppercase transition-colors`}>
          {tipo}
        </span>
      </div>
    </div>
  );
}