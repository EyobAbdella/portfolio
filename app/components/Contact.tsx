import Image from "next/image";
import Link from "next/link";
import EmailIcon from "../../public/email.svg";
import LinkedIn from "../../public/linkedin.svg";
import TwitterIcon from "../../public/twitter.svg";
import UpworkIcon from "../../public/upwork.svg";
import EmailSection from "./EmailSection";

type Props = {};

const Contact = (props: Props) => {
  const currentYear = new Date().getFullYear();
  return (
    <div id='contact' className='relative h-[450px] w-full mt-20'>
      <div className='hidden lg:flex rounded-full absolute -top-16 -left-16  bg-gradient-to-br from-blue-900 to-purple-[#581C87] h-52 w-52'></div>
      <div className='hidden lg:flex rounded-l-full  absolute -top-16 right-0 bg-gradient-to-br from-purple-900 to-blue-[#1E3A8A] h-52 w-32'></div>
      <div className='rounded-none lg:rounded-t-[8rem] min-h-full w-full bg-gradient-to-br from-blue-950 to-purple-900'>
        <h1 className='text-center text-4xl font-semibold pt-5'>Contact</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center mt-12'>
          <div className='px-4'>
            <h1 className='text-xl mb-2'>Drop Me a Message</h1>
            <p className='max-w-md text-slate-400'>
              I&apos;m currently looking for new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>
            <div className='flex items-center gap-2 mt-4 text-slate-200'>
              <Image
                className='rounded-lg shadow-inner px-3 py-2.5 box-content bg-blue-900'
                src={EmailIcon}
                width={25}
                height={25}
                alt='email'
              />
              <p>eyobabdellasharo@gmail.com</p>
            </div>
            <Link
              href='https://twitter.com/EyobAbdella1'
              className='flex items-center gap-2 mt-4 '>
              <Image
                className='rounded-lg shadow-inner p-3 box-content bg-blue-900'
                src={TwitterIcon}
                width={25}
                height={25}
                alt='email'
              />
              <p>Twitter</p>
            </Link>
            <Link
              href='https://www.upwork.com/freelancers/~0148e04c027a673878'
              className='flex items-center gap-2 mt-4 '>
              <Image
                className='rounded-lg shadow-inner p-3 box-content bg-blue-900'
                src={UpworkIcon}
                width={25}
                height={25}
                alt='email'
              />
              <p>Upwork</p>
            </Link>
            <Link
              href='https://www.linkedin.com/in/eyob-abdella-532554262'
              className='flex items-center gap-2 mt-4 '>
              <Image
                className='rounded-lg shadow-inner p-3 box-content bg-blue-900'
                src={LinkedIn}
                width={25}
                height={25}
                alt='email'
              />
              <p>LinkedIn</p>
            </Link>
          </div>
          <EmailSection />
        </div>
        <div className='border-t border-slate-400 pt-5 mt-14 px-4'>
          <div className='flex justify-between items-center'>
            <div className='text-2xl'>LOGO</div>
            <p className='text-sm md:mx-auto'>
              &copy; {currentYear} EyobTech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
