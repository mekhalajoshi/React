import React, { Component } from "react";
import { GridList, GridListTile, ListSubheader } from "@material-ui/core/";
import MovieCard from "./MovieCard";

const styles = {
  root: {
    display: "flex",
    flexGrow: 1,
    padding: 3,
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
    margin: "auto",
    outline: "none"
  },

  gridList: {
    display: "flex",
    overflow: "hidden",
    //flexWrap: "wrap",
    justifyContent: "center",
    width: "90%",
    height: "100%",
    margin: "auto"
  }
};

export default class SearchResultDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      movieName: "harry"
    };
  }

  getMovies(searchTerm) {
    // let db=[];
    // fetch(`http://www.omdbapi.com/?&apikey=5d9a0e5e&s=` + searchTerm)
    //   .then(response => response.json())
    //   //  .then(data => console.log(data.Search))
    //   .then(data => {
    //       db =  data.Search
    //       console.log(db)
    //     });
    //     console.log(db)
    //     return db;
  }

  async fetchAdditionalInfo(imdbID) {
    let mytemp = [];
    await fetch(`http://www.omdbapi.com/?&apikey=5d9a0e5e&i=` + imdbID)
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => {
        mytemp = data;
        console.log();
      });
      console.log(mytemp);
    return mytemp;
  }


  //componentdid mount runs only once so where to call fetch so that
  //every time searchTerm is updated fetch is called
  componentDidMount() {
    fetch(
      `http://www.omdbapi.com/?&apikey=5d9a0e5e&s=` +
        this.props.searchTerm +
        `&plot=short`
    )
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => {
        //if(data.Response===false)
        this.setState({
          movies: data.Search
        });
      });
  }

  componentDidUpdate(prevProps) {
    // if (this.props.searchTerm !== prevProps.searchTerm){
    //   fetch(`http://www.omdbapi.com/?&apikey=5d9a0e5e&s=` + this.props.searchTerm+``)
    //   .then(response => response.json())
    //   // .then(data => console.log(data))
    //   .then(data => {
    //     this.setState({
    //       movies: data.Search
    //     });
    //   });
    // }
  }
  //TODO:handle empty results
  //TODO:Nested call to get plot and cast???
  render() {
    //const movies = this.getMovies(this.props.searchTerm);
    //console.log(movies);
     return (
      <div style={styles.root}>
        <GridList cols={3} style={styles.gridList}>
          <GridListTile
            key="Subheader"
            cols={3}
            style={{ width: "100%", height: "auto" }}
          >
            <ListSubheader component="div">
              {this.props.searchTerm}
            </ListSubheader>
          </GridListTile>
          {this.state.movies.map(movie => {
            let details = [];
          details = this.fetchAdditionalInfo(movie.imdbID) 
          console.log(`++++ ${details}`);
            
            return (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title} 
                posterUrl={movie.Poster}
                plot={details.Plot}
                year={movie.Year}
                id={movie.imdbID}
                cast={details.Actors}
              />
            );
          })}
        </GridList>
      </div>
    );
  }
}
