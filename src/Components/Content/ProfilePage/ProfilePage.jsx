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

    let mainStyle = (theme === 'light') ?  (classes.main) : (classes.mainDark);

    const [page,setPage] = useState('personalInfo');

    const changePage = (page) => {
        setPage(page)
    };

    return (
        <div className={mainStyle}>
            <div className={classes.photo}>
                <img src={photo} alt='me'/>
            </div>
            <div className={classes.info}>
                <div className={classes.infoButtons}>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button onClick={() => {changePage('personalInfo')}} title="О себе">О себе</Button>
                        <Button onClick={() => {changePage('projectsInfo')}} title="Мои проекты">Проекты</Button>
                    </ButtonGroup>
                </div>
                <ProfileInfoContainer page={page}/>
            </div>
        </div>
    )
}

export default ProfilePage;