import './NavTab.css'

export default function NavTab() {
  return (
    <nav className="nav-menu">
      <ul className="nav-menu__links">
        <li className="nav-menu__element">
          <a href="#" className="nav-menu__link">Регистрация</a>
        </li>
        <li className="nav-menu__element nav-menu__element_type_colored">
          <a href="#" className="nav-menu__link nav-menu__link_type_colored">Войти</a>
        </li>
      </ul>
    </nav>
  );
}
