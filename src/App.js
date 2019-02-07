import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import GnomeBrowser from './containers/GnomeBrowser/GnomeBrowser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={GnomeBrowser} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
