import React, {useContext, useState} from 'react';
import classes from './ProfilePage.module.css'
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import ProfileInfoContainer from "./ProfileInfoContainer/ProfileInfoContainer";
import photo from '../../../Assets/Images/3vjrzd2.png';
import MyThemeContext from "../../Common/ThemeContext/ThemeContext";

const ProfilePage = () => {

    const value = useContext( MyThemeContext );
    const theme = value.theme;

    let mainStyle = classes.main;

    const isLight = (theme === 'light') ?  (mainStyle = classes.main) : (mainStyle = classes.mainDark);

    const [page,setPage] = useState('personalInfo');

    const changePagePersonal = () => {
        setPage('personalInfo')
    };
    const changePageProjects = () => {
        setPage('projectsInfo')
    };

    return (
        <div className={mainStyle}>
            <div className={classes.photo}>
                <img src={photo} alt='me'/>
            </div>
            <div className={classes.info}>
                <div className={classes.infoButtons}>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button onClick={changePagePersonal}>О себе</Button>
                        <Button onClick={changePageProjects}>Проекты</Button>
                    </ButtonGroup>
                </div>
                <ProfileInfoContainer page={page}/>
            </div>
        </div>
    )
}

export default ProfilePage;