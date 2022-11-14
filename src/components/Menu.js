import './Menu.css';
import video from '../assets/videos/video-espresso-coffee.mp4';
import poster from '../assets/images/image-coffee-shop.jpg';
import { useEffect, useState } from 'react';
import data from '../assets/data.json';
import Card from './Card';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Menu(props) {
	const [card, setCard] = useState(data.coffee);
	const [menu, setMenu] = useState('Coffee');
	const [toggleState, setToggleState] = useState(1);
	const [dropdown, setDropdown] = useState(false);

	const [alert, setAlert] = useState(false);

	const dropdownHandler = () => {
		setDropdown(!dropdown);
	};
	const toggleStateHandler = (index) => {
		setToggleState(index);
	};

	useEffect(() => {
		setCard(card);
	}, [card]);

	const alertHandler = () => {
		setAlert(true);
		setTimeout(() => {
			setAlert(false);
		}, 2000);
	};

	const foodHandler = () => {
		alertHandler();
		setDropdown(false);
		console.log('hello');
	};

	return (
		<>
			{alert && (
				<div className="alert">
					<p>
						<span>Sorry!</span>Currently Not Available.
					</p>
				</div>
			)}
			<section className="menu-hero">
				<div className="hero-container container">
					<h1 className="hero-title">
						The Gift of <br />
						Better Coffee <br />
					</h1>
					<p className="hero-text">
						Toucan Coffee began its journey of exotic discovery in
						1999, highlighting stories of coffee from around the
						world.
					</p>
					<video
						src={video}
						type="video/mp4"
						poster={poster}
						autoPlay
						loop
						muted
						webkit-playsinline="true"
						playsInline
						className="hero-video"></video>
					<div className="hero-overlay"></div>
				</div>
			</section>

			<section className="cards">
				<div className="cards-container container">
					<div className="tabMenu">
						<div
							className={toggleState === 1 ? 'active-menu' : ''}
							onClick={() => {
								toggleStateHandler(1);
								setCard(data.coffee);
							}}>
							Coffee
						</div>
						<div
							className={toggleState === 2 ? 'active-menu' : ''}
							onClick={() => {
								toggleStateHandler(2);
								setCard(data.nonCoffee);
							}}>
							Non-Coffee
						</div>
						<div
							className={toggleState === 3 ? 'active-menu' : ''}
							onClick={alertHandler}>
							Food
						</div>
					</div>
					<div className="dropdownMenu">
						<button className="label" onClick={dropdownHandler}>
							{menu}
							<span
								className={
									dropdown
										? 'active-menu material-icons'
										: 'material-icons'
								}>
								<MdKeyboardArrowDown />
							</span>
						</button>
						<ul
							className={
								dropdown ? 'active-menu optionList' : 'optionList'
							}>
							<li
								className="optionItem"
								onClick={() => {
									setMenu('Coffee');
									setCard(data.coffee);
									setDropdown(false);
								}}>
								Coffee
							</li>
							<li
								className="optionItem"
								onClick={() => {
									setMenu('Non-Coffee');
									setCard(data.nonCoffee);
									setDropdown(false);
								}}>
								Non-Coffee
							</li>
							<li className="optionItem" onClick={foodHandler}>
								Food
							</li>
						</ul>
					</div>
					<ul className="menuList">
						{card.map((item, idx) => {
							return (
								<Card
									data={item}
									key={idx}
									id={idx}
									addToCart={props.addToCart}
								/>
							);
						})}
					</ul>
				</div>
			</section>
		</>
	);
}
