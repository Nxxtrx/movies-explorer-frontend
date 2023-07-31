import React, {useEffect, useState } from "react"
import '../../vendor/normalize.css'
import '../../vendor/fonts/fonts.css'
import './App.css'
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from '../Movies/Movies'
import Footer from "../Footer/Footer";
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ErrorWindow from "../ErrorWindow/ErrorWindow";
import { api } from "../../utils/MainApi";
import * as MoviesApi from '../../utils/MoviesApi'

function App() {
  const location = useLocation();
  const navigate = useNavigate()

  const [loggedIn, setLoggedIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [currentUser, setCurrentUser] = useState('')
  const [movies, setMovies] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  React.useEffect(() => {
    handleTokenCheck()
  }, [])

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setCurrentUser(data)
    }).catch((err) => console.log(err))



  }, [loggedIn])

  useEffect(() => {
    setIsLoading(true)
    MoviesApi.getMovies().then((data) =>{
      setMovies(data)
    }).catch((err) => console.log(err))
    .finally(() => setIsLoading(false))
  }, [loggedIn])


  React.useEffect(() => {
    setErrorMessage('')
  }, [location.pathname === '/signup' || '/signin'])


  function handleLoggedIn() {
    setLoggedIn(true)
  }

  function handleRegisterUser(name, email, password) {
    api.registr(name, email, password)
      .then((res) => {
        if(res._id) {
          navigate('/signin')
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
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
    } else {
      // navigate('/')
      // localStorage.removeItem('userId')
    }
  }

  function handleUpdateUser(name, email) {
    api.updateUser(name, email).then((data) => {
      if(data._id) {
        setCurrentUser(data)
      } else {
        setErrorMessage(data.message)
      }
    }).catch((err) => console.log(err))
  }

  function handleSignOut() {
    api.signOutUser().then((res) => {
      localStorage.removeItem('userId')
      setLoggedIn(false)
      navigate('/')
    }).catch((err) => console.log(err))
  }

  return (
    <div className="page">
      {location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile'
        ? <Header loggedIn={loggedIn}/>
        : ''
      }
      <Routes>
        <Route path="/" element={<Main /> } />
        <Route path="/movies" element={<ProtectedRouteElement element={Movies} movies={movies} loggedIn={loggedIn} isLoading={isLoading}/>} />
        <Route path="/saved-movies" element={<ProtectedRouteElement element={SavedMovies} loggedIn={loggedIn} />} />
        <Route path="/profile" element={<ProtectedRouteElement element={Profile} loggedIn={loggedIn} currentUser={currentUser} onUpdateUser={handleUpdateUser} onSignOut={handleSignOut} setErrorMessage={setErrorMessage} errorMessage={errorMessage}/>} />
        <Route path="/signin" element={<Login onAuthUser={handleAuthUser} errorMessage={errorMessage} />} />
        <Route path="/signup" element={<Register onRegisterUser={handleRegisterUser} errorMessage={errorMessage}/>} />
        <Route path="/*" element={<ErrorWindow />} />
      </Routes>
      {location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies'
        ? <Footer />
        : ''
      }
    </div>
  )
}

export default App;
