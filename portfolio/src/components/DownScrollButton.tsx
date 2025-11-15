import { CiCircleChevDown } from "react-icons/ci";
import { motion } from 'motion/react';
import { useState } from 'react';

export interface DownScrollButtonProps {
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Optional click handler */
  onClick?: () => void;
}

export default function DownScrollButton({
  size = 'medium',
  ...props
}: DownScrollButtonProps){
  const [isHovering, setIsHovering] = useState(false);
  const iconSize = size === 'small' ? 16 : size === 'large' ? 64 : 32;

  return (
    <motion.button
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
        aria-label='Scroll down'
    >
      <motion.div
        animate={{ color: isHovering ? '#292929ff' : '#c7c7c7ff' }}
        transition={{ duration: 0.2 }}
      >
        <CiCircleChevDown size={iconSize} {...props} />
      </motion.div>
    </motion.button>
  )
}