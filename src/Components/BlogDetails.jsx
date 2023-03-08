import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { blogsData } from '../data';

const BlogDetails = (props) => {
    const location = useLocation();
    // const { title } = useParams();
    // const location = useLocation();
    // console.log("Location: ", location);
    // const [bodyData, setBodyData] = useState("");

    // useEffect(() => {
    //     const blogData = blogsData.filter((blog) => blog.title === title);
    //     setBodyData(blogData[0].body);
    // }, [])

    return (
        <article>
            <h2>Title: {location.state.title}</h2>
            <p>{location.state.body}</p>
        </article>
    )
}

export default BlogDetails