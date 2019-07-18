import React from 'react'

import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function AlbumCard (props) {
    const {strAlbumThumb, strAlbum,} = props
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    function handleClickOpen() {
      setOpen(true);
    }
  
    function handleClose() {
      setOpen(false);
    }
    return (
      <div>
      <Card style={useStyles.card}>
        <CardActionArea 
        onClick={handleClickOpen}
        style={{ padding: '5px' }}
        >
          <CardMedia
            className="album-card__media"
            component="img"
            alt={strAlbum}
            image={strAlbumThumb}
            title={strAlbum}
          />
          <CardContent style={{ padding: '0' }}>
            <Typography variant="subtitle1">
              {strAlbum}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog 
      fullScreen open={open} 
      onClose={handleClose} 
      // TransitionComponent={Transition}
      >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
              {strAlbum}
              </Typography>
            </Toolbar>
          </AppBar>
      </Dialog>
  
  </div>
    )
}
export default  AlbumCard 

AlbumCard.propTypes = {
  strAlbum: PropTypes.string.isRequired,
  strAlbumThumb: PropTypes.string.isRequired
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    card:{
      width: '150px',
      height: 'auto',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }),
);

