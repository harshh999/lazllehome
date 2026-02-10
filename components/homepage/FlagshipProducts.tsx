'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ProductsCarousel from '@/components/services/ProductsCarousel'

function FlagshipProducts() {
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
                        <span className="text-sm font-medium text-foreground">Flagship Products</span>
                    </div>

                    <h2 className="font-[family-name:var(--font-halant)] text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4">
                        Premium SaaS products built for scale.
                    </h2>
                    <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
                        Industry-leading solutions that transform how businesses operate—from digital dining to global invoicing.
                    </p>
                </motion.div>

                {/* Products Carousel */}
                <ProductsCarousel />
            </div>
        </section>
    )
}

export default FlagshipProducts
