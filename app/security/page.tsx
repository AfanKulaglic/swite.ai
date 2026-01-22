import Badge from "@/components/ui/Badge";

export default function SecurityPage() {
  const features = [
    {
      icon: "🔐",
      title: "Data Encryption",
      description: "All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Your information is always protected.",
    },
    {
      icon: "🛡️",
      title: "DDoS Protection",
      description: "Enterprise-grade DDoS mitigation protects your websites from attacks and ensures 99.9% uptime.",
    },
    {
      icon: "🔒",
      title: "SSL Certificates",
      description: "Automatic SSL/TLS certificates for all websites. Free, auto-renewing, and configured instantly.",
    },
    {
      icon: "👤",
      title: "Access Control",
      description: "Role-based access control (RBAC) with granular permissions for team collaboration.",
    },
    {
      icon: "📊",
      title: "Audit Logs",
      description: "Comprehensive activity logging for compliance and security monitoring. Track all changes.",
    },
    {
      icon: "🔍",
      title: "Vulnerability Scanning",
      description: "Automated security scanning detects and alerts you to potential vulnerabilities.",
    },
  ];

  const compliance = [
    { name: "SOC 2 Type II", icon: "✓", status: "Certified" },
    { name: "GDPR", icon: "✓", status: "Compliant" },
    { name: "CCPA", icon: "✓", status: "Compliant" },
    { name: "ISO 27001", icon: "✓", status: "Certified" },
    { name: "HIPAA", icon: "✓", status: "Available" },
    { name: "PCI DSS", icon: "✓", status: "Level 1" },
  ];

  const practices = [
    "Regular third-party security audits",
    "Penetration testing by certified professionals",
    "24/7 security monitoring and incident response",
    "Automated backup and disaster recovery",
    "Multi-factor authentication (MFA) support",
    "IP whitelisting and access restrictions",
    "Data residency options for compliance",
    "Secure API with rate limiting",
  ];

  return (
    <div className="pt-32">
      <div className="px-6 md:px-16 xl:px-32 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in-up">
            <Badge variant="brand">SECURITY</Badge>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-6 mb-6">
              ENTERPRISE-GRADE SECURITY
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Your data security and privacy are our top priorities. We implement industry-leading security measures to protect your websites and information.
            </p>
          </div>

          {/* Security Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 opacity-0 animate-fade-in-up delay-200">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-brand/50 transition-all hover:scale-105"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Compliance */}
          <div className="mb-16 opacity-0 animate-fade-in-up delay-300">
            <h2 className="text-3xl font-black uppercase tracking-tight text-center mb-12">
              COMPLIANCE & CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {compliance.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-center hover:border-brand/50 transition-all hover:scale-105"
                >
                  <div className="text-4xl text-brand mb-3">{item.icon}</div>
                  <div className="font-black text-sm mb-1">{item.name}</div>
                  <div className="text-xs text-muted">{item.status}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Practices */}
          <div className="mb-16 opacity-0 animate-fade-in-up delay-400">
            <h2 className="text-3xl font-black uppercase tracking-tight text-center mb-12">
              SECURITY PRACTICES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {practices.map((practice, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <span className="text-brand text-xl flex-shrink-0">✓</span>
                  <span className="text-sm">{practice}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure */}
          <div className="mb-16 p-12 rounded-3xl bg-gradient-to-br from-brand/10 to-accentBlue/10 border border-brand/20 opacity-0 animate-fade-in-up delay-500">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-6 text-center">
              SECURE INFRASTRUCTURE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl mb-4">🌐</div>
                <h3 className="font-black mb-2">GLOBAL CDN</h3>
                <p className="text-sm text-muted">
                  200+ edge locations with automatic failover and load balancing
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">💾</div>
                <h3 className="font-black mb-2">DAILY BACKUPS</h3>
                <p className="text-sm text-muted">
                  Automated backups with 30-day retention and instant restore
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">🔄</div>
                <h3 className="font-black mb-2">99.9% UPTIME</h3>
                <p className="text-sm text-muted">
                  SLA-backed uptime guarantee with redundant infrastructure
                </p>
              </div>
            </div>
          </div>

          {/* Responsible Disclosure */}
          <div className="p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 opacity-0 animate-fade-in-up delay-600">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-6">
              RESPONSIBLE DISCLOSURE
            </h2>
            <p className="text-muted mb-6 leading-relaxed">
              We take security vulnerabilities seriously. If you discover a security issue, please report it to our security team at <a href="mailto:security@swite.ai" className="text-brand hover:underline">security@swite.ai</a>. We appreciate responsible disclosure and will work with you to address any issues promptly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:security@swite.ai"
                className="px-8 py-4 rounded-xl bg-brand text-black font-black uppercase text-sm hover:bg-brand/90 transition-all text-center"
              >
                Report Security Issue
              </a>
              <a
                href="/docs/security"
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 font-black uppercase text-sm hover:bg-white/10 transition-all text-center"
              >
                View Security Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
