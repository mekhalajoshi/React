import $ from 'jquery'
import AlbumActionCreators from './AlbumActionCreators'

const AlbumWebAPIUtils = {
  getAlbumLists(searchText) {
    const uri = 'https://theaudiodb.com/api/v1/json/1/album.php?i='.concat(searchText === '' ? '111239' : searchText)

    $.ajax({
      url: uri,
      type: 'GET',

      success(data) {
        console.log(data.album)
        AlbumActionCreators.successAlbumList(data.album)
      },

      error() {
        AlbumActionCreators.failureAlbumList('FAILURE_SORRY')
      },
    })
  },

  getAlbumDetails(searchText) {
    const uri = 'movies_list/'.concat(searchText === '' ? 'star' : searchText)

    $.ajax({
      url: uri,
      type: 'GET',

      success(data) {
        AlbumActionCreators.successAlbumDetails('SUCCESS_DETAIL_DATA')
      },

      error() {
        AlbumActionCreators.failureAlbumDetails('FAILURE_DETAIL_SORRY')
      },
    })
  },
}

export default AlbumWebAPIUtils
