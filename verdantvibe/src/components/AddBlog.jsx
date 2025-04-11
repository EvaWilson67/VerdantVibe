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

  //"https://verdant-server.onrender.com/api/blog"
  //"http://localhost:3001/api/blog"
  const addToServer = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    console.log(...formData);

    const response = await fetch(
      "https://verdant-server.onrender.com/api/blog",
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
      console.log("Error adding house", response);
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
          {/* /onSubmit={addToServer} */}
          <form id="add-property-form" onSubmit={addToServer}>
            <h3>Create New Property</h3>

            <p>
              <label htmlFor="date">Enter Date: (mm-dd-yy)</label>
              <input type="date" id="date" name="date" required />

            </p>

            <p>
              <label htmlFor="summary">Summary:</label>
              <input
                type="text"
                id="summary"
                name="summary"
                required
                min="3"
              ></input>
            </p>

            {/* <section className="columns">
              <p id="img-prev-section">
                {prevSrc !== "" ? (
                  <img id="img-prev" src={prevSrc} alt=""></img>
                ) : (
                  ""
                )}
              </p>

              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  onChange={uploadImage}
                />
              </p>
            </section> */}

            <section className="columns">
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
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </p>
            </section>

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
