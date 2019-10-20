import React, { Component, Fragment } from "react"
// UI components
import {Grid, Typography} from '@material-ui/core'
// custom components
import Container from "../Container"
import PageHeader from "./PageHeader"

class PageLayout extends Component {
  render() {
    const {backgroundColor, backgroundImage, subtitle, title} = this.props
    return (
        <Fragment>
            <PageHeader
                backgroundColor={backgroundColor}
                backgroundImage={backgroundImage}
                subtitle={subtitle}
                title={title}
            />
            <Container marginTop={24}>
                {this.props.children}
            </Container>
      </Fragment>
    )
  }
}

export default PageLayout
