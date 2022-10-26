import { useEffect, useState } from "react";
import data from "../assets/data.json";
import Card from "./Card";
import "./css/Menu.css";

export default function Menu() {
  const [card, setCard] = useState([]);
  useEffect(() => {
    setCard(data.coffee);
  }, []);
  return (
    <section id="menu">
      <div className="tabMenu">
        <div className="active">Coffee</div>
        <div>Non-Coffee</div>
        <div>Food</div>
      </div>
      <ul className="menuList">
        {card.map((item, idx) => {
          return <Card data={item} key={idx} />;
        })}
      </ul>
    </section>
  );
}
