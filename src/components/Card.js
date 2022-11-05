import { useState } from "react";
import "./css/Card.css";

export default function Card({ data, id, addToCart }) {
  const [flip, setFlip] = useState(true);
  const onClickFlip = () => {
    setFlip(!flip);
  };

  const addCartHandler = () => {
    addToCart(id, data.image, data.name);
  };

  return (
    <li className="card">
      {flip ? (
        <div className="image" onClick={onClickFlip}>
          <img src={data.image} alt={data.name} />
        </div>
      ) : (
        <p className="desc" onClick={onClickFlip}>
          {data.description}
        </p>
      )}
      <div className="name">{data.name}</div>
      <div className="price">{data.price}</div>
      <button onClick={addCartHandler}>Add to Cart</button>
    </li>
  );
}
