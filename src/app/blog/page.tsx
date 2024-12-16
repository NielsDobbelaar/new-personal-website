import Placeholder from '@/components/common/Placeholder';
import SectionTitle from '@/components/common/SectionTitle';
import Hero from '@/components/Hero/Hero';
import { BlogPost } from '@/types/blogTypes';
import getBlogData from '@/utils/api/getBlogData';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogHome() {
  const blogposts = await getBlogData();

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };

  const calculateCols = (bp: BlogPost[]) => {
    return bp.length > 4 ? '2xl:grid-cols-4' : '2xl:grid-cols-' + bp.length;
  };

  return (
    <>
      <Hero />
      <article className="mx-6 grid grow grid-cols-8 gap-2 sm:mt-0 xl:my-16">
        {!blogposts ? (
          <Placeholder message="No blogposts found, try again later!" />
        ) : (
          <>
            <section className="col-start-1 mb-4">
              <SectionTitle title="Blogposts" />
            </section>
            <section
              className={`col-span-8 col-start-1 mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ${calculateCols(blogposts.data)}`}
            >
              {blogposts.data.map((post: BlogPost) => (
                <Link
                  className="group rounded-lg p-4 transition-all duration-500 hover:bg-darkBase"
                  href={`/blog/${post.documentId}`}
                  key={post.documentId}
                >
                  <Image
                    src={post.image.url}
                    alt={'Cover image: ' + post.Title}
                    className="mb-2 aspect-video w-full rounded-lg object-cover"
                    width={400}
                    height={200}
                  />
                  <section className="mx-4">
                    <h4 className="line-clamp-2 text-xl font-bold text-darkBlueBase group-hover:text-lightBlueBase xl:text-2xl">
                      {post.Title}
                    </h4>
                    <p className="font-sm italic text-darkBase group-hover:text-white">
                      {new Date(post.publishedAt).toLocaleDateString(
                        'nl-NL',
                        dateOptions
                      )}
                    </p>
                    <p className="line-clamp-3 group-hover:text-white">
                      {post.subtitle}
                    </p>
                  </section>
                </Link>
              ))}
            </section>
          </>
        )}
      </article>
    </>
  );
}
