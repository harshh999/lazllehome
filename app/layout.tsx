import type { Metadata } from "next";
import { Geist, Geist_Mono, Halant } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lazlle Studio | AI Automation & Custom SaaS Solutions in Ahmedabad",
  description: "Stop losing hours to tasks AI can do in minutes. We build intelligent automation and custom AI agents that save 20+ hours every week. Trusted by 100+ fast-growing businesses.",
  keywords: [
    "AI automation",
    "custom AI solutions",
    "AI agents",
    "business automation",
    "SaaS development",
    "workflow automation",
    "AI consulting Ahmedabad",
    "intelligent automation",
    "custom software development",
    "AI integration"
  ],
  authors: [{ name: "Lazlle Studio" }],
  creator: "Lazlle Studio",
  publisher: "Lazlle Studio",
  metadataBase: new URL('https://www.lazlle.studio'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.lazlle.studio',
    title: "Lazlle Studio | AI Automation & Custom SaaS Solutions",
    description: "Stop losing hours to tasks AI can do in minutes. We build intelligent automation that works while you sleep. Save 20+ hours every week with custom AI agents and SaaS solutions.",
    siteName: 'Lazlle Studio',
    images: [
      {
        url: '/og-image.jpg', // You'll need to add this image
        width: 1200,
        height: 630,
        alt: 'Lazlle Studio - AI Automation & Custom SaaS Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lazlle Studio | AI Automation & Custom SaaS Solutions",
    description: "Stop losing hours to tasks AI can do in minutes. Save 20+ hours every week with custom AI agents and intelligent automation.",
    images: ['/twitter-image.jpg'], // You'll need to add this image
    creator: '@lazllestudio', // Update with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code', // Add when you have it
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lazlle Studio",
    "description": "AI automation and custom SaaS solutions provider specializing in intelligent automation and AI agents",
    "url": "https://www.lazlle.studio",
    "logo": "https://www.lazlle.studio/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressCountry": "IN"
    },
    "sameAs": [
      // Add your social media profiles here
      // "https://www.linkedin.com/company/lazlle-studio",
      // "https://twitter.com/lazllestudio",
      // "https://www.instagram.com/lazllestudio"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "availableLanguage": ["English"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "100"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "5000",
      "highPrice": "25000"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${halant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
