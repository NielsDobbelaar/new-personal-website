'use client';
import Image from 'next/image';
import AngledSeparator from '@/components/common/AngledSeparator';

export default function Hero() {
  return (
    <article className="relative mb-16 h-56 bg-lightBlueBase pt-8 sm:h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-[30rem]">
      <section className="ml-8 w-[70%] md:ml-16 lg:ml-[15%] lg:w-5/12 xl:ml-[20%] 2xl:mt-24">
        <h1 className="text-lg font-bold sm:text-3xl md:text-4xl xl:text-5xl">
          Hi i&apos;m Niels Dobbelaar
        </h1>
        <h2 className="text-sm sm:text-lg md:text-xl xl:text-2xl">
          A motivated and enthusiastic frontend/ <br />
          webdeveloper and UX designer
        </h2>
      </section>
      <Image
        className="absolute bottom-2 right-4 aspect-square w-2/5 object-contain sm:-bottom-4 sm:right-4 md:-bottom-8 md:w-80 lg:right-[10%] xl:right-[10%] xl:w-[30%] 2xl:-bottom-24 2xl:right-[15%]"
        src="/heroImg.webp"
        alt="Hero image showing a computer screen with code"
        width={500}
        height={500}
        loading="eager"
      />
      <AngledSeparator color="lightBlueBase" bottom />
    </article>
  );
}
