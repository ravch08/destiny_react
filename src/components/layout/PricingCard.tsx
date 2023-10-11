import { Link } from "react-router-dom";
import { PricingCardProps } from "../../types/types";

const PricingCard = (props: PricingCardProps) => {
	return (
		<div className="pricing-card">
			<figure>
				<img src={props.imgSrc} alt="cart2" />
			</figure>
			<h3>{props.title}</h3>
			<span>${props.price}</span>
			<p>{props.description}</p>
			<ul className="pricing-card-list">
				<li>{props.listItem1}</li>
				<li>{props.listItem2}</li>
				<li>{props.listItem3}</li>
				<li>{props.listItem4}</li>
			</ul>

			<Link to="#!" className="btn-primary">
				{props.btnText}
			</Link>
		</div>
	);
};

export default PricingCard;
