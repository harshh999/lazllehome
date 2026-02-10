import type { Metadata } from 'next'
import Link from 'next/link'
import { QrCode, Smartphone, CreditCard, TrendingUp, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Scan-N-Dine — Digital Menu & Ordering | Lazlle & Co',
  description: 'Revolutionary digital menu solution replacing costly POS systems. Scan QR code, order, and pay directly from the table. Perfect for restaurants and cafes.',
}

export default function ScanNDinePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/scan-dine-hero.jpg')] bg-cover bg-center opacity-20" />
        
        <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Scan-N-Dine
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8 max-w-2xl leading-relaxed">
            Revolutionary digital menu solution—scan, order, pay directly from the table
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 w-fit"
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
          Transform Your Restaurant Experience
        </h2>
        
        <div className="prose prose-lg text-slate-600 leading-relaxed">
          <p className="mb-4">
            Scan-N-Dine replaces costly POS terminals with a simple, elegant QR-driven experience. Ideal for restaurants, cafes, and food courts seeking lower operational costs and faster table turnover.
          </p>
          
          <p className="mb-4">
            Your customers scan a QR code at their table, browse your menu with high-quality images, customize their orders, and pay securely—all from their own device. Orders go straight to your kitchen, eliminating manual entry errors and reducing wait times.
          </p>
          
          <p>
            <strong>Key Benefits:</strong> Contactless ordering for safety, integrated payment processing, real-time menu analytics, multi-language support, and zero hardware investment. Perfect for Indian restaurants looking to modernize without breaking the bank.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Powerful Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: QrCode,
                title: 'QR Code Ordering',
                description: 'Customers scan table QR codes to instantly access your digital menu'
              },
              {
                icon: Smartphone,
                title: 'Mobile-First Design',
                description: 'Beautiful, responsive interface works on any smartphone or tablet'
              },
              {
                icon: CreditCard,
                title: 'Integrated Payments',
                description: 'Accept UPI, cards, and digital wallets with automatic reconciliation'
              },
              {
                icon: TrendingUp,
                title: 'Real-Time Analytics',
                description: 'Track popular dishes, peak hours, and customer preferences'
              },
              {
                icon: Clock,
                title: 'Faster Service',
                description: 'Orders sent directly to kitchen, reducing wait times by 40%'
              },
              {
                icon: Shield,
                title: 'Secure & Compliant',
                description: 'PCI-DSS compliant payment processing with data encryption'
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <article key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 mb-4">
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
            { step: '01', title: 'Scan QR Code', desc: 'Guest scans QR code at table to open digital menu' },
            { step: '02', title: 'Browse & Order', desc: 'Select items, customize, and add to cart' },
            { step: '03', title: 'Secure Payment', desc: 'Pay via UPI, card, or digital wallet' },
            { step: '04', title: 'Kitchen Receives', desc: 'Order sent to kitchen automatically' }
          ].map((item, index) => (
            <div key={index} className="relative">
              {index < 3 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-amber-400 to-transparent" aria-hidden="true" />
              )}
              <div className="relative">
                <div className="text-6xl font-bold text-amber-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 100+ restaurants across India using Scan-N-Dine
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
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
            See Scan-N-Dine in action. Contact us for a personalized demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lazlleandco@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-amber-600 transition-colors"
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
