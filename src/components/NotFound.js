import './NotFound.css';
import spilling from '../assets/images/spilling-coffee.png';
const NotFound = () => {
	return (
		<section className="not-found container">
			<div className="not-found-container ">
				<h2 className="hero-title">Oooppss...</h2>
				<img
					src={spilling}
					alt="spilled coffee"
					width="256px"
					height="225px"
				/>
				<h1 className="hero-title">404</h1>
				<h3 className="hero-text">That page cannot be found.</h3>
			</div>
		</section>
	);
};

export default NotFound;
