import React from 'react'
import HtmlComment from '../../particles/html-comment/HtmlComment'
import ButtonLink from '../button-link/ButtonLink';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

SwiperCore.use([Navigation, Pagination]);

const HeroCarousel = props => {
    const {spaceBetween, slidesPerView , loop , carousel_items_1} = props;

    return (
        <div className="carousel section">
           <Swiper
            spaceBetween={ Number(spaceBetween) }
            slidesPerView={ Number(slidesPerView) }
            modules={[Pagination, Navigation]}
            navigation={{
                nextEl: '.right-tail-arrow',
                prevEl: '.left-tail-arrow',
            }}
            pagination={{
                type: "fraction",
            }}
            loop={loop}
            >
                {props.children}
            
            <div className='custom-arrow-container absolute bottom-0.5 h-9 pb-3 left-1/2 transform -translate-x-1/2 w-44 px-4 flex justify-between items-center z-50'>
                <ButtonLink
                button_type="left-tail-arrow"
                />
                <ButtonLink
                button_type="right-tail-arrow"
                />
            </div>
            </Swiper>
        </div>
    )
}

export default HeroCarousel;