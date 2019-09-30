import React from 'react'
import PropTypes from 'prop-types'
import {Typography,Box,} from '@material-ui/core'

const SearchTermDisplay = props => {
  
  return (
    <div>
      <Typography display='block' variant='h6'>
        <Box fontStyle="italic" fontFamily="Helvetica Neue">
          {props.searchResults}
        </Box>
      </Typography>
    </div>
  )
}

SearchTermDisplay.propTypes = {
  searchResults:PropTypes.string,
}

export default SearchTermDisplay
