"use client";
import Image from 'next/image';
import SectionTitle from "@/components/common/SectionTitle";

export default function AboutMeSection (){
  return (
    <article className="mx-6 my-32 grid grid-cols-8 gap-2 lg:grid-cols-12 lg:gap-4">
      <section className="col-span-4 col-start-2 lg:col-start-3">
        <SectionTitle title="About me" />
      </section>
      <section className="col-span-6 col-start-2 flex flex-col items-center lg:col-span-8 lg:col-start-3 lg:flex-row lg:gap-16">
        <section className="mb-4 flex w-3/5 items-center justify-center lg:w-1/4">
          <Image src="/nielsDobbelaar.webp" alt="Image of Niels" className="aspect-square rounded-2xl" width={250} height={250}/>
        </section>
        <section className="lg:w-2/3">
          <p className="text-xs sm:text-base xl:text-lg 2xl:text-xl"> 
                Hi! I’m Niels, a 21 year old frontend developer and designer from The Netherlands with a passion for creating functional and accessible web applications. I am currently doing my graduation internship for my bachelor in computer science at the University of Applied Sciences Leiden. Besides my studies I love to learn more about different parts of programming and frequently make vastly different side projects you can read more about in the Projects section.<br /> <br />
        I started programming during middle school by learning the basics of python and web development, eventually learning C# and unity for my final year project. Since then I started (and have almost finished) my bachelor in Computer science, here I have learned far more technology mostly focusing on frontend development technologies like React, Vue and Tailwind but i also dabble some backend technologies like Laravel and Express.js.
          </p>
        </section>
      </section>
    </article>
  );
}
