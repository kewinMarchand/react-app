import React, { Component } from "react"
import { Route, Switch } from 'react-router-dom'
// mobx & stores
import { inject, observer } from 'mobx-react'
// pages
import Home from '../pages/Home'
import Article from '../pages/Article'
import Blog from '../pages/Blog'
import User from '../pages/User'
import Users from '../pages/Users'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
// components
import Loader from '../components/loader/Loader'

class Routes extends Component {

    componentDidMount() {
        const { storeComments, storePosts, storeUsers } = this.props.stores.uiStore
        storePosts()
        storeComments()
        storeUsers()
    }

    dataIsReady = (data) => {
        return null !== data && undefined !== data
    }

    render() {
        const { comments, posts, users } = this.props.stores.uiStore,
        datasWasReady = this.dataIsReady(comments) && this.dataIsReady(posts) && this.dataIsReady(users)

        if (!datasWasReady) 
            return <Loader/>  
        
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
