import React from 'react'
import { Paper, InputBase, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'


const Search = () => {
  return (
    <div>
        Search
      <Paper style={useStyles.root}>
        <IconButton style={useStyles.iconButton} aria-label="Menu" />
        <InputBase
          style={useStyles.input}
          placeholder="Search Artist"
          inputProps={{ 'aria-label': 'Search Artist' }}
          
        />
        <IconButton style={useStyles.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  )
}
export default Search
 
const useStyles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}
