import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleTotalPrice }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className="md:w-2/3 grid grid-cols-3 gap-6">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleTotalPrice={handleTotalPrice}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleTotalPrice: PropTypes.func,
    handleAddToBookMark: PropTypes.func
}

export default Blogs;