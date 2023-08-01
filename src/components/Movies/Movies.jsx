import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

export default function Movies({movies, isLoading, onLikecard, savedMovies, onDeleteCard, errorMessage}) {
  const [isSearchFilms, setIsSearсhFilms] = useState(localStorage.getItem('searchFilms') || '')
  const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.getItem('movies')));
  const [moviesList, setMoviesList] = useState(JSON.parse(localStorage.getItem('movies')) || [])


  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked)
    localStorage.setItem('shortFilms', JSON.stringify(event.target.checked))
  }

  function handleSearchMovies(searchFilm) {
    if(!errorMessage) {
      const searchMoviesList = movies.filter(function(movie) {
        return movie.nameRU.toLowerCase().includes(searchFilm.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchFilm.toLowerCase())
      })

      setMoviesList(searchMoviesList)
      setIsSearсhFilms(searchFilm)
    }
  }

  useEffect(() => {
    handleSearchMovies(isSearchFilms)
  }, [isChecked])

  useEffect(() => {
    localStorage.setItem('searchFilms', isSearchFilms)
  }, [isSearchFilms])

  useEffect(() => {
    setIsSearсhFilms(localStorage.getItem('searchFilms'))
    setIsChecked(() => {
      return JSON.parse(localStorage.getItem('shortFilms'))
    })

  }, [])

  useEffect(() => {
    setMoviesList(JSON.parse(localStorage.getItem('movies')))
  }, [movies])

  return(
    <main className="movies">
      <SearchForm onSearchFilm={handleSearchMovies} isChecked={isChecked} onCheckboxChange={handleCheckbox} isSearchFilms={isSearchFilms}/>
      {isLoading ? <Preloader /> : <MoviesCardList movies={moviesList} isSearchFilms={isSearchFilms} isChecked={isChecked} onLikecard={onLikecard} savedMovies={savedMovies} onDeleteCard={onDeleteCard} errorMessage={errorMessage}/>}
    </main>
  )
}
