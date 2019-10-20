import React, { Component } from "react"
// UI components
import {Grid, Typography} from '@material-ui/core'

class PageLayout extends Component {
  render() {
    const {subtitle, title} = this.props
    return (
        <Grid container 
            direction={'column'} 
            alignItems={'center'} 
            justify={'flex-start'}
            style={{paddingBottom: 32, paddingTop: 32}}
        >
            <Grid item xs={12} 
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
            {this.props.children}
        </Grid>
    )
  }
}

export default PageLayout
