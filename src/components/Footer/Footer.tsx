"use client";
import Button from "@/components/common/Button";
import RoundedSeparator from "../common/roundedSeparator";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Footer() {
  const router = useRouter();

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateIsDesktop = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    // Initial check
    updateIsDesktop();

    // Add event listener for resize
    window.addEventListener("resize", updateIsDesktop);

    return () => {
      // Clean up the event listener
      window.removeEventListener("resize", updateIsDesktop);
    };
  }, []);

   const navigateToBlog =  () => {
     console.log('clicked');
     router.push('/blog'); 
  };

  return (
    <footer className="absolute bottom-0 flex w-full grid-cols-12 flex-col bg-white">
      <article className="bg-lightBlueBase relative size-full px-4 py-10 md:grid md:grid-cols-12">
        <RoundedSeparator color="lightBlueBase"  />
        <section className="col-start-2 col-end-5 lg:col-end-6 xl:col-end-5">
          <h2 className=" text-lg font-bold md:text-xl lg:text-2xl">Niels Dobbelaar</h2>
          <h3 className="text-sm lg:text-base xl:text-lg">A motivated and enthusiastic frontend/ web developer and UX designer</h3>
        </section>
        { isDesktop ? (
          <>
        <section className="col-start-6 col-end-8 flex flex-col gap-4 lg:col-start-7 lg:col-end-7">
          <Button text="Read blog" onClick={navigateToBlog} variant="outline" light={false} />
          <Button text="Go to top" onClick={() => {}} variant="outline" light={false} />
        </section>
        <section className="col-start-10 col-end-12 flex flex-col lg:col-start-11 lg:col-end-11">
          <h2 className="text-3xl font-bold">Socials</h2>
          <section className="flex flex-row justify-start gap-4">
            <div className="bg-darkBase size-[32px]" />
            <div className="bg-darkBase size-[32px]" />
          </section>
        </section>
        </>
        ): (
        <section className=" flex flex-row items-end justify-between gap-4 pt-4">
          <section className="flex flex-col justify-start">
            <h2 className="text-xl font-bold">Socials</h2>
            <section className="flex flex-row justify-between">
              <div className="bg-darkBase size-[32px]" />
              <div className="bg-darkBase size-[32px]" />
            </section>
          </section>
          <section className="flex max-h-9 flex-row gap-4">
            <Button text="Read blog" onClick={navigateToBlog} variant="outline" light={false} />
            <Button text="Go to top" onClick={() => {}} variant="outline" light={false} />
          </section>
        </section>
        )}
      </article>
    </footer>
  );
}
