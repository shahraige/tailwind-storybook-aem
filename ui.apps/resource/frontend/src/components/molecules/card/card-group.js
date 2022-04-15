import React from 'react'
import HeadlineText from '../headline-text/HeadlineText'
import Card from './card';
import ButtonLink from '../button-link/ButtonLink';

const items1 =[
    {
        title : "Purpose",
        description : "We deliver value beyond measure by helping our customers bring safer, more energy efficient and innovative products to life – faster.​​​   ",
        image : "https://www.hbkworld.com/en/about/_jcr_content/root/container/columncontrol_128247/col_1/teaser_1626529024.coreimg.png/1645603038342/picto-purpose.png"      
    },
    {
        title : "Vision",
        description : "Deliver insight and confidence to create outstanding products in a digital world.",
        image : "https://www.hbkworld.com/en/about/_jcr_content/root/container/columncontrol_128247/col_2/teaser.coreimg.png/1645603030352/picto-vision.png"      
    },
    {
        title : "Mission",
        description : "Drive the digital transformation of our industry by delivering innovation and quality for test and measurement.",
        image : "https://www.hbkworld.com/en/about/_jcr_content/root/container/columncontrol_128247/col_3/teaser.coreimg.png/1645603354816/picto-mission.png"      
    },
 
 ];

const items2 =[
    {
        date: '9/16/21',
        title : "Optimizing product development in a rapidly changing market: Part 2 - HBK",
        description : "In this second part of our interview, Jens Wiegand, HBK’s Chief Technology Officer (CTO) and Senior Vice President Electronics & Software shares his thoughts on the role technology plays in shortening product development cycles without compromising quality and predicts the next big breakthroughs for product...",
        image : "https://www.hbkworld.com/en/blog/optimizing-product-development-in-rapidly-changing-market/_jcr_content/root/container/image.coreimg.80.480.jpeg/1643015867595/optimising-product.jpeg"      
    },
    {
        date: '9/16/21',
        title : "Predicting detectability in EVs",
        description : "Electric vehicles (EVs) are so quiet at low speeds that they can be a danger to pedestrians, cyclists and other road users. So the challenge for car manufacturers is to create sounds that are detectable but not annoying. ",
        image : "https://www.hbkworld.com/en/blog/predicting-detectability-in-evs/_jcr_content/root/container/image.coreimg.80.480.jpeg/1643015964804/predicting-detectability-and-annoyance-of-ev-warning-sounds-using-partial-loudness-hero-1200x340.jpeg"      
    },
    {
        date: '9/16/21',
        title : "Optimizing product development in a rapidly changing market: Part 1",
        description : "Optimizing product development in a rapidly changing market: Part 1. With high customer expectations, relentless competition and time criticality, businesses across the world are under pressure to shorten their product development cycles, while reducing cost and maintaining quality. We asked Jens Wiegand, Chief Technology Officer...",
        image : "https://www.hbkworld.com/en/blog/optimizing-product-development-in-rapidly-changing-market/_jcr_content/root/container/image.coreimg.80.480.jpeg/1643015867595/optimising-product.jpeg"      
    },
 
 ];

const items3 =[
    {
        date: '22 March 2022',
        title : "Environmental Measurements with B&K 2245",
        description : "In this second part of our interview, Jens Wiegand, HBK’s Chief Technology Officer (CTO) and Senior Vice President Electronics & Software shares his thoughts on the role technology plays in shortening product development cycles without compromising quality and predicts the next big breakthroughs for product...",
       duration : "1 Hour",
       language : "English",
       type: "Free",
       timings : "22 Mar: 16:00 Berlin (CET/CEST)"
    },
    {
        date: '29 March 2022',
        title : "Noise at Work Measurements With B&K 2245",
        description : "Electric vehicles (EVs) are so quiet at low speeds that they can be a danger to pedestrians, cyclists and other road users. So the challenge for car manufacturers is to create sounds that are detectable but not annoying. ",
        duration : "1 Hour",
        language : "English",
        type: "Free",
        timings : "22 Mar: 16:00 Berlin (CET/CEST)"
    },
    {
        date: '30 March 2022',
        title : "Source-Path-Contribution Analysis: Theory and Applications for Interface and Blocked Forces Identification",
        description : "Optimizing product development in a rapidly changing market: Part 1. With high customer expectations, relentless competition and time criticality, businesses across the world are under pressure to shorten their product development cycles, while reducing cost and maintaining quality. We asked Jens Wiegand, Chief Technology Officer...",
        duration : "1 Hour",
        language : "English",
        type: "Free",
        timings : "22 Mar: 16:00 Berlin (CET/CEST)"
    },
 
 ];
 

const CardGroup = (props) =>{
    const {padding, type} = props;
    return(
        <div class="column-control-wrapper">
            <div className="container"> 
                <div className="grid md:grid-cols-12  gap-y-5 md:gap-y-0 gap-x-5">
                    {type == "card-icon" ? 
                          (items1 && items1.length>0 && items1.map((value)=>{
                                return(
                                    <div class="col-span-full md:col-span-4 pt-20">
                                        <Card 
                                        padding={padding} 
                                        type={type}>
                                            <div className='card__header'>
                                                <div className='card__image  h-40 mb-7 -mt-28 mx-auto'>
                                                    <img src={value.image} className="h-full mx-auto"/>
                                                </div>
                                            </div>
                                            <div className="card__body">
                                                <HeadlineText>
                                                <h2 className='font-bold'>{value.title}</h2>
                                                <p className='mt-4'>{value.description}</p>
                                                </HeadlineText>
                                            </div>
                                        </Card>
                                    </div>
                                );
                            }))
                    : 
                    type == "card-blog-image" ? 
                        (items2 && items2.length>0 && items2.map((value)=>{
                            return(
                                <div class="md:row-span-full md:col-span-4 pt-20">
                                    <Card 
                                    padding={padding} 
                                    type={type}>
                                        <div className='card__header'>
                                                <div className='card__image  h-40 -mt-24 mx-auto bg-cover bg-right bg-no-repeat' style={{backgroundImage : `url(${value.image})`}} />
                                                <div className='date w-full text-right mt-2 mb-3 italic text-teal-100 inline-block'>{value.date}</div>
                                        </div>
                                    
                                        <div className="card__body mb-6">
                                            <HeadlineText>
                                                <h2 className='font-bold text-xl text-ternary'>{value.title}</h2>
                                                <p className='mt-4'>{value.description}</p>
                                            </HeadlineText>
                                        </div>

                                        <div className='card__footer'>
                                            <ButtonLink btn_text='Read More' button_type='right-tail-arrow'/>
                                        </div>
                                    </Card>
                                </div>
                            );
                        }))
                    : 
                    type == "card-blog" ? 
                        (items3 && items3.length>0 && items3.map((value)=>{
                            return(
                                <div class="md:row-span-full md:col-span-4">
                                    <Card 
                                    padding={padding} 
                                    type={type}>
                                        <div className='card__header'>
                                            <div className='date w-full mt-2 mb-3 uppercase text-teal-100 font-semibold inline-block'>{value.date}</div>
                                        </div>
                                    
                                        <div className="card__body mb-6">
                                            <ButtonLink btn_text={`${value.title}`} />
                                            <HeadlineText>
                                                <p className='mt-4 text-ternary'>{value.description}</p>
                                            </HeadlineText>
                                            <div className='text-ternary mt-7'>
                                                <HeadlineText>
                                                    <p >Duration: {value.duration}</p>
                                                    <p>Language: {value.language}</p>
                                                    <p>{value.type}</p>
                                                </HeadlineText>
                                            </div>
                                            <div className='text-ternary mt-7'>
                                            <HeadlineText>
                                                <p>Start Time:</p>
                                                <p>{value.timings}</p>
                                            </HeadlineText>
                                            </div>
                                         
                                        </div>

                                        <div className='card__footer'>
                                            <ButtonLink btn_text='Go To Event' button_type='right-tail-arrow'/>
                                        </div>
                                    </Card>
                                </div>
                            );
                        }))
                    : ''}
                  
                </div>          
            </div>
        </div>
    );
}
export default CardGroup;