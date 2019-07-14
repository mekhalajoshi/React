
import { EventEmitter } from 'events'
import assign from 'object-assign'

import ArtistWebAPIUtils from './ArtistWebAPIUtils'
import AppDispatcher from '../../utils/AppDispatcher'
import ActionTypes from '../../utils/ActionTypes'

const CHANGE_EVENT = 'change'
let movies = ''

const ArtistStore = assign({}, EventEmitter.prototype, {

  emitChange () {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  getArtistList () {
    return movies
  }

})

ArtistStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.type) {
    case ActionTypes.GET_ARTIST_LIST:
      console.log(`Store invoked ${action}`)

      // Take action - Make API call and update state
      ArtistWebAPIUtils.getMoviesLists(action.searchText)
      ArtistStore.emitChange()
      break
    case ActionTypes.ARTIST_LIST_SUCCESS:
      movies = action.data
      ArtistStore.emitChange()
      break
    case ActionTypes.ARTIST_LIST_FAILURE:
      movies = action.error
      ArtistStore.emitChange()
      break
    default:
    // do nothing
  }
})

export default ArtistStore
