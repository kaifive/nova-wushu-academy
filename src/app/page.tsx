import Hero from '@/components/Hero';
import AboutPreview from '@/components/AboutPreview';
import SchedulePreview from '@/components/SchedulePreview';
import GalleryStats from '@/components/GalleryStats';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SchedulePreview />
      <GalleryStats />
      <FAQ />
    </>
  );
}
