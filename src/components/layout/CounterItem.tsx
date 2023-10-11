import { CounterProps } from "../../types/types";

const CounterItem = (props: CounterProps) => {
	const dataInfo = props.data > 10000 ? props.data.toString().slice(0, 2) + "k+" : props.data;

	return (
		<div className="counter-item">
			{props.svg}
			<h3 className="counter" data-target={props.data}>
				{dataInfo}
			</h3>
			<span>{props.title}</span>
		</div>
	);
};

export default CounterItem;
