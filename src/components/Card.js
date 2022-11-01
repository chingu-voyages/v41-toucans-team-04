import { useState } from 'react';
import './Card.css';

export default function Card({ data }) {
	// console.log(data.name);
	const [flip, setFlip] = useState(true);
	const onClickFlip = () => {
		setFlip(!flip);
	};
	return (
		<li className="card">
			{flip ? (
				<div className="image" onClick={onClickFlip}>
					<img src={data.image} alt={data.name} />
				</div>
			) : (
				<p className="desc" onClick={onClickFlip}>
					{data.description}
				</p>
			)}
			<div className="name">{data.name}</div>

			<div className="price">{data.price}</div>
		</li>
	);
}
