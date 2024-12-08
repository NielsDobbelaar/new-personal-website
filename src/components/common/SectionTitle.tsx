"use client";

interface SectionTitleProps {
  title: string;
  color?: string;
}


export default function SectionTitle(props: SectionTitleProps) {
  const { color, title } = props;
  return (
      <h3 className={`${color ? "text-"+color :"text-darkBlueBase"} text-left text-2xl font-bold sm:text-3xl lg:text-4xl`}>{title}</h3>
  );
}
