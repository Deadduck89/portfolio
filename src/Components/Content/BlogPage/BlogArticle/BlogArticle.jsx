import React from "react";

const BlogArticle = (props) => {
    return (<div>
            <h2>{props.headline}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default BlogArticle;