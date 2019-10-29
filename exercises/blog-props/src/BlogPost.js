import React from 'react'

const BlogPost = (props) => {
    let {title, subTitle, author, date} = props
    return (
        <div>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <span>Posted by {author} on {date}</span>
        </div>
    )
}


export default BlogPost