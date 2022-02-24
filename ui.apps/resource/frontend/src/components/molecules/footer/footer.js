import React from 'react';
import PropTypes from 'prop-types';
import HtmlComment from '../../particles/html-comment/HtmlComment';
import HeadlineText from '../../molecules/headline-text/HeadlineText';
import ButtonLink from '../button-link/ButtonLink';
import ImageExtension from '../image-extension/ImageExtension';

const Footer = (props) => {

    const { } = props;
    return (
        <div className="footer section">
            <HtmlComment text="START Footer component markup, Copy from here" />

            <footer className="footer__wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row align-items-center">
                                <div className="col-xl-7 col-md-12">
                                    <div className='footer__links'>
                                        <ButtonLink button_styles='link' btn_text='T&Cs' />
                                        <ButtonLink button_styles='link' btn_text='Cookies' />
                                        <ButtonLink button_styles='link' btn_text='Privacy' />
                                        <ButtonLink button_styles='link' btn_text='Data transparency' />
                                        <ButtonLink button_styles='link' btn_text='Adverse events' />
                                        <ButtonLink button_styles='link' btn_text='Contact Galapagos' />
                                        <ButtonLink button_styles='link' btn_text='Glossary' />
                                    </div>
                                </div>
                                <div className="col-xl-5 col-md-6 order-1 order-md-2 order-xl-1">
                                    <div className='footer__logo'>
                                        <ImageExtension 
                                            bottom_gap=""
                                            image_src="images/galapagos.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-12 col-md-6 order-2 order-md-1 order-xl-2">
                                    <div className='footer__legal-text'>
                                        <HeadlineText>
                                            <p>© Copyright 2021 Galapagos</p>
                                        </HeadlineText>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <HtmlComment text="END Footer component markup, Copy from here" />
        </div>
    );
}

Footer.propTypes = {
    //container_type: PropTypes.node.isRequired,
};

Footer.defaultProps = {
    //container_type: 'conatiner'
};

export default Footer;
