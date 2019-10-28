import React, { Component, Fragment } from "react"
// UI components
import {Grid, Typography} from '@material-ui/core'
// custom components
import Container from "../Container"

class PageHeader extends Component {
  render() {
    const {backgroundColor, backgroundImage, subtitle, title} = this.props
    return (
        <Container 
            backgroundColor={backgroundColor} 
            backgroundImage={backgroundImage}
            paddingBottom={64}
            paddingTop={64}
        >
            <Grid item
                component={'header'}
                style={{textAlign: 'center'}}
            >
                {undefined !== title && 
                <Typography variant={'h1'} gutterBottom>
                    {title}
                </Typography>
                }
                {undefined !== subtitle && 
                <Typography variant={'h2'} gutterBottom>
                    {subtitle}
                </Typography>
                }
            </Grid>
        </Container>
    )
  }
}

export default PageHeader
