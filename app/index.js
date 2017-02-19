import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './components/App';
import NativeElements from './components/NativeElements';
import ReactElements from './components/ReactElements';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
      <Route path='native-elements' component={NativeElements} />
      <Route path='react-elements' component={ReactElements} />
  </Router>,
  document.getElementById('app')
);
