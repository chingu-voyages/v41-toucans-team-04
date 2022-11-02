import React from 'react';
import './Merchandise.css';
import { useEffect, useState } from 'react';
import data from '../assets/merch-items.json';
import video from '../assets/video-filter-cup.mp4';
import poster from '../assets/image-coffee-shop.jpg';

export default function Merchandise() {
	const [products, setProducts] = useState(data.merch);

	useEffect(() => {
		setProducts(products);
	}, [products]);
	console.log(products);
	return (
		<>
			<section className="merch-hero">
				<div className="hero-container container">
					<h1 className="hero-title">
						{/* add any title */}
						Love our coffee <br />
						Enjoy our merch <br />
					</h1>
					{/* add any text */}
					<p className="hero-text">Toucan Coffee shop</p>
					<video
						src={video}
						type="video/mp4"
						poster={poster}
						autoPlay
						loop
						muted
						webkit-playsinline
						playsinline
						className="hero-video"></video>
					<div className="hero-overlay"></div>
				</div>
			</section>
			<section className="merch">
				{/* add this div for layout */}
				<div className="merch-container container">
					{products.map((item) => {
						return (
							// container should be outside map , will use merch-container
							// <div className="card-container">
							<div className="card">
								{/* image location ../images/ */}
								<img src={item.img} alt={item.name} />
								<p className="name">{item.name}</p>
								<p className="description">{item.description}</p>
								<p className="price">{item.price}</p>
								<button>Add to Card</button>
							</div>
							// </div>
						);
					})}
				</div>
			</section>
		</>
	);
}
