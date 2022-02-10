import React from "react";
import {useParams} from "react-router";

const BlogArticle = (props) => {
    let articleId = useParams();
    if (!articleId.id) {
        articleId.id = 1;
    }
    console.log(articleId.id)

    return (<div>
            <h2>{props.headline}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default BlogArticle;