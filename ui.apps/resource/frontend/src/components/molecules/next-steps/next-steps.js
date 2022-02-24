import React, { useEffect } from 'react'
import ButtonLink from '../button-link/ButtonLink'
import FormCheckbox from '../form-checkbox/FormCheckbox'
import { text, boolean, select } from '@storybook/addon-knobs';
import HeadlineText from '../headline-text/HeadlineText';
import Separator from '../separator/separator';
import Box from '../box/box';
import ImageExtensio from '../image-extension/ImageExtension';
import InputField from '../input-field/InputField';
import SearchSelect from '../search-select/search-select';
import CountrySelect from '../country-select/country-select';
import Pagination from '../pagination/pagination';
import { CardHorinzontal, CardHorinzontalRow } from '../card/card';
import CmpAccordion from '../accordion/cmp-accordion';
import CmpTable from '../cmp-table/cmp-table';
import TextImage from '../text-image/text-image';
import ImageExtension from '../image-extension/ImageExtension';
import IconNumber from '../icon-number/icon-number';
import Tooltip from '../tooltip/tooltip';

const NextSteps = props => {
    const { requireinfoText } = props;
    return (
        <div className='next-steps section'>
            <div className='next-steps__inner'>
                <div className='next-steps__banner'>

                    <div className='next-steps__banner__inner'>
                        <HeadlineText>
                            <h1>
                                <span className="verveine-text underline-text">
                                    Next steps for
                                </span>
                            </h1>
                        </HeadlineText>


                        <HeadlineText>
                                    <h2>[the selected study trial]</h2>
                        </HeadlineText>
                        
                    </div>

                    <div className="next-steps--footer d-none d-md-flex">
                        <div className='left-seciton'>
                            <div class="button-link section">
                                <a class="btn btn-link text-dark" data-type="" href="#" target="_self" title="button title" role="button">
                                    <img className='button-icon' src="images/icons/icon-arrow-left-dark.svg" />
                                    Back to the trial result page
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="next-steps__wrapper">
                    <div className="next-steps__details">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10">

                                    <HeadlineText>
                                        <p>If you think this clinical trial could be appropriate for you and you are interested in taking part, you should follow these steps:</p>
                                    </HeadlineText>

                                    
                                    <div className='steps-wrap'>
                                    
                                        <CardHorinzontalRow
                                            cardType="inline-row"
                                            iconUrl="images/icons/icon-step-1.png"
                                            card_title="Step 1"
                                            footerText="Take a careful look through the inclusion and exclusion criteria to double-check the requirements "
                                        />
                                        <CardHorinzontalRow
                                            cardType="inline"
                                            iconUrl="images/icons/icon-step-2.png"
                                            card_title="Step 2"
                                            footerText="Review the location of the trial site to ensure it is somewhere you are able to travel to"
                                        />
                                        <CardHorinzontalRow
                                            cardType="inline"
                                            iconUrl="images/icons/icon-step-3.png"
                                            card_title="Step 3"
                                            footerText={`<p>Make an appointment with your doctor. To help with discussions you can download the trial result page and <a href="#">our consultation guide</a>, which covers information on what is likely to happen during your appointment.</p>`}
                                        />
                                        <CardHorinzontalRow
                                            cardType="inline"
                                            iconUrl="images/icons/icon-step-4.png"
                                            card_title="Step 4"
                                            footerText="Meet with your doctor. They will take a further look at the entry requirements, and if they think you meet the criteria they will discuss this with you and get in touch with the trial coordinator"
                                        />
                                    </div>
                                    <Separator 
                                        size="size-1"
                                        marginY="marginY-3"
                                        borderColor="border-transparent"
                                    />
                                    <HeadlineText>
                                        <p>If you have searched for a clinical trial but haven’t found one that is suitable you can speak to your doctor who can search for a trial or discuss suitable next steps. There are also specific patient association websites that can help with understanding more about your condition, ideas on how to manage it and also provide you with a network of others that have the same condition. There are often both global and local types of these websites available and these can be found by searching online.
                                        </p>
                                        <p> If you are unable to find an answer to your question about a Galapagos run clinical trial, please contact <a href="mailto:medicalinfo@glpg.com">medicalinfo@glpg.com</a> for medical information enquiries. </p>
                                    </HeadlineText>

                                    <div className='footer-button-wrap'>
                                            <ButtonLink
                                                btn_text="DOWNLOAD CONSULTATION GUIDE"
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

                                    <div className="next-steps--footer d-md-none">
                                        <div className='left-seciton'>
                                            <div class="button-link section">
                                                <a class="btn btn-link text-dark" data-type="" href="#" target="_self" title="button title" role="button">
                                                    <img className='button-icon' src="images/icons/icon-arrow-left-dark.svg" />
                                                    Back to the trial result page
                                                </a>
                                            </div>
                                        </div>
                                    </div>                                                      
                                </div>
                                <div className="col-lg-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NextSteps