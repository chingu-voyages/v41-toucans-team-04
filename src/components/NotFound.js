import './NotFound.css';
import spilling from '../assets/images/spilling-coffee.png';
const NotFound = () => {
	return (
		<section className="not-found container">
			<div className="not-found-container ">
				<h1 className="hero-title">Oooppss...</h1>
				<img
					src={spilling}
					alt="spilled coffee"
					width="256px"
					height="225px"
				/>
				<h2 className="hero-text">That page cannot be found.</h2>
			</div>
		</section>
	);
};

export default NotFound;
