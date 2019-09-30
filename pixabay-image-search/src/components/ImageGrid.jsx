import React from 'react'
import PropTypes from 'prop-types'

import {GridList,GridListTile,GridListTileBar,IconButton,Typography,Box,} from '@material-ui/core'
import { makeStyles, } from '@material-ui/core/styles'
import ZoomIn from '@material-ui/icons/ZoomIn'


export default function ImageGrid(props) {
  const classes = useStyles()
  if (props.images.length === 0|| props.images=== null) {
    return (
      <div>
        <Typography variant='h6'>
          <Box fontStyle="italic" fontFamily="Helvetica Neue">
          No Results Found
          </Box>
        </Typography>
      </div>
    )
  }else
    return (
      <div>
        <GridList cellHeight={200} spacing={1} cols={4} className={classes.gridList}>
          {/* {console.log('=====================ImageGrig======================')} */}
          {props.images.map(tile => (
            <GridListTile key={tile.id} className={classes.img}>
              <img src={tile.largeImageURL} alt={tile.tags} />
              <GridListTileBar
                title={tile.tags}
                titlePosition="bottom"
                actionIcon={
                  <IconButton aria-label={`star ${tile.tags}`} className={classes.icon}>
                    <ZoomIn />
                  </IconButton>
                }
                actionPosition="right"
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
}

ImageGrid.propTypes = {
  images:PropTypes.array,
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    paddingBottom: '10px',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  img: {
    width: 250,
    height:200,
  },
}))
