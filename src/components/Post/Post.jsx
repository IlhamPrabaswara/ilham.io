import React from "react";

const Post = (
    {
        post: { 
            title,
            body,
            imgUrl,
            author
        }
    }
) => {
    console.log(title)
    return (
        <>
            <h1>{title}</h1>
            <p>{body}</p>
        </>
    )
}

export default Post