import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import GnomeBrowser from './containers/GnomeBrowser/GnomeBrowser';
import GnomeDetail from './containers/GnomeDetail/GnomeDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/gnome/:id" component={GnomeDetail} />
          <Route path="/" component={GnomeBrowser} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
