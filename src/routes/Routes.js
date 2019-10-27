import React, { Component } from "react"
import {Route, Switch} from 'react-router-dom'
// mobx & stores
import {inject, observer} from 'mobx-react'
// pages
import Home from '../pages/Home'
import Article from '../pages/Article'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

class Routes extends Component {

  getPosts = async () => {
    let apiKey = "https://jsonplaceholder.typicode.com/posts",
      response = await fetch(apiKey),
      posts = await response.json()

      this.props.stores.uiStore.posts = posts
  }

  componentDidMount() {
    this.getPosts()
  }

  render() {

    const { posts } = this.props.stores.uiStore

    if (null === posts || undefined === posts) {
      return false
    }
    
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/article/:id" component={Article}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/contact" component={Contact}/>
        <Route component={NotFound}/>
      </Switch>
    )
  }
}

export default inject('stores')(observer(Routes))
