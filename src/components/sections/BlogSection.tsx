'use client';

import { BlogPost } from '@/types/blogTypes';
import AngledSeparator from '../common/AngledSeparator';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import RoundedSeparator from '../common/roundedSeparator';

interface BlogSectionProps {
  neighborTop?: boolean;
  data: BlogPost[];
}

export default function BlogSection(props: BlogSectionProps) {
  const { neighborTop, data } = props;

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };
  return (
    <article className="relative mb-16 grid grid-cols-8 gap-2 bg-lightBlueBase px-6 py-24 lg:grid-cols-12 lg:gap-4 lg:pt-32">
      {!neighborTop && <AngledSeparator color="lightBlueBase" left />}
      <section className="col-span-full flex flex-row justify-between md:col-span-10 md:col-start-2">
        <SectionTitle title="Blog" />
        <Button text="View all" variant="text" onClick={() => {}} />
      </section>
      {/* Blog posts */}
      <section className="xcol-span-full grid grid-cols-4 gap-2 md:col-span-10 md:col-start-2 lg:grid-cols-7 2xl:grid-cols-6">
        {data.map((post: BlogPost, idx: number) => (
          <Link
            href={`/blog/${post.documentId}`}
            className={`relative col-span-3 flex aspect-square flex-col justify-end rounded-lg bg-darkBase object-cover 2xl:col-span-2 ${idx == 1 && 'lg:col-span-4 lg:aspect-auto 2xl:col-span-4'}`}
            key={post.id}
          >
            <Image
              className="absolute size-full rounded-xl"
              src={process.env.NEXT_PUBLIC_BASE_URL + post.image.url}
              alt={post.Title}
              width={1000}
              height={1000}
            />
            <section className="z-10 rounded-lg bg-black/50 p-2 backdrop-blur-sm xl:p-4">
              <h4 className="line-clamp-1 text-sm font-semibold text-white sm:text-base md:text-lg xl:text-2xl">
                {post.Title}
              </h4>
              <p className="text-3xs text-lightBlueSecondary sm:text-2xs md:text-xs xl:text-sm">
                {new Date(post.publishedAt).toLocaleDateString(
                  'nl-NL',
                  dateOptions
                )}
              </p>
              <p className="line-clamp-2 text-2xs text-white sm:text-sm md:text-base">
                {post.subtitle}
              </p>
            </section>
          </Link>
        ))}
      </section>
      <RoundedSeparator color="lightBlueBase" bottom />
    </article>
  );
}
