import React, {useContext} from 'react';
import classes from './BlogPage.module.css'
import MyThemeContext from "../../Common/ThemeContext/ThemeContext";

const BlogPage = () => {

    const value = useContext( MyThemeContext );
    const theme = value.theme;

    let blogStyle = (theme === 'light') ?  (classes.blog) : (classes.blogDark);


    return (
        <div className={blogStyle}>
            <div className={classes.blogList}>Список статей</div>
            <div className={classes.blogText}>Статья</div>
        </div>
    )
}

export default BlogPage;