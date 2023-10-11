import { counterItems } from "../utils/data.tsx";
import { CounterItem } from "../utils/helper";

const Counter = () => {
	const counterItemsList = counterItems.map((counterItem) => (
		<CounterItem
			key={counterItem.id}
			svg={counterItem.svg}
			data={counterItem.data}
			title={counterItem.title}
		/>
	));

	return (
		<section id="counter" aria-labelledby="Counter">
			<div className="container">
				<div className="counter-wrapper"> {counterItemsList} </div>
			</div>
		</section>
	);
};

export default Counter;
