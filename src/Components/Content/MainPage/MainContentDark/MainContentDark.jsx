import classNames from "classnames";
import classes from "../MainPage.module.css";
import React from "react";

const MainContentDark = () => {
    return (<div className={classNames( classes.main, classes.mainDark )}>
            <div className={classNames( classes.hello, classes.helloDark )}>
                <h1>Меня всё ещё зовут Михаил Дорогин.</h1>
                <h2> И это моя темная сторона разработчика</h2>
                <div className={classNames( classes.helloTextBlock, classes.helloTextBlockDark )}>
                    <p>Мне нравится создавать интерактивные и приковывающие внимание интерфейсы, используя
                        Реакт</p>
                    <p>В этом мне помогают знакомство с трюками CSS, JS и богатая фантазия</p>
                    <p>И, конечно, желание попробовать абсолютно все свистоперделки, о которых только узнаю</p>
                    <p>Если вам уже нехорошо, то переходите на вкладку Профиль, там тёмная тема на самом деле
                        бережет ваши глаза</p>
                </div>
            </div>
        </div>
    )
}

export default MainContentDark;