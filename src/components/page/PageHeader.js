import React, { Component, Fragment } from "react"
// UI components
import {Grid, Typography} from '@material-ui/core'
// custom components
import Container from "../Container"
import Ssr from '../ssr/Ssr'

class PageHeader extends Component {
    render() {
        const {backgroundColor, backgroundImage, subtitle, title} = this.props
        return (
            <Fragment>
                <Ssr
                    backgroundColor={backgroundColor} 
                    backgroundImage={backgroundImage}
                    title={title}
                    subtitle={subtitle}
                />
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
                        <Typography variant={'h2'} gutterBottom style={{maxWidth: 600}}>
                            {subtitle}
                        </Typography>
                        }
                    </Grid>
                </Container>
            </Fragment>
        )
  }
}

export default PageHeader
