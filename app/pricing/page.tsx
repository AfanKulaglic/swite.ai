"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, annual: 0 },
      description: "Perfect for personal projects and testing",
      features: [
        "3 websites",
        "AI website generation",
        "Visual editor access",
        "Basic templates",
        "Community support",
        "SSL certificates",
        "Mobile responsive",
        "50GB bandwidth"
      ],
      cta: "Start Free",
      href: "/studio",
      popular: false
    },
    {
      name: "Pro",
      price: { monthly: 29, annual: 290 },
      description: "For professionals and growing businesses",
      features: [
        "Unlimited websites",
        "Advanced AI features",
        "Priority support",
        "Custom domains",
        "Team collaboration (5 members)",
        "Version control",
        "Analytics dashboard",
        "500GB bandwidth",
        "A/B testing",
        "Custom code export"
      ],
      cta: "Start 14-Day Trial",
      href: "/studio",
      popular: true
    },
    {
      name: "Enterprise",
      price: { monthly: null, annual: null },
      description: "For large teams with custom requirements",
      features: [
        "Everything in Pro",
        "Unlimited bandwidth",
        "Unlimited team members",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "SLA guarantee (99.99%)",
        "Advanced security",
        "White-label options",
        "Custom AI training"
      ],
      cta: "Contact Sales",
      href: "/contact",
      popular: false
    }
  ];

  const comparisonFeatures = [
    { feature: "Websites", free: "3", pro: "Unlimited", enterprise: "Unlimited" },
    { feature: "Bandwidth", free: "50GB", pro: "500GB", enterprise: "Unlimited" },
    { feature: "AI Generation", free: true, pro: true, enterprise: true },
    { feature: "Visual Editor", free: true, pro: true, enterprise: true },
    { feature: "Custom Domains", free: false, pro: true, enterprise: true },
    { feature: "Team Members", free: "1", pro: "5", enterprise: "Unlimited" },
    { feature: "Priority Support", free: false, pro: true, enterprise: true },
    { feature: "Version Control", free: false, pro: true, enterprise: true },
    { feature: "Analytics", free: false, pro: true, enterprise: true },
    { feature: "A/B Testing", free: false, pro: true, enterprise: true },
    { feature: "Code Export", free: false, pro: true, enterprise: true },
    { feature: "White Label", free: false, pro: false, enterprise: true },
    { feature: "SLA Guarantee", free: false, pro: false, enterprise: true },
    { feature: "Dedicated Manager", free: false, pro: false, enterprise: true }
  ];

  const faqs = [
    {
      q: "Can I change plans anytime?",
      a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and wire transfers for Enterprise plans."
    },
    {
      q: "Is there a free trial for paid plans?",
      a: "Yes, Pro and Enterprise plans include a 14-day free trial. No credit card required to start."
    },
    {
      q: "What happens if I exceed my limits?",
      a: "We'll notify you before you reach your limits. You can upgrade your plan or purchase additional resources as needed."
    },
    {
      q: "Do you offer refunds?",
      a: "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, we'll refund your payment in full."
    },
    {
      q: "Can I cancel my subscription?",
      a: "Absolutely. You can cancel anytime with no penalties. Your sites remain active until the end of your current billing period."
    },
    {
      q: "Do you offer discounts for nonprofits?",
      a: "Yes, we offer special pricing for nonprofits, educational institutions, and open-source projects. Contact our sales team for details."
    },
    {
      q: "What's included in Enterprise support?",
      a: "Enterprise plans include a dedicated account manager, 24/7 phone support, custom SLA, priority bug fixes, and direct access to our engineering team."
    }
  ];

  return (
    <main className="w-full bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center border-b border-[#4169E1]/10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] animate-pulse-glow-soft" />
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-emerald-500/12 via-green-500/8 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/18 via-green-500/12 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-green-500/8 to-emerald-500/8 rounded-full blur-3xl animate-float-orb-3" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#4169E1]/20 rounded-full bg-gradient-to-r from-[#4169E1]/5 to-[#6B46C1]/5">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4169E1] to-[#6B46C1]" />
            <span className="text-xs font-medium text-white/60 tracking-wider uppercase">Simple Pricing</span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-tight leading-[0.95] mb-6">
            <span className="block text-white/40">Plans that scale</span>
            <span className="block font-medium text-white">with your business</span>
          </h1>

          <p className="text-lg text-white/40 max-w-2xl mx-auto font-light mb-12">
            Start free, upgrade when you're ready. All plans include our core AI features with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 border border-[#4169E1]/20 rounded-full bg-black/50 backdrop-blur-xl">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                billingCycle === "annual"
                  ? "bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Annual
              <span className="ml-2 text-xs text-green-400">Save 17%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-orange-500/5 animate-pulse-glow-soft" />
        <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-gradient-to-br from-amber-500/18 via-green-500/12 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-orange-500/18 via-green-500/12 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative group ${plan.popular ? "md:-mt-8" : ""}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-4 py-1.5 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-xs font-medium rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative h-full border ${
                    plan.popular ? "border-[#4169E1]/40" : "border-[#4169E1]/20"
                  } bg-gradient-to-br from-[#1A1A1A] to-black rounded-xl p-8 hover:border-[#4169E1]/40 transition-all duration-500`}
                >
                  {/* Plan Name */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-medium mb-3">{plan.name}</h3>
                    <p className="text-sm text-white/60 font-light">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    {plan.price[billingCycle] === null ? (
                      <div className="text-4xl font-light text-white">Custom</div>
                    ) : (
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-light text-white">
                          ${plan.price[billingCycle]}
                        </span>
                        <span className="text-white/40 text-sm">
                          /{billingCycle === "monthly" ? "mo" : "yr"}
                        </span>
                      </div>
                    )}
                    {billingCycle === "annual" && plan.price.annual !== null && plan.price.annual > 0 && (
                      <div className="text-xs text-white/40 mt-2">
                        ${(plan.price.annual / 12).toFixed(0)}/mo billed annually
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={plan.href}
                    className={`block w-full py-3 text-center text-sm font-medium rounded-lg mb-8 transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white hover:opacity-90"
                        : "border border-[#4169E1]/20 text-white/80 hover:bg-[#4169E1]/5 hover:border-[#4169E1]/40"
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  {/* Features */}
                  <div className="space-y-4">
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-4">
                      What's Included
                    </div>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg
                          className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-white/70 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#4169E1]/5 to-[#6B46C1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative py-32 px-6 border-t border-[#4169E1]/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 via-transparent to-pink-500/5 animate-pulse-glow-soft" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-rose-500/18 via-green-500/12 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-pink-500/18 via-green-500/12 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-4">
              <span className="text-white/40">Compare all features</span>
              <br />
              <span className="text-white">across plans</span>
            </h2>
            <p className="text-white/40 font-light">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black rounded-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-px bg-[#4169E1]/10">
              <div className="bg-black p-6">
                <div className="text-sm text-white/60 font-medium">Feature</div>
              </div>
              <div className="bg-black p-6 text-center">
                <div className="text-sm font-medium text-white">Free</div>
              </div>
              <div className="bg-black p-6 text-center">
                <div className="text-sm font-medium text-white">Pro</div>
              </div>
              <div className="bg-black p-6 text-center">
                <div className="text-sm font-medium text-white">Enterprise</div>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonFeatures.map((item, i) => (
              <div key={i} className="grid grid-cols-4 gap-px bg-[#4169E1]/10">
                <div className="bg-black p-4">
                  <div className="text-sm text-white/80">{item.feature}</div>
                </div>
                <div className="bg-black p-4 flex items-center justify-center">
                  {typeof item.free === "boolean" ? (
                    item.free ? (
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )
                  ) : (
                    <span className="text-sm text-white/60">{item.free}</span>
                  )}
                </div>
                <div className="bg-black p-4 flex items-center justify-center">
                  {typeof item.pro === "boolean" ? (
                    item.pro ? (
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )
                  ) : (
                    <span className="text-sm text-white/60">{item.pro}</span>
                  )}
                </div>
                <div className="bg-black p-4 flex items-center justify-center">
                  {typeof item.enterprise === "boolean" ? (
                    item.enterprise ? (
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )
                  ) : (
                    <span className="text-sm text-white/60">{item.enterprise}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 px-6 border-t border-[#4169E1]/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 via-transparent to-purple-500/5 animate-pulse-glow-soft" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-violet-500/18 via-green-500/12 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-purple-500/18 via-green-500/12 to-transparent rounded-full blur-3xl animate-float-orb-3" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-4">
              <span className="text-white/40">Frequently asked</span>
              <br />
              <span className="text-white">questions</span>
            </h2>
            <p className="text-white/40 font-light">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-6 rounded-xl hover:border-[#4169E1]/40 transition-all duration-500 group"
              >
                <h3 className="text-base font-medium mb-3 group-hover:text-white transition-colors">
                  {faq.q}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 text-center">
            <div className="border border-[#4169E1]/20 bg-gradient-to-br from-[#1A1A1A] to-black p-12 rounded-xl">
              <h3 className="text-2xl font-medium mb-4">Still have questions?</h3>
              <p className="text-white/60 mb-8 font-light">
                Our team is here to help. Get in touch and we'll respond within 24 hours.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 border-t border-[#4169E1]/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-cyan-500/6 to-teal-500/8 animate-float-orb" />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-cyan-500/20 via-blue-500/8 to-transparent rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-teal-500/12 via-cyan-500/8 to-transparent rounded-full blur-3xl animate-float-orb-2" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl font-light tracking-tight mb-6">
            <span className="text-white/40">Ready to get started?</span>
            <br />
            <span className="text-white">Start building for free</span>
          </h2>
          <p className="text-lg text-white/40 mb-12 max-w-2xl mx-auto font-light">
            No credit card required. Upgrade anytime as your needs grow.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/studio"
              className="px-8 py-4 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300 rounded-lg"
            >
              Start Building Free
            </Link>
            
            <Link
              href="/contact"
              className="px-8 py-4 border border-[#4169E1]/20 text-sm font-medium text-white/60 hover:text-white hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all duration-300 tracking-wide rounded-lg"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
