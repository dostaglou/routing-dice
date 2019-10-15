import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// Custom Components Below:

import Header from './Header';
import Home from './Home';
import History from './History';
import Options from './Options';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8 bg-light mt-5">
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              component={ Home }
            />
            <Route
              path="/history"
              component={ History }
            />
            <Route
              path="/options"
              component={ Options }
            />
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App
