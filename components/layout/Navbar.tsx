'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'FAQ', href: '#faq' },
    ]

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background'
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-20">
                        {/* Desktop Navigation Links - Left */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Logo - Center on Desktop, Left on Mobile */}
                        <Link
                            href="/"
                            className="font-[family-name:var(--font-halant)] text-2xl lg:text-4xl font-normal text-foreground lg:absolute lg:left-1/2 lg:-translate-x-1/2"
                        >
                            Lazlle Studio
                        </Link>

                        {/* CTA Button - Desktop */}
                        <div className="hidden lg:block">
                            <Link
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/90 transition-all duration-200 hover:scale-105"
                            >
                                Book a free call
                            </Link>
                        </div>

                        {/* Hamburger Menu - Mobile */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden w-10 h-10 flex items-center justify-center"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span
                                    className={`w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                                        }`}
                                />
                                <span
                                    className={`w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                                        }`}
                                />
                                <span
                                    className={`w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-background z-40 lg:hidden transition-all duration-500 ${isMenuOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col items-start justify-start pt-32 px-8 h-full">
                    {/* Logo in Mobile Menu */}
                    <Link
                        href="/"
                        className="font-[family-name:var(--font-halant)] text-4xl font-normal text-foreground mb-16"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Lazlle Studio
                    </Link>

                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col gap-6 mb-12">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-3xl font-light text-foreground hover:text-foreground/70 transition-all duration-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                                    }`}
                                style={{
                                    transitionDelay: isMenuOpen ? `${index * 50 + 100}ms` : '0ms'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile CTA Button */}
                    <Link
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                        className={`inline-flex items-center px-8 py-4 bg-foreground text-background text-base font-medium rounded-full hover:bg-foreground/90 transition-all duration-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                            }`}
                        style={{
                            transitionDelay: isMenuOpen ? '250ms' : '0ms'
                        }}
                    >
                        Book a free call
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar