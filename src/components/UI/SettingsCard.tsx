interface SettingsCardProps {
  onSelect: (r: number, d: number) => void;
}

export function SettingsCard({ onSelect }: SettingsCardProps) {
  return (
    <div className="flex gap-4 mt-8">
      <button 
        onClick={() => onSelect(120, 30)}
        className="text-[10px] border border-cyan-500/30 px-3 py-1 text-cyan-500 hover:bg-cyan-500/10 uppercase font-bold"
      >
        Light (2min / 30s)
      </button>
      <button 
        onClick={() => onSelect(180, 60)}
        className="text-[10px] border border-purple-500/30 px-3 py-1 text-purple-500 hover:bg-purple-500/10 uppercase font-bold"
      >
        Pro (3min / 1min)
      </button>
    </div>
  );
}