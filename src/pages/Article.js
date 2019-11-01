import React, { Component, Fragment } from "react"
// mobx & stores
import {inject, observer} from 'mobx-react'
// Theme
import Theme from "../theme/Theme"
// UI components
import {Box, Card, CardContent, Grid, Typography} from '@material-ui/core'
// custom components
import PageLayout from '../components/page/PageLayout'

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum temporibus dicta a beatae dolorem itaque maxime ipsum ipsa numquam, tenetur sequi eligendi odit soluta ratione. In facilis illum perferendis consectetur recusandae rerum libero ullam non nobis, ipsa dolorem soluta facere nulla, reiciendis quidem blanditiis impedit eligendi, atque eveniet. Similique, corporis placeat. Esse fugiat sint vel odio nesciunt nam cum totam placeat, consequuntur expedita consequatur, architecto facere vitae illum. Quasi, optio nobis voluptates cumque animi accusamus quia ex temporibus. Natus exercitationem aliquid molestias, dolorem nemo eaque praesentium commodi voluptas magnam architecto illo facere aperiam, pariatur nulla nobis eligendi aspernatur incidunt?'

class Article extends Component {

  render() {
    const { match, stores } = this.props,
      { capitalize, getPost, getPostAuthor, getPostComments } = stores.uiStore,
      { body, id, title, userId } = getPost(match.params.id)

    return (
        <PageLayout
            backgroundColor={Theme.palette.primary.main}
            title={'Blog'}
            subtitle={capitalize(title)}
        >
        <Grid container spacing={4}>
          <Grid item xs={12} align={'center'}>
            <Card style={{maxWidth: 600}}>
              <CardContent>
                <Grid container justify={'flex-end'} >
                  <Typography gutterBottom variant={'caption'} style={{marginBottom: 16}}>
                    Article de {getPostAuthor(userId).username}
                  </Typography>
                </Grid>
                <Grid container >
                  <Typography gutterBottom>{capitalize(body)}</Typography>
                </Grid>
                <Box display={{ xs: 'none', lg: 'block' }}>
                  <Grid container style={{marginTop: 24}}>
                    <Typography gutterBottom>
                      {text}
                    </Typography>
                  </Grid>
                </Box>
                {0 < getPostComments(id).length &&
                  <Grid 
                    container
                    style={{marginTop: 40}}
                  >
                    <Typography gutterBottom variant={'caption'}>Commentaires associés:</Typography>
                    <Grid container direction={'column'} alignItems={'flex-start'}>
                      {getPostComments(id).map((comment, i) => (
                        <Fragment key={'commentaire ' + comment.id}>     
                          <Typography 
                            gutterBottom
                            variant={'caption'}
                            style={{marginBottom: 8, marginTop: 16}}
                          >
                            De {comment.email}
                          </Typography>
                          <Typography gutterBottom variant={'caption'} align={'left'}>
                            {capitalize(comment.name)}
                          </Typography>
                          <Typography gutterBottom variant={'caption'} align={'left'} style={{marginBottom: 16}}>
                            {capitalize(comment.body)}
                          </Typography>
                        </Fragment>
                      ))}
                    </Grid>
                  </Grid>
                }
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </PageLayout>
    )
  }
}

export default inject('stores')(observer(Article))