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
              url="/kabocha"
              name="Kabocha"
              image="images/garden_images/squash.jpg"
            />

            <Garden
              url="/eggplant"
              name="Eggplants"
              image="images/garden_images/eggplant.jpg"
            />

            <Garden
              url="/corn"
              name="Corn"
              image="images/garden_images/corn.jpg"
            />
          </div>
        </section>

        <section class="gardening-col">
          <h2>Fruits</h2>
          <div class="columns three gallery">
          <Garden
              url="/peaches"
              name="Peaches"
              image="images/garden_images/peaches.jpg"
            />
            <Garden
              url="/blackberry"
              name="Blackberry"
              image="images/garden_images/blackberry.jpg"
            />
            <Garden
              url="/blueberries"
              name="Blueberries"
              image="images/garden_images/blueberries.jpg"
            />

          </div>
        </section>

        <section class="gardening-col">
          <h2>Herbs</h2>
          <div class="columns three gallery">
          <Garden
              url="/dill"
              name="Dill"
              image="images/garden_images/dill.jpg"
            />
            <Garden
              url="/basil"
              name="Basil"
              image="images/garden_images/basil.jpg"
            />
            <Garden
              url="/mint"
              name="Mint"
              image="images/garden_images/mint.jpg"
            />

          </div>
        </section>

        <section class="gardening-col">
          <h2>Flowers</h2>
          <div class="columns three gallery">
          <Garden
              url="/sunFlower"
              name="Sunflower"
              image="images/garden_images/sunflower.jpg"
            />
            <Garden
              url="/carnation"
              name="Carnations"
              image="images/garden_images/carnations.jpg"
            />
            <Garden
              url="/lavendar"
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
