import { IoStar } from 'react-icons/io5';

export interface SkillSheetProps {
  name?: string;
  src?: string;
  level?: number; // 1-5のスキルレベル
  size?: number;
  className?: string;
}

export default function SkillSheet({
  name,
  src,
  level = 0,
  size = 20,
  className = '',
}: SkillSheetProps) {
  const maxStars = 5;

  return (
    <div className={`flex flex-row items-center justify-center ${className}`}>
      {src && <img src={src} alt={name} className='h-10 w-10 mr-2' />}
      <div className='flex flex-col'>
        <figcaption className='text-xl text-black text-left select-none'>
          {name}
        </figcaption>
        <div className='flex flex-row'>
          {[...Array(maxStars)].map((_, index) => (
            <IoStar
              key={index}
              size={size}
              color={index < level ? '#ffd900ff' : '#D1D5DB'}
              aria-hidden
            />
          ))}
        </div>
      </div>
    </div>
  );
}
