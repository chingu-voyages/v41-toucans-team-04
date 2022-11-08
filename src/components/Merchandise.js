import "./Merchandise.css";
import { useEffect, useState } from "react";
import data from "../assets/merch-items.json";
// import video from "../images/merch/group-sipping-coffee.mp4";
import poster from "../assets/image-coffee-shop.jpg";

export default function Merchandise() {
  const [products, setProducts] = useState(data.merch);

  useEffect(() => {
    setProducts(products);
  }, [products]);
  console.log(products);
  return (
    <>
      <section className="merch-hero">
        <div className="hero-container container">
          <h1 className="hero-title">
            {/* add any title */}
            Sip our coffee. <br />
            Grip our merch. <br />
          </h1>
          {/* add any text */}
          <p className="hero-text">
            Elevate your experience by pairing our coffee with any of our
            curated products below!
          </p>
          <video
            src="../images/merch/coffee-cheers.mp4"
            type="video/mp4"
            poster={poster}
            autoPlay
            loop
            muted
            webkit-playsinline
            playsinline
            className="hero-video"
          ></video>
          <div className="hero-overlay"></div>
        </div>
      </section>
      <section className="merch">
        {/* add this div for layout */}
        <div className="merch-container container">
          {products.map((item) => {
            return (
              <div className="card">
                {/* make the images uniform so that any text below is uniform */}
                <div className="images">
                  <img src={`../images/merch/${item.img}`} alt={item.name} />
                </div>
                <p className="name">{item.name}</p>
                <p className="description">{item.description}</p>
                <p className="price">${item.price}</p>
                <button>Add to Cart</button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
