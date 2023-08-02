import { useLocation } from 'react-router-dom'
import './Profile.css'
import ErrorInput from '../ErrorInput/ErrorInput';
import { useFormAndValidation } from '../../hooks/useValidation';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Profile({onUpdateUser, onSignOut, errorMessage, setErrorMessage, successMessage, setSuccessMessage}) {
  const { values, handleChange, errors, isValid, setIsValid, setValues} = useFormAndValidation()
  const {name, email} = values
  const [changeUserInfo, setChangeUserInfo] = useState(false)
  const location = useLocation()

  const currentUser = useContext(CurrentUserContext)

  useEffect(() => {
    setValues({name: currentUser.name, email: currentUser.email})
    setIsValid(false)
  }, [currentUser])

  useEffect(() => {
    setErrorMessage('')
    setSuccessMessage('')
  }, [location.pathname==='/profile'])


  function handleSubmit(e) {
    e.preventDefault()
    onUpdateUser({
      name: name,
      email: email
    })
    setIsValid(false)
  }

  function handleChangeUserInfo() {
    setChangeUserInfo((changeUser) => !changeUser)
  }

  return(
  <main className="profile">
    <p className="profile__title">Привет, {currentUser.name}!</p>
    <div className="profile__form-container">
      <form className="profile__form" noValidate onSubmit={handleSubmit}>
        <label className="profile__form-label"> Имя
          <input type="text" name='name' className={`profile__input ${errors.name ? 'profile__input_type_error' : ''}`} required minLength={2} maxLength={30} value={name || ''} onChange={handleChange}/>
        </label>
        <ErrorInput error={errors.name} />
        <label className="profile__form-label"> E-mail
          <input type="email" name='email' className={`profile__input ${errors.email ?'profile__input_type_error' : ''}`} required minLength={2} maxLength={30} value={email || ''} onChange={handleChange} />
        </label>
        <ErrorInput error={errors.email} />
        {successMessage
          ? <p className='profile__submit-message'>{successMessage}</p>
          : <p className='profile__submit-error'>{errorMessage}</p>
        }
        {changeUserInfo ?  <button className={`profile__btn-submit ${!isValid ? 'profile__btn-submit_type_disabled' : ''}`} type='submit' disabled={!isValid}>Сохранить</button> : null}
      </form>
    </div>
    {changeUserInfo ? null : (
      <>
        <button className='profile__btn-edit' onClick={handleChangeUserInfo}>Редактировать</button>
        <button to="/" onClick={onSignOut} className="profile__signout-btn">Выйти из аккаунта</button>
      </>
    )}
  </main>
  )
}
