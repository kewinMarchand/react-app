import React, { Component } from "react"
import {BrowserRouter as Router} from 'react-router-dom'
// Theme
import { ThemeProvider } from '@material-ui/styles'
import Theme from '../theme/Theme'
// UI components
import {CssBaseline, Grid} from '@material-ui/core'
// custom components
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'

class AppLayout extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <CssBaseline/>
        <Router>
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
        </Router>
      </ThemeProvider>
    )
  }
}

export default AppLayout
