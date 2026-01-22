import Badge from "@/components/ui/Badge";

export default function SecuritySection() {
  const securityFeatures = [
    {
      title: "Enterprise Security",
      description: "SOC 2 Type II certified infrastructure with end-to-end encryption. Your data is protected with industry-leading security standards.",
      icon: "🔒",
      items: ["SOC 2 Type II", "256-bit encryption", "Regular audits", "Penetration testing"],
    },
    {
      title: "Data Privacy",
      description: "GDPR and CCPA compliant. We never sell your data. Full data portability and right to deletion guaranteed.",
      icon: "🛡️",
      items: ["GDPR compliant", "CCPA compliant", "Data portability", "Privacy by design"],
    },
    {
      title: "Infrastructure",
      description: "Built on enterprise-grade cloud infrastructure with 99.9% uptime SLA. Automatic backups and disaster recovery.",
      icon: "☁️",
      items: ["99.9% uptime SLA", "Daily backups", "DDoS protection", "Global redundancy"],
    },
    {
      title: "Compliance",
      description: "Meet regulatory requirements with built-in compliance features. Audit logs, access controls, and data residency options.",
      icon: "✓",
      items: ["Audit logs", "Role-based access", "Data residency", "Compliance reports"],
    },
  ];

  return (
    <section className="px-6 md:px-16 xl:px-32 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="brand">SECURITY & COMPLIANCE</Badge>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mt-6 mb-6">
            ENTERPRISE-GRADE SECURITY
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Your data security is our top priority. We maintain the highest standards of security and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-brand/20 flex items-center justify-center text-3xl flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {feature.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    <span className="text-brand">✓</span>
                    <span className="text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-center text-xl font-black uppercase tracking-tight mb-8">
            CERTIFICATIONS & COMPLIANCE
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 font-bold text-sm">
              SOC 2 Type II
            </div>
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 font-bold text-sm">
              GDPR
            </div>
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 font-bold text-sm">
              CCPA
            </div>
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 font-bold text-sm">
              ISO 27001
            </div>
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 font-bold text-sm">
              PCI DSS
            </div>
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 font-bold text-sm">
              HIPAA Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
