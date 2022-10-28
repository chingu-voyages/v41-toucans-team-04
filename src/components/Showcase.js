import './Showcase.css';
import danche from '../assets/image-danche.png';
import espresso from '../assets/image-gran-espresso.png';
import piccollo from '../assets/image-piccollo.png';
import planalto from '../assets/image-planalto.png';

const Showcase = () => {
	return (
		<section className="collection">
			<div className="showcase-container container">
				<h2 className="showcase-title">our collection</h2>
				<div className="showcase-list">
					<div className="showcase-item">
						<img src={espresso} alt="espresso" />
						<h4>Gran Espresso</h4>
						<p>
							Light and flavorful blend with cocoa and black pepper
							for an intense experience
						</p>
					</div>
					<div className="showcase-item">
						<img src={planalto} alt="planalto" />
						<h4>Planalto</h4>
						<p>
							Brazilian dark roast with rich and velvety body, and
							hints of fruits and nuts
						</p>
					</div>
					<div className="showcase-item">
						<img src={piccollo} alt="piccollo" />
						<h4>Piccollo</h4>
						<p>
							Mild and smooth blend featuring notes of toasted almond
							and dried cherry
						</p>
					</div>
					<div className="showcase-item">
						<img src={danche} alt="danche" />
						<h4>Danche</h4>
						<p>
							Ethiopian hand-harvested blend densely packed with
							vibrant fruit notes
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Showcase;
