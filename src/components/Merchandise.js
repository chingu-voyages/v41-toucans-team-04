import React from "react";
import "./Merchandise.css";

export default function Merchandise(props) {
  return (
    
    <section className="merch">
      <div className="card-container">
        <div className="card">
          <img src={props.img} alt="" />
          <p className="name">{props.title}</p>
          <p className="description">{props.description}</p>
          <p className="price">{props.price}</p>
        <button>Add to Card</button>
        </div>
      </div>
    </section>
  );
}
