import React, { Component } from "react"
import {Route, Switch} from 'react-router-dom'
// pages
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/contact" component={Contact}/>
        <Route component={NotFound}/>
      </Switch>
    )
  }
}

export default Routes
