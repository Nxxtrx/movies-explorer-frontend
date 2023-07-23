import { Link, useLocation } from "react-router-dom"
import './BurgerMenu.css'

export default function BurgerMenu({isOpened, onClose}) {
  const location = useLocation()

  return(
    <section className = {`burger-menu ${isOpened ? 'burger-menu_type_opened' : ''}`} >
      <ul className="burger-menu__links">
        <li className="burger-menu__element">
          <Link to='/' onClick={onClose} className="burger-menu__link">Главная</Link>
        </li>
        <li className="burger-menu__element">
          <Link to='/movies' onClick={onClose} className={`burger-menu__link  ${ location.pathname === '/movies' ? 'burger-menu__link_type_active' : ''}`}>Фильмы</Link>
        </li>
        <li className="burger-menu__element">
          <Link to='/saved-movies' onClick={onClose} className={`burger-menu__link  ${ location.pathname === '/saved-movies' ? 'burger-menu__link_type_active' : ''}`}>Сохраненные фильмы</Link>
        </li>
        <li className="burger-menu__element">
          <Link to='/profile' onClick={onClose} className="burger-menu__link burger-menu__link_type_colored">Аккаунт</Link>
        </li>
      </ul>
      <button className="burger-menu__close-btn" onClick={onClose} type="button"></button>
    </section>
  )
}
