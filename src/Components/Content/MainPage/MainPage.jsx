import React, {useContext} from 'react';
import classes from './MainPage.module.css';
import Avatar from "@mui/material/Avatar";
import avatar from "../../../Assets/Images/3vjrzd2.png";
import MyThemeContext from "../../Common/ThemeContext/ThemeContext";
import MainContentLight from "./MainContentLight/MainContentLight";
import MainContentDark from "./MainContentDark/MainContentDark";
import classNames from "classnames";

const MainPage = (props) => {

    const value = useContext( MyThemeContext );
    const theme = value.theme;
    let mainStyle = '';
    let mainContent = <MainContentLight/>;

    let isLight = (theme === 'light') ? (mainStyle = classes.main, mainContent =
        <MainContentLight/>) : (mainStyle = classNames( classes.main, classes.mainDark ), mainContent =
        <MainContentDark/>);

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