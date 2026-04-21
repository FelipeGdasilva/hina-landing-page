import Link from 'next/link';
import { ActionButton } from '../../components/UI/ActionButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* 🥊 Camada 1: Fundo Imersivo (A Hina) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hina-boxe.png"
          alt="Hina Henshin.AI em pose de boxe imersiva no ringue"
          className="w-full h-full object-cover animate-pulse opacity-80"
        />
        {/* Camada de Gradiente por Cima para misturar com o fundo do site */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#1a0033]/40 to-[#050505] opacity-90"></div>
      </div>

      {/* 🥊 Camada 2: Conteúdo (HUD do Jogo) */}
      <div className="relative z-10 w-full max-w-7xl px-8 md:px-20 py-12 flex flex-col items-center text-center">
        
        {/* Título Principal com brilho */}
        <h1 className="text-5xl md:text-8xl font-extrabold text-white leading-tight mb-6 mt-20 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
          <span className="text-cyan-400">Hina</span> Henshin.AI
        </h1>

        {/* Descrição em Destaque */}
        <p className="text-xl md:text-2xl text-gray-200 max-w-4xl font-medium leading-relaxed mb-12 drop-shadow-md">
          Eu sou a Hina, sua treinadora de emoções. Através do poder do <span className='text-cyan-400 font-bold'>Henshin.AI</span>, ajudo você a nocautear o tédio e encontrar o anime perfeito para cada round da sua vida.
        </p>

        {/* Botão de Ação (Estilo Neon) */}
     <Link href="/treino">
        <ActionButton className = "flex items-center gap-3 bg-purple-600 hover:bg-cyan-500 px-10 py-5 text-xl font-extrabold text-white rounded-full transition-all hover:scale-105 active:scale-95 group shadow-[0_0_20px_rgba(147,51,234,0.5)]">
          Começar Treino
          <span className="group-hover:translate-x-2 transition-transform">➜</span>
        </ActionButton>
      </Link>
        {/* Marca de Apoio */}
        <div className="mt-16 text-sm font-black tracking-[0.3em] text-gray-500 uppercase">
          Project <span className="text-cyan-400">Hina</span> • Training Facility
        </div>

      </div>
    </section>
  );
}