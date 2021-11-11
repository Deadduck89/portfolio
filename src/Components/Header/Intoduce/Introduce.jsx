import React from 'react';
import classes from './Introduce.module.css';
import logo from '../../../Assets/Icons/Black+Duck.png';
import Lamp from "../../Common/Lamp/Lamp";

const Introduce = ({theme}) => {
    return (
        <div className={classes.introduce}>
            { (theme==='light') && <img className={classes.logo} src={logo} alt='logo'/>}
            { (theme==='dark') && <div className={classes.lamp}>
                <Lamp/>
            </div>}
        </div>
    )
};

export default Introduce;