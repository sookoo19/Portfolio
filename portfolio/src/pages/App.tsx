import { motion } from 'motion/react';
import Logo from '../components/Logo';
import FileIcon from '../components/FileIcon';
import ProfileIcon from '../components/ProfileIcon';
import DownScrollButton from '../components/DownScrollButton';

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeIn' }}
      className='p-4 min-h-screen max-h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center'
    >
      <div className='w-full max-w-full grid grid-cols-12 grid-rows-7 gap-4'>
        <div className='col-start-6 col-span-2 row-start-3 row-span-2 flex items-center justify-center'>
          <Logo />
        </div>
        <div className='col-start-1 row-start-1'>
          <FileIcon name='テスト' />
        </div>
        <div className='col-start-1 row-start-2'>
          <ProfileIcon name='Profile' />
        </div>
        <div className='col-start-6 col-span-2 row-start-6 row-span-2 flex items-center justify-center'>
          <DownScrollButton size='large' />
        </div>
      </div>
    </motion.div>
  );
}
