import React from "react";
import video from "../assets/video.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <video
        autoPlay
        muted
        loop
        className="video"
        src={video}
        type="video/mp4"
      />
      <div className="salt">
        <h1>Salt Bae </h1>
      </div>
    </div>
  );
};

export default Hero;
