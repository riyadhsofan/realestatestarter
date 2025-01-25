"use client";
import { cities } from "@/data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CityCard from "./CityCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const CitySlider = () => {
  return (
    <Carousel
      arrows={true}
      autoPlay={true}
      swipeable={false}
      draggable={false}
      // showDots={true}
      responsive={responsive}
      infinite
      autoPlaySpeed={1000}
      // // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      // ssr={true} // means to render carousel on server-side.
      // keyBoardControl={true}
      // customTransition="all .5"
      // transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // // deviceType={this.props.deviceType}
      // dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {/* cities */}
      {cities.map((city) => {
        return (
          <div
            key={city.id}
            // className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
          >
            <CityCard city={city} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default CitySlider;
