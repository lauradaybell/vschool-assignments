import React from 'react'

const BlogPost = (props) => {
    let {title, subTitle, author, date} = props
    return (
        <div className="post">
            <h1 className="title">{title}</h1>
            <h2 className='subtitle'>{subTitle}</h2>
            <span>Posted by {author} on {date}</span>
        </div>
    )
}


export default BlogPost