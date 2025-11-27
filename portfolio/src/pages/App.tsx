import { motion } from 'motion/react';
import Logo from '../components/Logo';
import FileIcon from '../components/FileIcon';
import MoveIcon from '../components/MoveIcon';
import DownScrollButton from '../components/DownScrollButton';

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeIn' }}
      className='px-8 py-10 h-full max-h-screen w-full max-w-full grid grid-cols-12 grid-rows-12 gap-x-4 gap-y-8 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center'
    >
        <div className='col-start-6 col-span-2 row-start-6 row-span-2 flex items-center justify-center'>
          <Logo />
        </div>
        <div className='col-start-2 row-start-1'>
          <FileIcon name='File' />
        </div>
        <div className='col-start-2 row-start-3'>
          <MoveIcon name='About me' src='/images/Profile.jpg' />
        </div>
        <div className='col-start-2 row-start-5'>
          <MoveIcon name='Skills' src='/images/skills-icon.svg' />
        </div>
        <div className='col-start-2 row-start-7'>
          <MoveIcon name='Tripost' src='/images/tripost/icon-192.svg' />
        </div>
        <div className='col-start-2 row-start-9'>
          <MoveIcon name='Works' src='/images/mywork-icon.svg' />
        </div>
        <div className='col-start-2 row-start-11'>
          <MoveIcon name='Profile' src='/images/profile-icon.jpg' />
        </div>
        <div className='col-start-6 col-span-2 row-start-11 row-span-2 flex items-center justify-center'>
          <DownScrollButton size='large' />
        </div>
    </motion.div>
  );
}
