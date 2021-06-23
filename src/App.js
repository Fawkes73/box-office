import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is home page
      </Route>
      <Route exact path="/started">
        This is starred
      </Route>
      <Route>Page not found 404</Route>
    </Switch>
  );
}

export default App;
