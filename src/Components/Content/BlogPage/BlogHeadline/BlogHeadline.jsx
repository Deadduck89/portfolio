import React from "react";
import {NavLink} from "react-router-dom";

const BlogHeadline = (props) => {
    return (
        <NavLink to={'/blog/' + props.id}><h3>{props.headline}</h3></NavLink>
    )
}

export default BlogHeadline;