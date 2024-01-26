type Props = {};

const EmailSection = (props: Props) => {
  return (
    <div className='space-y-3 flex flex-col items-center py-5 w-full px-4 max-w-md h-[400px] rounded-md bg-gradient-to-r from-[#1725548a] to-[#591c8780]'>
      <input
        className='p-2 bg-slate-950 outline-none rounded-md w-11/12'
        type='text'
        placeholder='Name'
      />
      <input
        className='p-2 bg-slate-950 outline-none rounded-md w-11/12'
        type='email'
        placeholder='Email'
      />
      <textarea
        className='p-2 h-full w-11/12 bg-slate-950 outline-none rounded-md'
        placeholder='Message'
      />
      <button className='py-3 rounded-lg bg-slate-950 w-11/12'>Send</button>
    </div>
  );
};

export default EmailSection;
