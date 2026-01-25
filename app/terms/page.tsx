import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20 px-6 bg-black text-white">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-white/60">Last updated: January 23, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-white/80 leading-relaxed">
              By accessing and using SWITE.AI ("the Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="text-white/80 leading-relaxed">
              SWITE.AI is an AI-powered website builder platform that allows users to create, customize, and deploy professional websites. The Service includes access to templates, design tools, hosting services, and related features.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              To use certain features of the Service, you must register for an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your password and account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Acceptable Use</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights of others</li>
              <li>Distribute malware or harmful code</li>
              <li>Engage in spam or unsolicited communications</li>
              <li>Create websites with illegal, harmful, or offensive content</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
            <p className="text-white/80 leading-relaxed">
              You retain ownership of content you create using the Service. However, you grant SWITE.AI a license to host, display, and distribute your content as necessary to provide the Service. SWITE.AI retains all rights to its platform, templates, and proprietary technology.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Payment and Billing</h2>
            <p className="text-white/80 leading-relaxed">
              Paid subscriptions are billed in advance on a monthly or annual basis. You authorize us to charge your payment method for all fees. Refunds are provided in accordance with our refund policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
            <p className="text-white/80 leading-relaxed">
              SWITE.AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service. Our total liability shall not exceed the amount you paid for the Service in the preceding 12 months.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
            <p className="text-white/80 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through the Service. Continued use of the Service after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. Contact</h2>
            <p className="text-white/80 leading-relaxed">
              For questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:legal@swite.ai" className="text-blue-400 hover:text-blue-300">
                legal@swite.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
