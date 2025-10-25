'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

import fs from 'fs';
import path from 'path';

import logo from '../../public/images/branding/NOVA Wushu Circle.png'

interface HeroProps {
  galleryImages: string[];
}

const Hero = ({ galleryImages }: HeroProps) => {
  const [imagesLoaded, setImagesLoaded] = useState(true);
  const [shuffledTop, setShuffledTop] = useState<string[]>([]);
  const [shuffledBottom, setShuffledBottom] = useState<string[]>([]);

  const shuffle = (arr: string[]) => arr.sort(() => Math.random() - 0.5);
  
  useEffect(() => {
    const preload = Promise.all(
      galleryImages.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new window.Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          })
      )
    );

    preload.then(() => {
      setTimeout(() => {
        setShuffledTop(shuffle([...galleryImages]));
        setShuffledBottom(shuffle([...galleryImages]));
        setImagesLoaded(true);
      }, 600);
    });
  }, []);


  // --- LOADING ANIMATION ---
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Hero background always mounted */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          imagesLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Top Row */}
        <div className="absolute top-0 left-0 w-full h-1/3 overflow-hidden py-2">
          <motion.div
            className="flex h-full"
            animate={{ x: [0, -galleryImages.length * 420] }}
            transition={{ duration: 220, repeat: Infinity, ease: 'linear' }}
          >
            {[...shuffledTop, ...shuffledTop].map((img, index) => (
              <div
                key={`top-${index}`}
                className="relative flex-shrink-0 mx-2"
                style={{ width: '420px', aspectRatio: '16/9' }}
              >
                <Image
                  src={img}
                  alt={`Gallery top ${index}`}
                  fill
                  loading="lazy"
                  className="object-cover opacity-70 hover:opacity-90 transition-opacity duration-500 border-y-8 border-black"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Middle gradient */}
        <div className="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-br from-primary/20 to-primary/40"></div>

        {/* Bottom Row */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 overflow-hidden py-2">
          <motion.div
            className="flex h-full"
            animate={{ x: [-galleryImages.length * 420, 0] }}
            transition={{ duration: 220, repeat: Infinity, ease: 'linear' }}
          >
            {[...shuffledBottom, ...shuffledBottom].map((img, index) => (
              <div
                key={`bottom-${index}`}
                className="relative flex-shrink-0 mx-2"
                style={{ width: '420px', aspectRatio: '16/9' }}
              >
                <Image
                  src={img}
                  alt={`Gallery bottom ${index}`}
                  fill
                  loading="lazy"
                  className="object-cover opacity-70 hover:opacity-90 transition-opacity duration-500 border-y-8 border-black"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-primary/30 to-black/70" />
      </div>

      {/* Hero content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-opacity duration-700 ${
          imagesLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={imagesLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            NOVA Wushu Academy
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/trial-class"
              className="group bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Sign Up for Trial Class</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <button className="group flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <Play className="w-6 h-6 ml-1" />
              </div>
              <span className="text-lg font-medium">Watch Our Story</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* 3D Door Loader */}
      <AnimatePresence>
        {!imagesLoaded && (
          <>
            {/* Container with perspective for 3D rotation */}
            <div className="absolute inset-0 z-50 flex perspective-[2000px]">
              {/* Left door */}
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: -90 }}
                exit={{ rotateY: -90 }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
                className="w-1/2 h-full bg-white origin-left"
              />
              {/* Right door */}
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 90 }}
                exit={{ rotateY: 90 }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
                className="w-1/2 h-full bg-white origin-right"
              />
            </div>

            {/* Vertical center line */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-primary -translate-x-1/2 z-[60]" />

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute z-[70] flex items-center justify-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src={logo}
                  alt="Logo"
                  width={128}
                  height={128}
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
