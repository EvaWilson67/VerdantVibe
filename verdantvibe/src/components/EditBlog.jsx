import "./css/Dialog.css";
import React, { useState } from "react";

const EditBlog = (props) => {
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState("");

  const uploadImage = (event) => {
    setPrevSrc(URL.createObjectURL(event.target.files[0]));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    console.log(...formData);

    const response = await fetch(
      `https://verdant-server.onrender.com/api/blogs/${props._id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (response.status === 200) {
      setResult("Blog editted successfully");
      event.target.reset();
      props.closeEditDialog();
      props.editBlog(await response.json());
    } else {
      setResult("Error editting your blog");
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeEditDialog}
          >
            &times;
          </span>
          <form id="edit-property-form" onSubmit={onSubmit}>
            <h3>Edit An Existing Blog</h3>
            <div className="div-forms columns gallery">
              <section className="image-section">
                <p>Upload Image</p>
                <p id="img-prev-section">
                  {prevSrc !== "" ? <img id="img-prev" src={prevSrc}></img> : ""}
                </p>
                <p id="img-upload">
                  <input
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                    onChange={uploadImage}
                  />
                </p>
              </section>
              <div className="text-div">
                <p>
                  <label htmlFor="date">Pick the date:</label>
                  <input type="date" id="date" name="date" required />
                </p>

                <div className="summary-p">
                  <p>Summary</p>
                  <textarea
                    id="summary"
                    name="summary"
                    required
                    minLength="3"
                  ></textarea>
                </div>
              </div>
            </div>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
