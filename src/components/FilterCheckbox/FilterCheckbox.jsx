import './FilterCheckbox.css'

export default function FilterCheckbox() {
  return (
    <div className="filter">
      <label className="filter__title">Короткометражки</label>
      <input className="filter__checkbox" type="checkbox" />
    </div>
  )
}
