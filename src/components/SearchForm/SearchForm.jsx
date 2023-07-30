import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import { useFormAndValidation } from '../../hooks/useValidation'
import { useEffect } from 'react'

export default function SearchForm({onSearchFilm}) {
  const { values, handleChange, isValid, setIsValid} = useFormAndValidation()

  const {movie} = values

  useEffect(() => {
    setIsValid(false);
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    onSearchFilm(movie)
  }

  return(
    <div className="search">
      <form className="search__form" noValidate onSubmit={handleSubmit}>
        <input className="search__input" name='movie' placeholder='Фильм' value={movie || ''} minLength={2} maxLength={30} onChange={handleChange} required></input>
        <button className= {`search__btn-submit ${!isValid ? 'search__btn-submit_type_disabled' : ''}`} disabled={!isValid} type="submit">Найти</button>
      </form>
      <FilterCheckbox />
    </div>
  )
}
