import React, { Component } from "react"
// history
import { withRouter } from 'react-router-dom'
// mobx & stores
import {inject, observer} from 'mobx-react'
// Theme
import Theme from "../theme/Theme"
// UI components
import {Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Typography} from '@material-ui/core'
// custom components
import PageLayout from '../components/page/PageLayout'
// Icons
import MessageIcon from '@material-ui/icons/Message'

class Users extends Component {

  render() {
    const { history, stores } = this.props,
        { capitalize, getPostsByAuthor, users } = stores.uiStore

    return (
        <PageLayout
            backgroundColor={Theme.palette.secondary.main}
            title={'Utilisateurs'}
            subtitle={'Notre communauté'}
        >
        <Grid container spacing={4}>
          {users.map(user => (
            <Grid item xs={12} md={6} lg={4} key={'user' + user.id}>
              <Card style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                <CardHeader 
                    title={capitalize(user.name)}
                    subheader={capitalize(user.username)}
                />
                <CardContent style={{flexGrow: 1}}>
                    <Grid container direction={'column'} alignItems={'flex-start'}>
                        <Typography gutterBottom>{user.email}</Typography>
                        <Typography gutterBottom>{user.phone}</Typography>
                        <Typography gutterBottom>{user.website}</Typography>
                    </Grid>
                    <Grid 
                        container 
                        alignItems={'center'} 
                        justify={'flex-end'}
                    >
                        <Grid item>
                            <IconButton aria-label="commentaires associés" color={'primary'} >
                                <MessageIcon/>
                            </IconButton>
                            <Typography variant={'caption'} style={{marginLeft: 16}} >
                                {getPostsByAuthor(user.id).length} articles publiés
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions disableSpacing>
                    <Grid container justify={'flex-end'} style={{margin: 8}}>
                      <Button
                        color={'primary'}
                        onClick={() => history.push('utilisateur/' + user.id)}
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
