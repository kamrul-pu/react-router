import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogsData } from '../data';

const BlogDetails = (props) => {
    const { title } = useParams();
    const [bodyData, setBodyData] = useState("");

    useEffect(() => {
        const blogData = blogsData.filter((blog) => blog.title === title);
        setBodyData(blogData[0].body);
    }, [])

    return (
        <article>
            <h2>Title: {title}</h2>
            <p>{bodyData}</p>
        </article>
    )
}

export default BlogDetails