import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Login from './Layout/Login'; // Our custom react component
import Dashboard from './Layout/Dashboard'; // Our custom react component
import Main from './Main';
import {Router, Route, IndexRoute, hashHistory} from "react-router";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the Login app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
  <Router history = {hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Login}></IndexRoute>
      <Route path="dashboard" component={Dashboard}></Route>
    </Route>
  </Router>,
  document.getElementById('app'));

