import AppDispatcher from '../../utils/AppDispatcher'
import ActionTypes from '../../utils/ActionTypes'

const ArtistActionCreators = {
  getArtistList (searchText) {
    AppDispatcher.dispatch({
      type: 'GET_ARTIST_LIST',
      searchText // Sting
    })
  },

  successArtistList (data) {
    AppDispatcher.dispatch({
      type: 'ARTIST_LIST_SUCCESS',
      data // SUCCESS
    })
  },

  failureArtistList (error) {
    AppDispatcher.dispatch({
      type: 'ARTIST_LIST_FAILURE',
      error // FAILURE
    })
  },

  getArtistDetails (searchText) {
    AppDispatcher.dispatch({
      type: 'GET_ARTIST_DETAILS',
      searchText // Sting
    })
  },
  successArtistDetails (data) {
    AppDispatcher.dispatch({
      type: 'ARTIST_DETAILS_SUCCESS',
      data // SUCCESS
    })
  },

  failureArtistDetails (error) {
    AppDispatcher.dispatch({
      type: 'ARTIST_DETAILS_FAILURE',
      error // FAILURE
    })
  }

}

export default ArtistActionCreators
