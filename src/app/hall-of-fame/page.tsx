'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Medal, Star, Award, Users } from 'lucide-react';
import hallOfFameData from '@/data/hall-of-fame.json';
import Link from 'next/link';

export default function HallOfFame() {
    const { majorCompetitions } = hallOfFameData;

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Hall of Fame
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Celebrating the achievements and success of our students and team
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Tabs */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="competitions"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <div className="space-y-8">
                                {majorCompetitions.map((competition) => (
                                    <motion.div
                                        key={`${competition.competition}_${competition.year}`}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                                <Trophy className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900">{competition.competition}</h3>
                                                <p className="text-primary font-semibold">{competition.year}</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {competition.results.map((result, resultIndex) => (
                                                <div key={resultIndex} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                                    <Medal className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                                                    <span className="text-gray-700">{result}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Success by Numbers</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The results speak for themselves - our students consistently achieve excellence
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Trophy, value: '1500+', label: 'Competition Medals', color: 'text-yellow-500' },
                            { icon: Users, value: '25+', label: 'National Team Members', color: 'text-blue-500' },
                            { icon: Star, value: '15+', label: 'International Competitors', color: 'text-purple-500' },
                            { icon: Award, value: '100%', label: 'Student Improvement Rate', color: 'text-green-500' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-').replace('-500', '-100')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                </div>
                                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold mb-6">Join Our Success Story</h2>
                        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                            Be part of a community that values excellence and achievement.
                            Your journey to martial arts success starts here.
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
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
