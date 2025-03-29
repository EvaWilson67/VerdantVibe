import "./css/Gardening.css";

import Garden from "../components/Garden";

function Gardening() {
  return (
    <main class="page-content">
      <h1 class="center gardening-col"> Gardening</h1>
      <div class="center">
        <section class="gardening-col">
          <h2>Vegetables</h2>
          <div class="columns three gallery">
            <Garden
              url="#"
              name="Kabocha"
              image="images/garden_images/squash.jpg"
            />

            <Garden
              url="#"
              name="Eggplants"
              image="images/garden_images/eggplant.jpg"
            />

            <Garden
              url="#"
              name="Corn"
              image="images/garden_images/corn.jpg"
            />
          </div>
        </section>

        <section class="gardening-col">
          <h2>Fruits</h2>
          <div class="columns three gallery">
          <Garden
              url="#"
              name="Peaches"
              image="images/garden_images/peaches.jpg"
            />
            <Garden
              url="#"
              name="Blackberry"
              image="images/garden_images/blackberry.jpg"
            />
            <Garden
              url="#"
              name="Blueberries"
              image="images/garden_images/blueberries.jpg"
            />

          </div>
        </section>

        <section class="gardening-col">
          <h2>Herbs</h2>
          <div class="columns three gallery">
          <Garden
              url="#"
              name="Dill"
              image="images/garden_images/dill.jpg"
            />
            <Garden
              url="#"
              name="Basil"
              image="images/garden_images/basil.jpg"
            />
            <Garden
              url="#"
              name="Mint"
              image="images/garden_images/mint.jpg"
            />

          </div>
        </section>

        <section class="gardening-col">
          <h2>Flowers</h2>
          <div class="columns three gallery">
          <Garden
              url="#"
              name="Sunflower"
              image="images/garden_images/sunflower.jpg"
            />
            <Garden
              url="#"
              name="Carnations"
              image="images/garden_images/carnations.jpg"
            />
            <Garden
              url="#"
              name="Lavender"
              image="images/garden_images/lavendar.jpg"
            />

          </div>
        </section>
      </div>
    </main>
  );
}

export default Gardening;
