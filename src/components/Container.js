import React, { Component, Fragment } from "react"
// Theme
import Theme from "../theme/Theme"
// UI components
import {Grid, Typography} from '@material-ui/core'

class Container extends Component {
  render() {
      const { backgroundColor, backgroundImage, marginTop } = this.props,
        containerBackgroundColor = undefined !== backgroundColor ? backgroundColor : '',
        containerBackgroundImage = undefined !== backgroundImage ? 'url('+backgroundImage+')' : '',
        containerMarginTop = undefined !== marginTop ? marginTop : 0,
        hasBackground = '' !== containerBackgroundColor || '' !==  containerBackgroundImage,
        color = hasBackground ? Theme.palette.textLight : 'inherit'
    return (
        <Grid container
            style={{
                backgroundColor: containerBackgroundColor,
                backgroundImage: containerBackgroundImage,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                color: color,
                marginTop: containerMarginTop
            }}
        >
            <Grid container 
                style={{
                    margin: 'auto',
                    marginBottom: 0,
                    marginTop: 0,
                    maxWidth: '90%',
                    width: 1440
                }}
            >
                <Grid container 
                    direction={'column'} 
                    alignItems={'center'} 
                    justify={'flex-start'}
                >
                    <Fragment>
                        {this.props.children}
                    </Fragment>
                </Grid>
            </Grid>
      </Grid>
    )
  }
}

export default Container
