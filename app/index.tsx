import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/core/Root';

render(
  <AppContainer>
      <Root/>
  </AppContainer>,
  document.getElementById('root')
);