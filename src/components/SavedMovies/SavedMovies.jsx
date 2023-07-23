import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Preloader from "../Preloader/Preloader"
import './SavedMovies.css'
import { useState } from "react"

export default function SavedMovies() {

  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 3000)

  return(
    <section className="movies">
      <SearchForm />
      {isLoading ? <Preloader /> : <MoviesCardList />}
    </section>
  )
}
