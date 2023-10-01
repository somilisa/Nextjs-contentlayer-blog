import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import {
  DribbbleIcon,
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
  SunIcon,
  MoonIcon
} from '../Icons';
import { cx } from '@/utils';

const Header = () => {
  return (
    <header className='w-full p-4 px-10 flex items-center justify-between'>
      <Logo />
      <nav className='w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm'>
        <Link href='/' className='mr-2'>
          Home
        </Link>
        <Link href='/about' className='mr-2'>
          About
        </Link>
        <Link href='/contact' className='mr-2'>
          Contact
        </Link>
        <button>T</button>
      </nav>
      <div className='flex items-center'>
        <a href='https://example.com' className='w-6 h-6 mr-4'>
          <LinkedinIcon className=' hover:scale-125 transition-all ease duration-200' />
        </a>
        <a href='https://example.com' className='w-6 h-6 mr-4'>
          <TwitterIcon className=' hover:scale-125 transition-all ease duration-200' />
        </a>
        <a href='https://example.com' className='w-6 h-6 mr-4'>
          <GithubIcon className=' hover:scale-125 transition-all ease duration-200' />
        </a>
        <a href='https://example.com' className='w-6 h-6 mr-4'>
          <DribbbleIcon className=' hover:scale-125 transition-all ease duration-200' />
        </a>
      </div>
    </header>
  );
};

export default Header;
