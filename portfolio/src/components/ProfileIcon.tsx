import { useState } from 'react';
import { motion } from 'motion/react';

export interface ProfileIconProps {
  name?: string;
  className?: string;
}
export default function ProfileIcon({
  name,
  className = '',
}: ProfileIconProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <figure className={`flex flex-col items-center gap-2 ${className}`}>
      <motion.button
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
        whileTap={{ scale: 0.8, rotate: 5 }}
        whileHover={{ scale: 1.2 }}
        whileInView={
          !isHovering
            ? {
                y: [0, -14, 0],
                scale: [1, 1.2, 1],
                transition: {
                  duration: 0.3,
                  delay: 2,
                  ease: 'easeIn',
                  repeat: Infinity,
                  repeatDelay: 3,
                },
              }
            : undefined
        }
        viewport={{ once: false, amount: 0.6 }}
      >
        <img
          src='/images/Profile.jpg'
          alt={name ? '' : 'Profile'}
          width={64}
          height={64}
          className='w-16 h-16 object-cover'
        />

        {name && (
          <figcaption
            className='text-sm text-white select-none mt-3'
            style={{ textShadow: '0 2px 6px rgba(23, 23, 23, 0.6)' }}
          >
            {name}
          </figcaption>
        )}
      </motion.button>
    </figure>
  );
}
