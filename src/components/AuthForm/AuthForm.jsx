import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './AuthForm.css'
import { useFormAndValidation } from '../../hooks/useValidation';
import ErrorInput from '../ErrorInput/ErrorInput';
import { useEffect } from 'react';

export default function AuthForm({title, btnTitle, linkText, linkTitle}) {
  const location = useLocation();
  const navigate = useNavigate();
  const {values, errors, isValid, handleChange, setIsValid} = useFormAndValidation()

  const {name, email, password} = values

  useEffect(() => {
    setIsValid(false)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    location.pathname==='/signin' ? navigate('/movies') : navigate('/signin')
  }

  return (
    <section className="authorization">
      <Link to="/">
        <img className="authorization__logo" src={logo} alt="" />
      </Link>
      <h3 className="authorization__title">{title}</h3>
      <form className="authorization__form" onSubmit={handleSubmit} noValidate>
        {location.pathname === "/signup" ? (
          <>
            <label className="authorization__label">
              Имя <br />
              <input
                className={`authorization__input ${
                  errors.name
                    ? "authorization__input_type-error"
                    : ""
                }`}
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
        ) : (
          ""
        )}
        <label className="authorization__label">
          E-mail <br />
          <input
            className={`authorization__input ${
              errors.email
                ? "authorization__input_type-error"
                : ""
            }`}
            type="email"
            name="email"
            minLength={2}
            maxLength={20}
            required
            value={email || ""}
            onChange={handleChange}
          />
        </label>
        <ErrorInput error={errors.email} />
        <label className="authorization__label">
          Пароль <br />
          <input
            className={`authorization__input ${
              errors.password
                ? "authorization__input_type-error"
                : ""
            }`}
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
        <button
          className={`authorization__btn-submit ${
            location.pathname === "/signin"
              ? "authorization__btn-submit_type_login"
              : ""
          } ${!isValid ? "authorization__btn-submit_type_diabled" : ""} `}
          disabled={!isValid}
        >
          {btnTitle}
        </button>
      </form>
      <p className="authorization__login-in">
        {linkText}
        <Link
          to={`${location.pathname === "/signup" ? "/signin" : "/signup"}`}
          className="authorization__link"
          href="#"
        >
          {linkTitle}
        </Link>
      </p>
    </section>
  );
}
