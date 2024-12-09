export default async function BlogPostPage({ params }: { params: Promise }) {
  const postId = (await params).postId;

  return (
    <div className="flex min-h-full items-center justify-center">
      <h1 className="block text-4xl font-bold">Blog post</h1>
      <p className="block text-2xl">Slug: {postId}</p>
    </div>
  );
}
