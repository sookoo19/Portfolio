export interface DeatilProfileProps {
  title: string;
  des: string;
}

export default function DeatilProfile({ title, des }: DeatilProfileProps) {
  return (
    <div className='flex flex-col'>
      <p className='ml-10 text-xl md:text-3xl font-bold leading-normal underline md:underline-offset-8 decoration-3 md:decoration-5 decoration-[#f2f2f2]'>
        {title}
      </p>
      <p className='ml-10 mt-2 text-base md:text-xl leading-relaxed'>{des}</p>
    </div>
  );
}
