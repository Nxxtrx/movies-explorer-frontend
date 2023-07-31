import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import { useFormAndValidation } from '../../hooks/useValidation'
import { useEffect, useState } from 'react'

export default function SearchForm({onSearchFilm, isChecked, onCheckboxChange, isSearchFilms}) {
  const { values, handleChange, isValid, setIsValid, setValues} = useFormAndValidation()
  const {movie} = values

  useEffect(() => {
    setIsValid(false);
    setValues({movie: localStorage.getItem('searchFilms')})
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
      <FilterCheckbox isChecked={isChecked} onCheckboxChange={onCheckboxChange} />
    </div>
  )
}
