"use client";

interface RoundedSeparatorProps {
  color: string;
  bottom?: boolean;
}


export default function RoundedSeparator(props: RoundedSeparatorProps) {
  const { color, bottom } = props;
  return (
        <div className={`bg-${color} ${bottom ? "clip-path-archBottom" : "clip-path-archTop"} absolute ${bottom? "top-full" : "bottom-full"} left-0 h-9 w-full`}/>
  );
}
