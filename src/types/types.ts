export type CounterProps = {
	id?: number;
	data: number;
	title: string;
	svg: JSX.Element;
};

export type FeatureProps = {
	id?: number;
	title: string;
	imgSrc: string;
	class?: string;
	svg: JSX.Element;
	listItem1: string;
	listItem2: string;
	listItem3: string;
	description: string;
};

export type PricingCardProps = {
	id?: number;
	price: number;
	title: string;
	imgSrc: string;
	btnText: string;
	listItem1: string;
	listItem2: string;
	listItem3: string;
	listItem4: string;
	description: string;
};

export type ServiceProps = {
	id?: number;
	title: string;
	imgSrc: string;
	description: string;
};

export type TestimonialProps = {
	id?: number;
	quote: string;
	imgSrc: string;
	svg: JSX.Element;
	userName: string;
	designation: string;
};
