import React from 'react'
import PropTypes from 'prop-types'
import Box from '../box/box'
import HeadlineText from '../headline-text/HeadlineText'
import MedicalConditionDropdown from '../medical-condition-dropdown/medical-condition-dropdown'
import HtmlComment from '../../particles/html-comment/HtmlComment'

const HeroHeadeBottomText = props => {
    const { heroImageUrl, heroHeight, heroMobileHeight, heroImageMobileUrl, heroImageTabUrl } = props;

    return (
        <div className="hero-header section">
            <div className="hero-header__content hero-header__content-bottom" style={{minHeight: heroHeight ? heroHeight + 'px' : '', backgroundImage : `url(${heroImageUrl || ''})` }}>

                <HtmlComment text="** 'mobile-bg' component use only mobile background manage" />
                <div className='tab-bg' style={{ backgroundImage : `url(${heroImageTabUrl || ''})` }}></div>

                <div className='mobile-bg' style={{ minHeight: heroMobileHeight ? heroMobileHeight + 'px' : '', backgroundImage : `url(${heroImageMobileUrl || ''})` }}></div>

                <Box box_padding=''>
                    <HeadlineText>
                        <h1>
                            <span className='verveine-text'>
                                <span className='underline-text'>
                                    <span className='text-secondary'>For Healthcare Professionals</span>
                                </span>
                            </span>
                        </h1>
                        <p><span className='text-white'>At Galapagos, our aim is to make a lasting positive contribution through the development of novel breakthrough therapies for medical conditions with a large unmet need. Each clinical trial is a key milestone on this journey. </span></p>
                    </HeadlineText>
                </Box>
            </div>
        </div>
    )
}

HeroHeadeBottomText.defaultProps = {
    //card_title: 'Data Transparency',
}


HeroHeadeBottomText.PropTypes = {
    HeroHeader: PropTypes.string.isRequired,
    heroMobileHeight: PropTypes.string
}


export default HeroHeadeBottomText;