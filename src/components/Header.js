import './Header.css';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import toucan from '../assets/toucan-logo.png';

export default function Header() {
	const [isOpen, setOpen] = useState(false);
	return (
		<header id="header" className="header">
			<nav id="nav" className="nav">
				<div className="nav-logo">
					<img src={toucan} className="nav-img" alt="toucan logo" />
					<h2 className="nav-title">toucan coffee</h2>
				</div>
				<ul className="nav-menu">
					<Link to="/">
						<li className="nav-link">Home</li>
					</Link>
					<Link to="/about">
						<li className="nav-link">About Us</li>
					</Link>
					<Link to="/menu">
						<li className="nav-link">Menu</li>
					</Link>

					<Link to="/plan">
						<li className="nav-link">Create your Plan</li>
					</Link>
				</ul>
				<div className="hamburger">
					<Hamburger size={24} />
				</div>
			</nav>
		</header>
	);
}
