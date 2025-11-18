import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Loading from './components/Loading';
import Intro from './pages/Intro';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const App = lazy(() => sleep(3500).then(() => import('./pages/App')));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
      <Intro />
    </Suspense>
  </StrictMode>
);
