import React, {useContext} from 'react';
import classes from './Header.module.css'
import Introduce from "./Intoduce/Introduce";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import Feedback from "./Feedback/Feedback";
import MyThemeContext from "../Common/ThemeContext/ThemeContext";


const Header = () => {

    const value = useContext( MyThemeContext );
    const theme = value.theme;
    let headerStyle = '';

    if (theme==='light') {
         headerStyle = classes.header
    } else {
         headerStyle = classes.headerDark
    }


    return (
        <div className={headerStyle}>
            <Introduce theme={theme}/>
            <HeaderMenu/>
            <Feedback/>
        </div>
    )
}

export default Header;