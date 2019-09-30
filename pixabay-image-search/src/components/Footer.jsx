import React from 'react'
import { makeStyles, } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'


const Footer = () => {
  const classes = useStyles()

  return (
    <div>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
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
    top: 'auto',
    bottom: 0,
  },
 
  link: {
    color: 'white',

  },
}))

export default Footer
