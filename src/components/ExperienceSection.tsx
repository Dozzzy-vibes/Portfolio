'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar } from 'lucide-react';

interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string[];
    tech: string[];
}

const experiences: Experience[] = [
    {
        company: 'TechCorp Inc.',
        role: 'Senior Full-Stack Developer',
        period: 'Jan 2023 — Present',
        location: 'San Francisco, CA',
        description: [
            'Led development of a microservices platform serving 2M+ users',
            'Reduced page load times by 40% through SSR optimization',
            'Mentored a team of 4 junior developers',
        ],
        tech: ['Next.js', 'TypeScript', 'AWS', 'PostgreSQL'],
    },
    {
        company: 'StartupXYZ',
        role: 'Full-Stack Developer',
        period: 'Jun 2021 — Dec 2022',
        location: 'Remote',
        description: [
            'Built a real-time collaboration tool from scratch to MVP in 3 months',
            'Implemented CI/CD pipelines reducing deployment time by 60%',
            'Designed and maintained RESTful APIs for mobile and web clients',
        ],
        tech: ['React', 'Node.js', 'Docker', 'MongoDB'],
    },
    {
        company: 'Digital Agency Co.',
        role: 'Frontend Developer',
        period: 'Mar 2020 — May 2021',
        location: 'New York, NY',
        description: [
            'Developed responsive web applications for Fortune 500 clients',
            'Created a component library used across 10+ client projects',
            'Improved accessibility scores to 95+ on all projects',
        ],
        tech: ['React', 'Vue.js', 'Sass', 'Figma'],
    },
    {
        company: 'CodeSchool',
        role: 'Junior Developer',
        period: 'Sep 2019 — Feb 2020',
        location: 'Austin, TX',
        description: [
            'Built interactive coding tutorials and assessment platforms',
            'Contributed to open-source educational tools',
        ],
        tech: ['JavaScript', 'Python', 'HTML/CSS'],
    },
];

export default function ExperienceSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="experience" className="py-24 md:py-32 relative">
            {/* Background accent */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-semibold text-primary-400 uppercase tracking-widest mb-3">
                        Work Experience
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                        Where I&apos;ve worked
                    </h3>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5
            bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500/20" />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className={`relative flex flex-col md:flex-row gap-6 md:gap-10 mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full
                bg-primary-500 border-4 border-[var(--bg-primary)] shadow-lg shadow-primary-500/30 z-10" />

                            {/* Empty spacer for alignment */}
                            <div className="hidden md:block md:w-1/2" />

                            {/* Card */}
                            <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                <div className="p-6 rounded-2xl border border-[var(--border-color)]
                  bg-[var(--bg-secondary)] card-hover">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h4 className="text-lg font-bold text-[var(--text-primary)]">{exp.role}</h4>
                                            <p className="text-primary-400 font-semibold text-sm">{exp.company}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)] mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={12} /> {exp.period}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin size={12} /> {exp.location}
                                        </span>
                                    </div>

                                    <ul className="space-y-2 mb-4">
                                        {exp.description.map((desc, j) => (
                                            <li key={j} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs px-2.5 py-1 rounded-full
                          bg-primary-500/10 text-primary-400 font-medium"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
