import React from 'react';
import classes from './Introduce.module.css';
import logo from '../../../Assets/Icons/Black+Duck.png';
import Lamp from "../../Common/Lamp/Lamp";

const Introduce = () => {
    return (
        <div className={classes.introduce}>
            <img className={classes.logo} src={logo} alt='logo'/>
            <div className={classes.lamp}>
            <Lamp/>
            </div>
        </div>
    )
};

export default Introduce;