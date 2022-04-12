import React from 'react';
import HeroCarousel from '../../components/molecules/hero-carousel/hero-carousel';
import HeadlineText from '../../components/molecules/headline-text/HeadlineText';
import {SwiperSlide } from "swiper/react";

const carousel_items_1 = [
   {
      title : 'Bring safer, more energy efficient and innovative products to life – faster. ',
      pretitle : 'Welcome to hbk world',
      img : 'https://www.hbkworld.com/en/_jcr_content/root/container/container_copy/container_copy/carousel_1850916336/teaser.coreimg.jpeg/1644414943590/bring-safer%2C-more-energy-efficient-and-innovative-products-to-life-faster.jpeg'
   },
   {
      title : 'HBK works to achieve a bright and green future',
      pretitle : 'Electric power',
      img : 'https://www.hbkworld.com/en/_jcr_content/root/container/container_copy/container_copy/carousel_1850916336/item_1642772195202.coreimg.jpeg/1643208200731/shutterstock-1393633001.jpeg'
   },
];

export default {
   title: 'Molecules/HeroCarousel',
   component: HeroCarousel,
   argTypes: {
      spaceBetween : {
         name: "Space between slides",
         control: { type: 'text' },
         defaultValue : '50'
      },
      slidesPerView : {
         name: "Slides per view",
         control: { type: 'text' },
         defaultValue : '1'
      },
      loop : {
         name: "Loop",
         control: { type: "boolean" },
         defaultValue : 'false'
      },
      arrows : {
         name: "Arrows",
         control: { type: "boolean" },
         defaultValue : 'true'
      },
      
   }
};

const Template = (args) => <HeroCarousel  {...args}>
    {carousel_items_1 && carousel_items_1.length > 0 && carousel_items_1.map((value, key) => {
         return(
            <SwiperSlide>
               <div className='hero-carousel-slide'>
                     <div className='h-full w-full absolute bg-cover bg-no-repeat bg-center bg-custom-gradient' style={{ backgroundImage : `url(${value.img})`}}>
                        <div className='pt-6 md:pt-28 lg:pt-36 container relative font-montserrat'>
                           <HeadlineText>
                                 <p className='text-sm font-semibold text-teal-100 uppercase '>{value.pretitle}</p>
                                 <h2 className='text-72 relative text-primary font-bold tracking-custom-1 mt-2'>{value.title}</h2>
                           </HeadlineText>
                        </div>
                     </div>
               </div>
            </SwiperSlide>
         );
      })}
</HeroCarousel>;

export const HeroCarousel_default = Template.bind({});
HeroCarousel_default.args = {
   carousel_items_1,
   spaceBetween : '50',
   slidesPerView : '1',
   loop : true
}
