import React from 'react';
import classes from './MainPage.module.css'
import Avatar from "@mui/material/Avatar";
import avatar from "../../../Assets/Images/3vjrzd2.png";

const MainPage = () => {
    return (
        <div className={classes.main}>
            <div className={classes.hello}>
                <h1>Привет, меня зовут Михаил Дорогин</h1>
                <h2> Я фронт энд разработчик</h2>
            </div>
            <div className={classes.avatar}>
                <Avatar
                    alt='my avatar'
                    src={avatar}
                    sx={{width: 200, height: 200}}
                />
            </div>
        </div>
    )
}

export default MainPage;