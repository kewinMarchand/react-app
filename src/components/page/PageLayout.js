import React, { Component, Fragment } from "react"
// custom components
import Container from "../Container"
import GoBackBtn from "../buttons/GoBackBtn"
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
            <Container marginBottom={32} marginTop={32}>
              <Fragment>
                <GoBackBtn/>
                {this.props.children}
              </Fragment>
            </Container>
      </Fragment>
    )
  }
}

export default PageLayout
