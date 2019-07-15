const PATH_BASE = 'http://www.omdbapi.com/?apikey=5d9a0e5e'
const PARAM_SEARCH_TITLE = '&s='
const PARAM_SEARCH_ID = '&i='

export async function getMoviesByTitle (searchTerm) {
  const res = await fetch(`${PATH_BASE}${PARAM_SEARCH_TITLE}${searchTerm}`)
  const data = await res.json()
  return data.Search
}

export async function getMoviesById(searchTerm) {
  const res = await fetch(`${PATH_BASE}${PARAM_SEARCH_ID}${searchTerm}`)
  const data = await res.json()
  return data;
}
