import React from "react"
import Header from "../Header/Header";
import Main from "../Main/Main";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Tech from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";

function App() {
    return (
        <div className="page">
            <Header />
            <Main />
            <AboutProject />
            <Tech />
            <AboutMe />
            <Footer />
        </div>
    )
}

export default App;
