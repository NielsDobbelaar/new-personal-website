'use client';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  color?: string;
  animateRight?: boolean;
}

export default function SectionTitle(props: SectionTitleProps) {
  const { color, title, animateRight } = props;
  return (
    <motion.h3
      initial={{ opacity: 0, x: !animateRight ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`${color ? 'text-' + color : 'text-darkBlueBase'} text-left text-2xl font-bold sm:text-3xl lg:text-4xl`}
    >
      {title}
    </motion.h3>
  );
}
