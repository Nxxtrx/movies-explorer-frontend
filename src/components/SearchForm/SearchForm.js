import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

export default function SearchForm() {
  return(
    <div className="search">
      <forms className="search__form" >
        <input className="search__input" placeholder='Фильм'></input>
        <button className="search__btn-submit" type="submit">Найти</button>
      </forms>
      <FilterCheckbox />
    </div>
  )
}
