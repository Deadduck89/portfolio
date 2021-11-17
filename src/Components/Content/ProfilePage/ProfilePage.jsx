import React from 'react';
import classes from './ProfilePage.module.css'

const ProfilePage = () => {
    return (
        <div className={classes.main}>
            Profile
            <div className={classes.photo}>
                <img src='' alt=''/>
            </div>
            <div className={classes.info}>
                <div className={classes.infoPersonal}>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className={classes.infoProgramming}>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className={classes.infoProjects}>
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