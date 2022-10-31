import './Menu.css';
import video from '../assets/video-espresso-coffee.mp4';
import poster from '../assets/image-coffee-shop.jpg';
import { useEffect, useState } from 'react';
// import data from "../assets/data.json";
import axios from 'axios';
import Card from './Card';
export default function Menu() {
	const [card, setCard] = useState([]);
	// useEffect(() => {
	//   setCard(data.coffees);
	// }, []);
	useEffect(() => {
		axios.get(`https://api.sampleapis.com/coffee/hot`).then((res) => {
			setCard(res.data);
		});
	}, []);
	return (
		<>
			<section className="menu">
				<div className="main-container container">
					<h1 className="main-title">
						The Gift of <br />
						Better Coffee <br />
					</h1>
					<p className="main-text">
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
						webkit-playsinline
						playsinline
						className="main-video"></video>
					<div className="overlay"></div>
				</div>
			</section>

			<section className="cards-container container">
				<ul>
					{card.map((item, idx) => {
						return <Card data={item} key={idx} />;
					})}
				</ul>
			</section>
		</>
	);
}
