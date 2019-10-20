import React, { Component, Fragment } from "react"
// Theme
import { ThemeProvider } from '@material-ui/styles';
import {Theme} from '../theme/Theme'
// UI components
import {CssBaseline, Grid} from '@material-ui/core'
// custom components
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'

class AppLayout extends Component {
  render() {
    return (
      <Fragment>
        <ThemeProvider theme={Theme}>
          <CssBaseline/>
          <PageHeader/>
          <Grid container
              className="App"
              component={'main'}
              direction={'column'} 
              alignItems={'center'} 
              justify={'flex-start'}
              style={{flexGrow: 1}}
          >       
              {this.props.children}
          </Grid>
          <PageFooter/>
        </ThemeProvider>
      </Fragment>
    )
  }
}

export default AppLayout
