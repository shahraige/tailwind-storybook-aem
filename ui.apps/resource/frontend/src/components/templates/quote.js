import React from 'react';
import ColumnControl from '../molecules/column-control/column-control';
import HeadlineText from '../molecules/headline-text/HeadlineText';

const Quote = (props) =>{
    return(
        <div className='quote'>
            <ColumnControl
            container="true"
            >
                <div class="col-span-4  mr-4">
                  <img className='max-w-full ' alt="image" src="https://www.hbkworld.com/en/about/business-ethics/_jcr_content/root/container/columncontrol_2082701021/col_1/image.coreimg.80.480.jpeg/1643196064869/hbk-ceo-ben-bryson.jpeg" />
                </div>

                <div className='col-span-8 pt-16'>
                    <HeadlineText customClass="text-xl">
                        <blockquote>
                            <span className='text-primary italic tracking-wider'>
                                We at HBK believe  that how we conduct our business matters every bit as much as the results we achieve. Our Code of Business Ethics is an important guide for us, setting forth our ethical framework and values, and the resources we have to act with integrity and win – the right way.
                            </span>
                        </blockquote>
                    </HeadlineText> 
                    <HeadlineText customClass="text-xl italic font-extrabold mt-6">
                        <h2 className="relative before:content-['hello'] before:absolute before:bg-blue-500 before:h-4 before:w-4">Ben Bryson, President</h2>
                    </HeadlineText> 
                </div>
           
            </ColumnControl>
        </div>
    )
}

export default Quote;