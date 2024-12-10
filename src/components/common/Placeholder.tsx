import Image from 'next/image';

interface PlaceholderProps {
  message: string;
  styling?: string;
}

export default function Placeholder(props: PlaceholderProps) {
  const { message, styling } = props;
  return (
    <section
      className={
        styling ||
        'col-span-8 col-start-1 my-8 flex grow flex-col items-center justify-start'
      }
    >
      <Image
        src="/sad.svg"
        alt="Not found"
        className="lg:w-1/8 aspect-square w-1/4 sm:w-1/12"
        width={200}
        height={200}
      />
      <h3 className="mt-4 text-center text-xl font-bold">
        Oops! Something went wromg <br />
        {message}
      </h3>
    </section>
  );
}
