import { Link, useLocation } from 'react-router-dom'
import './Profile.css'
import ErrorInput from '../ErrorInput/ErrorInput';
import { useFormAndValidation } from '../../hooks/useValidation';
import { useEffect, useState } from 'react';

export default function Profile({currentUser, onUpdateUser, onSignOut, errorMessage, setErrorMessage}) {
  const { values, handleChange, errors, isValid, setIsValid, setValues} = useFormAndValidation()
  const {name, email} = values
  const [changeUserInfo, setChangeUserInfo] = useState(false)

  useEffect(() => {
    setValues({name: currentUser.name, email: currentUser.email})
  }, [])

  useEffect(() => {
    setErrorMessage('')
  }, [values])


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
    <p className="profile__title">Привет, Виталий!</p>
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
        <p className='profile__submit-error'>{errorMessage ? errorMessage : ''}</p>
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
