import React, {useEffect, useState } from "react"
import '../../vendor/normalize.css'
import '../../vendor/fonts/fonts.css'
import './App.css'
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from '../Movies/Movies'
import Footer from "../Footer/Footer";
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute'
import { CurrentUserContext} from '../../contexts/CurrentUserContext'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ErrorWindow from "../ErrorWindow/ErrorWindow";
import { api } from "../../utils/MainApi";
import { moviesApi } from '../../utils/MoviesApi'

function App() {
  const location = useLocation();
  const navigate = useNavigate()

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('userId') ? true : false)
  const [currentUser, setCurrentUser] = useState('')

  const [savedMovies, setSavedMovies] = useState([])
  const [movies, setMovies] = useState([])

  const [movieErrorMessage, setMovieErrorMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  React.useEffect(() => {
    handleTokenCheck()
  }, [loggedIn])

  React.useEffect(() => {
    if(loggedIn) {
      api.getUserInfo().then((data) => {
        setCurrentUser(data)
      }).catch((err) => console.log(err))
    }
  }, [loggedIn])

  useEffect(() => {
    if(loggedIn) {
      setIsLoading(true)
      setMovieErrorMessage('')
      Promise.all([moviesApi.getMovies(), api.getSavedMovies()])
        .then(([movies, savedMovies]) => {
          setMovies(movies);
          setSavedMovies(savedMovies)
        })
        .catch((err) => {
          console.log(err)
          setMovieErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        })
        .finally(() => setIsLoading(false))
    }
  }, [loggedIn])

  React.useEffect(() => {
    setErrorMessage('')
  }, [location.pathname === '/signup' || location.pathname === '/signin' || location.pathname === '/profile'])


  function handleLoggedIn() {
    setLoggedIn(true)
  }

  function handleRegisterUser(name, email, password) {
    api.registr(name, email, password)
      .then((res) => {
        if(res.email) {
          handleAuthUser(email, password)
        } else {
          setErrorMessage(res.message)
        }
      }).catch((err) => console.log(err))
  }

  function handleAuthUser(email, password) {
    api.authorize(email, password)
      .then((res) => {
        if (res._id) {
          handleLoggedIn();
          setCurrentUser(res)
          navigate('/movies');
        } else {
          setErrorMessage(res.message)
        }
      })
      .catch((err) => console.log(err))
  }

  function handleTokenCheck() {
    if(localStorage.getItem('userId')) {
      const jwt = localStorage.getItem('userId');
      api.tokenCheck(jwt).then((res) => {
        handleLoggedIn();
        if (res.message) {
          setLoggedIn(false)
          navigate('/signin')
          localStorage.clear()
        }
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
    } else {
      setLoggedIn(false)
      localStorage.clear()
    }
  }

  function handleUpdateUser(name, email) {
    setSuccessMessage('')
    api.updateUser(name, email).then((data) => {
      if(data._id) {
        setCurrentUser(data)
        setSuccessMessage('Редактирование профиля прошло успешно!')
      } else {
        setErrorMessage(data.message)
      }
    }).catch((err) => console.log(err))
  }

  function handleSignOut() {
    api.signOutUser().then((res) => {
      localStorage.removeItem('userId')
      setLoggedIn(false)
      localStorage.clear()
      navigate('/')
    }).catch((err) => console.log(err))
  }

  function handleLikeCard(card) {
    api.setLikeCard(card)
      .then((res) => {
        setSavedMovies(movies => [...movies, res])
      })
      .catch((err) => console.log(err))
  }

  function handleDeleteCard(card) {
    api.handleDeleteCard(card).then(() => {
      setSavedMovies(movies => movies.filter(movie => movie._id !== card));
    }).catch((err) => console.log(err))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile'
          ? <Header loggedIn={loggedIn}/>
          : ''
        }
        <Routes>
          <Route path="/" element={<Main /> } />
          <Route path="/movies" element={
            <ProtectedRouteElement
              element={Movies}
              onLikecard={handleLikeCard}
              movies={movies}
              savedMovies={savedMovies}
              loggedIn={loggedIn}
              isLoading={isLoading}
              onDeleteCard={handleDeleteCard}
              errorMessage={movieErrorMessage}
            />
          } />
          <Route path="/saved-movies" element={
            <ProtectedRouteElement
              element={SavedMovies}
              loggedIn={loggedIn}
              isLoading={isLoading}
              savedMovies={savedMovies}
              onDeleteCard={handleDeleteCard}
              errorMessage={movieErrorMessage}
            />
          }/>
          <Route path="/profile" element={
            <ProtectedRouteElement
              element={Profile}
              loggedIn={loggedIn}
              onUpdateUser={handleUpdateUser}
              onSignOut={handleSignOut}
              setErrorMessage={setErrorMessage}
              errorMessage={errorMessage}
              successMessage={successMessage}
              setSuccessMessage={setSuccessMessage}
            />
          } />
          <Route path="/signin" element={
            <Login
              onAuthUser={handleAuthUser}
              errorMessage={errorMessage}
              loggedIn={loggedIn}
            />
          } />
          <Route path="/signup" element={
            <Register
              onRegisterUser={handleRegisterUser}
              errorMessage={errorMessage}
              loggedIn={loggedIn}
            />
          } />
          <Route path="/*" element={<ErrorWindow />} />
        </Routes>
        {location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies'
          ? <Footer />
          : ''
        }
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
