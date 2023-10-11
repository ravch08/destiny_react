import { TestimonialProps } from "../../types/types";

const TestimonialItem = (props: TestimonialProps) => {
	return (
		<div className="testimonial-item">
			<figure>
				<img src={props.imgSrc} alt={props.userName} />
			</figure>
			<p>{props.quote}</p>
			<span>{props.userName}</span>
			<small>{props.designation}</small>
			<div className="rating">
				{props.svg}
				{props.svg}
				{props.svg}
				{props.svg}
				{props.svg}
			</div>
		</div>
	);
};

export default TestimonialItem;
