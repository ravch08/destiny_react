import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Logo, Sidebar } from "../utils/helper";

const Header = () => {
	const [isSticky, setIsSticky] = useState("");

	const stickyHandler = () => {
		const stickyClass = window.scrollY > 250 ? "sticky" : "";
		setIsSticky(stickyClass);
	};

	useEffect(() => {
		window.addEventListener("scroll", stickyHandler);
		return () => window.removeEventListener("scroll", stickyHandler);
	}, []);

	const sticky = `${isSticky}`;

	return (
		<header className={sticky}>
			<div className="container">
				<div className="header-wrapper">
					<Link to="/" className="nav-brand">
						<img src={Logo} width="40" alt="Logo" />
					</Link>

					<nav aria-labelledby="Primary Navigation" className="primary-nav">
						<ul className="nav-list">
							<li className="nav-item">
								<NavLink to="/" className="nav-link">
									HOME
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="servicePage" className="nav-link">
									SERVICES
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="about" className="nav-link">
									ABOUT US
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="pricing" className="nav-link">
									PRICING
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="contact" className="nav-link">
									CONTACT
								</NavLink>
							</li>
						</ul>
					</nav>

					<Sidebar />
				</div>
			</div>
		</header>
	);
};

export default Header;
