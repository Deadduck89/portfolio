import React from "react";
import classes from "../../ProfilePage.module.css";

const ProjectsInfo = () => {
    return (
        <div className={classes.infoProjects}>
            <h2>Проекты</h2>
            <ul>
                <li>
                    <a href='https://deadduck89.github.io/react-social-network-demo/'>Проект социальной сети на React и
                        Redux</a>
                    <p>Для логина используйте тестовый аккаунт: Email:free@samuraijs.com Password: free</p>
                </li>
                <li>
                    <a href='https://deadduck89.github.io/adaptive-landing-demo/'>Проект с применением адаптивной
                        верстки, SASS и Bootstrap</a>
                </li>
                <li>
                    <a href='https://pulse.mdorogin.ru/'>Одностраничник с применением БЭМ, SCSS, форм, google maps API,
                        модальных окон с возможностью отправки заявки на e-mail</a>
                </li>
            </ul>
        </div>
    )
}

export default ProjectsInfo;