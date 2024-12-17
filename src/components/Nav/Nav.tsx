'use client';
import Image from 'next/image';
import Button from '../common/Button';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Nav() {
  const router = useRouter();
  const path = usePathname();
  return (
    <motion.nav
      initial={{ scaleX: '200%' }}
      animate={{ scaleX: '100%' }}
      transition={{ duration: 0.3 }}
      className="flex flex-row justify-between bg-lightBlueBase px-8 py-4"
    >
      <Link href="/">
        <Image
          src="/logo.png"
          className="size-10 md:size-[60px]"
          height={40}
          width={40}
          alt="My logo!"
        />
      </Link>
      {path !== '/blog' && (
        <div className="block md:hidden">
          <Button
            text="Blog"
            onClick={() => {
              router.push('/blog');
            }}
            variant="outline"
          />
        </div>
      )}
      <section className="hidden cursor-pointer flex-row items-center gap-8 md:flex">
        <section className="group flex flex-row items-center gap-2 rounded px-2 transition-all duration-300 hover:bg-darkBase">
          {path !== '/blog' && (
            <Link
              href="/blog"
              className="text-2xl text-darkBase transition-all duration-300 group-hover:text-lightBlueBase xl:text-3xl"
            >
              Blog
            </Link>
          )}
          <span className="hidden h-full justify-center transition-all duration-300 group-hover:flex">
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-lightBlueBase"
            />
          </span>
        </section>
        <section className="flex flex-row gap-6">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/niels-dobbelaar-084619274/"
          >
            <Image
              alt="linkedIn"
              src="/linkedIn.svg"
              className="size-6 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-white md:size-8"
              height={24}
              width={24}
            />
          </Link>
          <Link target="_blank" href="https://github.com/NielsDobbelaar">
            <Image
              alt="github"
              src="/github.svg"
              className="size-6 rounded-full transition-all duration-150 ease-in-out hover:scale-110 hover:bg-white md:size-8"
              height={24}
              width={24}
            />
          </Link>
        </section>
      </section>
    </motion.nav>
  );
}
