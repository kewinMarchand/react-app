import React, { Component } from "react"
// UI components
import {AppBar, Grid, Toolbar} from '@material-ui/core'
// custom components
import AppLogo from "./AppLogo"
import AppMenu from "./AppMenu"

class PageHeader extends Component {
  render() {
    return (
      <AppBar position={'relative'} color={'default'}>
          <Toolbar component={'nav'}>
            <Grid container justify={'space-between'} alignItems={'center'}>
              <Grid item>
                <AppLogo height={40} width={40}/>
              </Grid>
              <Grid item>
                <AppMenu/>
              </Grid>
            </Grid>
          </Toolbar>
      </AppBar>
    )
  }
}

export default PageHeader
