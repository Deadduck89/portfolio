import React from 'react';
import "@fontsource/open-sans";
import classes from './App.module.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

const App = () => {
    return (
        <div className={classes.app}>
            <div className={classes.appWrapper}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
