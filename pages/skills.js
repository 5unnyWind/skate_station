import { Divider, Card, Spacer, Text, Link } from '@geist-ui/core'
import React from 'react'
import data from '../data/skills'
import makeStyles from '../utils/makeStyles'


export default function skills() {
  const classes = useStyles()

  const VideoCard = ({
    videoName = '',
    number = '',
    videoUrl = '',
    posterUrl = '',
  }) => {
    return (
      <Card className={classes.card} h={10} hoverable style={{ backgroundImage: `url(${posterUrl})`, backgroundSize: 'cover' ,marginBottom:'10px'}}>
        <Link href={videoUrl}>
          <div className={classes.mask}></div>
          <Text h3 className={classes.centerText}>{videoName}</Text>
        </Link>
      </Card>
    )
  }

  return (
    <>
      <div className={[classes.content]}>
        <Spacer />
        <Divider h={5} >关于滑行</Divider>
        <Spacer />

        {data['滑行'].map((v, key) => (<VideoCard {...v} key={key} />))}

      </div>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  content: {
    width: theme.layout.pageWidthWithMargin,
    maxWidth: "100%",
    boxSizing: "border-box",
    margin: "0 auto",
    padding: `0 ${theme.layout.pageMargin}`,
  },
  card: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '100px'
  },
  mask: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.35)',
    "&:hover": {
      background: 'rgba(0,0,0,0.2)',
    }
  },
  centerText: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)'
  },
}))
