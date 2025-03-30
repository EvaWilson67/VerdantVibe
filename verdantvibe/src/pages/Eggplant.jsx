import "./css/House_plant.css";

import GardeningPlant from "../components/GardeningPlant";

function Eggplant() {
  return (
    <main className="page-content">
      <GardeningPlant
        name="Eggplant"
        image1="images/garden_images/eggplantlink.jpg"
        description=" Technically a berry, the eggplant is related to tomatoes, chili peppers, and potatoes. It
                            was originally domesticated from wild nightshade species, such as thorn or bitter apple,
                            likely through two independent domestications—one in South Asia and another in East Asia.
                            There is still no consensus on its exact origin, with some sources suggesting South Asia,
                            where it continues to grow wild, while others point to Africa. Eggplant has been cultivated
                            in southern and eastern Asia since prehistoric times. (wikipedia)"
        research="Here are some articles that I got some of the above
                            information/more research you can do on your own."
        link1="https://en.wikipedia.org/wiki/Eggplant"
        link1name="Wikipedia"
        link2="https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2017.01484/full"
        link2name="Frontiersin, origin to eggpalnt"
        link3="https://gardeningsolutions.ifas.ufl.edu/plants/edibles/vegetables/eggplant/"
        link3name="Gardening
                                    Solutions, how to care for eggplants"
        care1=" Eggplants thrive in sunny warm locations. Eggplants need at least six to eight hours of
                            direct sunlight per day."
        li1="Direct Sunlight"
        li2="Well Watered, soil is consistenly moist"
        li3="Stable temperatures, 75 and up."
        care2="Fertilize regularly to support strong growth."
        image2="images/garden_images/eggplantlink2.jpg"
      />
    </main>
  );
}

export default Eggplant;
