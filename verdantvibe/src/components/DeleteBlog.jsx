import "./css/Dialog.css";
import React, { useState } from "react";

const DeleteBlog = (props) => {
  const [result, setResult] = useState("");

  const deleteBlog = async () => {
    const response = await fetch(
      `https://verdant-server.onrender.com/api/blogs/${props._id}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 200) {
      setResult("House plan deleted successfully");
      props.closeDeleteDialog();
      props.hideBlog();
    } else {
      setResult("Sorry, we couldn't delete your blog right now");
    }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDeleteDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete {props.date}</h3>
            <section>
              <button onClick={props.closeDeleteDialog}>No</button>
              <button id="delete-btn" onClick={deleteBlog}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBlog;
