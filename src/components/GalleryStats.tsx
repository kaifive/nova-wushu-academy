'use client';

import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, Star } from 'lucide-react';
import Link from 'next/link';


import {
    NUM_MEDALS,
    NUM_STUDENTS,
    YEARS_OPEN,
    STUDENT_IMPROVEMENT_RATE,
} from '../data/stats'

const GalleryStats = () => {
    const stats = [
        {
            icon: Trophy,
            value: `${NUM_MEDALS}+`,
            label: 'Competition Medals',
            description: 'Gold, silver, and bronze medals at regional, national, and international competitions',
        },
        {
            icon: Users,
            value: `${NUM_STUDENTS}+`,
            label: 'Students Trained',
            description: 'From beginners to world-class competitors',
        },
        {
            icon: Calendar,
            value: `${YEARS_OPEN}+`,
            label: 'Years of Excellence',
            description: 'Serving the Northern Virginia community since 2010',
        },
        {
            icon: Star,
            value: `${STUDENT_IMPROVEMENT_RATE}%`,
            label: 'Student Improvement Rate',
            description: 'Dedicated to each student\'s growth and success',
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Our Achievements
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Celebrating the success of our students and the excellence of our training programs.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                                <stat.icon className="w-10 h-10 text-primary" />
                            </div>
                            <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                            <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                            <div className="text-gray-600 text-sm leading-relaxed">{stat.description}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="bg-primary text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold mb-4">Join Our Success Story</h3>
                        <p className="text-xl mb-8 opacity-90">
                            Be part of a community that values excellence, discipline, and achievement.
                            Your journey to martial arts mastery starts here.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                        >
                            <Link
                                href="/trial-class"
                            >
                                <span>Start Your Journey Today</span>
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GalleryStats;
