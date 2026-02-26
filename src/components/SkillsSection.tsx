'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
    name: string;
    level: number; // 0-100
    icon: string;
}

const categories: { title: string; skills: Skill[] }[] = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React / Next.js', level: 95, icon: '⚛️' },
            { name: 'TypeScript', level: 90, icon: '📘' },
            { name: 'Tailwind CSS', level: 92, icon: '🎨' },
            { name: 'Vue.js', level: 78, icon: '💚' },
            { name: 'HTML / CSS', level: 97, icon: '🌐' },
            { name: 'Framer Motion', level: 85, icon: '✨' },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', level: 90, icon: '🟢' },
            { name: 'Python', level: 82, icon: '🐍' },
            { name: 'PostgreSQL', level: 85, icon: '🐘' },
            { name: 'GraphQL', level: 80, icon: '◈' },
            { name: 'REST APIs', level: 93, icon: '🔗' },
            { name: 'Redis', level: 75, icon: '🔴' },
        ],
    },
    {
        title: 'Tools & Cloud',
        skills: [
            { name: 'Git / GitHub', level: 92, icon: '🐙' },
            { name: 'Docker', level: 80, icon: '🐳' },
            { name: 'AWS', level: 78, icon: '☁️' },
            { name: 'Figma', level: 85, icon: '🎯' },
            { name: 'CI / CD', level: 82, icon: '🔄' },
            { name: 'Vercel', level: 90, icon: '▲' },
        ],
    },
];

function SkillBar({ skill, delay, inView }: { skill: Skill; delay: number; inView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay, duration: 0.5 }}
            className="group"
        >
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-sm font-medium text-[var(--text-primary)]">{skill.name}</span>
                </div>
                <span className="text-xs font-medium text-[var(--text-secondary)]">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-[var(--border-color)] overflow-hidden">
                <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ delay: delay + 0.2, duration: 0.8, ease: 'easeOut' }}
                />
            </div>
        </motion.div>
    );
}

export default function SkillsSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="skills" className="py-24 md:py-32 relative">
            {/* Background accent */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
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
                        Skills & Expertise
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                        Technologies I work with
                    </h3>
                </motion.div>

                {/* Skill categories */}
                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((cat, catIdx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: catIdx * 0.15, duration: 0.6 }}
                            className="p-5 md:p-8 rounded-2xl border border-[var(--border-color)]
                bg-[var(--bg-secondary)] card-hover"
                        >
                            <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-6 pb-4
                border-b border-[var(--border-color)]">
                                {cat.title}
                            </h4>
                            <div className="space-y-5">
                                {cat.skills.map((skill, i) => (
                                    <SkillBar
                                        key={skill.name}
                                        skill={skill}
                                        delay={catIdx * 0.15 + i * 0.08}
                                        inView={inView}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
