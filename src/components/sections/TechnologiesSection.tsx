'use client';
import SectionTitle from '@/components/common/SectionTitle';
import RoundedSeparator from '../common/roundedSeparator';

export default function TechnologiesSection() {
  return (
    <article className="relative mt-16 grid grid-cols-8 gap-2 bg-darkBase px-6">
      <RoundedSeparator color="darkBase" />
      <section className="col-span-4 col-start-1">
        <SectionTitle title="Technologies" color="lightBlueBase" />
      </section>
      <section className="col-span-8 col-start-1 flex h-96 flex-col items-center" />
    </article>
  );
}
