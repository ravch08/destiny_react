import { featureItems } from "../utils/data.tsx";
import { FeatureItem } from "../utils/helper";

const Features = () => {
	const featureItemsList = featureItems.map((featureItem) => (
		<FeatureItem
			key={featureItem.id}
			svg={featureItem.svg}
			title={featureItem.title}
			imgSrc={featureItem.imgSrc}
			listItem1={featureItem.listItem1}
			listItem2={featureItem.listItem2}
			listItem3={featureItem.listItem3}
			description={featureItem.description}
			class={(featureItems.indexOf(featureItem) + 1) % 2 === 0 ? "flexRow-reverse" : ""}
		/>
	));

	return (
		<section id="features" aria-labelledby="Features">
			<div className="container">
				<div className="feature-wrapper"> {featureItemsList} </div>
			</div>
		</section>
	);
};

export default Features;
