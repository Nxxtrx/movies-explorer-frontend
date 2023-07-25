import './NavTab.css'
import { Link, useLocation } from 'react-router-dom';

export default function NavTab() {
  const location = useLocation();

  return (
    <nav className="nav-menu">
      {location.pathname === "/" ? (
        <ul className="nav-menu__links">
          <li className="nav-menu__element">
            <Link to='/signup' className="nav-menu__link">
              Регистрация
            </Link>
          </li>
          <li className="nav-menu__element nav-menu__element_type_colored">
            <Link to="/signin" className="nav-menu__link nav-menu__link_type_colored">
              Войти
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-menu__links nav-menu__links_type_auth">
          <li className="nav-menu__element nav-menu__element_type_auth">
            <Link to='./movies' className={`nav-menu__link nav-menu__link_type_auth ${ location.pathname === '/movies' ? 'nav-menu__link_type_select' : ''}`}>
              Фильмы
            </Link>
          </li>
          <li className="nav-menu__element nav-menu__element_type_auth">
            <Link to="/saved-movies" className={`nav-menu__link nav-menu__link_type_auth ${ location.pathname === '/saved-movies' ? 'nav-menu__link_type_select' : ''}`}>
              Сохраненные фильмы
            </Link>
          </li>
          <li className="nav-menu__element nav-menu__element_type_auth">
            <Link to="/profile" className="nav-menu__link nav-menu__link_type_auth-colored ">
              Аккаунт
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
