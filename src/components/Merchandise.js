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
          <span className="line"></span>
          <p className="rating"></p>
          <p className="price">$19.95 / LB</p>
        </div>
      </div>
    </section>
  );
}
