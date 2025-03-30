import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from './Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';

import HousePlant from './pages/HousePlants';
import Care from './pages/Care';
import Resources from './pages/Resources';
import Gardening from './pages/Gardening';

import SnakePlant from './pages/SnakePlant'
import ArrowHead from './pages/ArrowHead'
import GoldenPothos from './pages/GoldenPothos'
import SwissCheese from './pages/SwissCheese'
import PeaceLily from './pages/PeaceLily'
import ParlorPalm from './pages/ParlorPalm'
import Bonsai from './pages/Bonsai'
import Hoya from './pages/Hoya'
import PrayerPlant from './pages/PrayerPlant'



import Basil from './pages/Basil'
import Blackberry from './pages/Blackberry'
import Blueberries from './pages/Blueberries'
import Carnation from './pages/Carnation'
import Corn from './pages/Corn'
import Dill from './pages/Dill'
import Kabocha from './pages/Kabocha'
import Lavendar from './pages/Lavendar'
import Mint from './pages/Mint'
import Peaches from './pages/Peaches'
import SunFlower from './pages/SunFlower'

import Eggplant from './pages/Eggplant'


import Nopage from './pages/Nopage';

function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="houseplant" element={<HousePlant />} />
          <Route path="care" element={<Care />} />
          <Route path="resources" element={<Resources />} />
          <Route path="gardening" element={<Gardening />} />

          <Route path="snakePlant" element={<SnakePlant />} />
          <Route path="arrowHead" element={<ArrowHead />} />
          <Route path="goldenPothos" element={<GoldenPothos />} />
          <Route path="swissCheese" element={<SwissCheese />} />
          <Route path="peaceLily" element={<PeaceLily />} />
          <Route path="parlorPalm" element={<ParlorPalm />} />
          <Route path="bonsai" element={<Bonsai />} />
          <Route path="hoya" element={<Hoya />} />
          <Route path="prayerPlant" element={<PrayerPlant />} />



          <Route path="basil" element={<Basil />} />
          <Route path="blackberry" element={<Blackberry />} />
          <Route path="blueberries" element={<Blueberries />} />
          <Route path="carnation" element={<Carnation />} />
          <Route path="corn" element={<Corn />} />
          <Route path="dill" element={<Dill />} />
          <Route path="kabocha" element={<Kabocha />} />
          <Route path="lavendar" element={<Lavendar />} />
          <Route path="mint" element={<Mint />} />
          <Route path="peaches" element={<Peaches />} />
          <Route path="sunFlower" element={<SunFlower />} />
          <Route path="eggplant" element={<Eggplant />} />

          <Route path="*" element={<Nopage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);