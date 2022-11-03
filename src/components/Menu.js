import "./css/Menu.css";
import video from "../assets/video-espresso-coffee.mp4";
import poster from "../assets/image-coffee-shop.jpg";
import { useEffect, useState } from "react";
import data from "../assets/data.json";
import Card from "./Card";

export default function Menu() {
  const [card, setCard] = useState(data.coffee);
  const [menu, setMenu] = useState("Coffee");
  const [toggleState, setToggleState] = useState(1);
  const [dropdown, setDropdown] = useState(false);

  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const closeCart = () => {
    setOpen(false);
  };
  const openCart = () => {
    setOpen(true);
  };

  const addToCart = (newItem) => {
    setCart([...cart, newItem]);
  };

  const removeFromCart = (item) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
    setCart(hardCopy);
  };

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };
  const toggleStateHandler = (index) => {
    setToggleState(index);
  };
  useEffect(() => {
    setCard(card);
  }, [card]);

  console.log(cart);

  return (
    <>
      <ul className="cart">
        {cart.map((item, idx) => {
          return (
            <li key={idx} id={idx}>
              {/* <img src={item.image} alt="" /> */}
              <div>{item.name}</div>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          );
        })}
      </ul>
      <section className="menu-hero">
        <div className="hero-container container">
          <h1 className="hero-title">
            The Gift of <br />
            Better Coffee <br />
          </h1>
          <p className="hero-text">
            Toucan Coffee began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world.
          </p>
          <video src={video} type="video/mp4" poster={poster} autoPlay loop muted webkit-playsinline playsinline className="hero-video"></video>
          <div className="hero-overlay"></div>
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
          <div className="dropdownMenu">
            <button className="label" onClick={dropdownHandler}>
              {menu}
              <span className={dropdown ? "active material-icons" : "material-icons"}>expand_more</span>
            </button>
            <ul className={dropdown ? "active optionList" : "optionList"}>
              <li
                className="optionItem"
                onClick={() => {
                  setMenu("Coffee");
                  setCard(data.coffee);
                  setDropdown(false);
                }}
              >
                Coffee
              </li>
              <li
                className="optionItem"
                onClick={() => {
                  setMenu("Non-Coffee");
                  setCard(data.nonCoffee);
                  setDropdown(false);
                }}
              >
                Non-Coffee
              </li>
              <li
                className="optionItem"
                onClick={() => {
                  setMenu("Food");
                  // setCard(data.coffee);
                  setDropdown(false);
                }}
              >
                Food
              </li>
            </ul>
          </div>
          <ul className="menuList">
            {card.map((item, idx) => {
              return <Card data={item} key={idx} add={addToCart} id={idx} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
