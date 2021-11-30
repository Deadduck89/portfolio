import React, {useContext} from 'react';
import classes from './BlogPage.module.css'
import MyThemeContext from "../../Common/ThemeContext/ThemeContext";
import BlogHeadline from "./BlogHeadline/BlogHeadline";
import BlogArticle from "./BlogArticle/BlogArticle";

const BlogPage = (props) => {

    let state = props.blogPage;

    let headlineElement = state.articles.map(
        headline => <BlogHeadline key={headline.id}
                                  headline={headline.headline}
                                  id={headline.id}/>
    );

    let articleElement = state.articles.map(
        article => <BlogArticle key={article.id}
                                headline={article.headline}
                                text={article.text}
                                id={article.id}/>
    );

    const value = useContext( MyThemeContext );
    const theme = value.theme;

    let blogStyle = (theme === 'light') ? (classes.blog) : (classes.blogDark);


    return (
        <div className={blogStyle}>
            <div className={classes.blogList}>{headlineElement}</div>
            <div className={classes.blogText}>{articleElement}</div>
        </div>
    )
}

export default BlogPage;

