import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<section id="banner" aria-labelledby="Banner">
			<div className="container">
				<div className="banner-content">
					<h1>
						Meet Destiny, a <br /> Visionary landing <br /> Page.
					</h1>
					<p>
						Re-targeting your audience with competitive intelligence embedded in Destiny. See it in
						action and then believe.
					</p>
					<Link to="#!" className="btn-primary">
						WATCH INTRO
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Banner;
