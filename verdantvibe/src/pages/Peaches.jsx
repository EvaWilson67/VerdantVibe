import "./css/House_plant.css";

import GardeningPlant from "../components/GardeningPlant";
function Peaches() {
  return (
<main className="page-content">
      <GardeningPlant
        name="Peaches"
        image1="images/garden_images/peaches2.jpg"
        description="The peach probably originated in China and then spread westward through Asia to the
                            Mediterranean countries and later to other parts of Europe. The Spanish explorers took the
                            peach to the New World, and as early as 1600 the fruit was found in Mexico.(britannica) A
                            self-fertile fruit tree, so you only need one plant to produce fruit though it may take
                            three to four years before it does so. The deciduous peach tree grows best in full sunlight,
                            acidic and sandy soil, and moderate temperatures, but not the tropical temperatures that are
                            necessary for citrus fruits like lemons. (the spruce)"
        research="Here are some articles that I got some of the above
                            information/more research you can do on your own."
        link1="https://www.britannica.com/plant/peach"
        link1name="britannica"
        link2="https://www.thespruce.com/how-to-grow-and-care-for-peach-trees-4589455"
        link2name="How to
                                    Grow and Care for Peach Trees"
        link3="https://marinmg.ucanr.edu/EDIBLES/EDIBLES_GROW_SHEETS/?uid=78&ds=996"
        link3name="Edibles
                                    Grow Sheets"
        care1="Peaches like moderate temperatures and generally grow best in USDA growing zones 5a to 8a.
                            However, you can select more cold or heat-tolerant varieties to expand the growing zone to
                            include zones 4 and 9. (thespruce)"
        li1="Direct Sunlight"
        li2="Well Watered, soil is consistenly moist"
        li3="Plant a peach tree in the late winter or early spring while the tree is dormant"
        care2="There are hundreds of peach cultivars to choose from. While peach trees can produce
                            clingstone or freestone fruits, most varieties sold for home gardens are freestone."
        image2="images/garden_images/peaches.jpg"
      />
    </main>  )

}

export default Peaches;
