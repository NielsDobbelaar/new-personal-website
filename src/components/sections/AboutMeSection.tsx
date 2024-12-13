'use client';
import Image from 'next/image';
import SectionTitle from '@/components/common/SectionTitle';
import AboutMe, { Content, Section } from '@/types/aboutMeTypes';
import { Fragment } from 'react';

interface AboutMeData {
  data: AboutMe | null;
}

export default function AboutMeSection(props: AboutMeData) {
  const { data } = props;

  const image =
    data && data.data.image ? data.data.image.url : '/nielsDobbelaar.webp';

  return (
    <article className="mx-6 mb-32 grid grid-cols-8 gap-2 lg:grid-cols-12 lg:gap-4">
      <section className="col-span-4 col-start-1 sm:col-start-2 lg:col-start-3">
        <SectionTitle title="About me" />
      </section>
      <section className="col-span-8 col-start-1 flex flex-col items-center sm:col-span-6 sm:col-start-2 lg:col-span-8 lg:col-start-3 lg:flex-row lg:gap-16">
        <section className="mb-4 flex w-3/5 items-center justify-center lg:w-1/4">
          <Image
            src={image}
            alt="Image showing Niels Dobbelaar"
            className="aspect-square rounded-2xl"
            width={250}
            height={250}
          />
        </section>
        <section className="lg:w-2/3">
          {data &&
            data.data.content.map((section: Content, index: number) => (
              <div className={index < 1 ? 'mb-4' : ''} key={index}>
                {section.children.map((child: Section, idx: number) => (
                  <Fragment key={idx}>
                    {child.bold ? (
                      <b className="inline text-xs sm:text-base xl:text-lg 2xl:text-xl">
                        {child.text}
                      </b>
                    ) : (
                      <p className="inline text-xs sm:text-base xl:text-lg 2xl:text-xl">
                        {child.text}
                      </p>
                    )}
                  </Fragment>
                ))}
              </div>
            ))}
        </section>
      </section>
    </article>
  );
}
