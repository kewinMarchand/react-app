import React, { Component } from "react"
// UI components
import {AppBar, Toolbar} from '@material-ui/core'
// custom components
import AppLogo from "./AppLogo"

class PageHeader extends Component {
  render() {
    return (
        <AppBar position={'relative'}>
            <Toolbar component={'nav'}>
              <AppLogo height={40} />
            </Toolbar>
        </AppBar>
    )
  }
}

export default PageHeader
