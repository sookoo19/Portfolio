import { motion } from 'motion/react';
import { useState } from 'react';
import Logo from '../components/Logo';
import MoveIcon from '../components/MoveIcon';
import TripostModal from '../components/TripostModal';
import PortfolioModal from '../components/PortfolioModal';


export default function App() {
  const [openTripostModal, setOpenTripostModal] = useState(false);
  const [openPortfolioModal, setOpenPortfolioModal] = useState(false);
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeIn' }}
      className='relative px-8 py-10 h-full max-h-screen w-full max-w-full grid grid-cols-12 grid-rows-12 gap-x-4 gap-y-8 flex items-center justify-center'
    >
      {/* 背景のロゴ */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none'>
        <Logo />
      </div>

      {/* 既存のコンテンツ */}
      <div className='col-start-3 row-start-4 md:row-start-2 relative z-10'>
        <MoveIcon name='About me' src='/images/about-me.svg' scrollTo='intro' />
      </div>
      <div className='col-start-6 col-span-2 row-start-4 md:row-start-2 relative z-10'>
        <MoveIcon
          name='Skills'
          src='/images/skills-icon.svg'
          scrollTo='skill'
        />
      </div>
      <div className='col-start-3 row-start-9 md:row-start-11 relative z-10'>
        <MoveIcon
          name='Tripost'
          src='/images/tripost/icon-192.svg'
          onClick={() => setOpenTripostModal(true)}
        />
      </div>
      <div className='col-start-6 col-span-2 row-start-9 md:row-start-11 relative z-10'>
        <MoveIcon name='Works' src='/images/mywork-icon.svg' scrollTo='work' />
      </div>
      <div className='col-start-10 row-start-4 md:row-start-2 relative z-10'>
        <MoveIcon
          name='Profile'
          src='/images/profile-icon.svg'
          scrollTo='profile'
        />
      </div>
      <div className='col-start-10 row-start-9 md:row-start-11 relative z-10'>
        <MoveIcon
          name='This site'
          src='/images/this-page.svg'
          onClick={() => setOpenPortfolioModal(true)}
        />
      </div>

      {/* モーダル */}
      <TripostModal
        isOpen={openTripostModal}
        onClose={() => setOpenTripostModal(false)}
      />
      <PortfolioModal
        isOpen={openPortfolioModal}
        onClose={() => setOpenPortfolioModal(false)}
      />
    </motion.div>
  );
}
