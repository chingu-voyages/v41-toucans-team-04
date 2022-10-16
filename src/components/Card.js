import { useState } from "react";
import "./Card.css";

export default function Card({ data }) {
  // console.log(data.title);
  const [flip, setFlip] = useState(true);
  const onClickFlip = () => {
    setFlip(!flip);
  };
  return (
    <li className="card">
      {flip ? (
        <div className="image" onClick={onClickFlip}>
          <img src={data.image} alt={data.title} />
        </div>
      ) : (
        <p className="desc" onClick={onClickFlip}>
          {data.description}
        </p>
      )}
      <div className="title">{data.title}</div>

      <div className="price">{data.price}</div>
    </li>
  );
}
