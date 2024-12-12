import Image from 'next/image';

// Why not checkout some of my lastest blog posts?
export default function NotFound() {
  return (
    <article className="relative grid h-full grow grid-cols-8 gap-2 px-6 lg:grid-cols-12 lg:gap-4">
      <section className="col-span-full col-start-1 my-8 flex flex-col items-center justify-center md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 2xl:col-span-4 2xl:col-start-5">
        <Image
          src="/404.svg"
          alt="404! Not found"
          className="w-4/5"
          width={300}
          height={200}
        />

        <h1 className="text-lg font-bold sm:text-xl md:text-2xl">
          Oops! this page could not be found.
        </h1>
        <h2 className="text-center text-base sm:text-lg md:text-xl">
          Use the navigation bar on the top of the page to find what you are
          looking for.
        </h2>
      </section>
    </article>
  );
}
