"use client";
import Image from "next/image";
import React, { useState } from "react";
import Hamburger from "../../public/hamburger.svg";
import Close from "../../public/close.svg";
type Props = {};

const NavBar = (props: Props) => {
  const [nav, setNav] = useState(false);
  return (
    <div className='text-lg flex justify-between items-center py-5'>
      <div className='text-4xl'>LOGO</div>
      <ul className='hidden md:flex items-center space-x-14'>
        <li className='text-cyan-500 font-semibold hover:text-cyan-500 duration-300'>
          About Me
        </li>
        <li className='hover:text-cyan-500 duration-300'>Portfolio</li>
        <li className='hover:text-cyan-500 duration-300'>Experience</li>
        <li className='bg-gradient-to-r from-sky-400 to-blue-500 px-4 py-1 rounded-md text-black'>
          contact
        </li>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className='md:hidden border border-gray-200 px-2 py-1.5 rounded-lg'>
        {nav ? (
          <Image src={Hamburger} width={20} height={20} alt='hamburger' />
        ) : (
          <Image src={Close} width={20} height={20} alt='close' />
        )}
      </div>
      <ul
        className={`md:hidden ${
          nav
            ? "hidden"
            : "absolute h-60 w-full right-0 top-20 px-10 space-y-6 flex flex-col items-center"
        }`}>
        <li className='text-cyan-500 font-semibold'>About Me</li>
        <li>Portfolio</li>
        <li>Experience</li>
        <li className='bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-1 rounded-md text-black'>
          contact
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
