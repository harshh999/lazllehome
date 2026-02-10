'use client'

import React from 'react'
import { motion } from 'framer-motion'

function HowWeWork() {
    const steps = [
        {
            number: '01',
            title: 'Discover',
            timeline: 'Week 1',
            description: 'Audit & Analysis',
            details: 'We dive deep into your current operations, interviewing your team and mapping your data to find the biggest opportunities for automation.'
        },
        {
            number: '02',
            title: 'Design',
            timeline: 'Week 2',
            description: 'Blueprint & Strategy',
            details: 'We architect a custom solution that fits your unique workflow, ensuring every automation solves a real business problem.'
        },
        {
            number: '03',
            title: 'Build',
            timeline: 'Weeks 3-4',
            description: 'Development & Integration',
            details: 'Our engineers build your system using modern, secure technology, integrating it seamlessly with your existing software stack.'
        },
        {
            number: '04',
            title: 'Automate',
            timeline: 'Launch',
            description: 'Deployment & Training',
            details: 'We go live with zero downtime, training your team to ensure they are comfortable and confident with the new tools from day one.'
        },
        {
            number: '05',
            title: 'Optimize',
            timeline: 'Ongoing',
            description: 'Support & Scaling',
            details: 'We monitor performance, squash bugs, and continuously refine your workflows to keep efficiency high as you scale.'
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
                        Outcomes, delivered reliably.
                    </h2>
                    <p className="text-lg md:text-xl text-muted max-w-3xl mb-8">
                        We skip the fluff and focus on what matters: shipping high-quality software that solves your problems, backed by strict SLAs and measurable impact.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background rounded-xl text-sm font-medium transition-all duration-300 hover:bg-foreground/90 hover:shadow-lg hover:scale-105"
                        >
                            Start your project
                        </a>

                    </div>
                </motion.div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-6">
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
                            <div className="bg-button-secondary/30 rounded-2xl p-8 hover:bg-button-secondary/50 transition-all duration-300 h-full border border-foreground/5 flex flex-col">
                                {/* Number Badge */}
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-foreground text-background text-sm font-medium mb-6">
                                    {step.number}
                                </div>

                                {/* Title & Timeline */}
                                <div className="mb-4">
                                    <h3 className="font-[family-name:var(--font-halant)] text-2xl font-normal text-foreground mb-2">
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