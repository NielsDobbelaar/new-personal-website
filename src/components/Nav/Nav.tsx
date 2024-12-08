"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Button from '../common/Button';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateIsDesktop = () => {
      setIsMobile(window.innerWidth < 768);
      setIsDesktop(window.innerWidth > 1280);
    };

    // Initial check
    updateIsDesktop();

    // Add event listener for resize
    window.addEventListener("resize", updateIsDesktop);

    return () => {
      // Clean up the event listener
      window.removeEventListener("resize", updateIsDesktop);
    };
  }, []);
  return (
    <nav className="bg-lightBlueBase flex flex-row justify-between px-8 py-4">
    <Link href="/" ><Image src="/logo.png" height={isDesktop ? 60 : 40} width={isDesktop ? 60 : 40} alt="Logo" /></Link>
    { isMobile ? <Button text='Blog' onClick={()=> {}} variant='outline'/ > : (
      <section className='flex cursor-pointer flex-row items-center gap-8'>
        <section className='hover:bg-darkBase group flex flex-row items-center gap-2 rounded px-2 transition-all duration-300'>
          <Link href="/blog" className='group-hover:text-lightBlueBase text-2xl transition-all duration-300 xl:text-3xl'> Blog </Link> 
            <span className='hidden  h-full justify-center transition-all duration-300 group-hover:flex'>
              <FontAwesomeIcon
                icon={faAngleRight}
                className='text-lightBlueBase'
              />
            </span>
          </section>
        <section className='flex flex-row gap-6'>
          <Link target='_blank' href='https://www.linkedin.com/in/niels-dobbelaar-084619274/' ><Image alt="linkedIn" src='/linkedIn.svg'  height={isDesktop ? 32:24} width={isDesktop? 32:24} /></Link>
          <Link target="_blank" href='https://github.com/NielsDobbelaar' ><Image alt="github" src='/github.svg' height={isDesktop ? 32:24} width={isDesktop? 32:24}  /></Link>
        </section>
      </section>) }
    </nav>
  );
}
