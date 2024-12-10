'use client';
import SectionTitle from '@/components/common/SectionTitle';
import RoundedSeparator from '../common/roundedSeparator';
import { Technologies, Technology } from '@/types/technologiesTypes';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../common/Button';
import AngledSeparator from '../common/AngledSeparator';

interface TechnologiesSectionProps {
  data: Technologies;
}

export default function TechnologiesSection(props: TechnologiesSectionProps) {
  const { data } = props;

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Only runs on the client
    const handleResize = () => setIsSmallScreen(window.innerWidth < 450);

    // Check initial screen size
    handleResize();

    // Add event listener to update on resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <article className="relative mt-8 grid grid-cols-8 gap-2 bg-darkBase px-6 py-16 lg:grid-cols-12 lg:gap-4">
      <RoundedSeparator color="darkBase" />
      {/* Section description / title */}
      <section className="col-span-full grid grid-cols-8 gap-2 lg:col-span-8 lg:col-start-3 lg:flex lg:flex-row-reverse lg:justify-between xl:col-start-4">
        <section className="grid-gap-2 col-span-full grid grid-cols-8 lg:ml-16 lg:flex lg:shrink lg:flex-col lg:justify-center">
          <section className="col-span-4 col-start-1 mt-4 sm:col-start-2">
            <SectionTitle title="Technologies" color="lightBlueBase" />
          </section>
          <section className="col-span-8 col-start-1 mb-4 flex flex-row items-center justify-between sm:col-span-6 sm:col-start-2 lg:col-span-10 lg:mt-2 lg:flex-col lg:items-start">
            <p className="block w-3/5 text-sm text-lightBlueBase sm:text-base lg:mb-4 lg:w-full xl:text-lg 2xl:w-3/5">
              {isSmallScreen
                ? 'Some technologies i have experience with!'
                : 'Some programming languages and frameworks i have experience with!'}
            </p>
            {/* Buttons small */}
            <section className="flex shrink-0 flex-col items-end sm:items-start lg:hidden">
              <button className="bg-none text-sm text-lightBlueBase sm:text-base">
                View projects &gt;
              </button>
              <button className="bg-none text-sm text-lightBlueBase sm:text-base">
                View experience &gt;
              </button>
            </section>
            {/* Buttons large */}
            <section className="hidden shrink-0 flex-row gap-4 sm:items-start lg:flex">
              <Button
                text="View projects"
                onClick={() => {}}
                variant="outline"
                light
              />
              <Button
                text="View Experience"
                onClick={() => {}}
                variant="outline"
                light
              />
            </section>
          </section>
        </section>
        {/* Technologies */}
        <section className="col-span-6 col-start-2 grid grid-cols-3 gap-2 sm:mx-8 sm:grid-cols-4 lg:mx-0">
          {data.data.map((technology: Technology) => (
            <Link
              href={technology.url}
              key={technology.id}
              className="flex aspect-square items-center justify-center rounded-lg bg-white p-2"
            >
              <Image
                className="aspect-square rounded-lg object-contain"
                src={process.env.NEXT_PUBLIC_BASE_URL + technology.icon.url}
                alt={technology.slug}
                width={100}
                height={100}
              />
            </Link>
          ))}
        </section>
      </section>
      <AngledSeparator color="darkBase" bottom left />
    </article>
  );
}
