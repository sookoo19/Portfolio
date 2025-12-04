import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useTransform, useMotionValue } from 'motion/react';
import './index.css';
import Loading from './components/Loading';
import Intro from './pages/Intro';
import Work from './pages/Work';
import Profile from './pages/Profile';
import Skill from './pages/Skill';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const App = lazy(() => sleep(3500).then(() => import('./pages/App')));

export default function RootApp() {
  const { scrollYProgress } = useScroll();
  const gradientX = useMotionValue(0.5);
  const gradientY = useMotionValue(0.5);
  const background = useTransform([gradientX, gradientY], ([gx, gy]) => {
    const x = (gx as number) * 100;
    const y = (gy as number) * 100;

    // 回転効果を追加
    const angle = Math.atan2(y - 50, x - 50) * (180 / Math.PI);

    return `
        radial-gradient(
          ellipse 200% 200% 
          at ${x}% ${y}%,
          rgba(249, 150, 88, 1) 0%,
          rgba(255, 140, 66, 0.6) 25%,
          transparent 50%
        ),
        radial-gradient(
          ellipse 220% 220% 
          at ${100 - x}% ${100 - y}%,
          rgba(30, 144, 255, 1) 0%,
          rgba(30, 144, 255, 0.6) 25%,
          transparent 50%
        ),
        radial-gradient(
          ellipse 180% 180% 
          at ${x * 0.6 + 20}% ${y * 1.4}%,
          rgba(255, 69, 0, 0.9) 0%,
          rgba(255, 107, 53, 0.5) 20%,
          transparent 45%
        ),
        radial-gradient(
          ellipse 190% 190% 
          at ${x * 1.3}% ${y * 0.7}%,
          rgba(0, 102, 204, 0.9) 0%,
          rgba(65, 105, 225, 0.5) 20%,
          transparent 45%
        ),
        radial-gradient(
          ellipse 160% 160% 
          at ${x * 0.4}% ${100 - y * 0.6}%,
          rgba(255, 99, 71, 0.85) 0%,
          transparent 40%
        ),
        radial-gradient(
          ellipse 170% 170% 
          at ${100 - x * 0.5}% ${y * 0.8}%,
          rgba(30, 144, 255, 0.85) 0%,
          transparent 40%
        ),
        radial-gradient(
          ellipse 150% 150% 
          at ${50 + Math.cos((angle * Math.PI) / 180) * 30}% ${50 + Math.sin((angle * Math.PI) / 180) * 30}%,
          rgba(255, 140, 0, 0.7) 0%,
          transparent 35%
        ),
        radial-gradient(
          ellipse 160% 160% 
          at ${50 - Math.cos((angle * Math.PI) / 180) * 30}% ${50 - Math.sin((angle * Math.PI) / 180) * 30}%,
          rgba(70, 130, 180, 0.7) 0%,
          transparent 35%
        ),
        linear-gradient(to right, #FF8C42 0%, #FF6B35 25%, #1E90FF 50%, #4169E1 75%, #1E90FF 100%)
      `.replace(/\s+/g, ' ');
  });

  return (
    <>
      <motion.div
        id='scroll-indicator'
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          zIndex: 9999,
          opacity: 0.8,
          backgroundColor: '#f2f2f2',
        }}
      />
      <motion.div
        style={{ background }}
        onPointerMove={e => {
          gradientX.set(e.clientX / window.innerWidth);
          gradientY.set(e.clientY / window.innerHeight);
        }}
        className='space-y-20 md:space-y-40 pb-40'
      >
        <App />
        <div id='intro'>
          <Intro />
        </div>
        <div id='skill'>
          <Skill />
        </div>
        <div id='work'>
          <Work />
        </div>
        <div id='profile'>
          <Profile />
        </div>
      </motion.div>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <RootApp />
    </Suspense>
  </StrictMode>
);
