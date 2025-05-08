import Hero from '@/components/Hero/Hero';
import AboutMeSection from '@/components/sections/AboutMeSection';
import BlogSection from '@/components/sections/BlogSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import getAboutMeData from '@/utils/api/getAboutMeData';
import getTechnologiesData from '@/utils/api/getTechnologiesData';
import getBlogData from '@/utils/api/getBlogData';
import ProjectsSection from '@/components/sections/ProjectsSection';
import getProjectsData from '@/utils/api/getProjectsData';
import ExperienceSection from '@/components/sections/experienceSection';
import getWorkExperiencesDate from '@/utils/api/getWorkExperiencesData';
import getEducationData from '@/utils/api/getEducationData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Niels Dobbelaar - Web Developer',
  description:
    'A motivated and enthusiastic frontend/ webdeveloper and UX designer',
};

export default async function Home() {
  let aboutMeData = await getAboutMeData();
  const technologiesData = await getTechnologiesData();
  const blogData = await getBlogData();
  let projectsData = await getProjectsData();
  let workExperiencesData = await getWorkExperiencesDate();
  let educationData = await getEducationData();

  if (!aboutMeData) {
    const { default: aboutMeBackkup } = await import(
      '@/backupData/aboutMeBackup'
    );
    aboutMeData = aboutMeBackkup;
  }
  if (!projectsData) {
    const { default: projectsBackupData } = await import(
      '@/backupData/projectsBackup'
    );
    projectsData = projectsBackupData;
  }
  if (!workExperiencesData) {
    const { default: experienceBackupData } = await import(
      '@/backupData/experienceBackup'
    );
    workExperiencesData = experienceBackupData;
  }
  if (!educationData) {
    const { default: educationBackupData } = await import(
      '@/backupData/educationBackup'
    );
    educationData = educationBackupData;
  }

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
      {workExperiencesData && educationData && (
        <ExperienceSection
          workData={workExperiencesData.data.reverse()}
          educationData={educationData.data.reverse()}
        />
      )}
      <ProjectsSection data={projectsData.data.reverse()} />
    </>
  );
}
