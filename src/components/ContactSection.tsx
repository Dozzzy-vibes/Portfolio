'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Github, Linkedin, Twitter, Mail, CheckCircle2 } from 'lucide-react';

const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Dozzzy-vibes', handle: 'Dozzzy-vibes', color: 'hover:text-white' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', handle: 'Chidozie Uwakwe', color: 'hover:text-blue-400' },
    { icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com/itsdozzzy', handle: '@itsdozzzy', color: 'hover:text-sky-400' },
    { icon: Mail, label: 'Email', href: 'mailto:chidozie4uwakwe@gmail.com', handle: 'chidozie4uwakwe@gmail.com', color: 'hover:text-primary-400' },
];

export default function ContactSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 md:py-32 relative">
            {/* Background accent */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
                <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px]" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-semibold text-primary-400 uppercase tracking-widest mb-3">
                        Get In Touch
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                        Let&apos;s work together
                    </h3>
                    <p className="text-[var(--text-secondary)] max-w-md mx-auto">
                        Have a project in mind or just want to chat? Feel free to reach out.
                        I&apos;m always open to new opportunities and collaborations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
                    {/* Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)]
                    bg-[var(--bg-secondary)] text-[var(--text-primary)]
                    focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                    transition-[border-color,box-shadow] placeholder:text-[var(--text-secondary)]/50"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)]
                    bg-[var(--bg-secondary)] text-[var(--text-primary)]
                    focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                    transition-[border-color,box-shadow] placeholder:text-[var(--text-secondary)]/50"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)]
                    bg-[var(--bg-secondary)] text-[var(--text-primary)]
                    focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                    transition-[border-color,box-shadow] resize-none placeholder:text-[var(--text-secondary)]/50"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <motion.button
                                type="submit"
                                className="w-full py-3.5 rounded-xl font-semibold text-white
                  animated-gradient shadow-lg shadow-primary-500/25
                  hover:shadow-primary-500/40 transition-shadow
                  flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {sent ? (
                                    <>
                                        <CheckCircle2 size={18} /> Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} /> Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="p-8 rounded-2xl border border-[var(--border-color)]
              bg-[var(--bg-secondary)]">
                            <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                                Let&apos;s connect
                            </h4>
                            <p className="text-[var(--text-secondary)] text-sm mb-8">
                                Find me on these platforms or drop me an email directly.
                            </p>

                            <div className="space-y-4">
                                {socials.map(({ icon: Icon, label, href, handle, color }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        className={`flex items-center gap-4 p-3 rounded-xl
                      text-[var(--text-secondary)] ${color}
                      hover:bg-primary-500/5 transition-[color,background-color] group`}
                                    >
                                        <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-400
                      group-hover:bg-primary-500/20 transition-colors">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-[var(--text-primary)]">{label}</div>
                                            <div className="text-xs text-[var(--text-secondary)]">
                                                {handle}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Map / location hint */}
                        <div className="mt-6 p-6 rounded-2xl border border-[var(--border-color)]
              bg-gradient-to-br from-primary-500/5 to-accent-500/5 text-center">
                            <p className="text-2xl mb-2">📍</p>
                            <p className="text-sm font-medium text-[var(--text-primary)]">Lagos, Nigeria</p>
                            <p className="text-xs text-[var(--text-secondary)]">Available for remote work worldwide</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
