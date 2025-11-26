import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll } from "motion/react"
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
  
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          zIndex: 9999,
          opacity: 0.8,
          backgroundColor: "#ff0088",
        }}
      />
      <App />
      <Intro />
      <Skill />
      <Work />
      <Profile />
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
