import './Plan.css';
import video from '../assets/video-coffee-beans.mp4';
import poster from '../assets/image-hero-whitecup.jpg';
const Plan = () => {
	return (
		<>
			<section className="plan">
				<div className="main-container container">
					<h1 className="main-title">Create a plan</h1>
					<p className="main-text">
						Build a subscription plan that best fits your needs. We
						offer an assortment of the best artisan coffees from
						around the globe delivered fresh to your door.
					</p>
					<video
						src={video}
						poster={poster}
						autoPlay
						loop
						muted
						crossOrigin="true"
						className="main-video"></video>
					<div className="overlay"></div>
				</div>
			</section>
		</>
	);
};

export default Plan;
