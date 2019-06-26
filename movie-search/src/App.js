import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import './App.css';
import MovieSearch from './MovieSearch';
import Display from './Display';

function App() {
  return (
    <div >
      <AppBar position="static">
            <Toolbar>
                <Typography variant='display1' align='center'>
                Movie Search App
                </Typography>
            </Toolbar>
        </AppBar>
        <MovieSearch />
          
     
    </div>
  );
}

export default App;
