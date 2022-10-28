import './Showcase.css';
import danche from '../assets/image-danche.png';
import espresso from '../assets/image-gran-espresso.png';
import piccollo from '../assets/image-piccollo.png';
import planalto from '../assets/image-planalto.png';

const Showcase = () => {
	return (
		<section className="showcase">
			<div className="collection-wrapper">
				<h2 className="collection-title">our collection</h2>
				<div className="collection-list">
					<div className="collection-item">
						<img src={espresso} alt="espresso" />
						<h4>Gran Espresso</h4>
						<p className="collection-text">
							Light and flavorful blend with cocoa and black pepper
							for an intense experience
						</p>
					</div>
					<div className="collection-item">
						<img src={planalto} alt="planalto" />
						<h4>Planalto</h4>
						<p className="collection-text">
							Brazilian dark roast with rich and velvety body, and
							hints of fruits and nuts
						</p>
					</div>
					<div className="collection-item">
						<img src={piccollo} alt="piccollo" />
						<h4>Piccollo</h4>
						<p className="collection-text">
							Mild and smooth blend featuring notes of toasted almond
							and dried cherry
						</p>
					</div>
					<div className="collection-item">
						<img src={danche} alt="danche" />
						<h4>Danche</h4>
						<p className="collection-text">
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
