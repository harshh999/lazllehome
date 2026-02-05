'use client'

import React from 'react'
import { motion } from 'framer-motion'

function HeroSection() {
    return (
        <section className="relative flex flex-col items-center px-6 md:px-16 pt-32 md:pt-40 pb-14 overflow-hidden">
            {/* Main Content Container */}
            <div className="max-w-5xl w-full flex flex-col items-center gap-8 md:gap-10 z-10">

                {/* Stars and Trust Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="flex flex-col items-center gap-2"
                >
                    {/* Stars */}
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#2B180A]"
                            >
                                <path
                                    d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                                    fill="currentColor"
                                />
                            </svg>
                        ))}
                    </div>

                    {/* Trust Text */}
                    <p className="text-sm font-medium text-[#2B180A] tracking-tight">
                        Trusted by 100+ fast-growing businesses
                    </p>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-center"
                >
                    <h1 className="font-[family-name:var(--font-halant)] capitalize text-[48px] md:text-[70px] leading-[1.1] font-normal text-[#2B180A] tracking-tight">
                        Stop losing hours to tasks AI can do in minutes.
                    </h1>
                </motion.div>

                {/* Subtext */}
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-center max-w-2xl"
                >
                    <p className="text-base md:text-xl capitalize leading-[1.5] text-[#94877C] font-normal">
                        We build intelligent automation that works while you sleep—custom AI agents and SaaS solutions that eliminate repetitive work, so you can focus on what actually grows your business.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 items-center"
                >
                    {/* Primary Button */}
                    <a
                        href="#contact"
                        className="px-6 py-3 bg-[#2B180A] text-[#FAF6F2] rounded-xl text-sm font-medium transition-all duration-300 hover:bg-[#3d2410] hover:shadow-lg hover:scale-105 active:scale-95"
                    >
                        Get your free AI roadmap
                    </a>

                    {/* Secondary Button */}

                </motion.div>

                {/* Decorative Background Graphic */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="relative w-full max-w-4xl h-[300px] md:h-[400px] rounded-[40px] md:rounded-[60px] overflow-hidden mt-4"
                >
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-orange-300 to-pink-400">
                        {/* Grain Texture Overlay */}
                        <div
                            className="absolute inset-0 opacity-50"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                backgroundRepeat: 'repeat',
                                backgroundSize: '200px 200px'
                            }}
                        />
                    </div>

                    {/* Dot Grid Overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.4) 1.5px, transparent 1.5px)`,
                            backgroundSize: '32px 32px'
                        }}
                    />

                    {/* Content Placeholder - You can add text or other elements here */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white/80 text-center px-8">
                            <h3 className="font-[family-name:var(--font-halant)] text-2xl md:text-4xl font-medium mb-2">
                                Save 20+ hours every week
                            </h3>
                            <p className="text-sm md:text-base opacity-90">
                                Join businesses automating their way to freedom
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection