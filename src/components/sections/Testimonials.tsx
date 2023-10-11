import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { testimonialItems } from "../utils/data.tsx";
import { TestimonialItem } from "../utils/helper";

const Testimonials = () => {
	const testimonialItemsList = testimonialItems.map((testimonialItem) => (
		<SwiperSlide key={testimonialItem.id}>
			<TestimonialItem
				svg={testimonialItem.svg}
				quote={testimonialItem.quote}
				imgSrc={testimonialItem.imgSrc}
				userName={testimonialItem.userName}
				designation={testimonialItem.designation}
			/>
		</SwiperSlide>
	));

	return (
		<section id="testimonials" aria-labelledby="Testimonials">
			<div className="container">
				<Swiper
					loop={true}
					speed={1500}
					slidesPerView={1}
					spaceBetween={30}
					grabCursor={true}
					modules={[Autoplay]}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
				>
					{testimonialItemsList}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
