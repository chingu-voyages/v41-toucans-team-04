import './Header.css';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import toucan from '../assets/images/toucan-logo.png';
import { BsBag } from 'react-icons/bs';
export default function Header({ setOpen }) {
	const [isOpen, setIsOpen] = useState(false);
	const closeMenu = () => setIsOpen(false);

	const openCart = () => {
		setOpen(true);
	};
	return (
		<header id="header" className="header">
			<nav id="nav" className="nav container">
				<Link to="/" className="nav-logo">
					<img src={toucan} className="nav-img" alt="toucan logo" />
					<h2 className="nav-title">Toucan Coffee</h2>
				</Link>
				<ul className="nav-menu">
					<Link to="/">
						<li className="nav-link">Home</li>
					</Link>
					<Link to="/about">
						<li className="nav-link">About</li>
					</Link>
					<Link to="/menu">
						<li className="nav-link">Menu</li>
					</Link>
					<Link to="/shop">
						<li className="nav-link">Shop</li>
					</Link>
					<Link to="/plan">
						<li className="nav-link">Plans</li>
					</Link>
					<div className="cart-icon" onClick={openCart}>
						<BsBag />
					</div>
				</ul>
				{isOpen && (
					<ul className="nav-menu-mobile">
						<Link to="/">
							<li className="nav-link-mobile" onClick={closeMenu}>
								Home
							</li>
						</Link>
						<Link to="/about">
							<li className="nav-link-mobile" onClick={closeMenu}>
								About
							</li>
						</Link>
						<Link to="/menu">
							<li className="nav-link-mobile" onClick={closeMenu}>
								Menu
							</li>
						</Link>
						<Link to="/shop">
							<li className="nav-link-mobile" onClick={closeMenu}>
								Shop
							</li>
						</Link>
						<Link to="/plan">
							<li className="nav-link-mobile" onClick={closeMenu}>
								Plans
							</li>
						</Link>
					</ul>
				)}
				<div className="nav-mobile">
					<div className="cart-icon-mobile" onClick={openCart}>
						<BsBag />
					</div>
					<div
						className="hamburger"
						onClick={() => setIsOpen(!isOpen)}>
						<Hamburger
							size={24}
							toggled={isOpen}
							toggle={setIsOpen}
						/>
					</div>
				</div>
			</nav>
		</header>
	);
}
