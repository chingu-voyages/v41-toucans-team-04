import './Main.css';
import video from '../assets/video-coffee.mp4';
import poster from '../assets/image-hero-coffeepress.jpg';
import danche from '../assets/image-danche.png';
import espresso from '../assets/image-gran-espresso.png';
import piccollo from '../assets/image-piccollo.png';
import planalto from '../assets/image-planalto.png';
import bean from '../assets/icon-coffee-bean.svg';
import gift from '../assets/icon-gift.svg';
import truck from '../assets/icon-truck.svg';

const Main = () => {
	return (
		<>
			<section className="main">
				<div className="main-container container">
					<h1 className="main-title">
						Great coffee
						<br /> made simple.
					</h1>
					<p className="main-text">
						Start your mornings with the world’s best coffees. Try our
						expertly curated artisan coffees from our best roasters
						delivered directly to your door, at your schedule.
					</p>
					<button className="main-btn btn">Create your Plan</button>
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
			<section className="showcase">
				<div className="showcase-container container">
					<h2 className="showcase-title">our collection</h2>
					<div className="showcase-items">
						<div className="showcase-item">
							<img src={espresso} alt="espresso" />
							<div className="showcase-item-text">
								<h4>Gran Espresso</h4>
								<p>
									Light and flavorful blend with cocoa and black
									pepper for an intense experience
								</p>
							</div>
						</div>
						<div className="showcase-item">
							<img src={planalto} alt="planalto" />
							<div className="showcase-item-text">
								<h4>Planalto</h4>
								<p>
									Brazilian dark roast with rich and velvety body, and
									hints of fruits and nuts
								</p>
							</div>
						</div>
						<div className="showcase-item">
							<img src={piccollo} alt="piccollo" />
							<div className="showcase-item-text">
								<h4>Piccollo</h4>
								<p>
									Mild and smooth blend featuring notes of toasted
									almond and dried cherry
								</p>
							</div>
						</div>
						<div className="showcase-item">
							<img src={danche} alt="danche" />
							<div className="showcase-item-text">
								<h4>Danche</h4>
								<p>
									Ethiopian hand-harvested blend densely packed with
									vibrant fruit notes
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="features">
				<div className="features-container container">
					<div className="features-bg"></div>
					<h3 className="features-title">Why choose us?</h3>
					<p className="features-text">
						A large part of our role is choosing which particular
						coffees will be featured in our range. This means working
						closely with the best coffee growers to give you a more
						impactful experience on every level.
					</p>
					<div className="features-cards">
						<div className="features-card">
							<img src={bean} alt="coffee bean" />
							<div className="features-card-text">
								<h4>Best quality</h4>
								<p>
									Discover an endless variety of the world’s best
									artisan coffee from each of our roasters.
								</p>
							</div>
						</div>
						<div className="features-card">
							<img src={gift} alt="gift" />
							<div className="features-card-text">
								<h4>Exclusive benefits</h4>
								<p>
									Special offers and swag when you subscribe,
									including 30% off your first shipment.
								</p>
							</div>
						</div>
						<div className="features-card">
							<img src={truck} alt="truck" />
							<div className="features-card-text">
								<h4>Free shipping</h4>
								<p>
									We cover the cost and coffee is delivered fast. Peak
									freshness: guaranteed.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="works">
				<div className="works-container container">
					<h5 className="works-title">How it Works</h5>
					<div className="works-items">
						<div className="works-item">
							<p className="works-item-no">O1</p>
							<h6>Pick Your Coffee</h6>
							<p>
								Select from our evolving range of artisan coffees. Our
								beans are ethically sourced and we pay fair prices for
								them. There are new coffees in all profiles every
								month for you to try out.
							</p>
						</div>
						<div className="works-item">
							<p className="works-item-no">O2</p>
							<h6>Choose the frequency</h6>
							<p>
								Customize your order frequency, quantity, even your
								roast style and grind type. Pause, skip or cancel your
								subscription with no commitment through our online
								portal.
							</p>
						</div>
						<div className="works-item">
							<p className="works-item-no">O3</p>
							<h6>Receive and enjoy</h6>
							<p>
								We ship your package within 48 hours, freshly roasted.
								Sit back and enjoy award-winning world-class coffees
								curated to provide a distinct tasting experience.
							</p>
						</div>
					</div>
					<button className="btn">Create your plan</button>
				</div>
			</section>
		</>
	);
};

export default Main;
