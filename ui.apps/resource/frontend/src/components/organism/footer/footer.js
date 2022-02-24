import React from 'react';
import PropTypes from 'prop-types';
import HtmlComment from '../../particles/html-comment/HtmlComment';
import HeadlineText from '../../molecules/headline-text/HeadlineText';
import ButtonLink from '../../molecules/button-link/ButtonLink';
import TextImage from '../../molecules/text-image/text-image';

const Footer = (props) => {

    const { } = props;
    return (
        <div className="footer section">
            <HtmlComment text="START Footer component markup, Copy from here" />

            <footer className="footer__inner" id="footer__inner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                            <HeadlineText>
                                <p><b>INDICATION</b></p>
                                <p>BRAND X (filgotinib) is indicated as monotherapy or in combination with methotrexate (MTX) or other conventional synthetic disease-modifying antirheumatic drugs (csDMARDs) for the treatment of adult patients with moderately to severely active rheumatoid arthritis (RA) who have had an inadequate response to, or who are intolerant to, one or more DMARDs.</p>
                                <p>
                                    <span className="indicator"></span>
                                    BRAND X is indicated as monotherapy for the treatment of adult patients with moderately to severely
                                    active RA who have highly active and early progressive (erosive) disease, were not previously treated
                                    with MTX, and for whom treatment with MTX is inappropriate.
                                </p>
                            </HeadlineText>

                            <HeadlineText>
                                <p><b>WARNING: SERIOUS INFECTIONS AND MALIGNANCY</b></p>
                                <p>
                                    <em class="d-inline-block">
                                        See Full Prescribing Information for complete boxed warning. </em><br />
                                        Serious infections leading to hospitalization or death, including tuberculosis and bacterial, invasive
                                        fungal, viral, and other opportunistic infections, have occurred in patients receiving BRAND&nbsp;X. If
                                        a serious
                                        infection develops, interrupt BRAND&nbsp;X until the infection is controlled. Prior to starting BRAND&nbsp;X,
                                        perform a test for latent tuberculosis; if it is positive, start treatment for tuberculosis prior to
                                        starting
                                        BRAND&nbsp;X. Monitor all patients for active tuberculosis during treatment, even if the initial latent
                                        tuberculosis test is negative. Lymphoma and other malignancies have been observed in patients treated
                                        with BRAND X. </p>
                            </HeadlineText>

                            <TextImage>
                                <p>
                                    <b>
                                        Adverse events should be reported. Reporting forms and information can be found at
                                    &nbsp;<a href='https://yellowcard.mhra.gov.uk'>www.mhra.gov.uk/yellowcard</a> or search for MHRA Yellow Card
                                    in the Google Play or Apple App Store.Adverse events should also be reported to Gilead Sciences, Inc.
                                    </b>
                                </p>
                            </TextImage>

                            <div className="footer__bottom">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-12">
                                        <nav className='footer-links'>
                                            <ButtonLink button_styles='link' btn_text='Privacy Policy' />
                                            <ButtonLink button_styles='link' btn_text=' Terms of Use' />
                                            <ButtonLink button_styles='link' btn_text='Site Map' />
                                            <ButtonLink button_styles='link' btn_text='Contact Us' />
                                            <ButtonLink button_styles='link' btn_text='About Gilead' />
                                        </nav>
                                    </div>

                                    <div className="col-xl-6 col-lg-12 text-left text-md-right">
                                        <div className="legal-text text-left text-xl-right">
                                            <HeadlineText>
                                                <p>
                                                    BRAND X, GILEAD, and the GILEAD logo are trademarks of Gilead Sciences, Inc., or one of its related companies. <br />
                                                        © 2020 Gilead Sciences, Inc. All rights reserved.
                                            </p>
                                            </HeadlineText>
                                        </div>
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
