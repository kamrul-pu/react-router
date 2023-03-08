import React, { useState } from 'react';

import { blogsData } from '../data';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState(blogsData);
    return (
        <div>
            <section>
                {blogs.map((blog) => <Blog blog={blog} key={blog.id} />)}
            </section>

        </div>
    )
}

export default Blogs;