import React from 'react'
import Header from '../molecules/header/header'
import Footer from '../molecules/footer/footer'
import ColumnControl from '../molecules/column-control/column-control';
import HeadlineText from '../molecules/headline-text/HeadlineText';
import Separator from '../molecules/separator/separator';
import HeroCarousel from '../molecules/hero-carousel/hero-carousel';
import {SwiperSlide } from "swiper/react";
import ImageExtension from '../molecules/image-extension/ImageExtension';
import TeaserGallery from '../molecules/teaser-gallery/teaser-gallery';
import ButtonLink from '../molecules/button-link/ButtonLink';
import CardGroup from '../molecules/card/card-group';

const HomePage = () =>{
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

    return(
        <>
            <Header/>
            <Separator border_color="border-transparent"  marginY="my-16"/>

            <ColumnControl
            container="true"
            >
                <div className='col-span-full'>
                    <HeadlineText>
                        <p className='text-bold '>
                            <b>
                                Hottinger Brüel & Kjær pauses its business activities in Russia, Belarus, and Ukraine 
                            </b>
                        </p>
                        <p className=''>As a global company, we are deeply concerned about the current situation in Ukraine. HBK has therefore taken the decision to pause all trading with Russia, Belarus, and Ukraine. We also want to acknowledge the impact this situation has on all of us within HBK, and especially to those in our teams who have families and loved ones caught up in the conflict. Health and Safety is at the heart of our business, and we will stand together in our support for the people of Ukraine at this time.</p>
                    </HeadlineText>
                    <Separator border_gradient={true} border_gradient_width="h-0.5" marginY="my-12"/>
                </div>
            </ColumnControl>

            <HeroCarousel 
            spaceBetween={50}
            slidesPerView={1}
            loop={true}>
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
            </HeroCarousel>

            <Separator border_color="border-transparent"  marginY="my-16"/>

            <ColumnControl
            gapX="md:gap-x-6"
            container="true"
            >
                <div className='col-span-full md:col-span-6'>
                    <ImageExtension image_src="https://www.hbkworld.com/en/_jcr_content/root/container/container_copy/container_2125212522/columncontrol/col_1/image.coreimg.80.768.jpeg/1643186540088/aerospace-engineer.jpeg" />
                </div>
                <div className='col-span-full md:col-span-6'>
                    <HeadlineText>
                        <h2 className='text-primary font-montserrat text-xl font-bold mb-7 mt-2'>
                            What we do
                        </h2>
                        <p className=' mb-6'>As the union of market-leading organizations HBM and Brüel & Kjær, HBK are the product physics experts, providing integrated solutions and world-leading expertise across all test and measurement domains.</p>
                        <p className=' mb-6'>This enables engineers to drive innovation throughout every stage of the product creation process, with streamlined development cycles and faster time-to-market.</p>
                        <p className=''>
                            <b>We deliver value beyond measure by helping our customers bring safer, more energy efficient and innovative products to life – faster.</b>
                        </p>
                    
                    </HeadlineText>
                </div>
            </ColumnControl>

            <Separator border_color="border-transparent"  marginY="my-16"/>

            <TeaserGallery teaser_type="default"/>

            <Separator border_color="border-transparent"  marginY="my-16"/>
          
            <section className='bg-gray-40 py-10'>
                <Separator border_color="border-transparent"  marginY="my-10"/>
                <ColumnControl
                gapX="md:gap-x-6"
                container="true"
                >
                    <div className='col-span-full md:col-span-6'>
                        <ImageExtension image_src="https://www.hbkworld.com/en/_jcr_content/root/container/container_copy/container/columncontrol/col_1/image.coreimg.80.768.jpeg/1643188924838/shutterstock-640433458.jpeg" />
                    </div>
                    <div className='col-span-full md:col-span-6'>
                        <HeadlineText>
                            <h2 className='text-primary font-montserrat text-xl font-bold mb-7 mt-9'>
                                Core focus areas
                            </h2>
                            <p className=' mb-6'>HBK partners with engineers across a wide variety of industries to drive competitiveness across their business, and quality across their products. We focus on Automotive, Aerospace, Audio and leading industry verticals, to add our industry-leading expertise.</p>
                            <p className=' mb-6'>We bring everything together, from sensors and data acquisition to data preparation, evaluation and engineering services, with solutions that facilitate digital transformation and leading excellence in application hardware.</p>
                        </HeadlineText>
                    </div>
                </ColumnControl>

                <Separator border_color="border-transparent"  marginY="my-16"/>

                <TeaserGallery teaser_type="hover-card"/>
                <Separator border_color="border-transparent"  marginY="my-10"/>
            </section>

            <ColumnControl
            gapX="md:gap-x-6"
            container="true"
            container_padding="pt-16"
            >
                <div className='col-span-full md:col-span-6'>
                    <HeadlineText>
                        <h3 className=' font-montserrat text-lg font-bold mb-7 mt-2'>
                            HBK announces the acquisition of Concurrent Real-Time, Inc.
                        </h3>
                        <p className=' mb-6'>Concurrent Real-Time is now part of HBK. Concurrent Real-Time, together with VI-grade and Imtec Engineering, will constitute the Virtual Test Division within HBK. The Division will focus on providing complete solutions to virtually test products throughout the entire development cycle, helping companies accelerate innovation, reduce time-to-market, and improve their competitive advantage.</p>
                        
                    <ButtonLink btn_text='Read the full press release here' button_type='skew-hover'/>
                    </HeadlineText>
                </div>
                <div className='col-span-full md:col-span-6'>
                    <ImageExtension image_src="https://www.hbkworld.com/en/_jcr_content/root/container/container_copy/container_563179520/columncontrol/col_2/image.coreimg.80.768.jpeg/1644912191714/vtd-banner.jpeg" />
                </div>
            </ColumnControl>

            <Separator border_color="border-transparent"  marginY="my-16"/>

            <ColumnControl
            container="true">
                <div className='col-span-full'>
                    <HeadlineText>
                        <h2 className='text-primary font-montserrat text-xl font-bold mb-7 mt-2'>
                        Blog
                        </h2>
                    </HeadlineText>
                 </div>
            </ColumnControl>

            <CardGroup  padding ="px-8 pb-14 pt-8" type = "card-blog-image"/>

            <Separator border_color="border-transparent"  marginY="my-16"/>

            <ColumnControl
            container="true">
                 <div className='col-span-full'>
                    <HeadlineText>
                        <h2 className='text-primary font-montserrat text-xl font-bold mb-1 mt-2'>
                        Webinars & Trainings
                        </h2>
                    </HeadlineText>
                 </div>
            </ColumnControl>

            {/* <ColumnControl
            container="true">
              <HeroCarousel
            spaceBetween={50}
            slidesPerView={1}
            loop={true}>
                <SwiperSlide>
                    <CardGroup type = "card-blog"/>
                </SwiperSlide>
                <SwiperSlide>
                    <CardGroup type = "card-blog"/>
                </SwiperSlide>
            </HeroCarousel>
            </ColumnControl> */}

            <HeroCarousel
            spaceBetween={50}
            slidesPerView={1}
            loop={true}>
                <SwiperSlide>
                    <CardGroup type = "card-blog"/>
                </SwiperSlide>
                <SwiperSlide>
                    <CardGroup type = "card-blog"/>
                </SwiperSlide>
            </HeroCarousel>

            <Separator border_color="border-transparent"  marginY="my-16"/>

            <Footer/>
        </>
    )
}

export default HomePage;