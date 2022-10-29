import './About.css';
import video from '../assets/video-filter-cup.mp4';
import poster from '../assets/image-hero-blackcup.jpg';
import barista from '../assets/image-barista.png';
import coffee from '../assets/image-grinder.jpg';
const About = () => {
	return (
		<>
			<section className="about">
				<div className="main-container container">
					<h1 className="main-title">About Us</h1>
					<p className="main-text">
						Toucan coffee began its journey of exotic discovery in
						2022, highlighting stories of coffee from around the
						world. We have since been dedicated to bring the perfect
						cup - from bean to brew - in every shipment.
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
			<section className="mission">
				<div className="mission-container container">
					<div>
						<h2>Our mission</h2>
						<p>
							We’re built on a simple mission and a commitment to
							doing good along the way. We want to make it easy for
							you to discover and brew the world’s best coffee at
							home. It all starts at the source. To locate the
							specific lots we want to purchase, we travel nearly 60
							days a year trying to understand the challenges and
							opportunities in each of these places. We collaborate
							with exceptional coffee growers and empower a global
							community of farmers through with well above fair-trade
							benchmarks. We also offer training, support farm
							community initiatives, and invest in coffee plant
							science. Curating only the finest blends, we roast each
							lot to highlight tasting profiles distinctive to their
							native growing region.
						</p>
					</div>
					<img src={barista} alt="barista" />
				</div>
			</section>
			<section className="quality">
				<div className="quality-container container">
					<div>
						<h2>Uncompromising quality</h2>
						<p>
							Although we work with growers who pay close attention to
							all stages of harvest and processing, we employ, on our
							end, a rigorous quality control program to avoid
							over-roasting or baking the coffee dry. Every bag of
							coffee is tagged with a roast date and batch number. Our
							goal is to roast consistent, user-friendly coffee, so
							that brewing is easy and enjoyable.
						</p>
					</div>
					<img src={coffee} alt="coffee beans" />
				</div>
			</section>
		</>
	);
};

export default About;
