import React, { Component } from "react"
// history
import { withRouter } from 'react-router-dom'
// mobx & stores
import {inject, observer} from 'mobx-react'
// Theme
import Theme from "../theme/Theme"
// UI components
import {Button, Card, CardActions, CardContent, CardHeader, Grid, Typography} from '@material-ui/core'
// custom components
import PageLayout from '../components/page/PageLayout'

class Users extends Component {

  render() {
    const { history, stores } = this.props,
        { capitalize, users } = stores.uiStore

    return (
        <PageLayout
            backgroundColor={Theme.palette.secondary.main}
            title={'Utilisateurs'}
            subtitle={'Notre communauté'}
        >
        <Grid container spacing={4}>
          {users.map((user, i) => (
            <Grid item xs={12} md={6} lg={4} key={'post' + i}>
              <Card style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                <CardHeader 
                    title={capitalize(user.name)}
                    subheader={capitalize(user.username)}
                />
                <CardContent style={{flexGrow: 1}}>
                    <Grid container direction={'column'} alignItems={'flex-end'}>
                        <Typography gutterBottom>
                            {user.email}
                        </Typography>
                        <Typography gutterBottom>
                            {user.phone}
                        </Typography>
                        <Typography gutterBottom>
                            {user.website}
                        </Typography>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify={'flex-end'} style={{margin: 16}}>
                      <Button
                        color={'primary'}
                        onClick={() => history.push('utilisateur/' + i)}
                        variant={'contained'}
                      >
                        Voir plus
                      </Button>
                    </Grid>
                  </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </PageLayout>
    )
  }
}

export default inject('stores')(withRouter(observer(Users)))
