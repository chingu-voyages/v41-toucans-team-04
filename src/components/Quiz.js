import React, { useState } from 'react';
import aeropress from '../assets/images/plan/aeropress.svg';
import coffeemaker from '../assets/images/plan/coffee-maker.svg';
import chemex from '../assets/images/plan/chemex.svg';
import coldbrew from '../assets/images/plan/cold-brew.svg';
import frenchpress from '../assets/images/plan/french-press.svg';
import espressomachine from '../assets/images/plan/espresso-machine.svg';
import pourover from '../assets/images/plan/pour-over.svg';
import percolator from '../assets/images/plan/percolator.svg';
import mokapot from '../assets/images/plan/moka-pot.svg';
import milk from '../assets/images/plan/milk.svg';
import mix from '../assets/images/plan/mixed.svg';
import cup from '../assets/images/plan/cup.svg';
import syrup from '../assets/images/plan/syrup.svg';
import altmilk from '../assets/images/plan/alt-milk.svg';
import sugar from '../assets/images/plan/sugar.svg';
import ground from '../assets/images/plan/ground.svg';
import wholebean from '../assets/images/plan/whole-bean.svg';
import pods from '../assets/images/plan/refillable-pods.svg';

export default function Quiz({ addToCart }) {
	const data = [
		{
			id: 1,
			step: '1 of 7',
			question: 'How do you usually make the coffee ?',
			options: [
				{
					title: 'Coffee Maker',
					image: coffeemaker,
				},
				{
					title: 'French press',
					image: frenchpress,
				},
				{
					title: 'Pour Over',
					image: pourover,
				},
				{
					title: 'Chemex',
					image: chemex,
				},
				{
					title: 'AeroPress',
					image: aeropress,
				},
				{
					title: 'Cold Brew',
					image: coldbrew,
				},
				{
					title: 'Espresso Machine',
					image: espressomachine,
				},
				{
					title: 'Percolator',
					image: percolator,
				},
				{
					title: 'Moka Pot',
					image: mokapot,
				},
				{
					title: 'Refillable Pods',
					image: pods,
				},
			],
		},
		{
			id: 2,
			step: '2 of 7',
			question: 'What is your coffee experience level ?',
			options: [
				{
					title: `I'm pretty new to all of this`,
					text: `I'd like to start with something approachable and easy to love`,
				},
				{
					title: `I'm at an intermediate stage`,
					text: `I buy premium coffee from the grocery store and I know a little about roast levels`,
				},
				{
					title: `I'm pretty advanced`,
					text: `I buy coffee from specialty roasters and I know the difference between blends and single origins`,
				},
				{
					title: `I'm a total coffee nerd`,
					text: `I know my Caturra from my Bourbon and cupping is my favorite hobby`,
				},
			],
		},
		{
			id: 3,
			step: '3 of 7',
			question: 'Do you add anything to your coffee ?',
			options: [
				{
					title: 'Nope, I take it black',
					image: cup,
				},
				{
					title: 'Milk or Cream',
					image: milk,
				},
				{
					title: 'A mix of these choices',
					image: mix,
				},
				{
					title: 'Flavored Creamer or Syrups',
					image: syrup,
				},
				{
					title: 'Non-Dairy Milk',
					image: altmilk,
				},
				{
					title: 'Sugar or sweetener',
					image: sugar,
				},
			],
		},
		{
			id: 4,
			step: '4 of 7',
			question: 'What roast level do you typically enjoy ?',
			options: [
				{
					title: 'Light roast',
					text: `More acidic & expressive of the coffee's original flavor`,
				},
				{
					title: 'Medium roast',
					text: 'Just a hint of roasty flavor beginning to come through',
				},
				{
					title: 'Dark roast',
					text: 'Some oil on the bean with deep, caramelized smokiness',
				},
				{
					title: 'I defer to you',
					text: `We'll make a pick based on your other responses`,
				},
			],
		},
		{
			id: 5,
			step: '5 of 7',
			question: 'How do you like your coffee to taste ?',
			options: [
				{
					title: 'Classic and traditional',
					text: `I like coffee that tastes like coffee`,
				},
				{
					title: 'Suprising and unconventional',
					text: 'Take me on an adventure',
				},
				{
					title: 'I defer to you',
					text: `We'll make a pick based on your other responses`,
				},
				{
					title: 'I defer to you',
					text: `We'll make a pick based on your other responses`,
				},
			],
		},
		{
			id: 6,
			step: '6 of 7',
			question: 'Do you ground coffee, whole bean coffee, or both ?',
			options: [
				{
					title: 'Whole bean',
					image: wholebean,
				},
				{
					title: 'Ground',
					image: ground,
				},
				{
					title: 'Both',
					image: mix,
				},
			],
		},
		{
			id: 7,
			step: '7 of 7',
			question:
				'How frequently you want us to deliver fresh coffee to your door? ',
			options: [
				{
					title: '1 bag every week',
					text: '$18 per shipment. Includes free priority shipping.',
					price: 72,
				},
				{
					title: '1 bag every 2 weeks',
					text: '$20 per shipment. Includes free shipping.',
					price: 40,
				},
				{
					title: '2 bags every week',
					text: '$32 per shipment. Includes free first-class shipping.',
					price: 128,
				},
			],
		},
	];
	const [step, setStep] = useState(0);
	const [showOrder, setShowOrder] = useState(false);
	const [price, setPrice] = useState(0);
	const [info, setInfo] = useState([]);
	const handleStep = (index) => {
		if (index >= 6) {
			setShowOrder(true);
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
			{showOrder ? (
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
						{data[step].options.map((d, i) => {
							return (
								<>
									<div
										role="button"
										key={i}
										onClick={() => {
											handleStep(step);
											handlePrice(d.price);
											handleInfo(d.title);
										}}>
										<p>{d.title}</p>
										{d.image && <img src={d.image} alt={d.title} />}
										{d.text && <p>{d.text}</p>}
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
