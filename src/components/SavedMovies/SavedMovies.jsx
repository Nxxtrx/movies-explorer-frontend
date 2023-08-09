import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Preloader from "../Preloader/Preloader"
import './SavedMovies.css'
import { useEffect, useState } from "react"

export default function SavedMovies({savedMovies, onDeleteCard, errorMessage, isLoading}) {

  const [isChecked, setIsChecked] = useState(false);
  const [moviesList, setMoviesList] = useState([])
  const [searhRequest, setSearchRequest] = useState('')

  useEffect(() => {
    setMoviesList(savedMovies)
  }, [])

  useEffect(() => {
    handleSearchMovies(searhRequest)
  }, [onDeleteCard])

  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked)
  }

  function handleSearchMovies(searchFilm) {
    const searchMoviesList = savedMovies.filter(function(movie) {
      return movie.nameRU.toLowerCase().includes(searchFilm.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchFilm.toLowerCase())
    })
    setSearchRequest(searchFilm)
    setMoviesList(searchMoviesList)
  }

  function checkedInput(searchInput) {
    if(!searchInput){
      setMoviesList(savedMovies)
    }
  }


  return(
    <main className="movies">
      <SearchForm isChecked={isChecked} onCheckboxChange={handleCheckbox} onSearchFilm={handleSearchMovies} onCheckInput={checkedInput}/>
      {isLoading ? <Preloader /> : <MoviesCardList movies={moviesList} isChecked={isChecked} onDeleteCard={onDeleteCard} errorMessage={errorMessage}/>}
    </main>
  )
}
