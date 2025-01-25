import React from "react";
import Hero from "./Hero/Hero";
import ApartmentType from "./ApartmentType/ApartmentType";
import Properties from "./Properties/Properties";
import CityProperties from "./CityProperties/CityProperties";
import BuildingFeature from "./BuildingFeature/BuildingFeature";
import Reviews from "./Reviews/Reviews";
import Blog from "./Blog/Blog";

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ApartmentType />
      <Properties />
      <CityProperties />
      <BuildingFeature />
      <Reviews />
      <Blog />
    </div>
  );
};

export default Home;
