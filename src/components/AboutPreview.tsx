'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, Target, Heart } from 'lucide-react';

const AboutPreview = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Coaching',
      description: 'Learn from world-class instructors with international competition experience.',
    },
    {
      icon: Target,
      title: 'Personalized Training',
      description: 'Tailored programs for all skill levels, from beginners to competitive athletes.',
    },
    {
      icon: Heart,
      title: 'Community Focus',
      description: 'Join a supportive community that values growth, respect, and excellence.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About NOVA Wushu Academy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Established in 2010 under the direction of Coach Stephon Morton, NOVA Wushu Academy 
            is a premier martial arts center dedicated to teaching both contemporary and traditional 
            wushu styles, including weapons training and Tai Chi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center group"
              >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Philosophy
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that martial arts training extends beyond physical mastery. Our core 
              philosophy centers on the development of the whole student — building confidence, 
              discipline, and resilience while promoting physical health and mental balance.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark font-semibold text-lg group"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
