import './About.css';
import video from '../assets/video-filter-cup.mp4';
import poster from '../assets/image-hero-blackcup.jpg';
import barista from '../assets/image-barista.png';
import coffee from '../assets/image-plant.jpg';
const About = () => {
	return (
		<>
			<section className="about">
				<div className="main-container container">
					<h1 className="main-title">
						We're redefining <br />
						what it means to <br />
						brew great coffee.
					</h1>
					<video
						src={video}
						type="video/mp4"
						poster={poster}
						autoPlay
						loop
						muted
						webkit-playsinline
						playsinline
						className="main-video"></video>
					<div className="overlay"></div>
				</div>
			</section>
			<section className="mission">
				<div className="mission-container container">
					<img src={barista} alt="barista" />
					<div className="mission-text">
						<h2 className="mission-title">Our mission</h2>
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
				</div>
			</section>
			<section className="quality">
				<div className="quality-container container">
					<img src={coffee} alt="coffee beans" />
					<div className="quality-bg"></div>
					<div className="quality-text">
						<h2 className="quality-title">Uncompromising quality</h2>
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
				</div>
			</section>
		</>
	);
};

export default About;
