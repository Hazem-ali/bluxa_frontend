import React, { useEffect, useState } from "react";
import "./home.css";

import saleImg from "../../images/sale.jpg";
import mobileImg from "../../images/mobile.jpg";
import sweetsImg from "../../images/sweets.jpg";
import marketImg from "../../images/market.jpg";
import juiceImg from "../../images/juice.jpg";
import makeupImg from "../../images/makeup.jpg";
import cameraImg from "../../images/camera.jpg";
import dietImg from "../../images/diet.jpg";
import ImageCards from "../imageCards";
import ItemCards from "../itemCards";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setCards([
      {
        id: 1,
        imgSrc: saleImg,
        title: "lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint, quibusdam sed tenetur odit temporibus mollitia earum tempore, laborum eum quidem velit ipsum. Mollitia dolor provident necessitatibus neque nesciunt omnis.",
      },
      {
        id: 2,
        imgSrc: mobileImg,
        title: "lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint, quibusdam sed tenetur odit temporibus mollitia earum tempore, laborum eum quidem velit ipsum. Mollitia dolor provident necessitatibus neque nesciunt omnis.",
      },
      {
        id: 3,
        imgSrc: sweetsImg,
        title: "lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint, quibusdam sed tenetur odit temporibus mollitia earum tempore, laborum eum quidem velit ipsum. Mollitia dolor provident necessitatibus neque nesciunt omnis.",
      },
      {
        id: 4,
        imgSrc: marketImg,
        title: "lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint, quibusdam sed tenetur odit temporibus mollitia earum tempore, laborum eum quidem velit ipsum. Mollitia dolor provident necessitatibus neque nesciunt omnis.",
      },
    ]);
    setItems([
      {
        id: 1,
        imgSrc: juiceImg,
        title: "Ice Cream",
        brand: "Sultana",
        price: "149",
        old_price: "249",
        liked: true,
      },
      {
        id: 2,
        imgSrc: makeupImg,
        title: "Makeup",
        brand: "De Facto",
        price: "149",
        old_price: "249",
        liked: false,
      },
      {
        id: 3,
        imgSrc: cameraImg,
        title: "Professional Camera",
        brand: "Carl Zeiss",
        price: "149",
        old_price: "249",
        liked: true,
      },
      {
        id: 4,
        imgSrc: dietImg,
        title: "Diet Shawerma",
        brand: "Abo 3ammar",
        price: "149",
        old_price: "249",
        liked: false,
      },
    ]);
  }, []);

  const likeHandler = (item) => {
    const newItems = [...items];
    const index = newItems.indexOf(item);
    newItems[index].liked = !newItems[index].liked;
    setItems(newItems);
    console.log(items[index])
  };

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

      <ImageCards cards={cards} />

      <ItemCards items={items} onLike={likeHandler} />

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
