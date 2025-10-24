'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is Wushu and how is it different from other martial arts?",
            answer: "Wushu is a modern Chinese martial art that combines traditional techniques with contemporary performance elements. Unlike traditional martial arts focused solely on self-defense, Wushu emphasizes athletic performance, flexibility, and artistic expression while maintaining the discipline and philosophy of traditional martial arts."
        },
        {
            question: "Do I need any prior martial arts experience to join?",
            answer: "No prior experience is necessary! We welcome students of all skill levels, from complete beginners to advanced practitioners. Our instructors are experienced in working with students at every level and will help you progress at your own pace."
        },
        {
            question: "What age groups do you teach?",
            answer: "We offer classes for all ages, from young children (6+) to adults. Our youth classes focus on building confidence and discipline, while our adult classes provide both fitness and competitive training opportunities. We also have specialized programs for different age groups and skill levels."
        },
        {
            question: "Do you offer competition opportunities?",
            answer: "Yes! We have a competitive team program for students interested in competing at regional, national, and international levels. Our students have achieved great success in competitions, but competition is completely optional - many students train purely for fitness and personal development."
        },
        {
            question: "What is the difference between Wushu and Taiji classes?",
            answer: "Wushu classes focus on dynamic, athletic movements including jumps, kicks, and acrobatic elements. Taiji (Tai Chi) classes emphasize slow, controlled movements that promote balance, flexibility, and internal energy development. Both styles complement each other and many students enjoy practicing both."
        },
        {
            question: "How do I sign up for a trial class?",
            answer: "You can sign up for a trial class by contacting us through our website, calling us directly, or visiting our academy. Trial classes are a great way to experience our teaching style and see if NOVA Wushu Academy is the right fit for you. We offer trial classes for all age groups and skill levels."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Have questions about our programs? We&apos;ve got answers to help you get started.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-shrink-0"
                                >
                                    {openIndex === index ? (
                                        <Minus className="w-6 h-6 text-primary" />
                                    ) : (
                                        <Plus className="w-6 h-6 text-gray-500" />
                                    )}
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6">
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <div className="bg-primary text-white rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                        <p className="text-lg mb-6 opacity-90">
                            We&apos;re here to help! Contact us directly and we&apos;ll be happy to answer
                            any questions you have about our programs.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                        >
                            <Link
                                href="/contact"
                            >
                                <span>Contact Us</span>
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
