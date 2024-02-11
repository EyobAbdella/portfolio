import Image from "next/image";
import React from "react";

interface Icons {
  title: string;
  image: string;
}

interface SkillCardProps {
  title: string;
  icons: Icons[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icons }) => {
  return (
    <div className='rounded-2xl border border-indigo-600 w-[350px] md:w-[490px] pb-10 pt-2 px-2 md:px-12 h-96 mx-auto'>
      <h1 className='text-gray-300 text-2xl text-center mb-6 mt-2 font-semibold'>
        {title}
      </h1>
      <div className='flex flex-wrap gap-3.5 items-center justify-center'>
        {icons.map((icon, index) => (
          <div
            key={index}
            className='flex items-center space-x-2 w-fit rounded-md border border-slate-400 px-3 py-2 h-fit'>
            <Image src={icon.image} width={30} height={30} alt='react' />
            <p>{icon.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
