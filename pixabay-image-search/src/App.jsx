import React, { useState, useEffect,} from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Content from './components/Content'
import Footer from './components/Footer'
import axios from 'axios'

function App() {
  const [searchText, setSearchText,] = useState('')
  const [images, setImages,] = useState([])

  const onChange = (text) => {
    setSearchText(text)
  }

  useEffect(() => {
    let text=''
    searchText === '' || searchText === undefined
      ? text = 'Toronto'
      : text=searchText
    const PATH_BASE = 'https://pixabay.com/api/?key=12970239-13b055146ebc319ac662bb6a6&image_type=photo&pretty=true&per_page=50'
    const PARAM_SEARCH_TITLE = '&q='

    axios.get(`${PATH_BASE}${PARAM_SEARCH_TITLE}${text}`)
      .then(res => {
        setImages ( res.data.hits)
      })
   
  },[searchText,])

  return (

    <div >
      <Header/>
      <Search onChange={onChange}/>
      <Content images={images} searchText={searchText}/>
      <Footer/>
    </div>
  )     
}
    
export default App

