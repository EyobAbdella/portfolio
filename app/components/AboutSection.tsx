import Image from "next/image";
import Profile from "../../public/profile.jpg";
import Download from "../../public/download.svg";
type Props = {};

const AboutSection = (props: Props) => {
  return (
    <div className='flex flex-wrap gap-20 md:space-y-0l space-y-40l py-5'>
      <div className='relative h-full mx-auto'>
        <Image
          className='rounded-lg'
          height={440}
          src={Profile}
          alt='profile'
        />
        <div className='absolute top-24 left-6 rounded-lg border-[12px] border-cyan-400 h-96 w-80 -z-50'></div>
      </div>

      <div className='max-w-md mx-auto'>
        <h1 className='text-3xl font-semibold text-center mb-3 '>ABOUT ME</h1>
        <p className='px-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          inventore ipsa aliquam explicabo perferendis libero aut. Atque iusto
          ad rerum! Consectetur eius optio ex ipsa quae rerum praesentium soluta
          officia exercitationem neque pariatur quis laboriosam libero quos
          dolorem inventore cupiditate, quam minima tenetur quidem, esse ut. Ab
          voluptatibus veniam animi exercitationem! Blanditiis repudiandae atque
          quas omnis! Nostrum ipsum eveniet quia quas officia nemo placeat
          libero quam nobis tenetur laudantium minus debitis numquam
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10'>
          <button className='mx-auto text-xl font-semibold w-48 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500'>
            HIRE ME
          </button>
          <button className='mx-auto flex items-center justify-center text-xl font-semibold w-48 py-2.5 rounded-lg border border-blue-500'>
            <Image src={Download} width={40} height={50} alt='download' />
            <p>RESUME</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
