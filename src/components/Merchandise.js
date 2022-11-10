import React from "react";
import "./Merchandise.css";
import { useEffect, useState } from "react";
import data from "../assets/merch-items.json";
import video from "../assets/videos/video-coffee-cheers.mp4";
import poster from "../assets/images/image-coffee-shop.jpg";
import MerchCard from "./MerchCard";

export default function Merchandise(props) {
  const [products, setProducts] = useState(data.merch);

  useEffect(() => {
    setProducts(products);
  }, [products]);

  return (
    <>
      <section className="merch-hero">
        <div className="hero-container container">
          <h1 className="hero-title">
            Sip our coffee. <br />
            Grip our merch. <br />
          </h1>
          <p className="hero-text">Elevate your experience by pairing our coffee with any of our curated products below!</p>
          <video src={video} type="video/mp4" poster={poster} autoPlay loop muted webkit-playsinline playsinline className="hero-video"></video>
          <div className="hero-overlay"></div>
        </div>
      </section>
      <section className="merch">
        <div className="merch-container container">
          {products.map((item, idx) => {
            return <MerchCard data={item} key={idx} id={idx} addToCart={props.addToCart} />;
          })}
        </div>
      </section>
    </>
  );
}
