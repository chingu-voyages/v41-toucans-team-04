import React, { useState } from 'react';
import aeropress from '../assets/images/plan/aeropress.svg';
import coffeemaker from '../assets/images/plan/coffee-maker.svg';
import chemex from '../assets/images/plan/chemex.svg';
import coldbrew from '../assets/images/plan/cold-brew.svg';
import frenchpress from '../assets/images/plan/french-press.svg';
import pourover from '../assets/images/plan/pour-over.svg';
import mokapot from '../assets/images/plan/moka-pot.svg';
import cup from '../assets/images/plan/cup.svg';
import ground from '../assets/images/plan/ground.svg';
import pods from '../assets/images/plan/refillable-pods.svg';

export default function Quiz() {
	const data = [
		{
			step: 1,
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
					title: 'AeroPress',
					image: aeropress,
				},
				{
					title: 'Moka Pot',
					image: mokapot,
				},
			],
		},
		{
			step: 2,
			question: 'What is your coffee experience level ?',
			options: [
				{
					title: 'pretty new',
					image: mokapot,
				},
				{
					title: 'intermediate stage',
					image: cup,
				},
				{
					title: 'advanced',
					image: pods,
				},
				{
					title: 'coffee nerd',
					image: coldbrew,
				},
			],
		},
		{
			step: 3,
			question: 'Do you add anything to your coffee ?',
			options: [
				{
					title: 'nope, black',
					image: aeropress,
				},
				{
					title: 'milk',
					image: mokapot,
				},
				{
					title: 'syrups',
					image: chemex,
				},
				{
					title: 'sugar',
					image: ground,
				},
			],
		},
	];
	const [step, setStep] = useState(0);
	// const [price, SetPrice] = useState(0);

	const toggleStep = (index) => {
		setStep(index);
	};

	return (
		<div>
			<h1> {data[step].question}</h1>
			<div>
				{data[step].options.map((d) => {
					return (
						<div role="button" onClick={() => toggleStep(step + 1)}>
							{console.log(d)}
							<img src={d.image} alt={d.title} />
							<p>{d.title}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
