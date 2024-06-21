import React from "react";
import "./home.css";
import ImageCard from "../card/imageCard";
import milkImg from "../../images/milk.jpg";
import electronicsImg from "../../images/electronics.jpg";
import laptopImg from "../../images/laptop.jpg";
import makeupImg from "../../images/makeup.jpg";
const Home = () => {
  return (
    <div className="">
      <div className="hero block">
        <div className="container">
          <h1 className="font-bold text-6xl m-6">Welcome to our website</h1>
          <p className="text-3xl">
            this is the first look of our professional website
          </p>
        </div>
      </div>

      <div className=" m-8 grid md:grid-cols-4 grid-cols-2 gap-8 items-center justify-items-center ">
        <ImageCard imgSrc={milkImg}>
          <h1 className="text-xl font-bold mb-2">lorem ipsun</h1>
          <p className="">Lorem ipsum dolor sit dolorum!</p>
          {/* <div class="space-x-4 mt-4"></div> */}
        </ImageCard>
        <ImageCard imgSrc={electronicsImg}>
          <h1 className="text-xl font-bold mb-2">lorem ipsun</h1>
          <p className="">Lorem ipsum dolor sit dolorum!</p>
          {/* <div class="space-x-4 mt-4"></div> */}
        </ImageCard>
        <ImageCard imgSrc={laptopImg}>
          <h1 className="text-xl font-bold mb-2">lorem ipsun</h1>
          <p className="">Lorem ipsum dolor sit dolorum!</p>
          {/* <div class="space-x-4 mt-4"></div> */}
        </ImageCard>
        <ImageCard imgSrc={makeupImg}>
          <h1 className="text-xl font-bold mb-2">lorem ipsun</h1>
          <p className="">Lorem ipsum dolor sit dolorum!</p>
          {/* <div class="space-x-4 mt-4"></div> */}
        </ImageCard>
      </div>

      <div className="hero block">
        <div className="container">
          <h1 className="font-bold text-6xl m-6">Welcome to our website</h1>
          <p className="text-3xl">
            this is the first look of our professional website
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
