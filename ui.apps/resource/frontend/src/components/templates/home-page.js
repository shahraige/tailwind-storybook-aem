import React from 'react'
import Header from '../molecules/header/header'
import Footer from '../molecules/footer/footer'
import ColumnControl from '../molecules/column-control/column-control';
import HeadlineText from '../molecules/headline-text/HeadlineText';

const HomePage = () =>{
    return(
        <>
            <Header/>
            <div>
                <ColumnControl
                container="true"
                >
                    <div class="col-span-full md:col-span-4  mr-4 pt-40 mb-10 md:mb-40">
                    <img className='max-w-full ' alt="image" src="https://www.hbkworld.com/en/about/business-ethics/_jcr_content/root/container/columncontrol_2082701021/col_1/image.coreimg.80.480.jpeg/1643196064869/hbk-ceo-ben-bryson.jpeg" />
                    </div>

                    <div className='col-span-full md:col-span-8 md:pt-44'>
                        <HeadlineText customClass="text-xl">
                            <blockquote>
                                <span className='text-secondary italic tracking-wider'>
                                    We at HBK believe  that how we conduct our business matters every bit as much as the results we achieve. Our Code of Business Ethics is an important guide for us, setting forth our ethical framework and values, and the resources we have to act with integrity and win – the right way.
                                </span>
                        </blockquote>
                        </HeadlineText> 
                        <HeadlineText customClass="text-xl italic font-extrabold mt-6">
                            <h2>Ben Bryson, President</h2>
                        </HeadlineText> 
                    </div>
            
                </ColumnControl>
            </div>
          
            <Footer/>
        </>
    )
}

export default HomePage;