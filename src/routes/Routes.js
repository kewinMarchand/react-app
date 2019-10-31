import React, { Component } from "react"
import {Route, Switch} from 'react-router-dom'
// mobx & stores
import {inject, observer} from 'mobx-react'
// api
import { endpoint } from '../api/apiKey'
// pages
import Home from '../pages/Home'
import Article from '../pages/Article'
import Blog from '../pages/Blog'
import User from '../pages/User'
import Users from '../pages/Users'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

class Routes extends Component {

  getPosts = async () => {
    let response = await fetch(endpoint + 'posts'),
      posts = await response.json()

      this.props.stores.uiStore.posts = posts
  }

  getUsers = async () => {
    let response = await fetch(endpoint + 'users'),
      users = await response.json()
      this.props.stores.uiStore.users = users
  }

  dataIsReady = (data) => {
    return null !== data && undefined !== data
  }

  componentDidMount() {
    this.getPosts()
    this.getUsers()
  }

  render() {

    const { posts, users } = this.props.stores.uiStore

    if (!this.dataIsReady(posts) || !this.dataIsReady(users)) {
      return false
    }
    
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/article/:id" component={Article}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/utilisateur/:id" component={User}/>
        <Route exact path="/utilisateurs" component={Users}/>
        <Route exact path="/contact" component={Contact}/>
        <Route component={NotFound}/>
      </Switch>
    )
  }
}

export default inject('stores')(observer(Routes))
