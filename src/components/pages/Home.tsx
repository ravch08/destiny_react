import {
	Banner,
	Clients,
	Counter,
	Dashboard,
	Features,
	Newsletter,
	Pricing,
	Services,
	Testimonials,
} from "../utils/helper";

const Home = () => {
	return (
		<main>
			<Banner />
			<Services />
			<Features />
			<Testimonials />
			<Dashboard />
			<Counter />
			<Pricing />
			<Clients />
			<Newsletter />
		</main>
	);
};

export default Home;
