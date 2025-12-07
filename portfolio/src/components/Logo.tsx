import { motion } from 'motion/react';

export function Logo() {
  return (
    <motion.div
      className='flex items-center justify-center'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src='/images/logo.svg'
        className='w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[30rem] lg:h-[30rem]'
      />
    </motion.div>
  );
}

export default Logo;
