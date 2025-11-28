import { IoStar } from 'react-icons/io5';
import { motion } from 'framer-motion';

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
            <motion.div
              key={index}
              className='relative'
              initial={{ color: '#D1D5DB' }}
              whileInView={{
                color: index < level ? '#ffd900ff' : '#D1D5DB',
                scale: index < level ? [1, 1.3, 1] : 1,
              }}
              viewport={{ once: true, amount: 1 }}
              transition={{
                delay: index * 0.1 + 0.5,
                duration: 0.4,
                ease: 'easeOut',
              }}
            >
              <IoStar size={size} aria-hidden />
              {index < level && (
                <>
                  {[...Array(4)].map((_, sparkIndex) => (
                    <motion.div
                      key={sparkIndex}
                      className='absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-400 rounded-full'
                      initial={{
                        x: 0,
                        y: 0,
                        opacity: 0,
                        scale: 0,
                      }}
                      whileInView={{
                        x: Math.cos((sparkIndex * Math.PI) / 2) * 15,
                        y: Math.sin((sparkIndex * Math.PI) / 2) * 15,
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      viewport={{ once: true, amount: 1 }}
                      transition={{
                        delay: index * 0.1 + 0.2 + 0.5,
                        duration: 0.5,
                        ease: 'easeOut',
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
