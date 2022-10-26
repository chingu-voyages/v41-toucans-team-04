import { useEffect, useState } from "react";
// import data from "../assets/data.json";
import axios from "axios";
import Card from "./Card";
import "./css/Menu.css";

export default function Menu() {
  const [card, setCard] = useState([]);
  // useEffect(() => {
  //   setCard(data.coffees);
  // }, []);
  useEffect(() => {
    axios.get(`https://api.sampleapis.com/coffee/hot`).then((res) => {
      setCard(res.data);
    });
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
