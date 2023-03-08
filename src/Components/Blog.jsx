import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const truncateString = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num) + " ..."
    } else {
        return str;
    }
}
const Blog = (props) => {
    const { id, title, body } = props.blog;
    return (
        <article>
            <h1>ID: id</h1>
            <h2>Title: {title}</h2>
            <p>Descripton: {truncateString(body, 100)}</p>
            <Link to={title} state={{ id, title, body }}>Learn More</Link>
        </article>
    )
}

export default Blog;

