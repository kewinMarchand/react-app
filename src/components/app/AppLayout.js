import React, { Component } from "react"
import {BrowserRouter as Router} from 'react-router-dom'
// contexts
import { SnackbarProvider } from '../snackbars/SnackbarContext'
// Theme
import { ThemeProvider } from '@material-ui/styles'
import Theme from '../../theme/Theme'
// UI components
import {CssBaseline, Grid} from '@material-ui/core'
// custom components
import AppHeader from '../navigation/AppHeader'
import AppFooter from '../footer/AppFooter'
import CommonSnackbar from '../snackbars/CommonSnackbar'

class AppLayout extends Component {
    render() {
        return (
            <ThemeProvider theme={Theme}>
                    <CssBaseline/>
                    <Router>
                        <SnackbarProvider>
                            <AppHeader/>
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
                            <AppFooter/>
                            <CommonSnackbar/>
                        </SnackbarProvider>
                    </Router>
            </ThemeProvider>
        )
    }
}

export default AppLayout
