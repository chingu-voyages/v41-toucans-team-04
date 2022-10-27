import './Header.css';
import { Link } from 'react-router-dom';
import toucan from '../assets/toucan-logo.png';
export default function Header() {
	return (
		<header id="header" className="header">
			<nav id="nav" className="nav">
				<div className="nav-logo">
					<img src={toucan} alt="toucan logo" />
					<h2>toucan coffee</h2>
				</div>
				<ul className="nav-menu">
					<Link to="/menu">
						<li className="nav-link">Menu</li>
					</Link>
					<Link to="/about">
						<li className="nav-link">About Us</li>
					</Link>
					<Link to="/plan">
						<li className="nav-link">Create your Plan</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
}
