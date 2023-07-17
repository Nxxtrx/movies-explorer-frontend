import React from "react"
import '../../vendor/normalize.css'
import '../../vendor/fonts/fonts.css'
import './App.css'
import Header from "../Header/Header";
import Main from "../Main/Main";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";

function App() {
    return (
        <div className="page">
            <Header />
            <Main />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Footer />
        </div>
    )
}

export default App;
