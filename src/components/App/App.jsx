import React from "react"
import '../../vendor/normalize.css'
import '../../vendor/fonts/fonts.css'
import './App.css'
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from '../Movies/Movies'
import Footer from "../Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ErrorWindow from "../ErrorWindow/ErrorWindow";

function App() {
  const location = useLocation();

    return (
        <div className="page">
          {location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile'
            ? <Header />
            : ''
          }
          <Routes>
            <Route path="/" element={<Main /> } />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
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
