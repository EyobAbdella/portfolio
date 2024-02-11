type Props = {};

const EmailSection = (props: Props) => {
  return (
    <div className='row-start-1 md:row-auto space-y-3 flex flex-col items-center py-5 w-full px-4 max-w-[500px] md:max-w-md h-[400px] rounded-md md:bg-gradient-to-r from-[#1725548a] to-[#591c8780]'>
      <input
        className='p-2.5 bg-slate-950 outline-none rounded-md w-full md:w-11/12'
        type='text'
        placeholder='Name'
      />
      <input
        className='p-2.5 bg-slate-950 outline-none rounded-md w-full md:w-11/12'
        type='email'
        placeholder='Email'
      />
      <textarea
        className='p-2.5 h-full w-full md:w-11/12 bg-slate-950 outline-none rounded-md'
        placeholder='Message'
      />
      <button className='py-3 rounded-lg bg-slate-950 w-full md:w-11/12 hover:bg-[#020617d0]'>
        Send
      </button>
    </div>
  );
};

export default EmailSection;
