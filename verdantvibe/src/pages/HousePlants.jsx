import "./css/HousePlants.css";

import HousePlant from "../components/Houseplant";

function HousePlants() {
  return (
    <main className="page-content">
      <h1 className="center house-plants"> Basic House Plants</h1>
      <h3 class="center house-plants">Some of the Best Plants to Own Based on Level of Experience</h3>

      <section className="columns three center">
        <div className="house-plants">
          <h3>Easy</h3>
          <div className="house-plants-information">
            <HousePlant
              url="#"
              name="Snake Plant"
              description=" Snake plants are low-maintenance indoor plants with tall, upright leaves. They
                                        thrive in various lighting conditions and are known for purifying the air.
                                        Perfect for beginners, they require little attention."
              image="images/house_images/snakeplant.jpg"
            />
            <HousePlant
              url="#"
              name="Arrow-head"
              description=" The arrowhead plantis a fast-growing vine with arrow-shaped leaves (as one can
                                        guess) and varies in color. It
                                        thrives in moderate/indirect light and humidity, and is one of my favorites!"
              image="images/house_images/arrowhead.jpg"
            />
            <HousePlant
              url="#"
              name="Golden Pythos"
              description="  Golden Pothos is a low-maintenance, vine with heart shaped glossy leaves that
                                        has
                                        yellow/golden variegation. It thrives in indirect light and can
                                        tolerate low light. I have a cutting from my grandmothers plant that is doing
                                        well!"
              image="images/house_images/goldenpothos.jpg"
            />
          </div>
        </div>

        <div className="house-plants">
          <h3>Medium</h3>
          <div className="house-plants-information">
            <HousePlant
              url="#"
              name="Swiss Cheese"
              description="Tropical vine known for its unique, hole-punched leaves. It thrives in bright,
                                        indirect light but can still tolerate low light level conditions. It even enjoys
                                        humid conditions."
              image="images/house_images/swisscheese.jpg"
            />
            <HousePlant
              url="#"
              name="Peace Lily"
              description="  A popular indoor plant known for its glossy dark green leaves and elegant white
                                        flowers.
                                        It thrives in low to moderate light and requires only occasional watering. Add's
                                        humitity to that
                                        air."
              image="images/house_images/peacelily.jpg"
            />
            <HousePlant
              url="#"
              name="Parlor Palm"
              description=" Known to be an 'elegant' indoor plant with feathery fronds and ability to thrine
                                        in
                                        low light conditions. It may be considered to be on the easier end, but due to
                                        it's
                                        size it sometimes requires more maintance than others."
              image="images/house_images/parlorpalm.jpg"
            />
          </div>
        </div>

        <div className="house-plants">
          <h3>Hard</h3>
          <div className="house-plants-information">
            <HousePlant
              url="#"
              name="Bonsai Trees"
              description=" One of the harder to care for, stating from personal experience. They aren't
                                        genetically dwarf, and require egular pruning, proper watering, and providing
                                        the right environment to maintain its shape and health."
              image="images/house_images/bonsai.jpg"
            />

            <HousePlant
              url="#"
              name="Hoya"
              description=" A trailing vine with thick, waxy leaves. It can produce fragrant, star-shaped
                                        flowers. It thrives in bright, indirect light. The reason why I call it somewhat
                                        intermediate is only because it
                                        will flower under the right care."
              image="images/house_images/hoya.jpg"
            />

            <HousePlant
              url="#"
              name="Prayer plants"
              description=" Striking foliage, with vibrant patterns and the unique ability to fold its
                                        leaves at
                                        night, resembling hands in prayer. It thrives in indirect light and prefers high
                                        humidity, making it ideal for indoor spaces with consistent moisture."
              image="images/house_images/prayerplant.jpg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HousePlants;
