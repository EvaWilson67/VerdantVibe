import "./css/House_plant.css";

import IndoorPlant from "../components/IndoorPlant";

function GoldenPothos() {
  return (
    <main className="page-background page-background-small">
      <IndoorPlant
        image="goldenpothos.jpg"
        name="Golden Pothos"
        description=" Also known as Devil's Ivy, is a resilient and versatile houseplant with vibrant,
                                heart-shaped leaves that often feature yellow or golden markings. . It's a
                                low-maintenance plant, making it a favorite for both novice and experienced plant
                                owners."
        fact="The Golden Pothos loves to wrap around objects and climb whatever it can attach to."
        care=" It's often praised for its ability to thrive in low light and little maintenance, making
                                it perfect for beginners or busy plant owners."
        li1="Light: Prefers bright, indirect light but can tolerate low light"
        li2="Watering: Water when the top inch of soil is dry"
        li3="Humidity: Prefers moderate to high humidity but adapts well to average indoor
                                    conditions."
        care2="  Regular pruning helps to control the size and encourage bushier growth. Also,
                                well-draining potting mix is ideal."
        research="Golden pothos (Epipremnum aureum) is a popular and resilient houseplant that’s known for its easy care. This low-maintenance plant thrives in a variety of conditions and is perfect for beginners. While it’s not demanding, golden pothos still appreciates proper watering, occasional pruning, and indirect light to grow its vibrant, trailing vines. With a little attention, it can thrive and brighten up any space. To help you learn more about caring for golden pothos, here are some articles to support your research:"
        link1="https://abeautifulmess.com/how-to-care-for-golden-pothos/"
        link1name="How to Care for Golden Pothos"
        link2="https://www.thespruce.com/pothos-an-easy-to-grow-houseplant-1403154"
        link2name="How to Grow and Care for Pothos"
        link3="https://www.livelyroot.com/products/golden-pothos?variant=39286391636050"
        link3name="How to Grow and Care for your Golden Pothos"
      />
    </main>
  );
}

export default GoldenPothos;
