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
import CommentIcon from '@material-ui/icons/Comment'

class Blog extends Component {

  render() {
    const { history, stores } = this.props
    const { capitalize, getPostComments, posts } = stores.uiStore
    
    return (
        <PageLayout
            backgroundColor={Theme.palette.primary.main}
            title={'Blog'}
            subtitle={'Dernières actualités'}
        >
        <Grid container spacing={4}>
          {posts.map((post, i) => (
            <Grid item xs={12} md={6} lg={4} key={'post' + i}>
              <Card style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                <CardHeader title={capitalize(post.title)}/>
                <CardContent style={{flexGrow: 1}}>
                  <Typography gutterBottom>
                    {capitalize(post.body)}
                  </Typography>
                  <Grid 
                    container 
                    alignItems={'center'} 
                    justify={'flex-end'}
                  >
                    <Grid item>
                        <IconButton 
                            aria-label="commentaires associés"
                            color={'secondary'}
                        >
                            <CommentIcon/>
                        </IconButton>
                        <Typography
                            style={{marginLeft: 16}}
                            variant={'caption'}
                        >
                            {getPostComments(post.id).length} commentaires
                        </Typography>
                    </Grid>
                  </Grid>  
                </CardContent>
                <CardActions>
                    <Grid container justify={'flex-end'} style={{margin: 16}}>
                      <Button
                        color={'secondary'}
                        onClick={() => history.push('article/' + post.id)}
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

export default inject('stores')(withRouter(observer(Blog)))
