import "./css/House_plant.css";
import GardeningPlant from "../components/GardeningPlant";

function Mint() {
  return (
    <main className="page-content">
      <GardeningPlant
        name="Mint"
        image1="images/garden_images/mint2.jpg"
        description="Before appearing in the botanico-medical literature, it can be found in the Greek mythology,
                            which antedates by far and large all medical written documentation. Going further back in
                            time, the very name of Mint in Greek, minthē, is traditionally interpreted as Pre-Greek.
                            (herbs in history)"
        research="Here are some articles that I got some of the above
                            information/more research you can do on your own."
        link1="https://www.ahpa.org/herbs_in_history_mint"
        link1name="Herbs in History: Mint"
        link2="https://www.thespruce.com/growing-mint-1402628"
        link2name="How to Grow and Care for Mint"
        link3="https://www.britannica.com/plant/Mentha"
        link3name="Britannica"
        care1=" Mint is known for being invasive, so it’s best to plant it in containers or in areas where
                            you can control its spread. If planting in the ground, space it 18-24 inches apart to allow
                            for its spreading growth."
        li1="Partial shade to full sun"
        li2="Grows well in a variety of soils but prefers moist, well-drained soil"
        li3="consistently moist soil"
        care2="  Mint is generally pest-resistant but can be susceptible to aphids, spider mites, and other
                            insects. It can also suffer from fungal diseases if the leaves are too wet for too long."
        image2="images/garden_images/mint.jpg"
      />
    </main>
  )

}

export default Mint;
