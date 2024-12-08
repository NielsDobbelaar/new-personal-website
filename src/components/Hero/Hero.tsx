"use client";
import Image from 'next/image';
import AngledSeparator from "@/components/common/AngledSeparator";
export default function Hero() {

  const calculateImageSize = () => {
    if (window.innerWidth < 640) {
      return 150;
    }
    if (window.innerWidth < 1024){
      return 250;
    } 
    if (window.innerWidth < 1280){
      return 400;
    }
    if (window.innerWidth < 1536){
      return 500;
    }   
    return 500
  }

  return (
    <article className="bg-lightBlueBase relative mb-16 h-56 pt-8 sm:h-64 md:h-60 lg:h-80 xl:h-96 2xl:h-[30rem]" >
      <section className="ml-8 w-3/5 md:ml-20 md:w-3/6 lg:ml-32 lg:w-3/6 xl:mt-10 xl:w-3/6 2xl:ml-[15%] 2xl:mt-16">
        <h1 className='text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl' >Hi i&apos;m Niels Dobbelaar</h1>
        <h2 className='sm:text-md text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl' >A motivated and enthusiastic frontend/ <br />webdeveloper and UX designer</h2>
      </section>
      <Image className='absolute left-2/3 top-8 lg:left-auto lg:right-16 xl:right-32 2xl:right-[12.5%] 2xl:mt-16' src="/heroImg.webp" alt="Hero image" width={calculateImageSize()} height={calculateImageSize()} />
      <AngledSeparator color="lightBlueBase" bottom />
    </article>
  );
}
