import React, { useState, } from 'react'
import PropTypes from 'prop-types'

import { TextField, IconButton,}from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles, } from '@material-ui/core/styles'


const Search = (props) => {
  const classes = useStyles()
  const [searchString, setSearchString,] = useState('')
  
  const onTextChange = (event) => {
    setSearchString(event.target.value)
  }

  const onSubmit = () => {
    setSearchString('')
    props.onChange(searchString)
  }

  const onKeyPressEnter=(event)=> {
    if (event.keyCode === 13 || event.which === 13) {
      event.preventDefault() // Ensure it is only this code that run
      setSearchString('')
      props.onChange(searchString)
    }
  }

  return (
    <div>
      <div className={classes.Paper}>
        
        <TextField
          value={searchString}
          onChange={onTextChange}
          onKeyPress={onKeyPressEnter}

          id="outlined-with-placeholder"
          label="Search for an Image"
          placeholder="Eg. apple"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          fullWidth
        />
       
        <IconButton onClick={onSubmit}>
          <SearchIcon />
        </IconButton>
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
