import React from 'react'
import HeadlineText from '../headline-text/HeadlineText'

const items =[
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

]
const Card = (props) =>(
    <div className="card section">
        <div className="container mx-auto"> 
            <div className="grid md:grid-cols-3 pt-20 gap-x-5 items-start">
                {items && items.length>0 && items.map((value)=>{
                    return(
                        <div className='border border-gray-100 p-8 shadow-custom-1 mb-28 md:mb-0'>
                            <div className='h-40 -mt-28 mx-auto'>
                                <img src={value.image} className="h-full mx-auto"/>
                            </div>
                            <div className="mt-7">
                                <HeadlineText>
                                    <h2 className='font-bold'>{value.title}</h2>
                                    <p className='mt-4'>{value.description}</p>
                                </HeadlineText>
                            </div>
                        </div>
                    );
                })}
            </div>          
        </div>
    </div>
);

export default Card;