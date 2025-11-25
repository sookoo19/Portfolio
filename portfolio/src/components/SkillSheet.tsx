import { FaStar } from "react-icons/fa";

export interface SkillSheetProps {
  name?: string;
  level?: number; // 1-5のスキルレベル
  className?: string;
}

export default function SkillSheet({ name, level = 0, className = '' }: SkillSheetProps) {
  const maxStars = 5;
  
  return (
    <figure className={`flex flex-row items-center ${className}`}>
      <figcaption className='mr-10 text-xl text-black select-none'>
        {name}
      </figcaption>
      <div className='flex flex-row gap-1'>
        {[...Array(maxStars)].map((_, index) => (
          <FaStar
            key={index}
            size={32}
            color={index < level ? '#fff200ff' : '#D1D5DB'}
            aria-hidden
          />
        ))}
      </div>
    </figure>
  );
}
