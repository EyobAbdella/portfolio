"use client";
import Image from "next/image";
import React, { useState } from "react";
import Hamburger from "../../public/hamburger.svg";
import Close from "../../public/close.svg";
import Link from "next/link";
type Props = {};

const NavBar = (props: Props) => {
  const [nav, setNav] = useState<boolean>(false);
  return (
    <div className='text-lg flex justify-between items-center py-2 md:py-5'>
      <div className='text-3xl z-50'>LOGO</div>
      <div className='hidden md:flex items-center space-x-8 lg:space-x-14'>
        <Link
          href='#about'
          className='text-slate-100  hover:text-cyan-500 duration-300'>
          About Me
        </Link>
        <Link
          href='#projects'
          className='text-slate-100  hover:text-cyan-500 duration-300'>
          Projects
        </Link>
        <Link
          href='#skills'
          className='text-slate-100  hover:text-cyan-500 duration-300'>
          Skills
        </Link>
        <Link
          href='#contact'
          className='text-slate-100  hover:text-cyan-500 duration-300'>
          contact
        </Link>
        <Link
          href='https://github.com/dev9823'
          className='duration-200 rounded-full px-5 py-2.5 border border-indigo-800 text-sm text-indigo-300 hover:bg-indigo-800 hover:text-slate-300'>
          Github Profile
        </Link>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className='md:hidden border border-gray-200 px-2 py-1.5 rounded-lg z-50'>
        {nav ? (
          <Image src={Close} width={20} height={20} alt='close' />
        ) : (
          <Image src={Hamburger} width={20} height={20} alt='hamburger' />
        )}
      </div>
      <div
        className={`md:hidden absolute  bg-[#070719] right-0 top-20 pt-5 h-96 w-full px-10 space-y-6 ${
          nav ? "flex flex-col items-center" : "hidden"
        }`}>
        <Link
          href='#about'
          onClick={() => setNav(!nav)}
          className='text-slate-100  hover:text-cyan-500 duration-300'>
          About Me
        </Link>
        <Link
          href='#projects'
          onClick={() => setNav(!nav)}
          className='text-slate-100  hover:text-cyan-500 duration-300'>
          Projects
        </Link>
        <Link
          href='#skills'
          onClick={() => setNav(!nav)}
          className='text-slate-100  hover:text-cyan-500 duration-300'>
          Skills
        </Link>
        <Link
          href='#contact'
          onClick={() => setNav(!nav)}
          className='text-slate-100  hover:text-cyan-500 duration-300'>
          contact
        </Link>
        <Link
          href='https://github.com/dev9823'
          onClick={() => setNav(!nav)}
          className='duration-200 rounded-full px-5 py-2.5 border border-indigo-800 text-sm text-indigo-300 hover:bg-indigo-800 hover:text-slate-300'>
          Github Profile
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
