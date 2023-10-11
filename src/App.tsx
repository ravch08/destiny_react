import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
	About,
	Contact,
	Footer,
	Header,
	Home,
	Page404,
	PricingPage,
	ServicePage,
} from "./components/utils/helper";

import "./styles/main.css";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="servicepage" element={<ServicePage />} />
				<Route path="contact" element={<Contact />} />
				<Route path="pricing" element={<PricingPage />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
