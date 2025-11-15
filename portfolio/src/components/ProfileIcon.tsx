import { useState } from 'react';
import { motion } from 'motion/react';

export interface ProfileIconProps {
  name?: string;
  className?: string;
}

function bounceEase(x: number) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
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
        animate={
          isHovering
            ? { scale: 1.2, y: 0 }
            : undefined
        }
        whileInView={
          !isHovering
            ? {
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
              }
            : undefined
        }
        transition={
          !isHovering
            ? {
                duration: 0.8,
                delay: 2,
                ease: ['easeOut', bounceEase],
                times: [0, 0.4, 1],
                repeat: Infinity,
                repeatDelay: 4,
              }
            : { duration: 0.2 }
        }
        viewport={{ once: false, amount: 0.6 }}
        whileTap={{ scale: 0.8, rotate: 5 }}
      >
        <img
          src='/images/Profile.jpg'
          alt={name ? '' : 'Profile'}
          width={64}
          height={64}
          className='w-16 h-16 object-cover rounded-sm'
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
