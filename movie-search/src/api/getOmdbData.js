const PATH_BASE = 'http://www.omdbapi.com/?apikey=5d9a0e5e';
const PARAM_SEARCH_TITLE = '&s=';
const PARAM_SEARCH_ID = '&i=';

export async function getMoviesByTitle(searchTerm) {

  const res = await fetch(`${PATH_BASE}${PARAM_SEARCH_TITLE}${searchTerm}`)
  const data = await res.json()

  return data.Search;
  // return fetch(`${PATH_BASE}${PARAM_SEARCH_TITLE}`)
  //   .then(response => response.json()
  //     .then((data) => {
  //       return data.Search;
  //     }))
}

export function fetchMoviesById(searchTerm) {
  fetch(`${PATH_BASE}${PARAM_SEARCH_ID}${searchTerm}`)
    .then(response => response.json())
    .then(result => this.setSearchTopstories(result));
}