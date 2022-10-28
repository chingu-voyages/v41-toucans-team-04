import './Main.css';
import video from '../assets/video-coffee.mp4';

const Main = () => {
	return (
		<section className="main">
			<div className="main-wrapper">
				<div className="overlay"></div>
				<h1 className="main-title">
					Great Coffee <br /> made simple.
				</h1>
				<p className="main-text">
					Start your mornings with the world’s best coffees. Try our
					expertly curated artisan coffees from our best roasters
					delivered directly to your door, at your schedule.
				</p>
				<button className="main-btn">Create your Plan</button>
			</div>
			<video
				src={video}
				type="video/mp4"
				autoPlay
				loop
				muted
				className="main-video"></video>
		</section>
	);
};

export default Main;
