interface ActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string; // Isso aqui avisa o React que o botão pode receber classes extras
}

export function ActionButton({ children, onClick, className }: ActionButtonProps) {
  return (
    <button 
      onClick={onClick}
      // Aqui usamos o template string para somar as classes padrão com a className que vem de fora
      className={`flex items-center gap-3 bg-purple-600 hover:bg-cyan-500 px-10 py-5 
      text-xl font-extrabold text-white rounded-full transition-all 
      hover:scale-105 active:scale-95 group shadow-[0_0_20px_rgba(147,51,234,0.5)] ${className}`}
    >
      {children}
    </button>
  );
}