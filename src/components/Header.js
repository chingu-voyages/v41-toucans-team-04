import "./Header.css";
import { Link } from "react-router-dom";
import coffeeBean from "../assets/icon-coffee-bean.svg";
export default function Header() {
  return (
    <header id="header" className="header">
      <nav id="gnb" className="nav">
        <h1 className="logo">
          <i className="fa-solid fa-crow logoImg"></i>
          <img src={coffeeBean} className="logoImg" />
          {`   `}
          Toucan Coffee
        </h1>
        <ul className="menu">
          <Link to="/about">
            <li className="menu-link">About</li>
          </Link>
          <Link to="/menu">
            <li className="menu-link">Menu</li>
          </Link>
          <Link to="/shopping">
            <li className="menu-link">Shopping</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
