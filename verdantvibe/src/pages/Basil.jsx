import "./css/House_plant.css";

import GardeningPlant from "../components/GardeningPlant";

function Basil() {
  return (
    <main className="page-content">
      <GardeningPlant
        name="Basil"
        image1="basil2.jpg"
        description="Basil is native to tropical regions of Asia and Africa, and it has been used for thousands
                            of years. It was first cultivated in India and spread across Asia and Europe, where it
                            became a staple in Mediterranean cooking. The name “basil” comes from the Greek word
                            'basileus,' meaning 'king,' reflecting its revered status in many cultures. Basil eventually
                            migrated westward as whole plants as it could be grown easily indoors and away from exposure
                            to cold climates and frost. (spruce eats)"
        research="Here are some articles that I got some of the above
                            information/more research you can do on your own."
        link1="https://www.thespruceeats.com/the-history-of-basil-1807566"
        link1name="The History ofBasil"
        link2="https://joegardener.com/how-do-i-grow-basil"
        link2name="How Do I Grow Basil?"
        link3="https://www.marthastewart.com/8077660/basil-plant-guide"
        link3name="How to Grow and Care
                                    for Basil Plants—Indoors and Outside"
        care1=" Pruning basil regularly encourages it to grow bushier and produce more leaves. If you
                            see any flower buds, remove them quickly. When basil flowers, it tends to become bitter, and
                            it will stop producing fresh leaves."
        li1="Direct Sunlight"
        li2="Soil is consistenly moist"
        li3="Should be spaced about 12-18 inches apart"
        care2="Basil prefers well-drained, fertile soil that is rich in organic matter. A slightly acidic
                            to neutral pH (6.0 to 7.5) is ideal."
        image2="basil.jpg"
      />
    </main>
  )

}

export default Basil;
