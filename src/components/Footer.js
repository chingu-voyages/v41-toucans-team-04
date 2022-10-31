import './Footer.css';
import { Link } from 'react-router-dom';
import toucan from '../assets/toucan-logo.png';
import facebook from '../assets/icon-facebook.svg';
import instagram from '../assets/icon-instagram.svg';
import twitter from '../assets/icon-twitter.svg';
export default function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="footer-container container">
					<div className="nav-logo">
						<img src={toucan} className="nav-img" alt="toucan logo" />
						<h2 className="nav-title">Toucan Coffee</h2>
					</div>
					<ul className="footer-nav">
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
							<li className="nav-link">Plans</li>
						</Link>
					</ul>
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
