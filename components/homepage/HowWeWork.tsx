'use client'

import React from 'react'
import { motion } from 'framer-motion'

function HowWeWork() {
    const steps = [
        {
            number: '01',
            title: 'Discovery & Assessment',
            timeline: 'Week 1',
            description: 'Find your biggest wins',
            details: 'We analyze your workflow to identify the highest-impact automation opportunities—the ones that will save you the most time and money, fast.'
        },
        {
            number: '02',
            title: 'Build & Deploy',
            timeline: 'Weeks 2-4',
            description: 'Launch without the chaos',
            details: 'We build, test, and deploy your custom AI systems—integrated seamlessly into your existing workflow with zero downtime or disruption.'
        },
        {
            number: '03',
            title: 'Train & Support',
            timeline: 'Ongoing',
            description: 'Scale with confidence',
            details: 'We train your team, monitor performance, and continuously optimize your systems—so you keep getting better results as you grow.'
        }
    ]

    return (
        <section className="relative px-6 md:px-16 py-20 md:py-32 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-20"
                >
                    <div className="inline-block px-4 py-2 bg-button-secondary rounded-full mb-6">
                        <span className="text-sm font-medium text-foreground">How we work</span>
                    </div>
                    <h2 className="font-[family-name:var(--font-halant)] text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-6">
                        From first call to full automation<br />
                        <span className="text-muted">in just 4 weeks.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted max-w-3xl mb-8">
                        No endless meetings. No technical jargon. Just a straightforward process that gets you from "drowning in tasks" to "running on autopilot" faster than you thought possible.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background rounded-xl text-sm font-medium transition-all duration-300 hover:bg-foreground/90 hover:shadow-lg hover:scale-105"
                        >
                            Book your free AI audit
                        </a>

                    </div>
                </motion.div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="relative"
                        >
                            {/* Connector Line - Only show between cards on desktop */}


                            <div className="bg-button-secondary/30 rounded-2xl p-8 hover:bg-button-secondary/50 transition-all duration-300 h-full border border-foreground/5">
                                {/* Number Badge */}
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-foreground text-background text-sm font-medium mb-6">
                                    {step.number}
                                </div>

                                {/* Title & Timeline */}
                                <div className="mb-4">
                                    <h3 className="font-[family-name:var(--font-halant)] text-2xl md:text-3xl font-normal text-foreground mb-2">
                                        {step.title}
                                    </h3>
                                    <span className="inline-block px-3 py-1 bg-foreground/5 rounded-full text-xs font-medium text-muted">
                                        {step.timeline}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-base text-muted mb-3 font-medium">
                                    {step.description}
                                </p>

                                {/* Details */}
                                <p className="text-sm text-muted/70 leading-relaxed">
                                    {step.details}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowWeWork