import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import Logo from '../components/Logo';
import MoveIcon from '../components/MoveIcon';
import TripostModal from '../components/TripostModal';
import PortfolioModal from '../components/PortfolioModal';

//要素のサイズと位置を測定する
function useElementDimensions(
  ref: React.RefObject<HTMLDivElement | null>
): [
  { width: number; height: number; top: number; left: number },
  VoidFunction
] {
  const [size, setSize] = useState({ width: 0, height: 0, top: 0, left: 0 });

  function measure() {
    if (!ref.current) return;
    //ブラウザのAPIで、要素の位置とサイズを取得
    setSize(ref.current.getBoundingClientRect());
  }

  // Note: This won't accurately reflect viewport size changes
  useEffect(() => {
    measure();
  }, []);

  //measure画面サイズが変わった時に再測定する関数
  return [size, measure];
}

export default function App() {
  const [openTripostModal, setOpenTripostModal] = useState(false);
  const [openPortfolioModal, setOpenPortfolioModal] = useState(false);
  
  const ref = useRef<HTMLDivElement>(null);
  const [{ width, height}, measure] = useElementDimensions(ref);
  const gradientX = useMotionValue(0.5);
  const gradientY = useMotionValue(0.5);
  
  const background = useTransform(
    [gradientX, gradientY],
    ([gx, gy]) => {
      const x = (gx as number) * 100;
      const y = (gy as number) * 100;
      
      return `
        radial-gradient(
          ellipse 100% 100% 
          at ${x}% ${y}%,
          rgba(255, 140, 66, 0.8) 0%,
          transparent 50%
        ),
        radial-gradient(
          ellipse 120% 120% 
          at ${100 - x}% ${100 - y}%,
          rgba(30, 144, 255, 0.8) 0%,
          transparent 50%
        ),
        radial-gradient(
          ellipse 80% 80% 
          at ${x * 0.7}% ${y * 1.3}%,
          rgba(255, 107, 53, 0.6) 0%,
          transparent 40%
        ),
        radial-gradient(
          ellipse 90% 90% 
          at ${x * 1.2}% ${y * 0.8}%,
          rgba(0, 102, 204, 0.6) 0%,
          transparent 40%
        ),
        linear-gradient(135deg, #FF8C42 0%, #1E90FF 100%)
      `.replace(/\s+/g, ' ');
    }
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeIn' }}
      style={{ background }}
      className='relative px-8 py-10 h-full max-h-screen w-full max-w-full grid grid-cols-12 grid-rows-12 gap-x-4 gap-y-8 flex items-center justify-center'
      onPointerMove={(e) => {
        gradientX.set(e.clientX / width);
        gradientY.set(e.clientY / height);
      }}
      onPointerEnter={() => measure()}
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
