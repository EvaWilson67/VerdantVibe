import { useState } from "react";

import "./css/About.css";

function About() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "01d01a06-6e66-4f6b-8522-2e9693b1dbeb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <section className="page-content">
        <h1 className="center margin"> Contact Us!</h1>

        <div id="about-section">
          <section>
            <h2>About Us</h2>
          </section>
          <div>
            <p>
              I am not good at keeping house plants or gardening. However, it is
              something that I am working towards. I don't have a lot of hobbies
              because my focus has always been my academic studies. I got into
              plant keeping because of my grandmother and I would like to keep
              the legacy going. It's okay to do hobbies your not good at (two of
              my plants are activley struggling because they are brats), so this
              project is a great way to represent that although you may not be
              good at something, the struggle in that hobby can be something to
              look forward to.
            </p>
          </div>
        </div>

        <div id="contact-section" className="center">
          <section>
            <h2>Contact Us</h2>
            <div>
              <form onSubmit={onSubmit}>
                <div id="txt-information" className="columns">
                  <div className="contact-text-box">
                    <label for="txt-name">Enter Name:</label>
                    <input id="txt-name" type="text" name="name" required />
                  </div>
                  <div className="contact-text-box">
                    <label for="txt-email">Enter Email:</label>
                    <input type="email" name="email" required />
                  </div>
                </div>

                <div className="bottom-text">
                  <div className="contact-text-box">
                  <label for="txt-box">How can we help?</label>
                  <textarea name="message" required></textarea>
                  </div>
                  <div className="float-right btn-submit">
                  <button type="submit">Submit Form</button>

                  </div>

                </div>

              </form>
              <span>{result}</span>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default About;
