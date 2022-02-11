import React from "react";
import {useParams} from "react-router";
import classes from '../BlogPage.module.css'

const BlogArticle = (props) => {
    let articleAddress = useParams();
    if (!articleAddress.id) {
        articleAddress.id = 1;
    }

    let blogPost = props.articles.find(post => post.id === parseInt(articleAddress.id))


    return (<div>
            <h1>{blogPost.headline}</h1>
            <p className={classes.blogArticleText} dangerouslySetInnerHTML={{__html: blogPost.text}}/>
        </div>
    )
}

export default BlogArticle;