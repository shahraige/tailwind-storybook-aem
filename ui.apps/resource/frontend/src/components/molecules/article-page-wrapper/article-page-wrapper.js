import React, { useEffect } from 'react'
import ButtonLink from '../button-link/ButtonLink'
import HeadlineText from '../headline-text/HeadlineText';
import Separator from '../separator/separator';
import ImageExtension from '../image-extension/ImageExtension';

const ArticlePageWrapper = props => {
    const {  } = props;
    return (
        <div className='article-page-wrapper section'>
            <div className='article-page-wrapper__inner'>
                <div className='article-page-wrapper__banner'>

                    <div className='article-page-wrapper__banner__inner'>
                        <HeadlineText>
                            <h1>
                                <span className="verveine-text underline-text">
                                    Terms and conditions
                                </span>
                            </h1>
                        </HeadlineText>      

                        <HeadlineText>
                            <h2>[the selected study trial]</h2>
                        </HeadlineText>                    
                    </div>
                    
                </div>

                <div className="article-page-wrapper__wrapper">
                    <div className="article-page-wrapper__details">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 p-0 px-md-3">
                                    <ImageExtension
                                        image_src="storybook-images/unlisted-banner.png"
                                    />
                                </div>
                                <div className="col-lg-2"></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8">

                                    <HeadlineText>
                                        <p>If you are searching for a clinical trial and cannot see the medical condition you are looking for in the drop down list, this might mean that Galapagos are not conducting any Phase 2 or 3 clinical trials in this area at the moment.</p>
                                    </HeadlineText>
                 
                                    <Separator 
                                        size="size-1"
                                        marginY="my-3"
                                        borderColor="border-transparent"
                                    />

                                    <HeadlineText>
                                        <p>If you are a patient interested in looking into clinical trial options for a particular medical condition, a good place to start would be to talk to your doctor, who will be able to help you search for trials or discuss other options. You can also search clinicaltrials.gov where you can look at all currently listed clinical trials.</p>                                        
                                    </HeadlineText>

                                    <Separator 
                                        size="size-1"
                                        marginY="my-3"
                                        borderColor="border-transparent"
                                    />

                                    <HeadlineText>                                        
                                        <p>Your doctor is likely to be <a href="#">providing you with lots of support</a>, and there are also specific patient association websites that can help with understanding more about your condition, ideas on how to manage it and also provide you with a network of others that have the same condition. There are often both global and local versions of these types of websites and these can be found by searching online.</p>
                                    </HeadlineText>
                                    <Separator 
                                        size="size-1"
                                        marginY="my-3"
                                        borderColor="border-transparent"
                                    />

                                    <HeadlineText>
                                        <p>If you would like to learn more about the clinical trials process you can read about what clinical trials are and what is involved in taking part.</p>
                                    </HeadlineText>

                                    <div className='footer-button-wrap'>
                                            <ButtonLink
                                                btn_text="DOWNLOAD OUR CONSULTATION GUIDE"
                                                button_styles="outline-primary"
                                                button_textColor=""
                                                button_type=""
                                                button_width="w-100"
                                                buttonlink_href="#"
                                                buttonlink_target="_self"
                                                buttonlink_title="button title"
                                                modalTarget="exampleModalId-1"
                                            />
                                    </div>                                                     
                                </div>
                                <div className="col-lg-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticlePageWrapper