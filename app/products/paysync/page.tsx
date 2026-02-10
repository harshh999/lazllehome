import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, DollarSign, FileText, Repeat, Shield, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'PaySync — Global Invoicing Software | Lazlle & Co',
  description: 'Global invoicing software for frictionless billing. Multi-currency support, automated tax compliance, recurring billing, and seamless payment routing.',
}

export default function PaySyncPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/paysync-hero.jpg')] bg-cover bg-center opacity-20" />
        
        <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            PaySync
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8 max-w-2xl leading-relaxed">
            Global invoicing software for frictionless billing—multi-currency, automated compliance, instant collections
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 w-fit"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Billing Without Borders
        </h2>
        
        <div className="prose prose-lg text-slate-600 leading-relaxed">
          <p className="mb-4">
            PaySync solves the nightmares of global invoicing: multi-currency conversions, varying tax regulations, reconciliation headaches, and late payments. Whether you're a SaaS company billing customers in 20 countries or an agency managing international clients, PaySync automates the entire lifecycle.
          </p>
          
          <p className="mb-4">
            Create professional invoices in seconds, automatically calculate GST/VAT/sales tax based on customer location, accept payments in 150+ currencies, and reconcile transactions with zero manual effort. Set up recurring billing for subscriptions, send automated payment reminders, and get real-time insights into cash flow.
          </p>
          
          <p>
            <strong>Key Benefits:</strong> Reduce billing errors by 95%, accelerate payment collection by 40%, stay compliant with Indian GST and international tax laws, support UPI, SWIFT, PayPal, and 50+ payment methods. Built for Indian startups competing globally and agencies serving international clients.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Advanced Invoicing Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Multi-Currency Support',
                description: 'Bill in 150+ currencies with real-time exchange rate updates'
              },
              {
                icon: FileText,
                title: 'Tax Configuration',
                description: 'Automatic GST, VAT, sales tax calculation based on customer location'
              },
              {
                icon: Repeat,
                title: 'Recurring Billing',
                description: 'Set up subscriptions with monthly/annual auto-renewals'
              },
              {
                icon: DollarSign,
                title: 'Payment Routing',
                description: 'Accept UPI, cards, SWIFT, PayPal, and local payment methods'
              },
              {
                icon: BarChart3,
                title: 'Reconciliation',
                description: 'Automatic matching of payments with invoices, instant reports'
              },
              {
                icon: Shield,
                title: 'Compliance Tracking',
                description: 'Stay compliant with Indian GST and international tax regulations'
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <article key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Customer Profiles', desc: 'Add clients with billing details and preferred currency' },
            { step: '02', title: 'Generate Invoice', desc: 'Create invoice with auto-calculated taxes and totals' },
            { step: '03', title: 'Multi-Currency Collection', desc: 'Customer pays in their local currency via preferred method' },
            { step: '04', title: 'Auto Reconciliation', desc: 'Payment auto-matched, books updated, receipt sent' }
          ].map((item, index) => (
            <div key={index} className="relative">
              {index < 3 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-400 to-transparent" aria-hidden="true" />
              )}
              <div className="relative">
                <div className="text-6xl font-bold text-blue-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Simplify Global Billing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Processing ₹500M+ in invoices for 200+ businesses worldwide
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            Book a Demo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="contact" className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Request a Demo
          </h2>
          <p className="text-slate-600 mb-8">
            See PaySync in action. Contact us for a personalized demo and custom pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lazlleandco@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Email Us
            </a>
            <a
              href="tel:+916351324531"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-slate-800 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
