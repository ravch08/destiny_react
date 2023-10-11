import { Link } from "react-router-dom";
import { Logo, ScrollToTop } from "../utils/helper";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer-wrapper text-center">
					<img src={Logo} alt="Footer logo" />

					<nav aria-labelledby="Footer Navigation">
						<Link to="#!" className="ftr-link">
							HOME
						</Link>
						<Link to="#!" className="ftr-link">
							ABOUT US
						</Link>
						<Link to="#!" className="ftr-link">
							TERMS & CONDITIONS
						</Link>
						<Link to="#!" className="ftr-link">
							PRIVACY POLICY
						</Link>
					</nav>

					<p>Copyright ©2016 Destiny Inc. All Rights Reserved.</p>
				</div>

				<ScrollToTop />
			</div>
		</footer>
	);
};

export default Footer;
