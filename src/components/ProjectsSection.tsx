'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    tags: string[];
    category: string;
    image: string;
    github: string;
    live: string;
}

const projects: Project[] = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with real-time inventory management, Stripe payments, and an admin dashboard.',
        tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
        category: 'Web',
        image: '/project-ecommerce.jpg',
        github: '#',
        live: '#',
    },
    {
        title: 'AI Content Studio',
        description: 'An AI-powered content generation platform with GPT integration, rich text editor, and team collaboration.',
        tags: ['React', 'OpenAI', 'Node.js', 'MongoDB'],
        category: 'AI',
        image: '/project-ai-studio.jpg',
        github: '#',
        live: '#',
    },
    {
        title: 'FinTrack Dashboard',
        description: 'Personal finance dashboard with real-time data visualization, budget tracking, and investment analytics.',
        tags: ['Next.js', 'D3.js', 'Tailwind', 'Supabase'],
        category: 'Web',
        image: '/project-fintrack.jpg',
        github: '#',
        live: '#',
    },
    {
        title: 'Social Fitness App',
        description: 'A mobile-first fitness tracker with social features, workout plans, and progress analytics.',
        tags: ['React Native', 'Firebase', 'TypeScript'],
        category: 'Mobile',
        image: '/project-fitness.jpg',
        github: '#',
        live: '#',
    },
    {
        title: 'Dev Collaboration Tool',
        description: 'Real-time code collaboration platform with live cursors, integrated chat, and version control.',
        tags: ['Next.js', 'WebSocket', 'Redis', 'Docker'],
        category: 'Web',
        image: '/project-devcollab.jpg',
        github: '#',
        live: '#',
    },
    {
        title: 'Smart Home Hub',
        description: 'IoT control center for smart home devices with automation rules, scheduling, and energy monitoring.',
        tags: ['React', 'Python', 'MQTT', 'InfluxDB'],
        category: 'IoT',
        image: '/project-smarthome.jpg',
        github: '#',
        live: '#',
    },
];

const filters = ['All', 'Web', 'AI', 'Mobile', 'IoT'];

export default function ProjectsSection() {
    const [active, setActive] = useState('All');
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

    return (
        <section id="projects" className="py-24 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-sm font-semibold text-primary-400 uppercase tracking-widest mb-3">
                        Featured Projects
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                        Things I&apos;ve built
                    </h3>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex justify-center gap-2 mb-12 flex-wrap"
                >
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActive(f)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === f
                                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-primary-500/30'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </motion.div>

                {/* Projects grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group relative rounded-2xl border border-[var(--border-color)]
                  bg-[var(--bg-secondary)] overflow-hidden card-hover"
                            >
                                {/* Card header with image */}
                                <div className="relative h-52 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Dark overlay for readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <h4 className="text-lg font-bold text-white">{project.title}</h4>
                                    </div>

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <a
                                            href={project.github}
                                            className="p-3 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-colors"
                                            aria-label="View code"
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.live}
                                            className="p-3 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-colors"
                                            aria-label="View live"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                {/* Card body */}
                                <div className="p-6">
                                    <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-2.5 py-1 rounded-full
                          bg-primary-500/10 text-primary-400 font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.live}
                                        className="inline-flex items-center gap-1 mt-4 text-sm font-medium
                      text-primary-400 hover:text-primary-300 transition-colors group/link"
                                    >
                                        View Project
                                        <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
