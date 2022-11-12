import './Plan.css';
import React, { useState } from 'react';
import video from '../assets/videos/video-coffee-beans.mp4';
import poster from '../assets/images/image-hero-whitecup.jpg';
import Order from './Order';
const Plan = (props) => {
	const [startQuiz, setStartQuiz] = useState(true);
	const handleQuiz = () => {
		setStartQuiz(false);
	};
	return (
		<>
			<section className="plan-hero">
				<div className="hero-container container">
					<h1 className="hero-title">Create a plan</h1>
					<p className="hero-text">
						Build a subscription plan that best fits your needs. We
						offer an assortment of the best artisan coffees from
						around the globe delivered fresh to your door.
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
						className="hero-video"></video>
					<div className="hero-overlay"></div>
				</div>
			</section>
			<section className="plan">
				<div className="container">
					{startQuiz ? (
						<div className="plan-quiz">
							<h2 className="order-header">
								Not sure which one is right for you?
							</h2>
							<p className="plan-text">
								Find your perfect coffee match by taking our short
								quiz.
							</p>
							<button className="btn hero-btn" onClick={handleQuiz}>
								Start Quiz
							</button>
						</div>
					) : (
						<Order addToCart={props.addToCart} />
					)}
				</div>
			</section>
		</>
	);
};

export default Plan;
