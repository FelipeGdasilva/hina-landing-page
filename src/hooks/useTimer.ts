import { useState, useEffect } from 'react';

export function useTimer() {
  // Agora os tempos são estados, para podermos mudar no seletor
  const [tempoRound, setTempoRound] = useState(180); // Padrão 3 min
  const [tempoDescanso, setTempoDescanso] = useState(60); // Padrão 1 min

  const [segundos, setSegundos] = useState(tempoRound);
  const [ativo, setAtivo] = useState(false);
  const [tipo, setTipo] = useState<'TREINO' | 'DESCANSO'>('TREINO');
  const [roundAtual, setRoundAtual] = useState(1);

  useEffect(() => {
    let intervalo: any = null;

    if (ativo && segundos > 0) {
      intervalo = setInterval(() => {
        setSegundos((s) => s - 1);
      }, 1000);
    } else if (segundos === 0 && ativo) {
      // Tocar o som do Gongo
      const audio = new Audio('/sounds/Gongo.mp3');
      audio.play().catch(e => console.log("Erro ao tocar som:", e));

      if (tipo === 'TREINO') {
        setTipo('DESCANSO');
        setSegundos(tempoDescanso);
      } else {
        setTipo('TREINO');
        setSegundos(tempoRound);
        setRoundAtual((r) => r + 1);
      }
    }

    return () => clearInterval(intervalo);
  }, [ativo, segundos, tipo, tempoRound, tempoDescanso]);

  const formatarTempo = () => {
    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
  };

  const alternarTimer = () => setAtivo(!ativo);

  const resetarTimer = () => {
    setAtivo(false);
    setSegundos(tempoRound);
    setTipo('TREINO');
    setRoundAtual(1);
  };

  // Esta é a função nova para o seu Seletor de Tempo
<<<<<<< HEAD
  const mudarConfiguracao = (novoRound: number, novoDescanso: number, roundInicial: number ) => {
=======
  const mudarConfiguracao = (novoRound: number, novoDescanso: number) => {
>>>>>>> d8aab225ec1d3c8b964c644b1a1ccffae6c11707
    setAtivo(false);
    setTempoRound(novoRound);
    setTempoDescanso(novoDescanso);
    setSegundos(novoRound);
    setTipo('TREINO');
<<<<<<< HEAD
    setRoundAtual(roundInicial);
=======
    setRoundAtual(1);
>>>>>>> d8aab225ec1d3c8b964c644b1a1ccffae6c11707
  };

  return { 
    segundos, 
    ativo, 
    tipo, 
    roundAtual, 
    formatarTempo, 
    alternarTimer, 
    resetarTimer,
    mudarConfiguracao 
  };
}