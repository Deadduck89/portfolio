import React, {createContext, useState} from 'react';
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
import MyThemeContext from "./Components/Common/ThemeContext/ThemeContext";

const App = () => {

    const [theme, setTheme] = useState( "light" );
    const value = {theme, setTheme};

    return (
        <div className={classes.app}>
            <div className={classes.appWrapper}>
                <MyThemeContext.Provider value={value}>
                    <Header/>
                    <Content/>
                </MyThemeContext.Provider>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
