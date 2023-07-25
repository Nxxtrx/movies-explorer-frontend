import { Link } from 'react-router-dom'
import './ErrorWindow.css'

export default function ErrorWindow() {
  return(
    <main className="error">
      <h3 className="error__title">404</h3>
      <p className="error__description">Страница не найдена</p>
      <Link to="/" className="error__link" >Назад</Link>
    </main>
  )
}
