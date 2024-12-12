'use client';
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import AngledSeparator from '../common/AngledSeparator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { Project } from '@/types/projectsTypes';
import Image from 'next/image';
import { SwiperSlide, Swiper, SwiperClass } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface ProjectsSectionProps {
  data: Project[];
}

export default function ProjectsSection(props: ProjectsSectionProps) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateIsDesktop = () => {
      setIsMobile(window.innerWidth < 768);
      setIsDesktop(window.innerWidth > 1280);
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
  const { data } = props;

  const nextSlide = () => {
    if (!swiperRef.current) return;

    if (activeSlide !== data.length - 1) setActiveSlide(activeSlide + 1);
    swiperRef.current.slideNext();
  };

  const prevSlide = () => {
    if (!swiperRef.current) return;

    if (activeSlide) setActiveSlide(activeSlide - 1);
    if (activeSlide !== data.length - 1) swiperRef.current.slidePrev();
  };

  return (
    <article className="relative grid grid-cols-8 gap-2 bg-darkBase px-6 pb-32 lg:grid-cols-12 lg:gap-4">
      <AngledSeparator color="darkBase" />
      <section className="col-span-full flex flex-row items-center justify-between pt-8 md:col-span-6 md:col-start-2 lg:col-span-10 lg:col-start-2 2xl:col-span-8 2xl:col-start-3">
        <SectionTitle color="lightBlueBase" title="Projects" />
        <section className="flex flex-row gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous project slide"
            className="aspect-square rounded bg-lightBlueBase"
          >
            <span className="flex aspect-square items-center justify-center px-2">
              <FontAwesomeIcon
                icon={faChevronLeft}
                size={isMobile ? '2xs' : !isDesktop ? 'xs' : 'sm'}
              />
            </span>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Previous project slide"
            className="aspect-square rounded bg-lightBlueBase"
          >
            <span className="flex aspect-square items-center justify-center px-2">
              <FontAwesomeIcon
                icon={faChevronRight}
                size={isMobile ? '2xs' : !isDesktop ? 'xs' : 'sm'}
              />
            </span>
          </button>
        </section>
      </section>
      <section className="col-span-full sm:mt-8 md:col-span-6 md:col-start-2 lg:col-span-10 lg:col-start-2 2xl:col-span-8 2xl:col-start-3">
        <Swiper
          id="projectsAnchor"
          className="col-span-full"
          slidesPerView={1.5}
          spaceBetween={12}
          allowTouchMove={false}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 12 },
            768: { slidesPerView: 1.5, spaceBetween: 16 },
            1024: { slidesPerView: 2.5, spaceBetween: 20 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Store the Swiper instance
          }}
        >
          {data.map((project: Project, idx: number) => (
            <SwiperSlide
              key={project.id}
              className={`relative aspect-square max-w-xs rounded-xl sm:max-w-md ${idx === 0 && 'bg-white'} transition-transform duration-300 ease-in-out`}
            >
              <>
                <Image
                  className="absolute size-full rounded-lg object-cover"
                  src={process.env.NEXT_PUBLIC_BASE_URL + project.image.url}
                  alt={`cover image: ${project.title}`}
                  width={300}
                  height={200}
                />
                <div
                  className={`absolute size-full rounded-lg bg-black/60 ${!(activeSlide === idx) ? 'backdrop-blug-sm' : 'backdrop-blur-md'}`}
                />
                <section
                  className={`absolute line-clamp-1 flex size-full flex-col p-4 transition-transform duration-300 ease-in-out lg:p-8 ${!(activeSlide === idx) ? 'items-center justify-center' : 'items-start justify-between'}`}
                >
                  <div className="max-h-[80%] overflow-hidden">
                    <h4
                      className={`mb-2 text-lg font-semibold text-white sm:text-2xl xl:text-3xl`}
                    >
                      {project.title}
                    </h4>
                    <p
                      className={`text-xs text-white sm:text-base ${!(activeSlide === idx) && 'hidden'}`}
                    >
                      {project.body}
                    </p>
                  </div>
                  <div className="flex w-full flex-row-reverse justify-normal">
                    <Link
                      href={project.link}
                      target="_blank"
                      className={`sm:p2 shrink rounded-lg border border-transparent p-1 text-white transition-all duration-300 ease-in-out hover:border-white sm:text-lg ${activeSlide === idx ? 'block' : 'hidden'}`}
                    >
                      Read more &gt;
                    </Link>
                  </div>
                </section>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </article>
  );
}
