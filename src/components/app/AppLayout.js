import React, { Component } from "react"
// mobx & stores
import { Provider } from 'mobx-react'
import { RootStore } from '../../stores/RootStore'
// router
import { BrowserRouter as Router } from 'react-router-dom'
// Theme
import { ThemeProvider } from '@material-ui/styles'
import Theme from '../../theme/Theme'
// UI components
import { CssBaseline, Grid } from '@material-ui/core'
// custom components
import AppHeader from '../navigation/AppHeader'
import AppFooter from '../footer/AppFooter'
import CommonSnackbar from '../snackbar/CommonSnackbar'

class AppLayout extends Component {

    render() {
        return (
            <Provider stores={new RootStore()}>
                <ThemeProvider theme={Theme}>
                    <CssBaseline/>
                    <Router>
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
                    </Router>
                </ThemeProvider>
            </Provider>
        )
    }
}

export default AppLayout
