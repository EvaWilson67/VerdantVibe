import "./css/Care.css";

import CarePlant from "../components/CarePlant";


function Care() {
  return (
    <main className="page-background">
      <section id="care-instructions" className="page-content page-background">
        <h1>Basic Plant Instructions</h1>
        <CarePlant />
      </section>
    </main>
  );
}

export default Care;
