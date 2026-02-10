import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GoWholeSale — Coming Soon | Lazlle & Co',
  description: 'Private B2B catalog and ordering platform for wholesalers. Give every wholesaler their own digital ordering & credit platform — without becoming a marketplace.',
}

export default function ECatalogPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Coming Soon */}
      <section className="relative px-6 md:px-16 py-32 md:py-48 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-button-secondary rounded-full mb-8">
              <span className="text-sm font-medium text-foreground">Product Launch</span>
            </div>
          </div>

          <h1 className="font-[family-name:var(--font-halant)] text-6xl md:text-8xl lg:text-9xl font-normal text-foreground mb-8 leading-[0.9] tracking-tight">
            COMING<br />SOON
          </h1>

          <div className="max-w-3xl space-y-6 mb-12">
            <p className="text-2xl md:text-3xl lg:text-4xl text-foreground/90 leading-tight font-[family-name:var(--font-halant)] font-normal">
              Give every wholesaler their own digital ordering & credit platform — without becoming a marketplace.
            </p>

            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl">
              Built for India's serious B2B wholesalers who are done with WhatsApp orders, Excel chaos, and credit confusion.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#early-access"
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:opacity-90"
            >
              Get Early Access
            </a>
            <a
              href="#why"
              className="inline-flex items-center gap-3 text-foreground font-medium group pb-1 border-b border-foreground/20 hover:border-foreground transition-all duration-300"
            >
              <span>See how it works</span>
              <div className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1">
                <svg viewBox="0 0 12 12" fill="none" className="w-full h-full">
                  <path d="M6 1V11M6 11L1 6M6 11L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Why E-catalog */}
      <section id="why" className="relative px-6 md:px-16 py-20 md:py-32 bg-[#F3F1EB]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[family-name:var(--font-halant)] text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-12">
            Why GoWholeSale?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-foreground/80 leading-relaxed">
            <div className="space-y-4">
              <p className="flex items-start gap-3">
                <span className="text-foreground/40 mt-1">—</span>
                <span>Orders currently scattered across WhatsApp, phone calls, and Excel sheets</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-foreground/40 mt-1">—</span>
                <span>No live stock visibility for retailers, leading to failed orders and frustration</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-foreground/40 mt-1">—</span>
                <span>Informal credit tracking causing payment disputes and cash flow issues</span>
              </p>
            </div>
            <div className="space-y-4">
              <p className="flex items-start gap-3">
                <span className="text-foreground/40 mt-1">—</span>
                <span>2–3 hours daily wasted on manual order coordination and follow-ups</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-foreground/40 mt-1">—</span>
                <span>No standardized pricing across different retailer tiers</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-foreground/40 mt-1">—</span>
                <span>Zero digital footprint or data for understanding business patterns</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Wholesalers Get */}
      <section className="relative px-6 md:px-16 py-20 md:py-32 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="text-sm font-medium text-foreground/50 uppercase tracking-wider">For Wholesalers</span>
          </div>
          
          <h2 className="font-[family-name:var(--font-halant)] text-4xl md:text-5xl font-normal text-foreground mb-12">
            Your own branded digital infrastructure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            <div>
              <h3 className="text-2xl font-[family-name:var(--font-halant)] text-foreground mb-3">
                Digital catalogue
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Complete product catalog with images, SKUs, specs, and pricing. Update once, instantly visible to all retailers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-[family-name:var(--font-halant)] text-foreground mb-3">
                Live inventory
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Real-time stock levels across warehouses. Retailers see what's actually available before placing orders.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-[family-name:var(--font-halant)] text-foreground mb-3">
                Retailer-wise pricing & credit
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Set custom pricing tiers and credit limits for each retailer. Automatic enforcement, zero manual checking.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-[family-name:var(--font-halant)] text-foreground mb-3">
                Order & delivery management
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Track every order from placement to delivery. Automated status updates, delivery scheduling, and payment reconciliation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Retailers Get */}
      <section className="relative px-6 md:px-16 py-20 md:py-32 bg-[#F3F1EB]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="text-sm font-medium text-foreground/50 uppercase tracking-wider">For Retailers</span>
          </div>
          
          <h2 className="font-[family-name:var(--font-halant)] text-4xl md:text-5xl font-normal text-foreground mb-12">
            Fast, verified bulk ordering
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-[family-name:var(--font-halant)] text-foreground mb-3">
                10–15 minute orders
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Browse catalog, check live stock, place bulk orders in minutes instead of hours of back-and-forth.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-[family-name:var(--font-halant)] text-foreground mb-3">
                Verified login
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Secure access with personalized pricing and credit terms. No confusion, no surprises.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-[family-name:var(--font-halant)] text-foreground mb-3">
                Cash/credit options
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Choose payment method, track credit balance, and see delivery timelines upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Not a Marketplace */}
      <section className="relative px-6 md:px-16 py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-halant)] text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-8">
            Not a marketplace.
          </h2>

          <div className="space-y-6 text-xl md:text-2xl text-foreground/80 leading-relaxed">
            <p>
              We don't sit between you and your retailers.
            </p>
            <p>
              You own the brand, the data, and the relationship.
            </p>
            <p>
              Think Shopify + Credit Layer for wholesalers — not IndiaMART or Udaan.
            </p>
          </div>

          <div className="mt-12 p-8 bg-[#F3F1EB] rounded-[2rem]">
            <p className="text-lg text-foreground/70 leading-relaxed">
              <strong className="text-foreground">Built for Tier‑2 & Tier‑3 India wholesalers.</strong><br />
              Designed for FMCG, garments, pharma, electricals & hardware distributors who want to own their digital infrastructure, not rent shelf space on someone else's platform.
            </p>
          </div>
        </div>
      </section>

      {/* Early Access Form */}
      <section id="early-access" className="relative px-6 md:px-16 py-20 md:py-32 bg-[#F3F1EB]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-halant)] text-4xl md:text-5xl font-normal text-foreground mb-6">
            Get Early Access
          </h2>
          
          <p className="text-xl text-foreground/70 mb-12 leading-relaxed">
            Join the waitlist for exclusive early access. Limited spots for our pilot launch with select wholesalers.
          </p>

          <div className="bg-background rounded-[2rem] p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-[#F3F1EB] rounded-xl border border-foreground/10 focus:border-foreground/30 focus:outline-none transition-colors text-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div className="text-left">
                  <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    className="w-full px-4 py-3 bg-[#F3F1EB] rounded-xl border border-foreground/10 focus:border-foreground/30 focus:outline-none transition-colors text-foreground"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="text-left">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-[#F3F1EB] rounded-xl border border-foreground/10 focus:border-foreground/30 focus:outline-none transition-colors text-foreground"
                  placeholder="you@company.com"
                />
              </div>

              <div className="text-left">
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-[#F3F1EB] rounded-xl border border-foreground/10 focus:border-foreground/30 focus:outline-none transition-colors text-foreground"
                  placeholder="+91"
                />
              </div>

              <div className="text-left">
                <label htmlFor="industry" className="block text-sm font-medium text-foreground mb-2">
                  Industry Type
                </label>
                <select
                  id="industry"
                  name="industry"
                  className="w-full px-4 py-3 bg-[#F3F1EB] rounded-xl border border-foreground/10 focus:border-foreground/30 focus:outline-none transition-colors text-foreground"
                >
                  <option value="">Select your industry</option>
                  <option value="fmcg">FMCG & Food Products</option>
                  <option value="garments">Garments & Textiles</option>
                  <option value="pharma">Pharma & Healthcare</option>
                  <option value="electricals">Electricals & Electronics</option>
                  <option value="hardware">Hardware & Building Materials</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="text-left">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your business (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#F3F1EB] rounded-xl border border-foreground/10 focus:border-foreground/30 focus:outline-none transition-colors text-foreground resize-none"
                  placeholder="Number of retailers, monthly volume, current challenges..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-foreground text-background px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:opacity-90"
              >
                Join the Waitlist
              </button>

              <p className="text-sm text-foreground/50 mt-4">
                We'll reach out within 48 hours to discuss your needs and pilot timeline.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative px-6 md:px-16 py-16 md:py-20 bg-background border-t border-foreground/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-foreground/70 mb-6">
            Questions about GoWholeSale?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lazlleandco@gmail.com"
              className="inline-flex items-center gap-3 text-foreground font-medium group pb-1 border-b border-foreground/20 hover:border-foreground transition-all duration-300"
            >
              <span>Email us</span>
              <div className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                <svg viewBox="0 0 12 12" fill="none" className="w-full h-full">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
            <a
              href="tel:+916351324531"
              className="inline-flex items-center gap-3 text-foreground font-medium group pb-1 border-b border-foreground/20 hover:border-foreground transition-all duration-300"
            >
              <span>Call +91 63513 24531</span>
              <div className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                <svg viewBox="0 0 12 12" fill="none" className="w-full h-full">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
