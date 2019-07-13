import React, { Component } from 'react'
import { Dialog, Grid, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

export default class MovieDetails extends Component {
  render () {
    return (
      <div>
        <Dialog
          fullWidth={true}
          maxWidth="lg"
          open={this.props.open}
          onClose={this.props.onClose}
        >
          <Grid
            container
            alignContent='flex-start'
            alignItems='flex-start'
          >
            <Grid
              item
              xs='auto'
              style={{ margin: 'auto' }}
            >
              <img style={{ height: 350, padding: 7 }} src={this.props.poster} alt={this.props.title} />
            </Grid>
            <Grid
              item
              xs={9}
              style={{ flexGrow: 2, margin: 'auto' }}
            >
              <DialogTitle >
                {this.props.title} ({this.props.year})
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Cast:{this.props.actors}
                  < br />
                  Plot:{this.props.plot}
                </DialogContentText>
              </DialogContent>
            </Grid>
          </Grid>
        </Dialog>
      </div>
    )
  }
}
