import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from 'pages';

export default () => (
  <Switch>
    <Route path="/" exact>
      <Main />
    </Route>
  </Switch>
);
