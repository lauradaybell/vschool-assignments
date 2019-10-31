import React from 'react'
import BlogPost from './BlogPost'
import List from './List.json'

const BlogList = () => {
    const mappedPosts = List.map(((blogPost, i) => <BlogPost key = {i + blogPost.title} 
                                                   title = {blogPost.title}
                                                   author = {blogPost.author}
                                                   date = {blogPost.date}
                                                   />))
                                              
    return (
        <div className='container'>
            {mappedPosts}
        </div>
    )
}


export default BlogList