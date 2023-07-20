import './ErrorWindow.css'

export default function ErrorWindow() {
  return(
    <div className="error">
      <h3 className="error__title">404</h3>
      <p className="error__description">Страница не найдена</p>
      <a className="error__link" href="#">Назад</a>
    </div>
  )
}
