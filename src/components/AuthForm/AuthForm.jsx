import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './AuthForm.css'
import { useFormAndValidation } from '../../hooks/useValidation';
import ErrorInput from '../ErrorInput/ErrorInput';
import { useEffect } from 'react';

export default function AuthForm({title, btnTitle, linkText, linkTitle, onRegisterUser, onAuthUser, errorMessage}) {
  const location = useLocation();

  const {values, errors, isValid, handleChange, setIsValid, resetForm} = useFormAndValidation()

  const {name, email, password} = values

  useEffect(() => {
    setIsValid(false)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (location.pathname === '/signup') {
      onRegisterUser(name, email, password)
    } else if (location.pathname === '/signin'){
      onAuthUser(email, password)
    }
    resetForm()
  }

  return (
    <section className="authorization">
      <Link to="/">
        <img className="authorization__logo" src={logo} alt="" />
      </Link>
      <h3 className="authorization__title">{title}</h3>
      <form className="authorization__form" name='submit'  onSubmit={handleSubmit} noValidate>
        {location.pathname === "/signup" ? (
          <>
            <label className="authorization__label">
              Имя <br />
              <input className={`authorization__input ${errors.name ? "authorization__input_type-error" : "" }`}
                type="text"
                name="name"
                minLength={2}
                maxLength={30}
                required
                value={name || ""}
                onChange={handleChange}
              />
            </label>
            <ErrorInput error={errors.name} />
          </>
        ) : "" }
        <label className="authorization__label">
          E-mail <br />
          <input className={`authorization__input ${errors.email ? "authorization__input_type-error" : ""}`}
            type="email"
            name="email"
            minLength={2}
            maxLength={20}
            required
            value={email || ""}
            onChange={handleChange}
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          />
        </label>
        <ErrorInput error={errors.email} />
        <label className="authorization__label">
          Пароль <br />
          <input className={`authorization__input ${errors.password ? "authorization__input_type-error" : "" }`}
            type="password"
            name="password"
            minLength={2}
            maxLength={30}
            required
            value={password || ""}
            onChange={handleChange}
          />
        </label>
        <ErrorInput error={errors.password} />
        <p className={`authorization__submit-error ${location.pathname === '/signin' ? 'authorization__submit-error_type_login' : ''}`}>{errorMessage ? errorMessage : ''}</p>
        <button className={`authorization__btn-submit ${!isValid ? "authorization__btn-submit_type_diabled" : ""} `} disabled={!isValid}>
          {btnTitle}
        </button>
      </form>
      <p className="authorization__login-in">
        {linkText}
        <Link to={`${location.pathname === "/signup" ? "/signin" : "/signup"}`} className="authorization__link">
          {linkTitle}
        </Link>
      </p>
    </section>
  );
}
