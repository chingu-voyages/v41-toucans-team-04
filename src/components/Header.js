import "./Header.css";
import coffeeBean from "../assets/icon-coffee-bean.svg";
export default function Header() {
  return (
    <header id="header" className="header">
      <nav id="gnb" className="nav">
        <h1 className="logo">
          <img src={coffeeBean} className="logoImg" />
          Coffee Direct
        </h1>
        <ul className="menu">
          <li className="menu-link">About</li>
          <li className="menu-link">Menu</li>
          <li className="menu-link">Shopping</li>
        </ul>
      </nav>
    </header>
  );
}
