import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className=''>
      <h1 className='text-5xl md:text-7xl lg:text-8xl font-serif bg-gradient-to-r from-purple-500 to-pink-700 inline-block text-transparent bg-clip-text'>
        <span className='font-semibold '>Hello, I&apos;m </span>A Full Stack Web
        Developer
      </h1>
      <p className='text-2xl font-serif mt-1 text-slate-200'>
        With Over 4 years of experience
      </p>
    </div>
  );
};

export default HeroSection;
