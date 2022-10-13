import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
export default function Menu() {
  const [card, setCard] = useState();
  useEffect(() => {
    axios.get(`https://api.sampleapis.com/coffee/hot`).then((res) => {
      setCard(res.data);
    });
  }, []);
  return (
    <ul>
      {card.map((item, idx) => {
        return <Card data={item} key={idx} />;
      })}
    </ul>
  );
}
