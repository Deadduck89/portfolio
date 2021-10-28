import React from 'react';
import "@fontsource/open-sans";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "@fontsource/aclonica";
import "@fontsource/manrope";
import classes from './App.module.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";

const App = () => {
    return (
        <div className={classes.app}>
            <div className={classes.appWrapper}>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
