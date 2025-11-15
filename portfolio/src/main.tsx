import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Loading from './components/Loading';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const App = lazy(() => 
  sleep(2000).then(() => import('./pages/App'))
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </StrictMode>
);
