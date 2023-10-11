import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ScrollToTop = () => {
	const [isScroll, setIsScroll] = useState("");

	const scrollTopHandler = () => {
		const scrollClass = window.scrollY > 250 ? "show" : "";
		setIsScroll(scrollClass);
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollTopHandler);
		return () => window.removeEventListener("scroll", scrollTopHandler);
	}, []);

	const scrollHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const scrollTop = `${isScroll}` ? `${isScroll} scroll-top` : `scroll-top`;

	return (
		<Link to="#!" className={scrollTop} onClick={scrollHandler}>
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 320 512">
				<path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
			</svg>
		</Link>
	);
};

export default ScrollToTop;
