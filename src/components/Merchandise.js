import React from "react";
import "./Merchandise.css";
import { useEffect, useState } from "react";
import data from "../assets/merch-items.json";

export default function Merchandise() {
  const [products, setProducts] = useState(data.merch);

  useEffect(() => {
    setProducts(products);
  }, [products]);
  console.log(products);
  return (
    <section className="merch">
      {products.map((item) => {
        return (
          <div className="card-container">
            <div className="card">
              {/* <img src={item.img} alt={item.name} /> */}
              <div className="placeholder"></div>
              <p className="name">{item.name}</p>
              <p className="description">{item.description}</p>
              <p className="price">{item.price}</p>
              <button>Add to Card</button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
