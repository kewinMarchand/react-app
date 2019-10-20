import React, { Component } from "react"
// Theme
import Theme from "../theme/Theme"
// custom components
import PageLayout from '../components/page/PageLayout'

class Blog extends Component {
  render() {
    return (
        <PageLayout
            backgroundColor={Theme.palette.primary.main}
            title={'Blog'}
            subtitle={'Dernières actualités'}
        >
        </PageLayout>
    )
  }
}

export default Blog
