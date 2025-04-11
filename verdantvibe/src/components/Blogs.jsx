import axios from "axios";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import BlogComponent from "./BlogCompontent";
import AddBlog from "./AddBlog";

// /"https://verdant-server.onrender.com/api/blog"
//"http://localhost:3001/api/blog"
const Blogs = () => {
  const [blogs, setBlog] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);

  //after page loaded to asynch json retrieval
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://verdant-server.onrender.com/api/blog"
      );
      setBlog(response.data);
    })();
  }, []);

  const openAddDialog = () => {
    setShowAddDialog(true);
  };

  const closeAddDialog = () => {
    console.log("I'm in the close method");
    setShowAddDialog(false);
  };

  const updateBlog = (housePlan) => {
    setBlog((houses) => [...houses, housePlan]);
  };

  return (
    <>
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
      <section className="center">
        <div class="semi-circle"></div>

        <div className=" button-information">
          <h2>Want to add a Blog?</h2>
          <button id="add-button" onClick={openAddDialog}>
            Add A Blog
          </button>
          <p>DO IT!!!</p>
          {showAddDialog ? (
            <AddBlog closeAddDialog={closeAddDialog} updateBlog={updateBlog} />
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};

export default Blogs;
