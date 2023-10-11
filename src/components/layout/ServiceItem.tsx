import { ServiceProps } from "../../types/types";

const ServiceItem = (props: ServiceProps) => {
	return (
		<div className="service-item">
			<figure>
				<img src={props.imgSrc} alt={props.title} />
			</figure>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</div>
	);
};

export default ServiceItem;
