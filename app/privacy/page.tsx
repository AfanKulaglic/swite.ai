import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 px-6 bg-black text-white">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/60">Last updated: January 23, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-white/80 leading-relaxed">
              SWITE.AI ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website builder platform.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>Account information (name, email address, password)</li>
              <li>Profile information (company name, job title)</li>
              <li>Content you create using our Service</li>
              <li>Payment information (processed securely via third-party providers)</li>
              <li>Communications with our support team</li>
            </ul>
            <p className="text-white/80 leading-relaxed mt-4">
              We also automatically collect certain information, including:
            </p>
            <ul className="list-disc list-inside text-white/80 space-y-2 mt-2">
              <li>Device information (browser type, operating system)</li>
              <li>Usage data (pages visited, features used)</li>
              <li>IP address and general location</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>Provide, maintain, and improve the Service</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>Service providers who assist in operating our platform</li>
              <li>Analytics providers to help us understand usage</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your consent</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p className="text-white/80 leading-relaxed">
              We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Delete your personal information</li>
              <li>Export your data in a portable format</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
            <p className="text-white/80 leading-relaxed">
              We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
            <p className="text-white/80 leading-relaxed">
              The Service is not intended for users under 16 years of age. We do not knowingly collect personal information from children under 16.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
            <p className="text-white/80 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="text-white/80 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@swite.ai" className="text-blue-400 hover:text-blue-300">
                privacy@swite.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
