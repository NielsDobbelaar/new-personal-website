import aboutMeBackup from '@/backupData/aboutMeBackup';
import Hero from '@/components/Hero/Hero';
import AboutMeSection from '@/components/sections/AboutMeSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import getAboutMeData from '@/utils/api/getAboutMeData';

export default async function Home() {
  let aboutMeData = await getAboutMeData();

  if (!aboutMeData) aboutMeData = aboutMeBackup;

  return (
    <>
      <Hero />
      <AboutMeSection data={aboutMeData} />
      <TechnologiesSection />
    </>
  );
}
