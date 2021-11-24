import React from "react";
import ProjectsInfo from "./ProjectsInfo/ProjectsInfo";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const ProfileInfoContainer = (props) => {

    let infoComponent = (props.page === 'personalInfo') ? <PersonalInfo/> : <ProjectsInfo/>;

    return (
        <div>
            {infoComponent}
        </div>)

}

export default ProfileInfoContainer;