import "./css/BlogComponent.css";
import React, { useState } from "react";
import DeleteBlog from "./DeleteBlog";
import EditBlog from "./EditBlog";

//http://localhost:3001/images/blog_images/
// /https://verdant-server.onrender.com/images/blog_images/
function BlogComponent(props) {
  const [blog, setBlog] = useState(props);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showBlog, setShowBlog] = useState(true);

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const hideBlog = () => {
    setShowBlog(false);
  };
  const editBlog = (blogEdit) => {
    //console.log(blogEdit);
    setBlog(blogEdit);
    console.log("I was just updated " + blog.summary);
    console.log(blog);
  };

  return (
    <>
      {showBlog ? (
        <section className="blog center">
          <div>
            {showDeleteDialog ? (
              <DeleteBlog
                date={blog.date}
                _id={blog._id}
                closeDeleteDialog={closeDeleteDialog}
                hideBlog={hideBlog}
              />
            ) : (
              ""
            )}

            {showEditDialog ? (
              <EditBlog
                _id={blog._id}
                date={blog.date}
                description={blog.summary}
                closeEditDialog={closeEditDialog}
                editBlog={editBlog}
              />
            ) : (
              ""
            )}

            <section className="float-right columns">
              <section id="change-buttons">
                <a href="#" onClick={openEditDialog}>
                  &#9998;
                </a>
                <a href="#" onClick={openDeleteDialog}>
                  &#x2715;
                </a>
              </section>
            </section>
            <div className="columns">
              <img
                src={
                  "https://verdant-server.onrender.com/images/blog_images/" +
                  blog.image
                }
                alt={blog.date}
              />
              <div className="height-center">
                <h3>{blog.date}</h3>
              </div>
            </div>

            <p>{blog.summary}</p>
            {/* <h3>{blog._id}</h3> */}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default BlogComponent;
