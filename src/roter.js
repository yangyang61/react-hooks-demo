import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from "./pages/app";
import Login from "./pages/login"
import Home from "./pages/home";
import NoMatch from "./pages/noMatch";
export default function IRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  )
}
