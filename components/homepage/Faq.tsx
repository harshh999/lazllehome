'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: 'How quickly can we see results?',
            answer: 'Most clients see measurable time savings within the first 2-3 weeks. Full deployment typically takes 4 weeks, but you\'ll start feeling the impact much sooner. We prioritize quick wins early so you see ROI before the project even wraps up.'
        },
        {
            question: 'What if we\'re not "tech-savvy" enough?',
            answer: 'Perfect—that\'s exactly who we built this for. You don\'t need to understand AI or automation. We handle all the technical complexity and deliver systems so intuitive, your team will be using them confidently within days. Plus, we provide hands-on training and ongoing support.'
        },
        {
            question: 'How much time will this actually save us?',
            answer: 'Our clients typically save 15-25 hours per week on average—that\'s reclaiming an entire workday (or more) every single week. The exact number depends on your workflow, but we identify and automate the highest-impact tasks first to maximize your time savings.'
        },
        {
            question: 'Will this actually fit our unique workflow?',
            answer: 'Yes, because we don\'t use templates or pre-built solutions. Every system is custom-designed for your exact processes, tools, and team. We start with a deep-dive discovery phase to understand your workflow inside and out—then build something that fits like it was always meant to be there.'
        },
        {
            question: 'What happens after you launch our system?',
            answer: 'We don\'t just launch and disappear. You get ongoing support, performance monitoring, team training, and continuous optimization. As your business evolves, we refine and scale your systems to keep delivering maximum value. Think of us as your long-term automation partner, not a one-time vendor.'
        },
        {
            question: 'Can this scale as we grow?',
            answer: 'Absolutely. We build systems designed to handle 10x your current volume without breaking. As you grow, we expand your automation to match—adding new features, integrating new tools, and optimizing for increased demand. Your automation grows with you, not against you.'
        },
        {
            question: 'Do you work with our industry?',
            answer: 'We\'ve worked with businesses across e-commerce, professional services, SaaS, marketing agencies, healthcare, finance, and more. Our approach is workflow-focused, not industry-specific—we solve process problems, regardless of your sector. If you have repetitive tasks, we can automate them.'
        },
        {
            question: 'How much does this cost?',
            answer: 'Investment varies based on scope and complexity, but most projects range from $5K-$25K. We offer transparent, project-based pricing with no hidden fees or surprises. Book a free consultation, and we\'ll give you a detailed proposal tailored to your needs—with clear ROI projections so you know exactly what you\'re getting.'
        }
    ]

    return (
        <section className="relative px-6 md:px-16 py-20 md:py-32 bg-background">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-2 bg-button-secondary rounded-full mb-6">
                        <span className="text-sm font-medium text-foreground">FAQ</span>
                    </div>
                    <h2 className="font-[family-name:var(--font-halant)] text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-6">
                        Your questions, answered.
                    </h2>
                    <p className="text-lg md:text-xl text-muted">
                        Real answers to the questions every business asks before investing in AI automation.
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left bg-button-secondary/30 hover:bg-button-secondary/50 rounded-2xl p-6 md:p-8 transition-all duration-300 border border-foreground/5 hover:border-foreground/10"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="font-[family-name:var(--font-halant)] text-xl md:text-2xl font-normal text-foreground pr-4">
                                        {faq.question}
                                    </h3>
                                    <div
                                        className={`flex-shrink-0 w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            className="text-foreground"
                                        >
                                            <path
                                                d="M4 6L8 10L12 6"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-base md:text-lg text-muted leading-relaxed pt-4 pr-12">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16 p-8 md:p-12 bg-foreground rounded-3xl"
                >
                    <h3 className="font-[family-name:var(--font-halant)] text-3xl md:text-4xl font-normal text-background mb-4">
                        Ready to reclaim your time?
                    </h3>
                    <p className="text-lg text-background/80 mb-6">
                        Book a free AI audit and we\'ll show you exactly where you\'re losing hours—and how to get them back.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-8 py-4 bg-background text-foreground rounded-xl text-base font-medium transition-all duration-300 hover:bg-background/90 hover:shadow-lg hover:scale-105"
                    >
                        Book your free AI audit
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Faq