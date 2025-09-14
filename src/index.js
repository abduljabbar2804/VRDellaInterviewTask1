import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Main from './Main';
import Sidebar from './Components/Sidebar';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>

    <Main/>
  </StrictMode>
);
