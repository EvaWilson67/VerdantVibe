import "./css/House_plant.css";

import IndoorPlant from "../components/IndoorPlant";

function Bonsai() {
  return (
    <main className="page-background page-background-small">
      <IndoorPlant
        image="images/house_images/bonsai"
        name="Bonsai"
        description="  Despite their small size, bonsai trees are typically full-sized species, with the care
                                and styling process taking years, even decades, to achieve a mature, refined look. They
                                represent oriental exoticism and give the room where they are placed a special elegance
                                and distinction."
        fact=" The word 'bonsai' translates to 'planted in a container,' Bonsai is the Japanese art of
                                cultivating miniature trees by carefully pruning and
                                shaping them to create aesthetically pleasing and natural-looking forms."
        care=" A bonsai is not a “dwarf” plant; these proportions are maintained thanks to continuous
                                care and attention."
        li1="Light: Most bonsai species need plenty of natural light"
        li2="Water: Avoid letting the soil dry out completely or become waterlogged."
        li3="Pruning: Regular pruning of both the leaves and roots helps maintain the tree’s size
                                    and shape"
        care2=" Different bonsai species have different temperature preferences, so it's important to
                                keep them in an environment suited to their needs."
        research="Bonsai trees are a unique and rewarding plant to care for, but they do require attention and patience. Although they are small in size, bonsai plants need careful maintenance, including regular watering, pruning, and providing the right amount of sunlight. While they might seem challenging at first, with the proper techniques and dedication, they can thrive and grow beautifully. To help you get started and refine your bonsai care, here are some articles to guide your research:"
        link1="https://www.bonsaiempire.com/"
        link1name="The living art of Bonsai"
        link2="https://www.verdissimo.com/en/news/facts-about-bonsai"
        link2name=" Facts about Bonsai"
        link3="https://bonsaiwest.com/resources/bonsai-care/"
        link3name="Bonsai Care and Maintenance"
      />
    </main>
  );
}

export default Bonsai;
