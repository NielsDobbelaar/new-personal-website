import { getBlogPost } from '@/utils/api/getBlogData';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const postId = (await params).postId;

  const blogPost = await getBlogPost(postId);

  return (
    <div className="flex min-h-full items-center justify-center">
      <h1 className="block text-4xl font-bold">Blog post</h1>
      <p className="block text-2xl">
        title: {blogPost ? blogPost.data.Title : postId}
      </p>
    </div>
  );
}
