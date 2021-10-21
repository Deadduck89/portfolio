import React from 'react';
import classes from './Introduce.module.css';
import logo from '../../../Assets/Icons/Black+Duck.png';

const Introduce = () => {
    return (
        <div className={classes.introduce}>
            <img className={classes.logo} src={logo} alt='logo'/>
        </div>
    )
};

export default Introduce;