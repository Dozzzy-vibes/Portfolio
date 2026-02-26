'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Coffee, Briefcase, Award } from 'lucide-react';

const stats = [
    { icon: Code2, value: '50+', label: 'Projects Built' },
    { icon: Coffee, value: '5+', label: 'Years Experience' },
    { icon: Briefcase, value: '30+', label: 'Happy Clients' },
    { icon: Award, value: '10+', label: 'Awards Won' },
];

export default function AboutSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="about" className="py-24 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                            {/* Decorative elements */}
                            <div className="absolute -inset-4 rounded-2xl animated-gradient opacity-20 blur-xl" />
                            <div className="relative rounded-2xl overflow-hidden border-2 border-[var(--border-color)]">
                                <Image
                                    src="/profile.jpg"
                                    alt="Chidozie Uwakwe"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                            {/* Floating decorative badge */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl glass glow text-xs sm:text-sm font-semibold
                  text-primary-400"
                            >
                                🚀 Open to work
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h2 className="text-sm font-semibold text-primary-400 uppercase tracking-widest mb-3">
                            About Me
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
                            Passionate about creating{' '}
                            <span className="gradient-text">exceptional</span> digital experiences
                        </h3>
                        <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                            <p>
                                I&apos;m a full-stack developer with over 5 years of experience building modern web
                                applications. I specialize in <span className="text-primary-400 font-medium">React</span>,{' '}
                                <span className="text-primary-400 font-medium">Next.js</span>, and{' '}
                                <span className="text-primary-400 font-medium">Node.js</span>, with a keen eye for
                                design and user experience.
                            </p>
                            <p>
                                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
                                open-source projects, or sharing knowledge through technical blog posts and
                                community meetups.
                            </p>
                        </div>

                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-2 mt-6">
                            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-xs font-medium rounded-full
                    bg-primary-500/10 text-primary-400 border border-primary-500/20"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-20"
                >
                    {stats.map(({ icon: Icon, value, label }, i) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="text-center p-4 md:p-6 rounded-2xl border border-[var(--border-color)]
                bg-[var(--bg-secondary)] card-hover"
                        >
                            <Icon className="w-8 h-8 mx-auto mb-3 text-primary-400" />
                            <div className="text-3xl font-bold text-[var(--text-primary)] mb-1">{value}</div>
                            <div className="text-sm text-[var(--text-secondary)]">{label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
