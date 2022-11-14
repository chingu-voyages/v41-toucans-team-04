import './Header.css';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import { NavLink } from 'react-router-dom';
import toucan from '../assets/images/toucan-logo.png';
import { BsBag } from 'react-icons/bs';
export default function Header({ setOpen, setActive, isActive }) {
	const [isOpen, setIsOpen] = useState(false);
	const closeMenu = () => setIsOpen(false);

	const openCart = () => {
		setOpen(true);
	};
	return (
		<header id="header" className="header">
			<nav id="nav" className="nav container">
				<NavLink to="/" end className="nav-logo">
					<img src={toucan} className="nav-img" alt="toucan logo" />
					<h2 className="nav-title">Toucan Coffee</h2>
				</NavLink>
				<div className="nav-menu">
					<NavLink to="/" end className="nav-link">
						Home
					</NavLink>
					<NavLink to="/about" className="nav-link">
						About
					</NavLink>
					<NavLink to="/menu" className="nav-link">
						Menu
					</NavLink>
					<NavLink to="/shop" className="nav-link">
						Shop
					</NavLink>
					<NavLink to="/plan" className="nav-link">
						Plan
					</NavLink>
					<div className="cart-icon" onClick={openCart}>
						<BsBag />
					</div>
				</div>
				{isOpen && (
					<div className="nav-menu-mobile">
						<NavLink
							to="/"
							className="nav-link-mobile"
							onClick={() => closeMenu()}>
							Home
						</NavLink>
						<NavLink
							to="/about"
							className="nav-link-mobile"
							onClick={() => closeMenu()}>
							About
						</NavLink>
						<NavLink to="/menu">
							<li
								className="nav-link-mobile"
								onClick={() => closeMenu()}>
								Menu
							</li>
						</NavLink>
						<NavLink
							to="/shop"
							className="nav-link-mobile"
							onClick={() => closeMenu()}>
							Shop
						</NavLink>
						<NavLink
							to="/plan"
							className="nav-link-mobile"
							onClick={() => closeMenu()}>
							Plan
						</NavLink>
					</div>
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
