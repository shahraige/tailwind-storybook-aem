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
            <div className="grid grid-cols-3 pt-20 gap-x-5">
                {items && items.length>0 && items.map((value)=>{
                    return(
                        <div className='border border-gray-400 p-8 shadow-sm'>
                            <div className='bg-red-200 h-24 w-1/2 -mt-20 mx-auto'>
                                <img src={value.image} className="h-full mx-auto"/>
                            </div>
                            <div className="mt-8">
                                <HeadlineText>
                                    <h2>{value.title}</h2>
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