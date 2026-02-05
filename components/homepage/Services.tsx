'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

function Services() {
    const [activeService, setActiveService] = useState(0)

    const services = [
        {
            number: '01',
            title: 'Discover',
            description: 'We audit your workflow and pinpoint exactly where you\'re bleeding time and money—then show you how AI can plug those leaks.',
            image: '/discover.png'
        },
        {
            number: '02',
            title: 'Build',
            description: 'We design and develop custom AI systems tailored to your exact needs—no templates, no compromises, just solutions that fit like a glove.',
            image: '/build.png'
        },
        {
            number: '03',
            title: 'Deploy',
            description: 'We integrate everything seamlessly into your existing stack—zero disruption, maximum impact, and your team is up and running in days, not months.',
            image: '/deploy.png'
        },
        {
            number: '04',
            title: 'Optimize',
            description: 'We monitor, refine, and scale your systems as you grow—ensuring you\'re always getting maximum ROI from your automation investment.',
            image: '/optimize.png'
        }
    ]

    return (
        <section className="relative px-6 md:px-16 py-20 md:py-32 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center mb-16 md:mb-20"
                >
                    <div className="inline-block px-4 py-2 bg-button-secondary rounded-full mb-8">
                        <span className="text-sm font-medium text-foreground">Services</span>
                    </div>

                    <h2 className="font-[family-name:var(--font-halant)] text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4">
                        You focus on growth. We handle the rest.
                    </h2>
                    <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
                        From discovery to deployment, we manage every step of your AI transformation—so you can stay focused on what you do best.
                    </p>
                </motion.div>

                {/* Mobile View - Stacked Cards */}
                <div className="space-y-16 lg:hidden">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="space-y-6"
                        >
                            {/* Mobile Image */}
                            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-muted/10">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Mobile Details */}
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-sm font-medium text-muted/60">{service.number}</span>
                                    <h3 className="font-[family-name:var(--font-halant)] text-3xl font-normal text-foreground">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-lg text-muted leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-3 text-foreground font-medium group pb-1 border-b border-foreground/20 hover:border-foreground transition-all duration-300"
                                >
                                    <span>Book a free call</span>
                                    <div className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                                        <svg viewBox="0 0 12 12" fill="none" className="w-full h-full">
                                            <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop View - Interactive Grid */}
                <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-20 items-start">
                    {/* Left Side - Service List */}
                    <div className="lg:col-span-5 space-y-6 lg:space-y-8 relative">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onMouseEnter={() => setActiveService(index)}
                                onClick={() => setActiveService(index)}
                                className={`group relative p-6 md:p-10 rounded-[2rem] cursor-pointer transition-all duration-300 ${activeService === index
                                    ? 'bg-[#F3F1EB] scale-100'
                                    : 'bg-transparent hover:bg-black/[0.02] opacity-50 hover:opacity-100'
                                    }`}
                            >
                                <div className="flex items-start gap-1 relative z-10">
                                    <h3 className={`font-[family-name:var(--font-halant)] text-5xl md:text-6xl lg:text-7xl leading-[0.9] font-normal transition-colors duration-300 ${activeService === index ? 'text-foreground' : 'text-foreground'
                                        }`}>
                                        {service.title}
                                    </h3>
                                    <span className={`text-base font-medium font-sans translate-y-1 transition-colors duration-300 ${activeService === index ? 'text-foreground' : 'text-foreground'
                                        }`}>
                                        {service.number}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side - Active Service Details */}
                    <div className="lg:col-span-7 lg:sticky lg:top-32">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService}
                                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="space-y-8"
                            >
                                {/* Image */}
                                <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[2rem] overflow-hidden bg-muted/10">
                                    <Image
                                        src={services[activeService].image}
                                        alt={services[activeService].title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Service Details */}
                                <div className="max-w-2xl">
                                    <h4 className="font-[family-name:var(--font-halant)] text-3xl md:text-4xl font-normal text-foreground mb-4">
                                        {services[activeService].title}
                                    </h4>
                                    <p className="text-lg md:text-xl text-muted leading-relaxed mb-8">
                                        {services[activeService].description}
                                    </p>
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-3 text-foreground font-medium group pb-1 border-b border-foreground/20 hover:border-foreground transition-all duration-300"
                                    >
                                        <span>Book a free call</span>
                                        <div className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                                            <svg viewBox="0 0 12 12" fill="none" className="w-full h-full">
                                                <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services