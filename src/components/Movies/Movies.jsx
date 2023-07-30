import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { useState } from "react";

export default function Movies({movies}) {
  const [isLoading, setIsLoading] = useState(true)
  const [isSearchFilms, setIsSearhFilms] = useState('')

  setTimeout(() => {
    setIsLoading(false)
  }, 3000)

  return(
    <main className="movies">
      <SearchForm onSearchFilm={setIsSearhFilms}/>
      {isLoading ? <Preloader /> : <MoviesCardList movies={movies} searchFilm={isSearchFilms}/>}
    </main>
  )
}
