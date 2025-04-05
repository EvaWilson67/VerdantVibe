import "./css/House_plant.css";
import GardeningPlant from "../components/GardeningPlant";

function Blackberry() {
  return (
    <main className="page-content">
      <GardeningPlant
        name="Blackberries"
        image1="blackberry2.jpg"
        description="  They likely came from temperate regions in the Northern Hemisphere before spreading across
                            the globe. Blackberries were thought to be a part of the hunter-gatherers’ diets across
                            the world, and many indigenous (including Native Americans) have eaten blackberries for
                            centuries. One of the earliest known instances of humans enjoying blackberries is estimated
                            to be from approximately 500 BC."
        research=" Here are some articles that I got some of the above information/more research you can do on
                            your own."
        link1="https://www.driscolls.com.au/blog/the-history-of-the-blackberry"
        link1name="THE HISTORY
                                    OF THE BLACKBERRY"
        link2="https://www.arborday.org/planting-your-tree/blackberry-planting-care-instructions"
        link2name="Blackberry
                                    Planting & Care Instructions"
        link3="https://www.thespruce.com/how-to-grow-and-care-for-blackberries-4589374"
        link3name="How to
                                    Grow and Care for Blackberries"
        care1=" Blackberries need regular watering, especially during dry spells. They require deep,
                            consistent moisture, but the soil should not stay waterlogged."
        li1="Direct Sunlight"
        li2="They are adaptable to a variety of soil types but prefer well-draining"
        li3="Stable temperatures, 75 and up."
        care2=" Plant blackberry canes in early spring after the last frost."
        image2="blackberry.jpg"
      />
    </main>
  );
}

export default Blackberry;
