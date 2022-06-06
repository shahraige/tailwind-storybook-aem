import React from 'react'
import Button from '../button-link/button'
import Card from '../card/card'
import HeadlineText from '../headline-text/HeadlineText'
import HtmlComment from '../../particles/html-comment/HtmlComment'
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

const teaser_gallery_item_2 = [
    {   
       
        title : 'Electric Power',
        description : 'Whether automotive, aerospace, manufacturing, production, or energy generation and distribution: they all need electric power, and e-mobility is key on our way towards an emission-free future',
    },
    {   
        
        title : 'Aerospace & Defence',
        description : 'The aerospace and defence industry has led the way in innovation for more than a century. Ground-breaking developments for commercial and business aircraft, military, spacecraft, rockets, satellites ',
    },
    {   
        
        title : 'Services',
        description : 'HBK Services and Solutions empower our customers and engineers throughout the world to deploy and maintain test and measurement technologies as well as to optimise the usage of data',
    },
    {   
        
        title : 'About',
        description : 'HBK Services and Solutions empower our customers and engineers throughout the world to deploy and maintain test and measurement technologies as well as to optimise the usage of data',
    },
    {   
        
        title : 'Academy',
        description : 'HBK Services and Solutions empower our customers and engineers throughout the world to deploy and maintain test and measurement technologies as well as to optimise the usage of data',
    },
    {   
        
        title : 'Contact',
        description : 'HBK Services and Solutions empower our customers and engineers throughout the world to deploy and maintain test and measurement technologies as well as to optimise the usage of data',
    },
]

const teaser_gallery_item_3 = [
    {   
        img: 'https://www.hbkworld.com/en/industries/aerospace-defence/_jcr_content/root/container/container_707760284/columncontrol/col_1/teaser_218016410.coreimg.jpeg/1652969081706/aerospace-and-defence-aircrafts.jpeg',
        title : 'Civil & Defence Aircraft',
        description : 'Qualifying propulsion systems and airframes for certification',
    },
    {   
        img: 'https://www.hbkworld.com/en/industries/aerospace-defence/_jcr_content/root/container/container_707760284/columncontrol/col_2/teaser_1318613898.coreimg.jpeg/1652969138815/space-vehicles-and-sattelite-qualifitcation.jpeg',
        title : 'Space Vehicles & Satellite Qualification',
        description : 'Noise and vibration testing and modal analysis for enhanced reliability',
    },
    {   
        img: 'https://www.hbkworld.com/en/industries/aerospace-defence/_jcr_content/root/container/container_707760284/columncontrol/col_1/teaser_1692593680.coreimg.jpeg/1652969158215/naval-defense.jpeg',
        title : 'Services',
        description : 'Comprehensive acoustic and structural testing and monitoring solutions',
    },
]

const TeaserGallery = (props) =>{

    const {teaser_type} = props;

    return(
    <div className="teaser-gallary section">
        <div className="teaser-gallary__inner">
            <HtmlComment text="* Teaser gallery cmp markup starts here *" />
            <div className='container'>
                <div className='grid md:grid-cols-3 gap-y-6 md:gap-y-10 lg:gap-y-12 md:gap-x-6'>
                {teaser_type == "teaser-vertical" ? 
                    (teaser_gallery_item_1 && teaser_gallery_item_1.length>0 && teaser_gallery_item_1.map((value, key)=>{
                        return(
                            <a href="#" className={`teaser__item ${teaser_type || ''}`} key={key}>
                                <div className='teaser-item__wrapper'>
                                    <div className='mb-6'>
                                        <img className='max-w-full' src={value.img} alt=""/>
                                    </div>
                                    <div className='mb-8'>
                                        <HeadlineText>
                                            <h2 className='teaser__title'>{value.title}</h2>
                                            <p className='teaser__description'>{value.description}</p>
                                        </HeadlineText>
                                    </div>
                                    <Button btn_text={value.title} button_type="right-tail-arrow"/>
                                </div>
                            </a>
                        );
                    }))
                : 

                teaser_type == "teaser-stage" ? 
                (teaser_gallery_item_3 && teaser_gallery_item_3.length>0 && teaser_gallery_item_3.map((value, key)=>{
                    return(
                        <a href="#" className={`teaser__item ${teaser_type || ''}`} key={key}>
                            <div className='teaser-item__wrapper'>
                                <div className='mb-6'>
                                    <img className='max-w-full' src={value.img} alt=""/>
                                </div>
                                <div className='mb-8'>
                                    <HeadlineText>
                                        <p className='teaser__pretitle'>COMING SOON</p>
                                        <h2 className='teaser__title'>{value.title}</h2>
                                        <p className='teaser__description'>{value.description}</p>
                                    </HeadlineText>
                                </div>
                            </div>
                        </a>
                    );
                }))
                : 
                
                teaser_type == "teaser-text" ? 
                    (teaser_gallery_item_2 && teaser_gallery_item_2.length>0 && teaser_gallery_item_2.map((value, key)=>{
                        return(
                            <a href="#" className={`teaser__item ${teaser_type || ''}`} key={key}>
                                <div className='teaser-item__wrapper'>
                                    <div className='mb-8'>
                                        <HeadlineText>
                                            <h2 className='teaser__title'>{value.title}</h2>
                                        </HeadlineText>
                                    </div>
                                    <Button button_type="right-tail-arrow"/>
                                </div>
                            </a>
                        );
                    }))
                : ''}
                </div>
            </div>
            <HtmlComment text="* Teaser gallery cmp markup ends here *" />
        </div>
    </div>
    );

}

export default TeaserGallery