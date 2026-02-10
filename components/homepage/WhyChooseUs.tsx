'use client'

import React from 'react'
import { motion } from 'framer-motion'

function WhyChooseUs() {
    const benefits = [
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: 'Next-Gen Websites',
            description: 'Websites that talk to your CRM and WhatsApp—not just static pages. We build digital experiences that actively capture leads and drive conversions.'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: '24/7 AI Agents',
            description: 'AI calling and chat agents that qualify leads, book meetings, and handle support instantly—scaling your team without increasing overhead.'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: 'Unified Dashboards',
            description: 'Real-time dashboards that consolidate marketing, sales, and ops metrics into one view, giving you total visibility and control.'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                        fill="currentColor"
                    />
                </svg>
            ),
            title: 'Zero-Touch Workflows',
            description: 'Automated pipelines that move data between forms, CRM, billing, and support tools with zero manual intervention.'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 2L2 7L12 12L22 7L12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M2 17L12 22L22 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M2 12L12 17L22 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: 'Scalable Architecture',
            description: 'We build systems designed for growth. Multi-tenant architecture and robust security ensure your tech stack never holds you back.'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M2 12H22"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: 'Actionable Intelligence',
            description: 'Turn raw data into business insights. We eliminate silos so your teams have the right information at the right time.'
        }
    ]

    return (
        <section className="relative px-6 md:px-16 py-20 md:py-32 bg-button-secondary/20">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="inline-block px-4 py-2 bg-button-secondary rounded-full mb-6">
                        <span className="text-sm font-medium text-foreground">Capabilities</span>
                    </div>
                    <h2 className="font-[family-name:var(--font-halant)] text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-6">
                        Outcomes, not just outputs.
                    </h2>
                    <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
                        We don't just ship features. We build the connected infrastructure that results in measurable time savings and revenue growth.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-background rounded-2xl p-8 h-full border border-foreground/5 hover:border-foreground/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6 text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                                    {benefit.icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-[family-name:var(--font-halant)] text-2xl font-normal text-foreground mb-3">
                                    {benefit.title}
                                </h3>

                                {/* Description */}
                                <p className="text-base text-muted leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center px-8 py-4 bg-foreground text-background rounded-xl text-base font-medium transition-all duration-300 hover:bg-foreground/90 hover:shadow-lg hover:scale-105"
                    >
                        Stop wasting time—start automating
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default WhyChooseUs