'use client';
import { Education, WorkExperience } from '@/types/experienceTypes';
import ExperienceBlock from '../common/ExperienceBlock';

interface ExperienceSectionProps {
  workData: WorkExperience[];
  educationData: Education[];
}

export default function ExperienceSection(props: ExperienceSectionProps) {
  const { workData, educationData } = props;

  return (
    <article
      id="experienceAnchor"
      className="mx-6 mb-32 grid grid-cols-8 gap-2 lg:grid-cols-12 lg:gap-4"
    >
      <ExperienceBlock data={workData} title="Experience" />
      <ExperienceBlock data={educationData} title="Education" reversed />
    </article>
  );
}
