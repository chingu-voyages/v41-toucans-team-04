import './Showcase.css';
import danche from '../assets/image-danche.png';
import espresso from '../assets/image-gran-espresso.png';
import piccollo from '../assets/image-piccollo.png';
import planalto from '../assets/image-planalto.png';

const Showcase = () => {
	return (
		<section className="showcase">
			<div className="collection-wrapper">
				<h2 className="collection-title">Our Collection</h2>
				<div className="collection-list">
					<div className="collection-item">
						<img src={espresso} alt="espresso" />
						<p>Gran Espresso</p>
					</div>
					<div className="collection-item">
						<img src={planalto} alt="planalto" />
						<p>Planalto</p>
					</div>
					<div className="collection-item">
						<img src={piccollo} alt="piccollo" />
						<p>Piccollo</p>
					</div>
					<div className="collection-item">
						<img src={danche} alt="danche" />
						<p>Danche</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Showcase;
