import React from 'react'
import PropTypes from 'prop-types'
import Box from '../box/box'
import HeadlineText from '../headline-text/HeadlineText'
import HtmlComment from '../../particles/html-comment/HtmlComment'

const HeroHeader = props => {
    const { heroImageUrl, heroHeight, heroMobileHeight, heroTabImageUrl } = props;

    return (
        <div className="hero-header section">
            <div className="hero-header__content" style={{minHeight: heroHeight ? heroHeight + 'px' : '', backgroundImage : `url(${heroImageUrl || ''})` }}>

                <HtmlComment text="** 'mobile-bg' component use only mobile background manage" />
                <div className='mobile-bg' style={{ minHeight: heroMobileHeight ? heroMobileHeight + 'px' : '', backgroundImage : `url(${heroTabImageUrl || ''})` }}></div>

                <Box box_padding=''>
                    <HeadlineText>
                        <h1 className='text-secondary xl:text-center'>Welcome to</h1>
                        <h1>
                            <span className="left-space">
                                <span className='text-white'>Galapagos  
                                    <span className='underline-text'> Clinical Trials</span>
                                </span>
                            </span>
                        </h1>
                        <p className='px-4 py-2 bg-gray-700'><span className='text-red-400'>At Galapagos, we see each clinical trial as a milestone on our journey to bring life-changing treatments to the people that really need them.</span></p>
                    </HeadlineText>
                </Box>
            </div>
        </div>
    )
}

HeroHeader.defaultProps = {
    //card_title: 'Data Transparency',
}


HeroHeader.PropTypes = {
    HeroHeader: PropTypes.string.isRequired,
    heroMobileHeight: PropTypes.string
}


export default HeroHeader;