import './Footer.css';
import { Link } from 'react-router-dom';
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
						<ul className="footer-menu">
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
						</ul>
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
