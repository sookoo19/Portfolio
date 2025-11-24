export interface DeatilProfileProps {
  title: string;
  des: string;
}

export default function DeatilProfile({ title, des }: DeatilProfileProps) {
  return (
    <div className='flex flex-col'>
      <p className='ml-10 text-3xl'>{title}</p>
      <p className='ml-10 text-xl leading-relaxed'>{des}</p>
    </div>
  );
}
