import React, {useContext} from 'react';
import classes from './MainPage.module.css';
import Avatar from "@mui/material/Avatar";
import avatar from "../../../Assets/Images/3vjrzd2.png";
import MyThemeContext from "../../Common/ThemeContext/ThemeContext";
import MainContentLight from "./MainContentLight/MainContentLight";
import MainContentDark from "./MainContentDark/MainContentDark";

const MainPage = (props) => {

    const value = useContext( MyThemeContext );
    const theme = value.theme;
    let mainStyle = (theme === 'light') ?  classes.main : classes.mainDark;
    let mainContent = (theme === 'light') ?  <MainContentLight/> : <MainContentDark/>;

    return (
        <div className={mainStyle}>
            {mainContent}
            <div className={classes.avatar}>
                <Avatar
                    alt='my avatar'
                    src={avatar}
                    sx={{width: 300, height: 300}}
                />
            </div>
        </div>
    )
}

export default MainPage;