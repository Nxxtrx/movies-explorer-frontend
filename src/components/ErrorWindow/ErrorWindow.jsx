import { useNavigate } from 'react-router-dom'
import './ErrorWindow.css'

export default function ErrorWindow() {

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return(
    <main className="error">
      <h3 className="error__title">404</h3>
      <p className="error__description">Страница не найдена</p>
      <button onClick={handleBack} className="error__link" >Назад</button>
    </main>
  )
}
