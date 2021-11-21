import React, {useState} from 'react';
import classes from './ProfilePage.module.css'
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import ProfileInfoContainer from "./ProfileInfoContainer/ProfileInfoContainer";
import photo from '../../../Assets/Images/3vjrzd2.png';

const ProfilePage = () => {

    const [page,setPage] = useState('personalInfo');

    const changePagePersonal = () => {
        setPage('personalInfo')
    };
    const changePageProgramming = () => {
        setPage('programmingInfo')
    };
    const changePageProjects = () => {
        setPage('projectsInfo')
    };

    return (
        <div className={classes.main}>
            <div className={classes.photo}>
                <img src={photo} alt='me'/>
            </div>
            <div className={classes.info}>
                <div className={classes.infoButtons}>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button onClick={changePagePersonal}>Личное</Button>
                        <Button onClick={changePageProgramming}>Программирование</Button>
                        <Button onClick={changePageProjects}>Проекты</Button>
                    </ButtonGroup>
                </div>
                <ProfileInfoContainer page={page}/>
            </div>
        </div>
    )
}

export default ProfilePage;