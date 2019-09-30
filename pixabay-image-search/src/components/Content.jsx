import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles, } from '@material-ui/core/styles'


import ImageGrid from './ImageGrid'
import SearchTermDisplay from './SearchTermDisplay'

export default function Content(props) {
  const classes = useStyles()
  
  const searchResults = props.searchText
    ? `Searching for ${props.searchText}`
    : null
  return (
    <div className={classes.root}>
      <SearchTermDisplay searchResults={searchResults}/>
      <ImageGrid images={props.images}/>

    </div>
  )
}

Content.propTypes = {
  searchText: PropTypes.string,
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
