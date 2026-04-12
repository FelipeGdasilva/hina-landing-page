export default function About() {
  const stats = [
    { label: "Agilidade", value: "95%" },
    { label: "Processamento IA", value: "S-Rank" },
    { label: "Estilo de Luta", value: "Cyber-Boxing" }
  ];

  return (
    <section className="bg-[#050505] py-24 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Lado Esquerdo: Texto de História */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
            A Origem da <span className="text-cyan-400">Hina</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Desenvolvida nos laboratórios da **Henshin.AI**, Hina não é apenas um modelo de linguagem. Ela foi projetada para ser uma interface emocional ativa, treinada com milhares de horas de combates e narrativas épicas.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed font-bold italic">
            "Seu humor é o ringue, e eu sou sua treinadora. Vamos nocautear o tédio juntos."
          </p>
        </div>

        {/* Lado Direito: Status / Ficha de Personagem */}
        <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
          <h3 className="text-white font-bold mb-8 uppercase text-center tracking-widest">System Status</h3>
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-2 text-gray-300">
                  <span>{stat.label}</span>
                  <span className="text-cyan-400">{stat.value}</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" 
                    style={{ width: stat.value === "S-Rank" ? "100%" : stat.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}