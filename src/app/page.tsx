import fs from 'fs';
import path from 'path';

import Hero from '@/components/Hero';
import AboutPreview from '@/components/AboutPreview';
import SchedulePreview from '@/components/SchedulePreview';
import GalleryStats from '@/components/GalleryStats';
import FAQ from '@/components/FAQ';


export default function Home() {
  const galleryDir = path.join(process.cwd(), 'public/images/gallery');
  const galleryImages = fs
    .readdirSync(galleryDir)
    .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
    .map((file) => `/images/gallery/${file}`);
    
  return (
    <>
      <Hero galleryImages={galleryImages} />
      <AboutPreview />
      <SchedulePreview />
      <GalleryStats />
      <FAQ />
    </>
  );
}
