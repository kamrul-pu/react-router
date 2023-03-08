import React from 'react'
import { Link } from 'react-router-dom';

const truncateString = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num) + " ..."
    } else {
        return str;
    }
}
const Blog = (props) => {
    return (
        <article>
            <h1>ID: {props.blog.id}</h1>
            <h2>Title: {props.blog.title}</h2>
            <p>Descripton: {truncateString(props.blog.body, 100)}</p>
            <Link to={props.blog.title}>Learn More</Link>
        </article>
    )
}

export default Blog;

