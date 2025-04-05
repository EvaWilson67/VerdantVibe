import "./css/House_plant.css";
import GardeningPlant from "../components/GardeningPlant";

function Carnation() {
  return (
    <main className="page-content">
      <GardeningPlant
        name=""
        image1="carnations2.jpg"
        description="The carnation has been cultivated for the last 2,000 years. The wild carnation is native to
                            Greece, Italy, Spain, and other Mediterranean countries. They were cultivated by the ancient
                            Greeks and Romans, and later became popular in Europe and Asia. The name 'carnation' is
                            thought to come from the Latin word 'caro' or 'carnis,' meaning 'flesh,' referring to their
                            original pinkish flesh color."
        research="Here are some articles that I got some of the above
                            information/more research you can do on your own."
        link1="https://www.planetnatural.com/carnation/"
        link1name="Planet natural"
        link2="https://www.thespruce.com/carnation-plant-profile-5111942"
        link2name="The spruce"
        link3="Flora queen"
        link3name="https://www.floraqueen.com/blog/carnations-their-history-meaning-and-care"
        care1="Tall varieties of carnations may need staking to prevent them from falling over, especially
                            during windy conditions. Also avoid overhead watering to reduce the risk of fungal issues."
        li1="Direct Sunlight"
        li2="Well Watered, soil is consistenly moist"
        li3="Thrive in well-drained, slightly alkaline soil with a pH level of around 6.7 to 7.5."
        care2="  Regularly deadhead spent flowers to encourage new blooms and prevent the plant from becoming
                            leggy. Trim back the stems by about one-third after blooming to maintain shape."
        image2="carnations.jpg"
      />
    </main>
  )

}

export default  Carnation;
