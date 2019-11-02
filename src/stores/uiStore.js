// mobx & stores
import { action, decorate, observable, computed } from "mobx"
// api
import { endpoint } from '../api/apiKey'

class uiStore {

    // observables

    authenticated = false

    comments = null

    posts = null

    users = null


    
    // actions

    authenticate = () => {
        this.authenticated = true
    }

    storeComments = async () => {
        let response = await fetch(endpoint + 'comments'),
        comments = await response.json()

        this.comments = comments
    }

    storePosts = async () => {
        let response = await fetch(endpoint + 'posts'),
        posts = await response.json()

        this.posts = posts
    }

    storeUsers = async () => {
        let response = await fetch(endpoint + 'users'),
        users = await response.json()
        this.users = users
    }



    // utils

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    
    getPost = (id) => {
        return this.posts.find(post => parseInt(post.id) === parseInt(id))
    }

    getPostsByAuthor = (id) => {   
        const postsArray = Object.keys(this.posts).map(key => this.posts[key])
        return postsArray.filter(post => parseInt(post.userId) === parseInt(id))
    }

    getPostAuthor = (userId) => {
        return this.users.find(user => parseInt(user.id) === parseInt(userId))
    }

    getPostComments = (postId) => {
        return this.comments.filter(comment => parseInt(comment.postId) === parseInt(postId))
    }

    getUser = (id) => {
        return this.users.find(user => parseInt(user.id) === parseInt(id))
    }

}

decorate(uiStore, {
    authenticated: observable,
    comments: observable,
    posts: observable,
    users: observable,

    authenticate: action,
    storeComments: action,
    storePosts: action,
    storeUsers: action
})

export default uiStore