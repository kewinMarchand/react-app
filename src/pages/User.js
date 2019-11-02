import React, { Component, Fragment } from "react"
// history
import { Link, withRouter } from 'react-router-dom'
// mobx & stores
import {inject, observer} from 'mobx-react'
// Theme
import Theme from "../theme/Theme"
// UI components
import {Button, Card, CardActions, CardContent, CardHeader, Grid, Typography} from '@material-ui/core'
// custom components
import PageLayout from '../components/page/PageLayout'

class User extends Component {

  render() {
    const { match, stores } = this.props,
      { capitalize, getPostsByAuthor, getUser } = stores.uiStore,
      { email, name, phone, username, website } = getUser(match.params.id),
      publications = getPostsByAuthor(match.params.id)

    return (
        <PageLayout
            backgroundColor={Theme.palette.secondary.main}
            title={'Utilisateurs'}
            subtitle={capitalize(name)}
        >
        <Grid container spacing={4}>
            <Grid item xs={12}>
              <Card style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                <CardHeader 
                    title={capitalize(name)}
                    subheader={capitalize(username)}
                />
                <CardContent style={{flexGrow: 1}}>
                    <Grid container direction={'column'} alignItems={'flex-end'}>
                        <Typography gutterBottom>{email}</Typography>
                        <Typography gutterBottom>{phone}</Typography>
                        <Typography gutterBottom>{website}</Typography>
                    </Grid>
                    <Grid container direction={'column'} alignItems={'flex-start'}>
                        {0 < publications.length &&
                          <Fragment>
                              <Typography gutterBottom>Articles publiés:</Typography>
                              {publications.map(post => (
                                <Link 
                                  to={'/article/' + post.id} 
                                  key={'lien vers' + post.id} 
                                  style={{textDecoration: 'none'}}
                                >
                                  <Typography gutterBottom variant={'caption'}>
                                    {capitalize(post.title)}
                                  </Typography>
                                </Link>
                              ))}
                          </Fragment>
                        }
                    </Grid>
                </CardContent>
              </Card>
            </Grid>
        </Grid>
      </PageLayout>
    )
  }
}

export default inject('stores')(withRouter(observer(User)))
