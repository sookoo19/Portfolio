export interface DeatilProfileProps {
  title: string;
  des: string;
}

export default function DeatilProfile({ title, des }: DeatilProfileProps) {
  return (
    <div className='flex flex-col'>
      <p className='ml-10 text-3xl font-bold leading-normal underline underline-offset-8 decoration-6 decoration-blue-500'>{title}</p>
      <p className='ml-10 mt-2 text-xl leading-relaxed'>{des}</p>
    </div>
  );
}
