import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Preloader from "../Preloader/Preloader"
import './SavedMovies.css'
import { useEffect, useState } from "react"

export default function SavedMovies({savedMovies, onDeleteCard}) {

  const [isChecked, setIsChecked] = useState(false);
  const [moviesList, setMoviesList] = useState([])

  useEffect(() => {
    setMoviesList(savedMovies)
  }, [onDeleteCard])



  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked)
  }

  function handleSearchMovies(searchFilm) {
    const searchMoviesList = savedMovies.filter(function(movie) {
      return movie.nameRU.toLowerCase().includes(searchFilm.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchFilm.toLowerCase())
    })

    setMoviesList(searchMoviesList)
  }


  return(
    <main className="movies">
      <SearchForm isChecked={isChecked} onCheckboxChange={handleCheckbox} onSearchFilm={handleSearchMovies}/>
      <MoviesCardList movies={moviesList} isChecked={isChecked} onDeleteCard={onDeleteCard}/>
    </main>
  )
}
