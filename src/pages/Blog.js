import React, { Component } from "react"
// custom components
import PageLayout from '../components/PageLayout'

class Blog extends Component {
  render() {
    return (
        <PageLayout 
            title={'Blog'}
            subtitle={'Dernières actualités'}
        >
        </PageLayout>
    )
  }
}

export default Blog
