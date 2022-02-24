import React from 'react'
import PropTypes from 'prop-types'
import Box from '../box/box'
import HeadlineText from '../headline-text/HeadlineText'
import MedicalConditionDropdown from '../medical-condition-dropdown/medical-condition-dropdown'
import HtmlComment from '../../particles/html-comment/HtmlComment'

const HeroHeadeLeftText = props => {
    const { heroImageUrl, heroHeight, heroMobileHeight, heroImageMobileUrl } = props;

    return (
        <div className="hero-header section">
            <div className="overflow-hidden p-relative">
                <div className="hero-header__content hero-header__content-left" style={{minHeight: heroHeight ? heroHeight + 'px' : '', backgroundImage : `url(${heroImageUrl || ''})` }}>

                    <HtmlComment text="** 'mobile-bg' component use only mobile background manage" />
                    <div className='mobile-bg' style={{ minHeight: heroMobileHeight ? heroMobileHeight + 'px' : '', backgroundImage : `url(${heroImageMobileUrl || ''})` }}></div>

                    <Box box_padding=''>
                        <HeadlineText>
                            <h1>
                                <span className='verveine-text'>
                                    <span className='underline-text'>
                                        <span className='text-secondary'>Support for caregivers</span>
                                    </span>
                                </span>
                            </h1>
                            <p><span className='text-white'>As a friend or family member providing a caregiver role to someone, you may find yourself asking lots of questions around the clinical trials process, including what your role would be and what help there is available to you. While your focus may often be on supporting your loved one, it is important that you also take time to understand your own needs. </span></p>
                        </HeadlineText>
                    </Box>
                </div>
            </div>
        </div>
    )
}

HeroHeadeLeftText.defaultProps = {
    //card_title: 'Data Transparency',
}


HeroHeadeLeftText.PropTypes = {
    HeroHeader: PropTypes.string.isRequired,
    heroMobileHeight: PropTypes.string
}


export default HeroHeadeLeftText;