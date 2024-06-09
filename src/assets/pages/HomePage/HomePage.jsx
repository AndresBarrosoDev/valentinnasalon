import React from "react";
import "./HomePage.css";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { HomeImages } from "../../components/HomeImages/HomeImages";
import { Location } from "../../components/Location/Location";
import { Footer } from "../../components/Footer/Footer";

export const HomePage = () => {
  return (
    <>
      <HomeImages></HomeImages>
      <AboutUs></AboutUs>
      <Location></Location>
      <Footer></Footer>
    </>
  );
};
