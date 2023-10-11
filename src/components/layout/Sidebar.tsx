import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	const [isSidebar, setIsSidebar] = useState(false);

	const openSidebarHandler = () => setIsSidebar(true);
	const closeSidebarHandler = () => setIsSidebar(false);

	const sidebarClass = isSidebar ? "open sidebar" : "sidebar";

	return (
		<React.Fragment>
			<div className="hamburger-menu" onClick={openSidebarHandler}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>

			<div className={sidebarClass}>
				<nav aria-labelledby="Sidebar Navigation">
					<ul className="nav-list">
						<li className="nav-item">
							<NavLink to="/" className="nav-link" onClick={closeSidebarHandler}>
								HOME
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="about" className="nav-link" onClick={closeSidebarHandler}>
								ABOUT US
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="servicepage" className="nav-link" onClick={closeSidebarHandler}>
								SERVICES
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="pricing" className="nav-link" onClick={closeSidebarHandler}>
								PRICING
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="contact" className="nav-link" onClick={closeSidebarHandler}>
								CONTACT
							</NavLink>
						</li>
					</ul>
				</nav>

				<button className="close" onClick={closeSidebarHandler}>
					<span>close</span>
					<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 352 512">
						<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
					</svg>
				</button>
			</div>
		</React.Fragment>
	);
};

export default Sidebar;
