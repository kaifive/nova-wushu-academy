'use client';

import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import coachesData from '@/data/coaches.json';
import Link from 'next/link';

// Lazy load CoachCard for better performance
const CoachCard = lazy(() => import('@/components/CoachCard'));

export default function Coaches() {
    const { coaches } = coachesData;

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
                            Meet Our Coaches
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            World-class instructors with international competition experience and a passion for teaching
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Coaches Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Coaching Team</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Our experienced coaching staff provides students with the opportunity to train,
                            perform, and compete at the highest levels of Chinese martial arts.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        <Suspense fallback={<div className="col-span-full text-center py-8">Loading coaches...</div>}>
                            {coaches.map((coach, index) => (
                                <motion.div
                                    key={coach.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <CoachCard coach={coach} />
                                </motion.div>
                            ))}
                        </Suspense>
                    </div>
                </div>
            </section>

            {/* Coaching Philosophy */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Coaching Philosophy</h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            We believe in developing the whole student through martial arts training,
                            focusing on both physical excellence and character development.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-center"
                        >
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🎯</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Training</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Every student receives individualized attention and training plans tailored
                                to their goals, whether that&apos;s fitness, competition, or personal development.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-center"
                        >
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🏆</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence Focus</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We maintain the highest standards in technique, discipline, and performance,
                                preparing students for success at every level of competition.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-center"
                        >
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🤝</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Supportive Environment</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We foster a welcoming community where students support each other&apos;s growth
                                and celebrate every achievement, big or small.
                            </p>
                        </motion.div>
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
                        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
                        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                            Experience world-class coaching and join a community dedicated to martial arts excellence.
                            Sign up for a trial class today!
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                        >
                            <Link
                                href="/trial-class"
                            >
                                <span>Sign Up for Trial Class</span>
                            </Link>
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
