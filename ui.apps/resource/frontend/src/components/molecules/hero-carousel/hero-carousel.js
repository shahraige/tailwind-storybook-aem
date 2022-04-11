import React from 'react'
import HeadlineText from '../headline-text/HeadlineText'
import HtmlComment from '../../particles/html-comment/HtmlComment'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import ImageExtension from '../image-extension/ImageExtension';

SwiperCore.use([Navigation, Pagination]);

const HeroCarousel = props => {
    const {  } = props;

    return (
        <div className="hero-carousel section">
           <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Pagination, Navigation]}
            navigation
            pagination={{
                type: "fraction",
            }}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
                <div className='h-full w-full absolute bg-cover bg-no-repeat bg-center bg-custom-gradient' style={{ backgroundImage : `url('https://www.hbkworld.com/en/_jcr_content/root/container/container_copy/container_copy/carousel_1850916336/item_1642772195202.coreimg.jpeg/1643208200731/shutterstock-1393633001.jpeg')`}}>
                    <div className='pt-36 container'>

                    <h2 className='text-72 relative text-primary font-bold'>HBK works to achieve a bright and green future</h2>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='h-full w-full absolute bg-cover bg-no-repeat bg-center bg-custom-gradient' style={{ backgroundImage : `url('https://www.hbkworld.com/en/_jcr_content/root/container/container_copy/container_copy/carousel_1850916336/item_1642772195202.coreimg.jpeg/1643208200731/shutterstock-1393633001.jpeg')`}}>
                    <div className='pt-36 container'>

                    <h2 className='text-72 relative text-primary font-bold'>HBK works to achieve a bright and green future</h2>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='h-full w-full absolute bg-cover bg-no-repeat bg-center bg-custom-gradient' style={{ backgroundImage : `url('https://www.hbkworld.com/en/_jcr_content/root/container/container_copy/container_copy/carousel_1850916336/item_1642772195202.coreimg.jpeg/1643208200731/shutterstock-1393633001.jpeg')`}}>
                    <div className='pt-36 container'>

                    <h2 className='text-72 relative text-primary font-bold'>HBK works to achieve a bright and green future</h2>
                    </div>
                </div>
            </SwiperSlide>
            
            </Swiper>
        </div>
    )
}

export default HeroCarousel;