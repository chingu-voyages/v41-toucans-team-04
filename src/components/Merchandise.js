import React from "react";
import "./Merchandise.css";

export default function Merchandise(props) {
  return (
    <>
    <section className="merch">
      <div className="card-container">
        <div className="merch-items"> 
  
        <div className="card">
          <img src={props.img} alt="" />
          <p className="name">{props.title}</p>
          <p className="price">{props.price}</p>
          <p className="description">{props.description}</p>
          <button>Add to Cart</button>
        </div>

      </div>
      </div>
    </section>
    </>
  );
}
