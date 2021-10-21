import React from 'react';
import classes from './Header.module.css'
import Introduce from "./Intoduce/Introduce";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import Feedback from "./Feedback/Feedback";


const Header = () => {
    return (
        <div className={classes.header}>
            <Introduce/>
            <HeaderMenu/>
            <Feedback/>
        </div>
    )
}

export default Header;