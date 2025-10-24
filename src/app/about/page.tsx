'use client';

import { NUM_MEDALS, NUM_STUDENTS, STUDENT_IMPROVEMENT_RATE, YEARS_OPEN } from '@/data/stats';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Award, Clock, Star } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Users,
      title: 'Community',
      description: 'We foster a welcoming, inclusive environment where students support each other\'s growth and development.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We maintain the highest standards in training, coaching, and student development across all programs.',
    },
    {
      icon: Heart,
      title: 'Personal Growth',
      description: 'We focus on developing the whole student - building confidence, discipline, and resilience.',
    },
    {
      icon: Award,
      title: 'Achievement',
      description: 'We celebrate every student\'s progress, from first steps to world-class competition success.',
    },
  ];

  const programs = [
    {
      title: 'Contemporary Wushu',
      description: 'Modern martial arts training combining traditional techniques with athletic performance elements.',
      features: ['Dynamic movements', 'Competition preparation', 'Weapons training', 'Performance skills'],
    },
    {
      title: 'Traditional Taiji',
      description: 'Internal arts focusing on balance, flexibility, and mindful movement for all ages.',
      features: ['Slow, controlled movements', 'Balance and flexibility', 'Stress reduction', 'Energy cultivation'],
    },
    {
      title: 'Competition Training',
      description: 'Specialized programs for students pursuing excellence at regional, national, and international levels.',
      features: ['Elite coaching', 'Competition strategy', 'Mental preparation', 'Performance optimization'],
    },
  ];

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
              About NOVA Wushu Academy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Premier martial arts training in Northern Virginia since 2010
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Established in 2010 under the direction of Coach Stephon Morton, Northern Virginia 
                  Wushu Academy (NOVA Wushu) is a premier martial arts center dedicated to teaching 
                  both contemporary and traditional wushu styles, including weapons training and Tai Chi (Taiji).
                </p>
                <p>
                  At NOVA Wushu, we believe that martial arts training extends beyond physical mastery. 
                  Our core philosophy centers on the development of the whole student — building confidence, 
                  discipline, and resilience while promoting physical health and mental balance.
                </p>
                <p>
                  Our experienced coaching staff provides students with the opportunity to train, perform, 
                  and compete in all categories of Chinese martial arts at the local, regional, national, 
                  and international levels.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{YEARS_OPEN}+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{NUM_STUDENTS}+</div>
                  <div className="text-gray-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{NUM_MEDALS}+</div>
                  <div className="text-gray-600">Competition Medals</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{STUDENT_IMPROVEMENT_RATE}%</div>
                  <div className="text-gray-600">Student Improvement</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Philosophy</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                While our main focus is on Contemporary Wushu and Taiji, we believe in a holistic 
                training approach. Our classes also incorporate traditional forms, conditioning, 
                and modern performance techniques to ensure each student develops a well-rounded foundation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
              We take pride in cultivating a welcoming, inclusive community where students can 
              train alongside their peers in a supportive environment. Classes are unlimited, 
              allowing every member to grow at their own pace with guidance tailored to their 
              goals — whether that&apos;s fitness, competition, or personal growth.
              </p>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Programs Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-600">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary text-white rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              At NOVA Wushu Academy, we are not just training martial artists — we are shaping 
              confident, focused, and compassionate individuals who carry the discipline of Wushu 
              into all areas of life.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
