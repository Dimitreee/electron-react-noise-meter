import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom"

import Routes from '../../routes';

export default function Root() {
  return (
      <Router>
        <Routes />
      </Router>
  );
}
