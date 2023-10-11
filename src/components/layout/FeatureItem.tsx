import { Link } from "react-router-dom";
import { FeatureProps } from "../../types/types";

const FeatureItem = (props: FeatureProps) => {
	const featureClass = props.class ? `${props.class} feature-item` : "feature-item";

	return (
		<div className={featureClass}>
			<figure>
				<img src={props.imgSrc} alt={props.title} />
			</figure>

			<div className="feature-content">
				<h2>{props.title}</h2>
				<p>{props.description}</p>

				<ul className="feature-list">
					<li>
						{props.svg}
						{props.listItem1}
					</li>
					<li>
						{props.svg}
						{props.listItem2}
					</li>
					<li>
						{props.svg}
						{props.listItem3}
					</li>
				</ul>

				<Link to="#!" className="btn-primary">
					WATCH INTRO
				</Link>
			</div>
		</div>
	);
};

export default FeatureItem;
