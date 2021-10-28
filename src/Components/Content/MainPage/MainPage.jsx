import React from 'react';
import classes from './MainPage.module.css'
import Avatar from "@mui/material/Avatar";
import avatar from "../../../Assets/Images/3vjrzd2.png";

const MainPage = () => {
    return (
        <div className={classes.main}>
            <div className={classes.hello}>
                <h1>Привет, меня зовут Михаил Дорогин.</h1>
                <h2> Я фронт энд разработчик</h2>
                <div className={classes.helloTextBlock}>
                    <p>Мне нравится создавать простые, доступные и функциональные интерфейсы для сайтов, используя
                        Реакт</p>
                    <p>В этом мне помогают уверенные знания CSS, SASS, SCSS и опыт верстки по макетам</p>
                    <p>И, конечно, пользование такими библиотеками, как Material UI, Formic, React-Router, Redux, Redux Thunk</p>
                    <p>Об остальном вы можете прочитать во вкладке Профиль, а пока попробуйте сдвинуть ползунок в шапке и перейти на темную сторону</p>
                </div>
            </div>
            <div className={classes.avatar}>
                <Avatar
                    alt='my avatar'
                    src={avatar}
                    sx={{width: 200, height: 200}}
                />
            </div>
        </div>
    )
}

export default MainPage;