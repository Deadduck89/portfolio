import React, {useContext} from 'react';
import classes from './HeaderMenu.module.css';
import {NavLink} from 'react-router-dom';
import MaterialUISwitch from "../../Common/Switches/MaterialUISwitch";
import MyThemeContext from "../../Common/ThemeContext/ThemeContext";

const HeaderMenu = () => {

    const { theme, setTheme } = useContext( MyThemeContext);
    const handleChange = () => {
        theme === 'light' ? setTheme("dark") : setTheme("light")
    };

    return (
        <div className={classes.headerMenu}>
            <div className={classes.headerMenuItem}>
                <NavLink to='/main' activeClassName={classes.headerMenuItemActive}><span>Главная</span></NavLink>
            </div>
            <div className={classes.headerMenuItem}>
                <NavLink to='/profile' activeClassName={classes.headerMenuItemActive}>Профиль</NavLink>
            </div>
            <div className={classes.headerMenuItem}>
                <NavLink to='/blog' activeClassName={classes.headerMenuItemActive}>Блог</NavLink>
            </div>
            <div className={classes.headerMenuItem}>
                <NavLink to='/contacts' activeClassName={classes.headerMenuItemActive}>Контакты</NavLink>
            </div>
            <div className={classes.headerMenuItem}>
            <MaterialUISwitch
                onChange={handleChange}
            />
            </div>

        </div>
    )
};

export default HeaderMenu;