import React, { Component } from "react"
// UI components
import {Grid, Typography} from '@material-ui/core'

class PageLayout extends Component {
  render() {
    return (
        <Grid container 
            direction={'column'} 
            alignItems={'center'} 
            justify={'flex-start'}
            style={{paddingBottom: 16, paddingTop: 16}}
        >
            <Grid item xs={12} component={'header'}>
                <Typography variant={'h1'}>{this.props.title}</Typography>
            </Grid>
            {this.props.children}
        </Grid>
    )
  }
}

export default PageLayout
