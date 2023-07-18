import './NavTab.css'
import { useLocation } from 'react-router-dom';

export default function NavTab() {
  const location = useLocation();

  return (
    <nav className="nav-menu">
      {location.pathname === "/" ? (
        <ul className="nav-menu__links">
          <li className="nav-menu__element">
            <a href="#" className="nav-menu__link">
              Регистрация
            </a>
          </li>
          <li className="nav-menu__element nav-menu__element_type_colored">
            <a href="#" className="nav-menu__link nav-menu__link_type_colored">
              Войти
            </a>
          </li>
        </ul>
      ) : (
        <ul className="nav-menu__links nav-menu__links_type_auth">
          <li className="nav-menu__element nav-menu__element_type_auth">
            <a href="#" className="nav-menu__link nav-menu__link_type_auth nav-menu__link_type_select">
              Фильмы
            </a>
          </li>
          <li className="nav-menu__element nav-menu__element_type_auth">
            <a href="#" className="nav-menu__link nav-menu__link_type_auth">
              Сохраненные фильмы
            </a>
          </li>
          <li className="nav-menu__element nav-menu__element_type_auth">
            <a href="#" className="nav-menu__link nav-menu__link_type_auth-colored ">
              Аккаунт
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
