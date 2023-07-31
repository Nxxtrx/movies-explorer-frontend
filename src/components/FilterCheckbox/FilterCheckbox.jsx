import './FilterCheckbox.css'

export default function FilterCheckbox({isChecked, onCheckboxChange}) {
  return (
    <div className="filter">
      <label className="filter__title">Короткометражки</label>
      <input className="filter__checkbox" type="checkbox" checked={isChecked || false} onChange={onCheckboxChange}/>
    </div>
  )
}
