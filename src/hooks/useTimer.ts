import { useState, useEffect } from 'react';

export function useTimer() {
  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    let intervalo: any = null;
    if (ativo) {
      intervalo = setInterval(() => {
        setSegundos((s) => s + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [ativo]);

  const formatarTempo = () => {
    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
  };

  const alternarTimer = () => setAtivo(!ativo);

  return { segundos, ativo, formatarTempo, alternarTimer };
}

