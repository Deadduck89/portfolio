import React, {useContext} from 'react';
import classes from './MainPage.module.css';
import Avatar from "@mui/material/Avatar";
import avatar from "../../../Assets/Images/3vjrzd2.png";
import MyThemeContext from "../../Common/ThemeContext/ThemeContext";
import classNames from "classnames";
import MainContentLight from "./MainContentLight/MainContentLight";
import MainContentDark from "./MainContentDark/MainContentDark";

const MainPage = (props) => {

    const value = useContext( MyThemeContext );
    const theme = value.theme;

    return (
        <div className={classes.main}>

            <div className={classes.hello}>
                {(theme === 'light') &&
                <MainContentLight/>
                }
                {(theme === 'dark') &&
                <MainContentDark/>
                }
            </div>

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