import React from 'react';
import './Shop.css';
import { useEffect, useState } from 'react';
import data from '../assets/shop.json';
import video from '../assets/videos/video-coffee-cheers.mp4';
import poster from '../assets/images/image-coffee-shop.jpg';
import ShopCard from './ShopCard';

export default function Shop(props) {
	const [products, setProducts] = useState(data.coffee);
	const [toggleTab, setToggleTab] = useState(1);
	useEffect(() => {
		setProducts(products);
	}, [products]);
	const handleToggleTab = (index) => {
		setToggleTab(index);
	};

	return (
		<>
			<section className="merch-hero">
				<div className="hero-container container">
					<h1 className="hero-title">
						Sip our coffee. <br />
						Grip our merch. <br />
					</h1>
					<p className="hero-text">
						Elevate your experience by pairing our coffee with any of
						our curated products below!
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
			<section className="merch">
				<div className="container">
					<div className="tab-menu">
						<div
							className={toggleTab === 1 ? 'tab active' : 'tab'}
							onClick={() => {
								handleToggleTab(1);
								setProducts(data.coffee);
							}}>
							Coffee
						</div>
						<div
							className={toggleTab === 2 ? 'tab active' : 'tab'}
							onClick={() => {
								handleToggleTab(2);
								setProducts(data.merch);
							}}>
							Merch
						</div>
						{/* <div
							className={toggleTab === 3 ? 'tab active' : 'tab'}
							onClick={() => {
								handleToggleTab(3);
							}}>
							Equipment
						</div> */}
					</div>
					<div className="merch-container ">
						{products.map((item, idx) => {
							return (
								<ShopCard
									data={item}
									key={idx}
									id={idx}
									addToCart={props.addToCart}
								/>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}
