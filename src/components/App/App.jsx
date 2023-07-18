import React from "react"
import '../../vendor/normalize.css'
import '../../vendor/fonts/fonts.css'
import './App.css'
import Header from "../Header/Header";
import Main from "../Main/Main";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Movies from '../Movies/Movies'
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="page">
            <Header />
            <Routes>
              <Route path="/" element={<Main /> } />
              <Route path="/movies" element={<Movies />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;
