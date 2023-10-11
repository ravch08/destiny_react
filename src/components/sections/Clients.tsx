import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Client1, Client2, Client3, Client4, Client5, Client6 } from "../utils/helper";

const Clients = () => {
	return (
		<section id="clients" aria-labelledby="Clients">
			<div className="container">
				<Swiper
					loop={true}
					speed={1500}
					slidesPerView={6}
					spaceBetween={30}
					loopedSlides={50}
					grabCursor={true}
					centeredSlides={false}
					modules={[Autoplay]}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					breakpoints={{
						0: {
							slidesPerView: 2,
						},
						577: {
							slidesPerView: 3,
						},
						769: {
							slidesPerView: 4,
						},
						1024: {
							slidesPerView: 5,
						},
						1200: {
							slidesPerView: 6,
						},
					}}
				>
					<SwiperSlide>
						<img src={Client1} alt="logo" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client2} alt="logo" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client3} alt="logo" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client4} alt="logo" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client5} alt="logo" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client6} alt="logo" />
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default Clients;
