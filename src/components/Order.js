import './Order.css';
import React, { useState } from 'react';
import data from '../content/order';

export default function Quiz({ addToCart }) {
	const [step, setStep] = useState(0);
	const [showSummary, setShowSummary] = useState(false);
	const [price, setPrice] = useState(0);
	const [info, setInfo] = useState([]);
	const handleStep = (index) => {
		if (index >= 6) {
			setShowSummary(true);
		} else {
			setStep(index + 1);
		}
	};
	const handlePrice = (value) => {
		setPrice(value);
	};
	const handleInfo = (target) => {
		console.log(info);
		setInfo((prev) => [...prev, target]);
	};
	let name = `${info[6]} of ${info[5]}, ${info[3]} for ${info[0]}`;
	let random = Math.floor(Math.random() * (999 - 1 + 1)) + 1;
	const addCartHandler = () => {
		addToCart(random, name, price);
	};

	return (
		<div className="order-container container">
			{showSummary ? (
				<div>
					<h2 className="hero-title">Perfect choice</h2>
					<p className="hero-text">{name}</p>
					<div className="order-summary">
						<button className="btn" onClick={addCartHandler}>
							Add to Cart
						</button>
						<p className="order-price">$ {price}</p>
					</div>
				</div>
			) : (
				<div>
					<p className="order-step"> {data[step].step}</p>
					<h2 className="order-header"> {data[step].question}</h2>
					<div className="order-items">
						{data[step].options.map((option, idx) => {
							return (
								<>
									<div
										className="order-item"
										role="button"
										key={idx}
										onClick={() => {
											handleStep(step);
											handlePrice(option.price);
											handleInfo(option.title);
										}}>
										{option.image && (
											<img
												className="order-image"
												src={option.image}
												alt={option.title}
											/>
										)}
										<div className="order-para">
											<p className="order-title">{option.title}</p>
											{option.text && (
												<p className="order-text">{option.text}</p>
											)}
										</div>
									</div>
								</>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
