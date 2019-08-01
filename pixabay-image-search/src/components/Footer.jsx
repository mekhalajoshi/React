import React from 'react'
import { makeStyles, } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'


const Footer = () => {
  const classes = useStyles()

  return (
    <div>
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Toolbar>
          <Link href={'https://github.com/mekhalajoshi/React'} className={classes.link}>
            View on Github
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  
  appBar: {
    top: '10px',
    bottom: '10px',
    left: '10px',
    right: '10px',
    width:'auto',
  },
 
  link: {
    color: 'white',

  },
}))

export default Footer
