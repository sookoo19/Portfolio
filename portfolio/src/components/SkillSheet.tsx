import { IoStar } from "react-icons/io5";

export interface SkillSheetProps {
  name?: string;
  level?: number; // 1-5のスキルレベル
  size?: number;
  className?: string;
}

export default function SkillSheet({
  name,
  level = 0,
  size = 32,
  className = '',
}: SkillSheetProps) {
  const maxStars = 5;

  return (
    <figure className={`flex flex-row items-center ${className}`}>
      <figcaption className='mr-10 text-xl text-black select-none'>
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
    </figure>
  );
}
