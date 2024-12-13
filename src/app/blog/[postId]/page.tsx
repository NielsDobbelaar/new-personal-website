import NotFound from '@/app/not-found';
import { getBlogPost } from '@/utils/api/getBlogData';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Image from 'next/image';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const postId = (await params).postId;

  const blogPost = await getBlogPost(postId);

  if (!blogPost) {
    return <NotFound />;
  }

  return (
    <article className="relative">
      <section className="prose col-span-full mx-6 mb-16 mt-4 md:mx-auto">
        <Image
          src={blogPost.data.image.url}
          alt={'cover imaga: ' + blogPost.data.Title}
          className="aspect-video w-full rounded-lg"
          width={1000}
          height={1000}
        />
        <h1>{blogPost.data.Title}</h1>
        <p>{blogPost.data.subtitle}</p>
        {/* @ts-expect-error todo look at typing issue here */}
        <BlocksRenderer content={blogPost.data.body} />
      </section>
    </article>
  );
}
