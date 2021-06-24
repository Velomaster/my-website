import React from 'react';
import PageLayout from './Containers/PageLayout/PageLayout';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.css';

function App() {

  return (
    <Router >
      <div className="App">
        <Switch>
          <Route path="/" exact component={PageLayout} />
          <Route path="/" component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
