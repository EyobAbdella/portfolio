import Image from "next/image";
import ProjectImage from "../../public/image.png";

type Props = {};

const ProjectCard = (props: Props) => {
  return (
    <div className='flex flex-col justify-between space-y-4 h-[480px] w-80 p-4 rounded-lg bg-[#090916] shadow-lg shadow-blue-950/55 hover:shadow-blue-950/100 hover:bg-[#0a0a16] duration-500 hover:-translate-y-4'>
      <Image
        className='h-52 rounded-xl w-full object-cover'
        src={ProjectImage}
        alt='project'
      />

      <div className='flex flex-wrap gap-2'>
        <p className='w-fit text-purple-700 rounded-md px-3 text-[0.83rem] bg-[#3c07643b]'>
          ReactJS
        </p>
        <p className='w-fit text-purple-700 rounded-md px-3 text-[0.83rem] bg-[#3c07643b]'>
          Django
        </p>
        <p className='w-fit text-purple-700 rounded-md px-3 text-[0.83rem] bg-[#3c07643b]'>
          AWS
        </p>
        <p className='w-fit text-purple-700 rounded-md px-3 text-[0.83rem] bg-[#3c07643b]'>
          Mysql
        </p>
      </div>
      <div className='pb-4 text-slate-500'>
        <h1 className='text-lg text-slate-300'>eCommerce</h1>
        <p className='text-xs mb-4 mt-0.5'>Jun 2023 - July 2023</p>
        <p>
          eCommerce is a web application designed to streamline task management
          and enhance
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
