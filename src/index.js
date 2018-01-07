import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import InvalidURL from './components/invalidURL/InvalidURL';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/:band" component={ App }/>
          <Route component={ InvalidURL } />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();
