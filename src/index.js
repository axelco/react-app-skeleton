import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Home from './Pages/Home';
import Error from './Pages/Error';

import ScrollTop from './Components/ScrollTop';

import './Styles/main.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollTop>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>           
          <Route path="/home">
            <Home />
          </Route>   
          <Route path="/error" >
            <Error />
          </Route>
          <Redirect to="/error" />           
        </Switch>      
      </ScrollTop>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
