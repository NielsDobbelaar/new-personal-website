import aboutMeBackup from '@/backupData/aboutMeBackup';
import Hero from '@/components/Hero/Hero';
import AboutMeSection from '@/components/sections/AboutMeSection';
import BlogSection from '@/components/sections/BlogSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import getAboutMeData from '@/utils/api/getAboutMeData';
import getTechnologiesData from '@/utils/api/getTechnologiesData';
import getBlogData from '@/utils/api/getBlogData';

export default async function Home() {
  let aboutMeData = await getAboutMeData();
  const technologiesData = await getTechnologiesData();
  const blogData = await getBlogData();

  // @ts-expect-error backup data not conforming to types
  if (!aboutMeData) aboutMeData = aboutMeBackup;

  return (
    <>
      <Hero />
      <AboutMeSection data={aboutMeData} />
      {technologiesData && <TechnologiesSection data={technologiesData} />}
      {blogData && blogData.data.length > 1 && (
        <BlogSection
          data={blogData.data.slice(0, 2)}
          neighborTop={technologiesData ? true : false}
        />
      )}
    </>
  );
}
