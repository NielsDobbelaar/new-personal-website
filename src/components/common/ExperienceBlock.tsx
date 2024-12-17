'use client';

import { Education, WorkExperience } from '@/types/experienceTypes';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

interface ExperienceBlockProps {
  data: WorkExperience[] | Education[];
  reversed?: boolean;
  title: string;
}

export default function ExperienceBlock(props: ExperienceBlockProps) {
  const { data, reversed, title } = props;

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
    }).format(date);
    return formattedDate;
  };

  return (
    <section className="col-span-8 col-start-1 sm:col-span-6 sm:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4">
      <section
        className={`flex shrink gap-4 ${reversed ? 'flex-row-reverse' : 'flex-row'}`}
      >
        <svg className="h-full" width={24} viewBox="0 0 24 40">
          <line
            x1="10%"
            y1="50%"
            x2="90%"
            y2="50%"
            strokeWidth="1px"
            stroke="#1E3A8A"
          />
          <line x1="50%" y1="50%" x2="50%" y2="100%" stroke="#1E3A8A" />
        </svg>
        <SectionTitle title={title} />
      </section>
      {data.map((experience: WorkExperience | Education, idx: number) => (
        <section
          key={experience.id}
          className={`flex gap-4 ${reversed ? 'flex-row-reverse' : 'flex-row'}`}
        >
          <div className="flex shrink">
            {/* vertical svg line */}
            <svg className="" width={24}>
              {/* change color when changing global color */}
              {idx === data.length - 1 && (
                <line
                  x1="10%"
                  y1="100%"
                  x2="90%"
                  y2="100%"
                  strokeWidth="3px"
                  stroke="#1E3A8A"
                />
              )}
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#1E3A8A" />
              <circle
                cx="50%"
                cy={idx === 0 ? '4em' : '2em'}
                r="12"
                fill="#1E3A8A"
              />
              <circle
                cx="50%"
                cy={idx === 0 ? '4em' : '2em'}
                r="11"
                fill="white"
              />
              <circle
                cx="50%"
                cy={idx === 0 ? '4em' : '2em'}
                r="6"
                fill="#1E3A8A"
              />
            </svg>
          </div>
          <div
            className={`pb-16 ${idx === 0 && 'pt-8'} ${reversed && 'text-right'}`}
          >
            <motion.h3
              initial={{ opacity: 0, x: reversed ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl"
            >
              {experience.title}
            </motion.h3>
            {(experience as WorkExperience).started ? (
              <p className="mb-1 text-2xs text-darkBlueBase md:text-xs lg:text-sm">
                {formatDate((experience as WorkExperience).started)} -{' '}
                {formatDate((experience as WorkExperience).ended)}
              </p>
            ) : (
              <p className="mb-1 text-xs text-darkBlueBase md:text-sm lg:text-base">
                {(experience as Education).institution}
              </p>
            )}
            <motion.p
              initial={{ opacity: 0, x: reversed ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-justify text-xs md:text-sm lg:text-base"
            >
              {experience.body}
            </motion.p>
          </div>
        </section>
      ))}
    </section>
  );
}
