import React from 'react'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import PropTypes from 'prop-types'
import { makeStyles, } from '@material-ui/core/styles'
// import Link from '@material-ui/core/Link'
// import Typography from '@material-ui/core/Typography'
// import { makeStyles, } from '@material-ui/core/styles'
// import ExpansionPanel from '@material-ui/core/ExpansionPanel'
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


const Search = () => {
  const classes = useStyles()
 
  return (
    <div>
      <div>
        <Paper className={classes.Paper}>
          <InputBase
            className={classes.InputBase}
            placeholder="Movie Search App"
            inputProps={{ 'aria-label': 'Movie Search App', }}
            //TODO: Add onChange to implement search functionality
            // onChange={this.onTextChange}
          />
          <IconButton
            //TODO: Add onClick to add search functionality
            // onClick={this.onSubmit}
          >
            <SearchIcon />
          </IconButton>
          
        </Paper>
        
      
      </div>
    </div>
  )
}
const useStyles = makeStyles( ()=> ({
  
  Paper: {
    margin: '10px',
    paddingLeft: '10px',
    alignItems: 'center',
    display: 'flex',
  },
  InputBase: {
    // marginLeft: 8,
    flex: 1,
  },
}))


Search.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default Search
