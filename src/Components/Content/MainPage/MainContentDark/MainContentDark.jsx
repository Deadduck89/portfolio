import classes from "../MainPage.module.css";
import React from "react";
import styles from './MainContentDark.module.css';

const MainContentDark = () => {
    return (
            <div className={classes.hello}>
                <h1 className={styles.h1}>Меня всё ещё зовут Михаил Дорогин.</h1>
                <h2 className={styles.h2}> И это моя темная сторона разработчика</h2>
                <div className={styles.helloTextBlockDark}>
                    <p>Мне нравится создавать интерактивные и приковывающие внимание интерфейсы, используя
                        Реакт</p>
                    <p>В этом мне помогают знакомство с трюками CSS, JS и богатая фантазия</p>
                    <p>И, конечно, желание попробовать абсолютно все свистоперделки, о которых только узнаю</p>
                    <p>Если вам уже нехорошо, то переходите на вкладку Профиль, там тёмная тема на самом деле
                        бережет ваши глаза</p>
                </div>
            </div>
    )
}

export default MainContentDark;