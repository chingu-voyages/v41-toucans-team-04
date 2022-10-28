import './Features.css';
import bean from '../assets/icon-coffee-bean.svg';
import gift from '../assets/icon-gift.svg';
import truck from '../assets/icon-truck.svg';
const Features = () => {
	return (
		<section className="features">
			<div className="features-container container">
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
								Special offers and swag when you subscribe, including
								30% off your first shipment.
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
	);
};

export default Features;
