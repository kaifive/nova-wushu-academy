'use client';

import { motion } from 'framer-motion';
import { Award, Users, Star, User } from 'lucide-react';

import Image from 'next/image';

interface CoachCardProps {
  coach: {
    id: string;
    name: string;
    title: string;
    bio: string;
    fullBio: string;
    coachingExperience?: string[];
    athleticAchievements?: string[];
    certifications?: string[];
    image: string;
  };
}

const CoachCard = ({ coach }: CoachCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Coach Image */}
      <div className="relative h-80 bg-gradient-to-br from-primary/20 to-primary/40">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
        {coach.image ? (
          <Image
            src={coach.image}
            alt={coach.name}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
            <User className="w-16 h-16 text-white/70" />
          </div>
        )}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
            <h3 className="text-xl font-bold text-gray-900">{coach.name}</h3>
            <p className="text-primary font-semibold">{coach.title}</p>
          </div>
        </div>
      </div>

      {/* Coach Content */}
      <div className="p-8">
        <p className="text-gray-600 leading-relaxed mb-6">{coach.bio}</p>

        {/* Achievements */}
        {coach.athleticAchievements && coach.athleticAchievements.length > 0 && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Award className="w-5 h-5 text-primary mr-2" />
              Athletic Achievements
            </h4>
            <ul className="space-y-2">
              {coach.athleticAchievements.slice(0, 3).map((achievement, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start">
                  <Star className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
              {coach.athleticAchievements.length > 3 && (
                <li className="text-sm text-primary font-medium">
                  +{coach.athleticAchievements.length - 3} more achievements
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Coaching Experience */}
        {coach.coachingExperience && coach.coachingExperience.length > 0 && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Users className="w-5 h-5 text-primary mr-2" />
              Coaching Experience
            </h4>
            <ul className="space-y-2">
              {coach.coachingExperience.slice(0, 3).map((experience, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  <span>{experience}</span>
                </li>
              ))}
              {coach.coachingExperience.length > 3 && (
                <li className="text-sm text-primary font-medium">
                  +{coach.coachingExperience.length - 3} more experiences
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Certifications */}
        {coach.certifications && coach.certifications.length > 0 && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Certifications</h4>
            <ul className="space-y-1">
              {coach.certifications.map((cert, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CoachCard;
