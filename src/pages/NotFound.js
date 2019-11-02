import React, { Component } from "react"
// custom components
import PageLayout from '../components/page/PageLayout'

class NotFound extends Component {
  render() {
    return (
        <PageLayout
            title={'Oups !'}
            subtitle={'La page que vous recherchez n\'existe pas'}
        >
        </PageLayout>
    )
  }
}

export default NotFound
