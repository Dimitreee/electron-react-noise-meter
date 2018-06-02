import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from '../containers/core/App';
import {HomeContainer} from "../containers/Home/HomeContainer";

export default () => (
  <App>
    <Switch>
      <Route path="/" component={HomeContainer} />
    </Switch>
  </App>
);
