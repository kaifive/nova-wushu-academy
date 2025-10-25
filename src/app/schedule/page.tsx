'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Filter } from 'lucide-react';
import scheduleData from '@/data/schedule.json';
import { useState, useMemo } from 'react';
import Link from 'next/link';


type ScheduleClass = {
    time: string;
    class: string;
    instructor: string;
    type: string;
    levels: string[];
};

type CombinedClass = ScheduleClass & {
    day: string;     // human-readable day, e.g., 'Monday'
    dayKey: string;  // the key in novaWushu/taichi
};

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function Schedule() {
    const { novaWushu, taichi } = scheduleData;

    // initial state: all selected
    const [selectedTypes, setSelectedTypes] = useState<string[]>(['wushu', 'taichi']);
    const [selectedLevels, setSelectedLevels] = useState<string[]>(['beginner', 'intermediate', 'advanced', 'competition', 'open']);

    // Combine all classes into one array
    const allClasses = useMemo(() => {
        const combined: CombinedClass[] = [];
        days.forEach((day, index) => {
            const wushuClasses = novaWushu[day as keyof typeof novaWushu] || [];
            const taichiClasses = taichi[day as keyof typeof taichi] || [];

            [...wushuClasses, ...taichiClasses].forEach((classItem) => {
                combined.push({
                    ...classItem,
                    day: dayNames[index],
                    dayKey: day,
                });
            });
        });
        return combined;
    }, [novaWushu, taichi, dayNames, days]);

    const filteredClasses = useMemo(() => {
        return allClasses.filter(classItem =>
            // always include if type is selected OR if class includes "open" in levels
            selectedTypes.includes(classItem.type) &&
            classItem.levels.some((lvl: string) => selectedLevels.includes(lvl) || lvl === 'open')
        );
    }, [allClasses, selectedTypes, selectedLevels]);

    // Type toggle logic
    const toggleType = (type: string) => {
        if (selectedTypes.length === 2 && selectedTypes.includes(type)) {
            // initial click: clear other and keep only this
            setSelectedTypes([type]);
        } else {
            setSelectedTypes(prev => {
                const updated = prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type];
                // if none are selected, reset to all
                return updated.length === 0 ? ['wushu', 'taichi'] : updated;
            });
        }
    };

    // Level toggle logic
    const toggleLevel = (level: string) => {
        if (selectedLevels.length === 5 && selectedLevels.includes(level)) {
            // initial click: clear other and keep only this
            setSelectedLevels([level]);
        } else {
            setSelectedLevels(prev => {
                const updated = prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level];
                // if none are selected, reset to all
                return updated.length === 0 ? ['beginner', 'intermediate', 'advanced', 'competition', 'open'] : updated;
            });
        }
    };

    const getClassColor = (level: string) => {
        switch (level) {
            case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
            case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'advanced': return 'bg-orange-100 text-orange-800 border-orange-200';
            case 'competition': return 'bg-red-100 text-red-800 border-red-200';
            case 'open': return 'bg-gray-100 text-gray-800 border-gray-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

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
                            Class Schedule
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Professional Wushu and Taichi classes designed
                            to accommodate different skill levels and age groups.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Schedule Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filter Sections */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                    >
                        {/* Type Filter */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <Filter className="w-5 h-5 mr-2 text-primary" />
                                Class Type
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[{ key: 'wushu', label: 'Wushu', icon: Users }, { key: 'taichi', label: 'Taichi', icon: Clock }].map((type) => (
                                    <button
                                        key={type.key}
                                        onClick={() => toggleType(type.key)}
                                        className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${selectedTypes.includes(type.key)
                                            ? 'bg-primary text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        <type.icon className="w-4 h-4" />
                                        <span>{type.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Level Filter */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <Filter className="w-5 h-5 mr-2 text-primary" />
                                Experience Level
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['beginner', 'intermediate', 'advanced', 'competition'].map((level) => (
                                    <button
                                        key={level}
                                        onClick={() => toggleLevel(level)}
                                        className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${selectedLevels.includes(level)
                                            ? 'bg-primary text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {level.charAt(0).toUpperCase() + level.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Day Columns Layout */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4"
                    >
                        {days.map((day, index) => {
                            const dayClasses = filteredClasses.filter(classItem => classItem.dayKey === day);
                            return (
                                <motion.div
                                    key={day}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                                >
                                    <div className="bg-primary text-white p-4 text-center">
                                        <h3 className="font-bold text-lg">{dayNames[index]}</h3>
                                    </div>
                                    <div className="p-4 space-y-3">
                                        {dayClasses.length > 0 ? (
                                            dayClasses.map((classItem, classIndex) => (
                                                <div key={classIndex} className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow duration-200">
                                                    <div className="text-sm font-medium text-gray-900 mb-1 break-words">{classItem.class}</div>
                                                    <div className="text-xs text-primary font-medium mb-1">{classItem.time}</div>
                                                    <div className="text-xs text-gray-600 mb-2">{classItem.instructor}</div>
                                                    <div className="flex flex-wrap gap-1">
                                                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${classItem.type === 'wushu'
                                                            ? 'bg-purple-100 text-purple-800 border-purple-200'
                                                            : 'bg-blue-100 text-blue-800 border-blue-200'
                                                            }`}>
                                                            {classItem.type}
                                                        </span>
                                                        {classItem.levels.map((lvl: string, lvlIndex: number) => (
                                                            <span key={lvlIndex} className={`px-2 py-1 rounded-full text-xs font-medium border ${getClassColor(lvl)} break-words`}>
                                                                {lvl}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="text-center text-gray-500 text-sm py-4">
                                                No classes scheduled
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                    <br />
                    <div className="text-sm text-gray-600 italic">*Private classes available by appointment only.</div>
                </div>
            </section>

            {/* Trial Class CTA */}
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
                            Experience the NOVA Wushu difference with a free trial class.
                            All skill levels welcome - no experience necessary!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors duration-300"
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
        </div>
    );
}
