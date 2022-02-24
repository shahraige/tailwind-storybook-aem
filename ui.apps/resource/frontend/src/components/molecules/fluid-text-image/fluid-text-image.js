import React from 'react'
import PropTypes from 'prop-types'
import HeadlineText from '../headline-text/HeadlineText'
import HtmlComment from '../../particles/html-comment/HtmlComment'
import ButtonGroup from '../button-group/button-group'
import ButtonLink from '../button-link/ButtonLink'
import Separator from '../separator/separator'

const FluidTextImage = props => {
    const { ImageUrl, TeaserHeight, TeaserHeightMobile, TeaserHeightMobileUrl } = props;

    return (
        <div className="fluid-text-image section">
                <div className="fluid-text-image__content fluid-text-image__content-left">
                    {/* <div className="fluid-text-image__img" style={{minHeight: TeaserHeight ? TeaserHeight + 'px' : '', backgroundImage : `url(${ImageUrl || ''})` }}> */}
                    <div className="fluid-text-image__img" style={{minHeight: TeaserHeight ? TeaserHeight + 'px' : '' }}>
                        <img className="w-100" src={ImageUrl} />
                    </div>

                    <HtmlComment text="** 'mobile-bg' component use only mobile background manage" />
                    <img className='mobile-bg' src={TeaserHeightMobileUrl} />
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-1"></div>
                            <div className="col-md-7">
                                <HeadlineText>
                                    <h1 style={{color: "rgb(0, 76, 69)"}}><span className="verveine-text">How can I take part?</span></h1>
                                </HeadlineText>
                                <HeadlineText>
                                    <p>If you are interested in taking part in a clinical trial, you should talk to your doctor. They can talk to you about the clinical trials process and discuss whether it could be a suitable option. You can also search for a Galapagos clinical trial. This site includes information on all Phase 2 to 4 Galapagos clinical trials; you will find the most important requirements to enter clearly displayed for each trial.</p>
                                    <p>If you or your doctor have found a suitable trial and it is thought that you meet the requirements for taking part (after carefully reading the inclusion and exclusion criteria), your doctor, if appropriate, will then get in touch with the clinical trial coordinator at the trial center. </p>
                                    <p>You may have lots of questions when talking to a doctor about a clinical trial. We have developed a consultation guide, which you can download, print and take to your doctor appointment. We would also recommend taking down the details of the trial if you have found one using our finder; to help with this, you’ll be able to download page summaries of each of our clinical trials.</p>
                                </HeadlineText>

                                <Separator borderColor="border-transparent" size="size-1" marginY="marginY-3"></Separator>

                                <div className="row">
                                    <div className="col-md-5">
                                        <ButtonLink button_styles='primary' button_width='w-100' btn_text='Find a clinical trial'/>
                                    </div>
                                    <div className="col-md-7">
                                        <ButtonLink button_styles='link' button_type="download" button_width='w-100' btn_text='Download our consultation guide'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

FluidTextImage.defaultProps = {
    //card_title: 'Data Transparency',
}


FluidTextImage.PropTypes = {
    HeroHeader: PropTypes.string.isRequired,
    heroMobileHeight: PropTypes.string
}


export default FluidTextImage;