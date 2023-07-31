import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

export default function Movies({movies, isLoading, onLikecard, savedMovies}) {
  const [isSearchFilms, setIsSearсhFilms] = useState(localStorage.getItem('searchFilms') || '')
  const [isChecked, setIsChecked] = useState(false);
  const [moviesList, setMoviesList] = useState([])

  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked)
    localStorage.setItem('shortFilms', JSON.stringify(event.target.checked))
  }

  function handleSearchMovies(searchFilm) {
    const searchMoviesList = movies.filter(function(movie) {
      return movie.nameRU.toLowerCase().includes(searchFilm.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchFilm.toLowerCase())
    })

    setMoviesList(searchMoviesList)
    setIsSearсhFilms(searchFilm)
  }

  useEffect(() => {
    localStorage.setItem('searchFilms', isSearchFilms)
  }, [isSearchFilms])

  useEffect(() => {
    setIsSearсhFilms(localStorage.getItem('searchFilms'))
    setIsChecked(() => {
      return JSON.parse(localStorage.getItem('shortFilms'))
    })
    // setMoviesList(JSON.parse(localStorage.getItem('movies')))
  }, [])

  return(
    <main className="movies">
      <SearchForm onSearchFilm={handleSearchMovies} isChecked={isChecked} onCheckboxChange={handleCheckbox} isSearchFilms={isSearchFilms}/>
      {isLoading ? <Preloader /> : <MoviesCardList movies={moviesList} isChecked={isChecked} onLikecard={onLikecard} savedMovies={savedMovies}/>}
    </main>
  )
}
