import Badge from "@/components/ui/Badge";

export default function ComparisonSection() {
  const comparisons = [
    {
      feature: "Setup Time",
      traditional: "2-4 weeks",
      swite: "Under 1 hour",
      icon: "⏱️",
    },
    {
      feature: "Cost",
      traditional: "$5,000 - $50,000",
      swite: "Starting at $0",
      icon: "💰",
    },
    {
      feature: "Technical Skills",
      traditional: "Developer required",
      swite: "No coding needed",
      icon: "👨‍💻",
    },
    {
      feature: "Design Quality",
      traditional: "Depends on designer",
      swite: "AI-optimized",
      icon: "🎨",
    },
    {
      feature: "Maintenance",
      traditional: "Ongoing developer costs",
      swite: "Automated updates",
      icon: "🔧",
    },
    {
      feature: "Scalability",
      traditional: "Complex & expensive",
      swite: "Automatic scaling",
      icon: "📈",
    },
  ];

  return (
    <section className="px-6 md:px-16 xl:px-32 py-24 md:py-32 bg-gradient-to-b from-transparent via-white/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="brand">COMPARISON</Badge>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mt-6 mb-6">
            WHY CHOOSE SWITE.AI?
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            See how our AI-powered platform compares to traditional website development.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-white/5 border-b border-white/10">
            <div className="font-black uppercase text-sm">Feature</div>
            <div className="font-black uppercase text-sm text-center">Traditional</div>
            <div className="font-black uppercase text-sm text-center text-brand">Swite.ai</div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 p-6 border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-bold text-sm">{item.feature}</span>
              </div>
              <div className="text-center text-muted text-sm flex items-center justify-center">
                {item.traditional}
              </div>
              <div className="text-center text-brand font-bold text-sm flex items-center justify-center">
                {item.swite}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="text-4xl font-black text-brand mb-2">10x</div>
            <div className="text-sm text-muted">Faster Development</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="text-4xl font-black text-brand mb-2">90%</div>
            <div className="text-sm text-muted">Cost Reduction</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="text-4xl font-black text-brand mb-2">100%</div>
            <div className="text-sm text-muted">No-Code Solution</div>
          </div>
        </div>
      </div>
    </section>
  );
}
