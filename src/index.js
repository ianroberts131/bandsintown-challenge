import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import NotFound from './components/notFound/NotFound';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exactly pattern="/:band" component={ App }/>
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();
