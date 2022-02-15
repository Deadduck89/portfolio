import React from "react";
import {NavLink} from "react-router-dom";
import classes from '../BlogPage.module.css'

const BlogHeadline = (props) => {
    return (<div>
            <ul>
                <li><NavLink className={classes.blogListElement} activeStyle={{color:"#A9A9A9"}}  to={'/blog/' + props.id}><h3>{props.headline}</h3></NavLink></li>
            </ul>
        </div>
    )
}

export default BlogHeadline;