import React from "react";
import ProgrammingInfo from "./ProgrammingInfo/ProgrammingInfo";
import ProjectsInfo from "./ProjectsInfo/ProjectsInfo";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const ProfileInfoContainer = (props) => {

    let infoComponent = '';

    switch ( props.page ) {
        case 'programmingInfo':
            infoComponent = <ProgrammingInfo/>;
            break;

        case 'projectsInfo':
            infoComponent = <ProjectsInfo/>;
            break;
        default:
            infoComponent = <PersonalInfo/>;
            break;
    }
    return (
        <div>
            {infoComponent}
        </div>)

}

export default ProfileInfoContainer;