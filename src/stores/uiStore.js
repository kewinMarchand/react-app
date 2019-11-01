// mobx & stores
import { action, decorate, observable } from "mobx"

class uiStore {

    authenticated = false

    posts = null

    users = null

    comments = null

    authenticate = () => {
        this.authenticated = true
    }

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
    posts: observable,
    users: observable,
    comments: observable,
    authenticate: action
})

export default uiStore