import './Footer.css';
import { NavLink } from 'react-router-dom';
import toucan from '../assets/images/toucan-logo.png';
import facebook from '../assets/icons/icon-facebook.svg';
import instagram from '../assets/icons/icon-instagram.svg';
import twitter from '../assets/icons/icon-twitter.svg';
export default function Footer({ setActive, isActive }) {
	return (
		<>
			<footer className="footer">
				<div className="footer-container container">
					<div className="footer-nav">
						<div className="nav-logo">
							<img
								src={toucan}
								className="nav-img"
								alt="toucan logo"
							/>
							<h2 className="nav-title">Toucan Coffee</h2>
						</div>
						<div className="footer-menu">
							<NavLink to="/" className="nav-link" end>
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
						</div>
					</div>
					<ul className="footer-social-menu">
						<li>
							<img src={facebook} alt="facebook" />
						</li>
						<li>
							<img src={twitter} alt="twitter" />
						</li>
						<li>
							<img src={instagram} alt="instagram" />
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
}
