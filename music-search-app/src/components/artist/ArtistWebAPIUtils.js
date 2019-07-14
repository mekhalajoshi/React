import $ from 'jquery'
import ArtistActionCreators from './ArtistActionCreators'

const ArtistWebAPIUtils = {
  getMoviesLists (searchText) {
    const uri = 'movies_list/'.concat(searchText === '' ? 'star' : searchText)

    $.ajax({
      url: uri,
      type: 'GET',

      success (data) {
        ArtistActionCreators.successArtistList('SUCCESS_DATA')
      },

      error () {
        ArtistActionCreators.failureArtistList('FAILURE_SORRY')
      }
    })
  }
}

export default ArtistWebAPIUtils
