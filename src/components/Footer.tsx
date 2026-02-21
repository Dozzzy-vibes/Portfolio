'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative border-t border-[var(--border-color)]">
            {/* Gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & copyright */}
                    <div className="text-center md:text-left">
                        <a href="#" className="text-lg font-bold gradient-text">
                            &lt;Portfolio /&gt;
                        </a>
                        <p className="text-sm text-[var(--text-secondary)] mt-1 flex items-center gap-1 justify-center md:justify-start">
                            Made with <Heart size={14} className="text-accent-500 fill-accent-500" /> &copy; {new Date().getFullYear()} Chidozie Uwakwe
                        </p>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-3">
                        {[
                            { icon: Github, href: 'https://github.com/Dozzzy-vibes', label: 'GitHub' },
                            { icon: Linkedin, href: '#', label: 'LinkedIn' },
                            { icon: Twitter, href: 'https://twitter.com/itsdozzzy', label: 'Twitter' },
                        ].map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="p-2.5 rounded-xl border border-[var(--border-color)]
                  text-[var(--text-secondary)] hover:text-primary-400
                  hover:border-primary-500/30 hover:bg-primary-500/5 transition-all"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Icon size={18} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Back to top */}
                    <motion.button
                        onClick={scrollToTop}
                        className="p-3 rounded-xl border border-[var(--border-color)]
              text-[var(--text-secondary)] hover:text-primary-400
              hover:border-primary-500/30 hover:bg-primary-500/5 transition-all"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={18} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
