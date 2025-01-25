import React from "react";
import Hero from "./Hero/Hero";
import ApartmentType from "./ApartmentType/ApartmentType";
import Properties from "./Properties/Properties";
import CityProperties from "./CityProperties/CityProperties";
import BuildingFeature from "./BuildingFeature/BuildingFeature";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ApartmentType />
      <Properties />
      <CityProperties />
      <BuildingFeature />
    </div>
  );
};

export default Home;
