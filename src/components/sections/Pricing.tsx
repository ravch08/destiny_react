import { pricingCards } from "../utils/data.tsx";
import { PricingCard } from "../utils/helper";

const Pricing = () => {
	const pricingCardsList = pricingCards.map((pricingCard) => (
		<PricingCard
			key={pricingCard.id}
			price={pricingCard.price}
			imgSrc={pricingCard.imgSrc}
			title={pricingCard.title}
			btnText={pricingCard.btnText}
			listItem1={pricingCard.listItem1}
			listItem2={pricingCard.listItem2}
			listItem3={pricingCard.listItem3}
			listItem4={pricingCard.listItem4}
			description={pricingCard.description}
		/>
	));

	return (
		<section id="pricing" aria-labelledby="Pricing">
			<div className="container">
				<div className="section-heading">
					<h2>Pickup the right pricing plan for you.</h2>
					<p>
						Our plans are designed to meet the requirements of both beginners and players. Get the
						right plan that suits you.
					</p>
				</div>

				<div className="pricing-list"> {pricingCardsList} </div>
			</div>
		</section>
	);
};

export default Pricing;
