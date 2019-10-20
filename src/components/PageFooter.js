import React, { Component } from "react"
// UI components
import {AppBar, Grid, Toolbar} from '@material-ui/core'
// custom components
import AppLogo from "./AppLogo"

class PageFooter extends Component {
  render() {
    return (
        <AppBar component={'footer'} position={'relative'} >
            <Toolbar component={'nav'}>
              <Grid container
                direction={'column'}
                alignItems={'flex-end'} 
                justify={'flex-start'}
              >
                <AppLogo height={64} />
              </Grid>
            </Toolbar>
        </AppBar>
    )
  }
}

export default PageFooter
