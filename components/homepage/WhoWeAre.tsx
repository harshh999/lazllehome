'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    useEffect(() => {
        if (isInView && ref.current) {
            const controls = animate(0, value, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate(current) {
                    if (ref.current) {
                        // Handle formatting (comma for thousands)
                        ref.current.textContent = Math.floor(current).toLocaleString() + suffix
                    }
                }
            })
            return () => controls.stop()
        }
    }, [isInView, value, suffix])

    return <span ref={ref}>0{suffix}</span>
}

function WhoWeAre() {
    const stats = [
        {
            value: 1500,
            suffix: '+',
            label: 'Hours saved for clients monthly',
            gradient: 'from-teal-400/40 to-teal-500/40'
        },
        {
            value: 35,
            suffix: '%',
            label: 'Average reduction in manual work',
            gradient: 'from-orange-400/40 to-orange-500/40'
        },
        {
            value: 45,
            suffix: ' days',
            label: 'Average time to measurable ROI',
            gradient: 'from-cyan-400/40 to-cyan-500/40'
        }
    ]

    return (
        <section className="relative px-6 md:px-16 py-20 md:py-32 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-block px-4 py-2 bg-button-secondary rounded-full mb-8"
                >
                    <span className="text-sm font-medium text-foreground">Who we are</span>
                </motion.div>

                {/* Headline and Description Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
                    {/* Left - Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <h2 className="font-[family-name:var(--font-halant)] text-5xl md:text-6xl lg:text-7xl font-normal text-foreground leading-[1.1]">
                            The AI agency built for{' '}
                            <span className="text-muted">you.</span>
                        </h2>
                    </motion.div>

                    {/* Right - Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex items-center"
                    >
                        <p className="text-base md:text-lg text-muted leading-relaxed">
                            We built this agency to help businesses avoid AI overwhelm. We listen first, recommend only what works, and build systems you'll actually use—without the hype or complexity.
                        </p>
                    </motion.div>
                </div>

                {/* Large Gradient Card with Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative w-full rounded-[40px] md:rounded-[60px] overflow-hidden mb-16 flex items-center justify-center min-h-[500px]"
                >
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-orange-500 to-pink-600">
                        {/* Dark Overlay for better text visibility */}
                        <div className="absolute inset-0 bg-black/20" />

                        {/* Subtle texture overlay */}
                        <div
                            className="absolute inset-0 opacity-30"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                backgroundRepeat: 'repeat',
                                backgroundSize: '200px 200px'
                            }}
                        />
                    </div>

                    {/* Stats Cards Overlay */}
                    <div className="relative z-10 w-full p-8 md:p-12 lg:p-16">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                    className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 text-center flex flex-col items-center justify-center h-full min-h-[200px]"
                                >
                                    <p className="font-[family-name:var(--font-halant)] text-6xl md:text-8xl font-normal text-white mb-4">
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Bottom CTA Section */}

            </div>
        </section>
    )
}

export default WhoWeAre