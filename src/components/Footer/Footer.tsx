'use client';
import Button from '@/components/common/Button';
import RoundedSeparator from '../common/roundedSeparator';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const router = useRouter();

  const path = usePathname();

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateIsDesktop = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    // Initial check
    updateIsDesktop();

    // Add event listener for resize
    window.addEventListener('resize', updateIsDesktop);

    return () => {
      // Clean up the event listener
      window.removeEventListener('resize', updateIsDesktop);
    };
  }, []);

  const navigateToBlog = () => {
    router.push('/blog');
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      className={`${path !== '/' && 'mt-10'} flex w-full grid-cols-12 flex-col bg-white`}
    >
      <article className="relative size-full bg-lightBlueBase px-4 py-10 md:grid md:grid-cols-12">
        <RoundedSeparator color="lightBlueBase" />
        <section className="col-start-2 col-end-5 lg:col-end-6 xl:col-end-5">
          <h2 className="text-lg font-bold md:text-xl lg:text-2xl">
            Niels Dobbelaar
          </h2>
          <h3 className="text-sm lg:text-base xl:text-lg">
            A motivated and enthusiastic frontend/ web developer and UX designer
          </h3>
        </section>
        {isDesktop ? (
          <>
            <section className="col-start-6 col-end-8 flex flex-col gap-4 lg:col-start-7 lg:col-end-9 xl:col-end-8">
              <Button
                text="Read blog"
                onClick={navigateToBlog}
                variant="outline"
                light={false}
              />
              <Button
                text="Go to top"
                onClick={goToTop}
                variant="outline"
                light={false}
              />
            </section>
            <section className="col-start-10 col-end-12 flex flex-col lg:col-start-11 lg:col-end-11">
              <h2 className="text-3xl font-bold">Socials</h2>
              <section className="flex flex-row justify-start gap-4">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/niels-dobbelaar-084619274/"
                >
                  <Image
                    alt="linkedIn"
                    src="/linkedIn.svg"
                    height={isDesktop ? 32 : 24}
                    width={isDesktop ? 32 : 24}
                  />
                </Link>
                <Link target="_blank" href="https://github.com/NielsDobbelaar">
                  <Image
                    alt="github"
                    src="/github.svg"
                    height={isDesktop ? 32 : 24}
                    width={isDesktop ? 32 : 24}
                  />
                </Link>
              </section>
            </section>
          </>
        ) : (
          <section className="flex flex-row items-end justify-between gap-4 pt-4">
            <section className="flex flex-col justify-start">
              <h2 className="text-xl font-bold">Socials</h2>
              <section className="flex flex-row justify-between">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/niels-dobbelaar-084619274/"
                >
                  <Image
                    alt="linkedIn"
                    src="/linkedIn.svg"
                    height={isDesktop ? 32 : 24}
                    width={isDesktop ? 32 : 24}
                  />
                </Link>
                <Link target="_blank" href="https://github.com/NielsDobbelaar">
                  <Image
                    alt="github"
                    src="/github.svg"
                    height={isDesktop ? 32 : 24}
                    width={isDesktop ? 32 : 24}
                  />
                </Link>
              </section>
            </section>
            <section className="flex max-h-9 flex-row gap-4">
              <Button
                text="Read blog"
                onClick={navigateToBlog}
                variant="outline"
                light={false}
              />
              <Button
                text="Go to top"
                onClick={goToTop}
                variant="outline"
                light={false}
              />
            </section>
          </section>
        )}
      </article>
    </footer>
  );
}
