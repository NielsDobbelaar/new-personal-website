'use client';

interface AngledSeparatorProps {
  color: string;
  bottom?: boolean;
  left?: boolean;
}

export default function AngledSeparator(props: AngledSeparatorProps) {
  const { color, bottom, left } = props;
  return (
    <div
      className={`bg-${color} absolute z-10 h-8 w-full lg:h-16 2xl:h-20 ${bottom ? 'top-[99.8%]' : 'bottom-full rotate-180'} `}
      style={{
        clipPath: left
          ? 'polygon(100% 0, 0 100%, 0 0)'
          : 'polygon(0 0, 100% 100%, 100% 0)',
      }}
    ></div>
  );
}
