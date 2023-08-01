


import React from 'react'
import { createRoot } from 'react-dom/client';

import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// const root = createRoot(document.getElementById('root'));

render(
    <BrowserRouter>
      <App>
      </App>
    </BrowserRouter>,
    document.getElementById('root')
      );