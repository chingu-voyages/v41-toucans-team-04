import './About.css';
import video from '../assets/video-filter-cup.mp4';
import poster from '../assets/image-hero-blackcup.jpg';
const About = () => {
	return (
		<>
			<section className="about">
				<div className="main-container container">
					<h1 className="main-title">About Us</h1>
					<p className="main-text">
						Coffeeroasters began its journey of exotic discovery in
						1999, highlighting stories of coffee from around the
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
		</>
	);
};

export default About;
