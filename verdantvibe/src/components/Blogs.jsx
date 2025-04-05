import axios from "axios";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import BlogComponent from "./BlogCompontent";

const Blogs = () => {
  const [blogs, setBlog] = useState([]);

  //after page loaded to asynch json retrieval
  useEffect(() => {
    (async () => {
      const response = await axios.get("https://verdant-server.onrender.com/api/blog");
      setBlog(response.data);
    })();
  }, []);

  return (
    <section id="blog" className="two columns gallery">
      {blogs.map((blog) => (
        <BlogComponent
          _id="1"
          date={blog.date}
          description={blog.summary}
          image={blog.image}
          
        />
      ))}
    </section>
  );
};

export default Blogs;
