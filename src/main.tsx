import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import setupScrollAnimation from './utils/animateOnScroll.ts';

// Create root
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Setup scroll animations after the app has rendered
setupScrollAnimation();