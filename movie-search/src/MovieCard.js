import React, { Component } from 'react';
import { GridListTile, GridListTileBar, Typography, } from '@material-ui/core/';
import { Button } from '@material-ui/core/';
import { Grid, Dialog, DialogTitle, DialogContent, DialogContentText, } from '@material-ui/core';


const styles = {
    

    tile: {
        margin: 'auto',
        padding: 4,
        width: 250,
        height: 350,
            color: "white",
    },
    img: {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    
};



export default class MovieCard extends Component {
    constructor() {
        super();

        this.state = {
            open: false,
            movie:[],
            plot:'',
            cast:'',
        };
    }

    //TODO: Fetch movie plot and other details of specific movie
    handleClickToggle = () => {
        this.setState({
            open: !this.state.open

        });
    }
    render() {
        const { open } = this.state

        return (
            <div>
                <Button  onClick={this.handleClickToggle}>
                    <GridListTile  key={this.props.id} style={styles.tile} >
                        <img style={styles.img} src={this.props.posterUrl} alt={this.props.title} />
                        <Typography 
                            variant="caption"
                        >
                            <GridListTileBar 
                                subtitle={this.props.title}
                            />
                        </ Typography>
                    </GridListTile>
                </Button>

                <Dialog
                    fullWidth={true}
                    maxWidth="lg"
                    open={open}
                    onClose={this.handleClickToggle}
                >
                    <Grid 
                        container 
                        alignContent='flex-start'
                        alignItems='flex-start'
                    >
                        <Grid 
                            item 
                            xs='auto'
                            
                            style={{ margin:'auto'}} 
                        >
                            
                            <img style={{height: 350 , padding: 7}} src={this.props.posterUrl} alt={this.props.title}/> 
                        
                        </Grid>
                        <Grid 
                            item  
                            xs={9}
                            
                            style={{flexGrow:2, margin:'auto', }}
                        >
                            <DialogTitle >
                                {this.props.title} ({this.props.year})
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Cast:{this.props.cast}
                                    < br />
                                    Plot:{this.props.plot}
                                </DialogContentText>
                            </DialogContent>
                        </Grid>
                    </Grid>    
                </Dialog>
            </div>
        );
    }
}