import './Header.css';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
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
				<Link to="/" className="nav-logo">
					<img src={toucan} className="nav-img" alt="toucan logo" />
					<h2 className="nav-title">Toucan Coffee</h2>
				</Link>
				<ul className="nav-menu">
					<Link to="/">
						<li
							className={
								isActive === 'home'
									? 'nav-link active-link'
									: 'nav-link'
							}
							onClick={() => setActive('home')}>
							Home
						</li>
					</Link>
					<Link to="/about">
						<li
							className={
								isActive === 'about'
									? 'nav-link active-link'
									: 'nav-link'
							}
							onClick={() => setActive('about')}>
							About
						</li>
					</Link>
					<Link to="/menu">
						<li
							className={
								isActive === 'menu'
									? 'nav-link active-link'
									: 'nav-link'
							}
							onClick={() => setActive('menu')}>
							Menu
						</li>
					</Link>
					<Link to="/shop">
						<li
							className={
								isActive === 'shop'
									? 'nav-link active-link'
									: 'nav-link'
							}
							onClick={() => setActive('shop')}>
							Shop
						</li>
					</Link>
					<Link to="/plan">
						<li
							className={
								isActive === 'plan'
									? 'nav-link active-link'
									: 'nav-link'
							}
							onClick={() => setActive('plan')}>
							Plan
						</li>
					</Link>
					<div className="cart-icon" onClick={openCart}>
						<BsBag />
					</div>
				</ul>
				{isOpen && (
					<ul className="nav-menu-mobile">
						<Link to="/">
							<li
								className={
									isActive === 'home'
										? 'nav-link-mobile active-link'
										: 'nav-link-mobile'
								}
								onClick={() => {
									setActive('home');
									closeMenu();
								}}>
								Home
							</li>
						</Link>
						<Link to="/about">
							<li
								className={
									isActive === 'about'
										? 'nav-link-mobile active-link'
										: 'nav-link-mobile'
								}
								onClick={() => {
									setActive('about');
									closeMenu();
								}}>
								About
							</li>
						</Link>
						<Link to="/menu">
							<li
								className={
									isActive === 'menu'
										? 'nav-link-mobile active-link'
										: 'nav-link-mobile'
								}
								onClick={() => {
									setActive('menu');
									closeMenu();
								}}>
								Menu
							</li>
						</Link>
						<Link to="/shop">
							<li
								className={
									isActive === 'shop'
										? 'nav-link-mobile active-link'
										: 'nav-link-mobile'
								}
								onClick={() => {
									setActive('shop');
									closeMenu();
								}}>
								Shop
							</li>
						</Link>
						<Link to="/plan">
							<li
								className={
									isActive === 'plan'
										? 'nav-link-mobile active-link'
										: 'nav-link-mobile'
								}
								onClick={() => {
									setActive('plan');
									closeMenu();
								}}>
								Plan
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
