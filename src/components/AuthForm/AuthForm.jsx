import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './AuthForm.css'

export default function AuthForm({title, btnTitle, linkText, linkTitle}) {
  const location = useLocation();

  return(
    <section className="authorization">
      <Link to="/"><img className='authorization__logo' src={logo} alt="" /></Link>
      <h3 className='authorization__title'>{title}</h3>
      <form className='authorization__form'>
        {location.pathname === '/signup'
          ? <label  className='authorization__label'>
              Имя <br />
              <input className="authorization__input" type="text" name="name"  />
            </label>
          : ''
        }
        <label  className='authorization__label'>
          E-mail <br />
          <input className="authorization__input" type="email" name="email"  />
        </label>
        <label  className='authorization__label'>
          Пароль <br />
          <input className={`authorization__input ${location.pathname === '/signup' ? 'authorization__input_type-error' : ''}`} type="password" name="password"/>
        </label>
        {location.pathname === '/signup'
          ? <span className="authorization__input-error">что то пошло не так ...</span>
          : ''
        }
        <button className='authorization__btn-submit'>{btnTitle}</button>
      </form>
      <p className='authorization__login-in'>{linkText}<Link to={`${location.pathname === '/signup' ? '/signin' : '/signup'}`} className='authorization__link' href='#'>{linkTitle}</Link></p>

    </section>
  )
}
