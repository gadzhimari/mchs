import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Documents, Personal, Tutors, Contacts, News } from 'pages';

export default () => (
  <Switch>
    <Route path="/" exact>
      <Main />
    </Route>
    <Route path="/documents" exact>
      <Documents />
    </Route>
    <Route path="/personal" exact>
      <Personal />
    </Route>
    <Route path="/tutors" exact>
      <Tutors />
    </Route>
    <Route path="/contacts" exact>
      <Contacts />
    </Route>
    <Route path="/news" exact>
      <News />
    </Route>
  </Switch>
);
