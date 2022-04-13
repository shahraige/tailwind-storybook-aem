import React from 'react'
import Button from '../button-link/button'
import Card from '../card/card'
import HeadlineText from '../headline-text/HeadlineText'
import ImageExtension from '../image-extension/ImageExtension'

const teaser_gallery_item_1 = [
    {   
        img: 'https://www.hbkworld.com/en/_jcr_content/root/container/container_copy/container_2125212522/columncontrol_1228466419/col_1/teaser.coreimg.jpeg/1643197870947/shutterstock-1393633001-1280x1280.jpeg',
        title : 'Electric Power',
        description : 'Whether automotive, aerospace, manufacturing, production, or energy generation and distribution: they all need electric power, and e-mobility is key on our way towards an emission-free future',
    },
    {   
        img: 'https://www.hbkworld.com/en/_jcr_content/root/container/container_copy/container_2125212522/columncontrol_1228466419/col_2/teaser_copy.coreimg.jpeg/1643206627257/aircraft-design-and-development.jpeg',
        title : 'Aerospace & Defence',
        description : 'The aerospace and defence industry has led the way in innovation for more than a century. Ground-breaking developments for commercial and business aircraft, military, spacecraft, rockets, satellites ',
    },
    {   
        img: 'https://www.hbkworld.com/en/_jcr_content/root/container/container_copy/container_2125212522/columncontrol_1228466419/col_3/teaser_copy.coreimg.jpeg/1643205331283/services-hero-1200-x-370.jpeg',
        title : 'Services',
        description : 'HBK Services and Solutions empower our customers and engineers throughout the world to deploy and maintain test and measurement technologies as well as to optimise the usage of data',
    },
]

const TeaserGallery = (props) =>{

    const {teaser_type} = props;

    return(
    <div className="teaser-gallary section">
        <div className="teaser-gallary__inner">
            <div className='container'>
                <div className='grid md:grid-cols-3 gap-y-6 md:gap-y-10 lg:gap-y-12 md:gap-x-6'>
                {teaser_type == "default" ? 
                    (teaser_gallery_item_1 && teaser_gallery_item_1.length>0 && teaser_gallery_item_1.map((value, key)=>{
                        return(
                            <a href="#" className={`teaser-gallery__item ${teaser_type || ''}`} key={key}>
                                <div className='mb-6'>
                                    <img className='max-w-full' src={value.img} alt=""/>
                                </div>
                                <div className='mb-8'>
                                    <HeadlineText>
                                        <h2 className='font-montserrat text-base font-bold mb-6 text-ternary'>{value.title}</h2>
                                        <p className='text-ternary text-base'>{value.description}</p>
                                    </HeadlineText>
                                </div>
                                <Button btn_text={value.title} button_type="right-tail-arrow"/>
                            </a>
                        );
                    }))

                : 
                
                teaser_type == "hover-card" ? 
                    (teaser_gallery_item_1 && teaser_gallery_item_1.length>0 && teaser_gallery_item_1.map((value, key)=>{
                        return(
                            <a href="#" className={`teaser-gallery__item ${teaser_type || ''}`} key={key}>
                                <Card padding="pt-8 pr-9 pb-6 pl-5">
                                    <div className='mb-8'>
                                        <HeadlineText>
                                            <h2 className='font-montserrat text-base font-bold mb-6 text-ternary'>{value.title}</h2>
                                        </HeadlineText>
                                    </div>
                                    <Button button_type="right-tail-arrow"/>
                                </Card>
                            </a>
                        );
                    }))
                : ''}
                   
                </div>
            </div>
        </div>
    </div>
    );

}

export default TeaserGallery