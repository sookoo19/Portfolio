export interface AnotherSkillSheetProps {
  name?: string;
  dis?: string;
  src?: string;
  className?: string;
}

export default function AnotherSkillSheet({
  name,
  dis,
  src,
  className = '',
}: AnotherSkillSheetProps) {
  return (
    <div className={`flex flex-row items-center justify-center ${className}`}>
      {src && <img src={src} alt={name} className='h-10 w-10 mr-2' />}
      <div className='flex flex-col'>
        <figcaption className='text-xl text-[#f2f2f2] text-left select-none'>
          {name}
        </figcaption>
        <div className='text-sm text-[#f2f2f2] text-left'>{dis}</div>
      </div>
    </div>
  );
}
