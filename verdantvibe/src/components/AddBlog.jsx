import "./css/BlogComponent.css";

import "./css/Dialog.css";

import React, { useState } from "react";

const AddBlog = (props) => {
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState("");
  const [inputs, setInputs] = useState({});

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  //"https://verdant-server.onrender.com/api/blogs"
  //"http://localhost:3001/api/blogs"
  const addToServer = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    console.log(...formData);

    const response = await fetch(
      "https://verdant-server.onrender.com/api/blogs",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.status === 200) {
      setResult("Blog added successfully");
      event.target.reset();
      props.closeAddDialog();
      props.updateBlog(await response.json());
    } else {
      console.log("Error adding blog", response);
      setResult(response.message);
    }
  };

  return (
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeAddDialog}
          >
            &times;
          </span>
          <form id="add-property-form" onSubmit={addToServer}>
            <h3>Create a New Blog</h3>

            <div className="adding-div columns gallery">
              <section className="image-section">
                <p>Upload Image</p>

                <p id="img-prev-section">
                  <img
                    id="img-prev"
                    src={
                      inputs.img != null ? URL.createObjectURL(inputs.img) : ""
                    }
                    alt=""
                  />
                </p>
                <p id="img-upload">
                  <input
                    type="file"
                    id="img"
                    name="img"
                    onChange={handleImageChange}
                    accept="image/*"
                    required
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

export default AddBlog;
