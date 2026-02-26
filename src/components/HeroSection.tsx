'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background blobs + grain */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 rounded-full bg-primary-500/20 blur-[100px] animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 rounded-full bg-accent-500/20 blur-[100px] animate-float-delayed" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary-600/10 blur-[120px] animate-pulse-glow" />
                {/* Grain texture for depth */}
                <div
                    className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Grid overlay */}
            <div
                className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: 'linear-gradient(var(--color-primary-400) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-400) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full
              bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Available for new projects
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight
              text-[var(--text-primary)] mb-6"
                    >
                        Hi, I&apos;m{' '}
                        <span className="gradient-text">Chidozie Uwakwe</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto"
                    >
                        Full-Stack Developer crafting{' '}
                        <span className="text-primary-400 font-semibold">beautiful</span>,{' '}
                        <span className="text-accent-400 font-semibold">performant</span>, and{' '}
                        <span className="text-primary-300 font-semibold">accessible</span>{' '}
                        digital experiences.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <motion.button
                            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3.5 rounded-xl font-semibold text-white
                animated-gradient shadow-lg shadow-primary-500/25
                hover:shadow-primary-500/40 transition-shadow"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.button>
                        <motion.button
                            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3.5 rounded-xl font-semibold
                border border-[var(--border-color)] text-[var(--text-primary)]
                hover:bg-primary-500/10 hover:border-primary-500/30 transition-[background-color,border-color]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get in Touch
                        </motion.button>
                    </motion.div>

                    {/* Social icons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.7 }}
                        className="flex items-center justify-center gap-4"
                    >
                        {[
                            { icon: Github, href: 'https://github.com/Dozzzy-vibes', label: 'GitHub' },
                            { icon: Linkedin, href: '#', label: 'LinkedIn' },
                            { icon: Mail, href: 'mailto:chidozie4uwakwe@gmail.com', label: 'Email' },
                        ].map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="p-3 rounded-xl border border-[var(--border-color)]
                  text-[var(--text-secondary)] hover:text-primary-400
                  hover:border-primary-500/30 hover:bg-primary-500/5 transition-[color,border-color,background-color]"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Icon size={20} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.button
                    onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-[var(--text-secondary)] hover:text-primary-400 transition-colors"
                    aria-label="Scroll down"
                >
                    <ArrowDown size={24} />
                </motion.button>
            </motion.div>
        </section>
    );
}
