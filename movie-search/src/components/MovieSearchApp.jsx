import React, { Component } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import MovieCardGrid from './MovieCardGrid'
import { getMoviesByTitle } from '../api/getOmdbData.js'

export default class MovieSearchApp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: 'happy',
      mymovies: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount () {
    const m = await getMoviesByTitle(this.state.searchTerm)
    this.setState({
      mymovies: m
    })
    console.log('MovieSearchApp mymovies    :' + this.state.mymovies)
  }

  handleChange = text => {
    this.setState({
      searchTerm: text
    })

    // console.log(this.state.mymovies);
  };

  async handleSubmit (text) {
    const temp = await getMoviesByTitle(this.state.searchTerm)
    this.setState({
      searchTerm: text,
      mymovies: temp
    })

    // console.log(this.state.mymovies);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //     if (this.state.searchTerm !== this.nextState.searchTerm) {
  //         return false;
  //     }

  //     return true;
  // }

  render () {
    return (
      <div>
        <Header />
        <SearchBar onSubmit={this.handleSubmit} onChange={this.handleChange} />
        <MovieCardGrid
          mymovies={this.state.mymovies}
        />
      </div>
    )
  }
}
