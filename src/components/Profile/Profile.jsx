import { Link } from 'react-router-dom'
import './Profile.css'

export default function Profil() {
  return(
  <section className="profile">
    <p className="profile__title">Привет, Виталий</p>
    <div className="profile__form-container">
      <form className="profile__form">
        <label className="profile__form-label"> Имя
          <input type="text" className="profile__input"/>
        </label>
        <label className="profile__form-label"> E-mail
          <input type="email" className="profile__input"/>
        </label>
        <button className="profile__btn-submit">Редактировать</button>
      </form>
    </div>
    <Link to="/" className="profile__signout-btn">Выйти из профиля</Link>
  </section>
  )
}
