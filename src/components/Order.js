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
		<div>
			{showSummary ? (
				<div>
					<h2>Perfect choice </h2>
					<p>{name}</p>
					<button onClick={addCartHandler}>
						Add to basket {price}
					</button>
				</div>
			) : (
				<div>
					<p> {data[step].step}</p>
					<h2> {data[step].question}</h2>
					<div>
						{data[step].options.map((option, idx) => {
							return (
								<>
									<div
										role="button"
										key={idx}
										onClick={() => {
											handleStep(step);
											handlePrice(option.price);
											handleInfo(option.title);
										}}>
										<p>{option.title}</p>
										{option.image && (
											<img src={option.image} alt={option.title} />
										)}
										{option.text && <p>{option.text}</p>}
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
