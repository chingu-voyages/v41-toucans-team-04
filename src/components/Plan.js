import './Plan.css';
import video from '../assets/videos/video-coffee-beans.mp4';
import poster from '../assets/images/image-hero-whitecup.jpg';
const Plan = () => {
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
				<div className="plan-container container">
					<h2 className="hero-title">Create your Plan</h2>
				</div>
			</section>
		</>
	);
};

export default Plan;
