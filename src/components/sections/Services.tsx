import { serviceItems } from "../utils/data.tsx";
import { ServiceItem } from "../utils/helper";

const Services = () => {
	const serviceItemsList = serviceItems.map((serviceItem) => (
		<ServiceItem
			key={serviceItem.id}
			title={serviceItem.title}
			imgSrc={serviceItem.imgSrc}
			description={serviceItem.description}
		/>
	));

	return (
		<section id="services" aria-labelledby="Services">
			<div className="container">
				<div className="section-heading text-center">
					<h2>Destiny isn't A.I, its the result of human intelligence.</h2>
					<p>
						Ne homero petentium mel, eu pro putent persecuti. Id ius mutat gubergren, eros harum
						hendrerit ex eos, in quo vocibus inimicus gubergren.
					</p>
				</div>

				<div className="service-list"> {serviceItemsList} </div>
			</div>
		</section>
	);
};

export default Services;
