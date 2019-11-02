import React, { Component } from "react"
import {NavLink} from 'react-router-dom'
// Theme
import Theme from "../../theme/Theme"
// UI components
import {Grid, Typography} from '@material-ui/core'

const MenuLink = props => {
    return (
        <Grid item>
            <NavLink 
                to = {props.to}
                style = {{
                    color: Theme.palette.secondary.main,
                    textDecoration: 'none'
                }}
                activeStyle={{
                    fontWeight: "bold",
                    color: Theme.palette.primary.main
                }}
            >
                <Typography>{props.text}</Typography>
            </NavLink>
        </Grid>
    )
}

class AppMenu extends Component {
    render() {
        const { direction } = this.props,
            menuDirection = direction ? direction : ''
        return (
            <Grid container spacing={1} direction={this.props.direction}>
                <MenuLink
                    to={'/blog'}
                    text={'Blog'}
                />
                <MenuLink
                    to={'/utilisateurs'}
                    text={'Utilisateurs'}
                />
                <MenuLink
                    to={'/contact'}
                    text={'Contact'}
                />             
            </Grid>
        )
    }
}

export default AppMenu
