'use client';
import Image from 'next/image';
import AngledSeparator from '@/components/common/AngledSeparator';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [imageSize, setImageSize] = useState(500);

  useEffect(() => {
    const calculateImageSize = (w: number) => {
      if (w < 640) {
        return 150;
      }
      if (w < 1024) {
        return 250;
      }
      if (w < 1280) {
        return 400;
      }
      if (w < 1536) {
        return 500;
      }
      return 500;
    };

    const updateImageSize = () => {
      const currentWidth = document.documentElement.clientWidth;
      setImageSize(calculateImageSize(currentWidth));
    };

    updateImageSize();

    // Add event listener for resize
    window.addEventListener('resize', updateImageSize);

    return () => {
      // Clean up the event listener
      window.removeEventListener('resize', updateImageSize);
    };
  }, []);

  return (
    <article className="relative mb-16 h-56 bg-lightBlueBase pt-8 sm:h-64 md:h-60 lg:h-80 xl:h-96 2xl:h-[30rem]">
      <section className="ml-8 w-3/5 md:ml-20 md:w-3/6 lg:ml-32 lg:w-3/6 xl:mt-10 xl:w-3/6 2xl:ml-[15%] 2xl:mt-16">
        <h1 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Hi i&apos;m Niels Dobbelaar
        </h1>
        <h2 className="text-base sm:text-base lg:text-2xl xl:text-3xl 2xl:text-4xl">
          A motivated and enthusiastic frontend/ webdeveloper and UX designer
        </h2>
      </section>
      <Image
        className="absolute bottom-8 right-4 md:left-2/3 lg:left-auto lg:right-16 xl:right-32 2xl:right-[10%] 2xl:mt-16"
        src="/heroImg.webp"
        alt="Hero image showing a computer screen with code"
        width={imageSize}
        height={imageSize}
        loading="eager"
      />
      <AngledSeparator color="lightBlueBase" bottom />
    </article>
  );
}
