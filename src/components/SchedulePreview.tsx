'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Users, Calendar } from 'lucide-react';
import scheduleData from '@/data/schedule.json';

const SchedulePreview = () => {
  // Get today's classes based on current day
  const getTodaysClasses = () => {
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    const dayMap = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Default to Monday if it's Sunday (no classes)
    const dayKey = today === 0 ? 'monday' : dayMap[today];
    const dayName = today === 0 ? 'Monday' : dayNames[today];
    
    // Get classes for today from schedule data
    const wushuClasses = scheduleData.novaWushu[dayKey as keyof typeof scheduleData.novaWushu] || [];
    const taichiClasses = scheduleData.taichi[dayKey as keyof typeof scheduleData.taichi] || [];
    
    return [...wushuClasses, ...taichiClasses].map(classItem => ({
      ...classItem,
      day: dayName,
      type: wushuClasses.includes(classItem) ? 'wushu' : 'taichi'
    }));
  };

  const todaysClasses = getTodaysClasses();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Class Schedule
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional Wushu and Taichi classes for all ages and skill levels. 
            Find the perfect class for your schedule and goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Schedule Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Today&apos;s Classes
            </h3>
            <div className="space-y-4">
              {todaysClasses.map((classItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{classItem.class}</div>
                      <div className="text-sm text-gray-600">{classItem.type.charAt(0).toUpperCase() + classItem.type.slice(1)}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-primary">{classItem.time}</div>
                    <div className="text-sm text-gray-500">{classItem.instructor}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <br />
            <div className="text-sm text-gray-600 italic">*Private classes available by appointment only.</div>
          </motion.div>

          {/* Class Types */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Class Types
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">NOVA Wushu Classes</h4>
                    <p className="text-gray-600">
                      Contemporary Wushu training for all levels, from beginner to advanced competition preparation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Taichi Classes</h4>
                    <p className="text-gray-600">
                      Traditional Taichi and internal arts for balance, strength, and mindfulness.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specialized Training</h4>
                    <p className="text-gray-600">
                      Weapons training, competition team, and performance groups for focused development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-4">Ready to Start?</h4>
              <p className="mb-6">
                Join us for a trial class and experience the NOVA Wushu difference. 
                All skill levels welcome!
              </p>
              <Link
                href="/schedule"
                className="inline-flex items-center space-x-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 group"
              >
                <span>View Full Schedule</span>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SchedulePreview;
