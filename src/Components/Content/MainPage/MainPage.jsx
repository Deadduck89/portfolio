import React, {useContext} from 'react';
import classes from './MainPage.module.css';
import Avatar from "@mui/material/Avatar";
import avatar from "../../../Assets/Images/3vjrzd2.png";
import MyThemeContext from "../../Common/ThemeContext/ThemeContext";
import classNames from "classnames";

const MainPage = (props) => {

    const value = useContext( MyThemeContext );
    const theme = value.theme;

    if (theme === 'light') {
        return (
            <div className={classes.main}>
                <div className={classes.hello}>
                    <h1>Привет, меня зовут Михаил Дорогин.</h1>
                    <h2> Я фронт энд разработчик</h2>
                    <div className={classes.helloTextBlock}>
                        <p>Мне нравится создавать простые, доступные и функциональные интерфейсы для сайтов, используя
                            Реакт</p>
                        <p>В этом мне помогают уверенные знания CSS, SASS, SCSS и опыт верстки по макетам</p>
                        <p>И, конечно, пользование такими библиотеками, как Material UI, Formic, React-Router, Redux,
                            Redux
                            Thunk</p>
                        <p>Об остальном вы можете прочитать во вкладке Профиль, а пока попробуйте сдвинуть ползунок в
                            шапке
                            и перейти на темную сторону</p>
                    </div>
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
    } else {
        return (<div className={classNames(classes.main, classes.mainDark)}>
                <div className={classNames(classes.hello, classes.helloDark)}>
                    <h1>Меня всё ещё зовут Михаил Дорогин.</h1>
                    <h2> И это моя темная сторона разработчика</h2>
                    <div className={classNames(classes.helloTextBlock, classes.helloTextBlockDark)}>
                        <p>Мне нравится создавать интерактивные и приковывающие внимание интерфейсы, используя
                            Реакт</p>
                        <p>В этом мне помогают знакомство с трюками CSS, JS и богатая фантазия</p>
                        <p>И, конечно, желание попробовать абсолютно все свистоперделки, о которых только узнаю</p>
                        <p>Если вам уже нехорошо, то переходите на вкладку Профиль, там тёмная тема на самом деле
                            бережет ваши глаза</p>
                    </div>
                </div>
                <div className={classNames(classes.avatar, classes.avatarDark)}>
                    <Avatar
                        alt='my avatar'
                        src={avatar}
                        sx={{width: 300, height: 300}}
                    />
                </div>
            </div>
        )
    }
}

export default MainPage;