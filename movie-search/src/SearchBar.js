import React,{ Component }  from 'react'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

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
    divider: {
      width: 1,
      height: 28,
      margin: 4,
    },
  };
  

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.initialState = {
            searchTerm: '',
        };
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (event) => {
        this.handelSubmit = this.handelSubmit.bind(this);
    }
        
    render(){
        const { searchTerm } = this.state;
        return(
            <div style = {useStyles}> 
            <Box mx="auto" m={1} p={1}>
                <Paper className= 'root'>
                <IconButton className='iconButton' aria-label="Search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    className='input'
                    placeholder="Search Movie"
                    inputProps={{ 'aria-label': 'Search Google Maps' }}
                    value= {searchTerm}
                    onChange={this.handleChange}
                />
                </Paper>
                
            </Box>
        </div>
        );
    }
}

 export default SearchBar;