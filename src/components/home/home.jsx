import React from "react";
import "./home.css";
import ImageCard from "../imageCard/imageCard";
import ProductCard from "../productCard/productCard";

import saleImg from "../../images/sale.jpg";
import mobileImg from "../../images/mobile.jpg";
import sweetsImg from "../../images/sweets.jpg";
import marketImg from "../../images/market.jpg";
import juiceImg from "../../images/juice.jpg";
import makeupImg from "../../images/makeup.jpg";
import cameraImg from "../../images/camera.jpg";
import dietImg from "../../images/diet.jpg";


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
        <ImageCard imgSrc={saleImg}>
          <h1 className="text-xl font-bold mb-2">lorem ipsun</h1>
          <p className="">Lorem ipsum dolor sit dolorum!</p>
          {/* <div class="space-x-4 mt-4"></div> */}
        </ImageCard>
        <ImageCard imgSrc={mobileImg}>
          <h1 className="text-xl font-bold mb-2">lorem ipsun</h1>
          <p className="">Lorem ipsum dolor sit dolorum!</p>
          {/* <div class="space-x-4 mt-4"></div> */}
        </ImageCard>
        <ImageCard imgSrc={sweetsImg}>
          <h1 className="text-xl font-bold mb-2">lorem ipsun</h1>
          <p className="">Lorem ipsum dolor sit dolorum!</p>
          {/* <div class="space-x-4 mt-4"></div> */}
        </ImageCard>
        <ImageCard imgSrc={marketImg}>
          <h1 className="text-xl font-bold mb-2">lorem ipsun</h1>
          <p className="">Lorem ipsum dolor sit dolorum!</p>
          {/* <div class="space-x-4 mt-4"></div> */}
        </ImageCard>
      </div>

      <div className="m-8 grid md:grid-cols-4 grid-cols-2 gap-8 items-center justify-items-center">
        <ProductCard imgSrc={juiceImg} />
        <ProductCard imgSrc={makeupImg} />
        <ProductCard imgSrc={cameraImg} />
        <ProductCard imgSrc={dietImg} />
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
