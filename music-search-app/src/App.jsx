import React, { Component } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Search from './components/Search'

class App extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.state = {
      searchText: ''
    }
  }

  handleChange(val) {
    this.setState({ searchText: val })
  }

  render() {
    const { searchText } = this.state
    return (
      <div id="music-search-app">
        <Header />
        <Search onInputChange={this.handleChange} />
        <Content searchText={searchText} />
      </div>
    )
  }
}

export default App
