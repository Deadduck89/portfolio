import React from 'react';
import classes from './ProfilePage.module.css'
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const ProfilePage = () => {
    return (
        <div className={classes.main}>
            Profile
            <div className={classes.photo}>
                <img src='' alt='my photo'/>
            </div>
            <div className={classes.info}>
                <div className={classes.infoButtons}>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button>Личное</Button>
                        <Button>Программирование</Button>
                        <Button>Проекты</Button>
                    </ButtonGroup>
                </div>
                <div className={classes.infoPersonal}>
                    <h2></h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className={classes.infoProgramming}>
                    <h2></h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className={classes.infoProjects}>
                    <h2></h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;