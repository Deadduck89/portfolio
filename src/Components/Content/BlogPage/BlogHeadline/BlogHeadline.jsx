import React from "react";
import {NavLink} from "react-router-dom";
import classes from '../BlogPage.module.css'

const BlogHeadline = (props) => {
    return (<div>

            <li><NavLink className={classes.blogListElement} activeStyle={{color: "#A9A9A9"}}
                         to={'/blog/' + props.id}>
                {props.id}. {props.headline}
            </NavLink>
            </li>
        </div>
    )
}

export default BlogHeadline;