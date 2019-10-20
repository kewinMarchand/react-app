import React, { Component } from "react"
// Theme
import Theme from "../theme/Theme"
// custom components
import PageLayout from '../components/page/PageLayout'

class Contact extends Component {
  render() {
    return (
        <PageLayout
            backgroundColor={Theme.palette.secondary.main}
            title={'Contact'}
            subtitle={'Entrons en contact'}
        >
        </PageLayout>
    )
  }
}

export default Contact
