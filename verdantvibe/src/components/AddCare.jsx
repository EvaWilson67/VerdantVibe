import "./css/PlantCare.css";
import "./css/Dialog.css";

import React, { useState } from "react";

const AddCare = (props) => {
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState("");

  const uploadImage = (event) => {
    setPrevSrc(URL.createObjectURL(event.target.files[0]));
  };

  // /"http://localhost:3001/api/care"
  //"https://verdant-server.onrender.com/api/care/"

  const addToServer = async (event) => {
    // event.preventDefault(); 
    setResult("Sending...");

    const formData = new FormData(event.target);
    console.log(...formData);

    const response = await fetch("http://localhost:3001/api/care/", {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
      setResult("House plan added successfully");
      event.target.reset();
      props.closeAddDialog();
    } else {
      setResult("Error adding house");
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
              <label htmlFor="name">Care Name:</label>
              <input type="text" id="name" name="name" required min="3"></input>
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
            <p>
              <label>
                Does you want the image to appear first?
                <select name="imageFirst">
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </label>
            </p>

            <section className="columns">
              <p id="img-prev-section">
                {prevSrc !== "" ? (
                  <img id="img-prev" src={prevSrc} alt=""></img>
                ) : (
                  ""
                )}
              </p>

              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                {/* onChange={uploadImage} */}
                <input
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  onChange={uploadImage}
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

export default AddCare;
