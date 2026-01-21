export default function TechnicalSpecsSection() {
  const specs = [
    {
      category: "Performance",
      items: [
        { label: "Page Load Time", value: "< 2 seconds globally" },
        { label: "CDN Locations", value: "200+ edge servers" },
        { label: "Uptime SLA", value: "99.9% guaranteed" },
        { label: "Core Web Vitals", value: "Optimized automatically" },
      ],
    },
    {
      category: "Capacity",
      items: [
        { label: "Pages per Website", value: "Unlimited" },
        { label: "Monthly Visitors", value: "Up to 10M (scalable)" },
        { label: "Storage", value: "1GB - 500GB" },
        { label: "Bandwidth", value: "Unlimited" },
      ],
    },
    {
      category: "Development",
      items: [
        { label: "API Rate Limit", value: "10,000 requests/hour" },
        { label: "Webhook Events", value: "Real-time delivery" },
        { label: "Custom Code", value: "HTML, CSS, JavaScript" },
        { label: "Version Control", value: "Unlimited history" },
      ],
    },
    {
      category: "Security",
      items: [
        { label: "SSL/TLS", value: "Automatic & free" },
        { label: "DDoS Protection", value: "Enterprise-grade" },
        { label: "Backups", value: "Daily automated" },
        { label: "Data Encryption", value: "256-bit AES" },
      ],
    },
  ];

  return (
    <section className="px-6 md:px-16 xl:px-32 py-24 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            TECHNICAL SPECIFICATIONS
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Enterprise-grade infrastructure built for performance, security, and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-black border border-white/10"
            >
              <h3 className="text-brand font-black uppercase text-sm mb-6">
                {spec.category}
              </h3>
              <div className="space-y-4">
                {spec.items.map((item, idx) => (
                  <div key={idx}>
                    <div className="text-xs text-muted mb-1">{item.label}</div>
                    <div className="text-sm font-bold">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
