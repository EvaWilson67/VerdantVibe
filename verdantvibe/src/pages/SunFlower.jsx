import "./css/House_plant.css";

import GardeningPlant from "../components/GardeningPlant";
function SunFlower() {
  return (
    <main className="page-content">
      <GardeningPlant
        name="Sunflower"
        image1="images/garden_images/sunflower2.jpg"
        description="Native Americans cultivated the sunflower from its original bushy, multi-headed type to
                            produce a single-stemmed plant bearing a large flower."
        research=" Here are some articles that I got some of the above
                            information/more research you can do on your own."
        link1="https://www.southernliving.com/garden/flowers/how-to-grow-sunflowers"
        link1name="How To
                                    Grow And Care For Sunflowers"
        link2="https://www.almanac.com/plant/sunflowers"
        link2name="Planting, Growing, and Caring for
                                    Sunflowers"
        link3="https://nuseed.com/eu/history-of-the-sunflower/"
        link3name="History of the sunflower"
        care1="Tall sunflower varieties, especially those that grow to be 8-12 feet tall, may need staking
                            or support to keep them upright, especially in windy areas. Use stakes or poles to prevent
                            the stems from bending or breaking under their own weight."
        li1="Direct Sunlight"
        li2="Well-drained, moderately rich soil"
        li3="Grow best in warm temperatures"
        care2=" Space the seeds or seedlings about 6-12 inches apart for smaller varieties and 18-24 inches
                            for larger ones to allow for healthy growth and air circulation."
        image2="images/garden_images/sunflower.jpg"
      />
    </main>
  )

}

export default SunFlower;
