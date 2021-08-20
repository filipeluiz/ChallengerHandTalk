import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './components/AppWrapper';
import Home from './pages/Home';
import Cut from './pages/Cut'
import Visualization from './pages/Visualization';
import { routes } from './routes';
// import fs from 'fs'

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper>
      <Home path={routes.home} />
      <Cut path={routes.cut} />
      <Visualization path={routes.visualization} />
      <></>
    </AppWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
