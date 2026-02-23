'use client';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { HERO_YT_VIDEO } from '@/data/links';

import aaron from '../../public/images/gallery/aaron.jpg'
import audrey from '../../public/images/gallery/audrey.jpg'
import blake from '../../public/images/gallery/blake.jpg'
import chloe from '../../public/images/gallery/chloe.jpg'
import chris from '../../public/images/gallery/chris.jpg'
import danny from '../../public/images/gallery/danny.jpg'
import khai from '../../public/images/gallery/khai.jpg'
import khang from '../../public/images/gallery/khang.jpg'
import mariel from '../../public/images/gallery/mariel.jpg'

import group1 from '../../public/images/gallery/group1.jpg'

const galleryItems: { img: StaticImageData; alt: string }[] = [
  { img: aaron, alt: 'Aaron gallery photo' },
  { img: audrey, alt: 'Audrey gallery photo' },
  { img: blake, alt: 'Blake gallery photo' },
  { img: chloe, alt: 'Chloe gallery photo' },
  { img: chris, alt: 'Chris gallery photo' },
  { img: danny, alt: 'Danny gallery photo' },
  { img: khai, alt: 'Khai gallery photo' },
  { img: khang, alt: 'Khang gallery photo' },
  { img: mariel, alt: 'Mariel gallery photo' },
  { img: group1, alt: 'NOVA Wushu Academy group photo' },
];

const Hero = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [shuffledTop, setShuffledTop] = useState<typeof galleryItems>([]);
  const [shuffledBottom, setShuffledBottom] = useState<typeof galleryItems>([]);

  const shuffle = <T,>(arr: T[]) => [...arr].sort(() => Math.random() - 0.5);

  useEffect(() => {
    const preload = Promise.all(
      galleryItems.map(
        (item) =>
          new Promise<void>((resolve) => {
            const temp = new window.Image();
            temp.src = item.img.src; // use static import src
            temp.onload = () => resolve();
            temp.onerror = () => resolve();
          })
      )
    );

    preload.then(() => {
      setTimeout(() => {
        setShuffledTop(shuffle(galleryItems));
        setShuffledBottom(shuffle(galleryItems));
        setImagesLoaded(true);
      }, 600);
    });
  }, []);

  // --- Video overlay state ---
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowVideo(false);
    };
    if (showVideo) {
      document.addEventListener('keydown', onKey);
      // prevent background scrolling
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [showVideo]);

  const getEmbedUrl = (url: string) => {
    // Extract YouTube ID from common URL formats
    const ytIdMatch = url.match(/[?&]v=([\w-]{11})/) || url.match(/youtu\.be\/([\w-]{11})/) || url.match(/embed\/([\w-]{11})/);
    const id = ytIdMatch ? ytIdMatch[1] : null;
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : url;
  };


  // --- LOADING ANIMATION ---
  return (
    <section className="relative h-[calc(100vh-64px)] mt-16 flex items-center justify-center bg-black text-white overflow-hidden">
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
            animate={{ x: [0, -galleryItems.length * 420] }}
            transition={{ duration: 220, repeat: Infinity, ease: 'linear' }}
          >
            {[...shuffledTop, ...shuffledTop].map((item, index) => (
              <div
                key={`top-${index}`}
                className="relative flex-shrink-0 mx-2"
                style={{ width: '420px', aspectRatio: '16/9' }}
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  placeholder="blur"
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
            animate={{ x: [-galleryItems.length * 420, 0] }}
            transition={{ duration: 220, repeat: Infinity, ease: 'linear' }}
          >
            {[...shuffledBottom, ...shuffledBottom].map((item, index) => (
              <div
                key={`bottom-${index}`}
                className="relative flex-shrink-0 mx-2"
                style={{ width: '420px', aspectRatio: '16/9' }}
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  placeholder="blur"
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

            <button
              aria-label="Watch our recent performance"
              onClick={() => setShowVideo(true)}
              className="group flex items-center space-x-2 text-white hover:text-white-400 hover:underline transition-colors duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <Play className="w-6 h-6 ml-1" />
              </div>
              <span className="text-lg font-medium">See Us In Action</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* 3D Door Loader
      <AnimatePresence>
        {!imagesLoaded && (
          <>
            <div className="absolute inset-0 z-50 flex perspective-[2000px]">
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: -90 }}
                exit={{ rotateY: -90 }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
                className="w-1/2 h-full bg-white origin-left"
              />
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 90 }}
                exit={{ rotateY: 90 }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
                className="w-1/2 h-full bg-white origin-right"
              />
            </div>

            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-primary -translate-x-1/2 z-[60]" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute z-[70] flex items-center justify-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary">
                  <Image
                  src={logo}
                  alt="NOVA Wushu Academy Logo"
                  width={128}
                  height={128}
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence> */}

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
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
          <div className="relative w-full max-w-4xl mx-4">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={getEmbedUrl(HERO_YT_VIDEO)}
                title="NOVA Wushu Academy Video"
                width="100%"
                height="100%"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder={0}
                className="w-full h-full"
              />
            </div>
            <button
              aria-label="Close video"
              onClick={() => setShowVideo(false)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg text-gray-800 hover:bg-gray-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
