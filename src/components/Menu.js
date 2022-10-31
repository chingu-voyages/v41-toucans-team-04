import "./css/Menu.css";
import video from "../assets/video-espresso-coffee.mp4";
import poster from "../assets/image-coffee-shop.jpg";
import { useEffect, useState } from "react";
import data from "../assets/data.json";
import Card from "./Card";

export default function Menu() {
  const [card, setCard] = useState(data.coffee);
  const [toggleState, setToggleState] = useState(1);

  const toggleStateHandler = (index) => {
    setToggleState(index);
  };
  useEffect(() => {
    setCard(card);
  }, [card]);

  return (
    <>
      <section className="menu">
        <div className="main-container container">
          <h1 className="main-title">
            The Gift of <br />
            Better Coffee <br />
          </h1>
          <p className="main-text">
            Toucan Coffee began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world.
          </p>
          <video src={video} type="video/mp4" poster={poster} autoPlay loop muted webkit-playsinline playsinline className="main-video"></video>
          <div className="overlay"></div>
        </div>
      </section>

      <section className="cards">
        <div className="cards-container container">
          <div className="tabMenu">
            <div
              className={toggleState === 1 ? "active" : ""}
              onClick={() => {
                toggleStateHandler(1);
                setCard(data.coffee);
              }}
            >
              Coffee
            </div>
            <div
              className={toggleState === 2 ? "active" : ""}
              onClick={() => {
                toggleStateHandler(2);
                setCard(data.nonCoffee);
              }}
            >
              Non-Coffee
            </div>
            <div
              className={toggleState === 3 ? "active" : ""}
              onClick={() => {
                toggleStateHandler(3);
              }}
            >
              Food
            </div>
          </div>
          <ul className="menuList">
            {card.map((item, idx) => {
              return <Card data={item} key={idx} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
