import React, { Component } from "react"
import {Link} from 'react-router-dom'
// Theme
import Theme from "../theme/Theme"
// UI components
import {AppBar, Grid, Toolbar} from '@material-ui/core'
// custom components
import AppLogo from "./AppLogo"
import AppMenu from "./AppMenu"

class PageFooter extends Component {
  render() {
    return (
        <AppBar component={'footer'} position={'relative'} color={'default'}>
            <Toolbar component={'nav'}>
              <Grid container 
                justify={'space-between'} 
                alignItems={'center'}
                style={{paddingBottom: 24, paddingTop: 24}}
              >
                <Grid item>
                  <AppMenu direction={'column'}/>
                </Grid>
                <Grid item>
                  <AppLogo height={40} width={40}/>
                </Grid>
              </Grid>
            </Toolbar>
        </AppBar>
    )
  }
}

export default PageFooter
