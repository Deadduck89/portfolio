import React from "react";
import {useParams} from "react-router";

const BlogArticle = (props) => {
    let articleAddress = useParams();
    if (!articleAddress.id) {
        articleAddress.id = 1;
    }

    let blogPost = props.articles.find(post => post.id === parseInt(articleAddress.id))


    return (<div>
            <h2>{blogPost.headline}</h2>
            <p>{blogPost.text}</p>
        </div>
    )
}

export default BlogArticle;