import React from 'react';
import logo from './logo.svg';
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
