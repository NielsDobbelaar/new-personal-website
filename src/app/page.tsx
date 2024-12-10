import aboutMeBackup from '@/backupData/aboutMeBackup';
import Hero from '@/components/Hero/Hero';
import AboutMeSection from '@/components/sections/AboutMeSection';
import BlogSection from '@/components/sections/BlogSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import getAboutMeData from '@/utils/api/getAboutMeData';
import getTechnologiesData from '@/utils/api/getTechnologiesData';

export default async function Home() {
  let aboutMeData = await getAboutMeData();
  const technologiesData = await getTechnologiesData();

  // @ts-expect-error backup data not conforming to types
  if (!aboutMeData) aboutMeData = aboutMeBackup;

  return (
    <>
      <Hero />
      <AboutMeSection data={aboutMeData} />
      {technologiesData && <TechnologiesSection data={technologiesData} />}
      <BlogSection />
    </>
  );
}
