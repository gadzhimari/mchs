import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Documents } from 'pages';

export default () => (
  <Switch>
    <Route path="/" exact>
      <Main />
    </Route>
    <Route path="/documents" exact>
      <Documents />
    </Route>
  </Switch>
);
