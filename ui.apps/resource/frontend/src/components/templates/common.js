import React from 'react';
import PropTypes from 'prop-types';
import Header from '../molecules/header/header';
import { text, select, number } from '@storybook/addon-knobs';
import HeroTeaser from '../molecules/hero-teaser/hero-teaser';
import ExternalLikPopup from '../molecules/external-link-popup/external-link-popup';

const CommonTemplate = (props) => {

    return (
        <>
            <Header />

            <div class="hero-teaser section">
                <div class="hero-teaser__inner hero-video-content default-setting">
                    <div class="hero-video">
                        <video type="video/mp4" poster="storybook-images/hero/lionFirstFrame.jpg" src="videos/lion.mp4" autoplay="" loop="" muted="">
                            Your browser does not support video
                        </video>
                    </div>
                    <div class="hero-content" id="hero-content">
                        <div class="hero-content__wrapper">
                            <div class="row no-gutters d-flex justify-content-end align-items-center">
                                <div class="col-6"><div class="content-wrap">
                                    <div class="headline-text cmp"><div class="mb-0">
                                        <div class=" cmp-text">
                                            <h1>Strong RA therapy can be gentle</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="headline-text cmp">
                                    <div class="mb-0">
                                        <div class=" cmp-text">
                                            <p>For the treatment of adult patients with moderately to&nbsp;severely active rheumatoid arthritis.For the treatment of adult patients with moderately to&nbsp;severely active rheumatoid arthritis.For the treatment of adult patients with moderately to&nbsp;severely active rheumatoid arthritis.For the treatment of adult patients with moderately to&nbsp;severely active rheumatoid arthritis.For the treatment of adult patients with moderately to&nbsp;severely active rheumatoid arthritis.For the treatment of adult patients with moderately to&nbsp;severely active rheumatoid arthritis.For the treatment of adult patients with moderately to&nbsp;severely active rheumatoid arthritis.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="button-group">
                                    <div>
                                            <div class="button-link section"><a class="btn btn-brandx   " data-type="" href="#test3" target="_self" title="Efficacy" role="button">Efficacy</a></div>
                                            <div class="button-link section"><a class="btn btn-brandx   " data-type="" href="http://localhost:8000/iframe.html?id=templates-common-template--common-template#test2" target="_self" title="Safety" role="button">Safety</a></div>
                                            <div class="button-link section"><a class="btn btn-brandx   " data-type="" href="#" data-toggle="modal" data-target="#sampModal" title="Safety" role="button">External Link Pop</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-content__scroller">
                <div class="vr-scroller" id="top_scroll_button"></div>
                <div class="vr-scroller" id="bottom_scroll_button"></div>
            </div>
                    </div>
                    </div>

            <main className="content-area" style={{ backgroundColor: '#eeeeee' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                            <h1>Lorem Ipsum is simply dummy text</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries,
                            </p>
                            <a id="test2"><b>ID wise call</b></a>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            <a id="test3"><b>ID wise call</b></a>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                        
                            <div className="lightbox section">

                                <div className="lightbox__inner video-popup">
                                    <div className="image-extension section">

                                    <div className="justify-content-start image-container">
                                        <a
                                        href="javascript:;"
                                        className=""
                                        data-toggle="lightbox"
                                        data-width="1280"
                                        >
                                            <img
                                            className=" img-fluid"
                                            src="storybook-images/test-img/desktop-1080.jpg"
                                            srcset="
                                            storybook-images/200mg_EUbottle_jan30@2x.png 1920w,
                                            storybook-images/200mg_EUbottle_jan30@2x.png 1440w,
                                            storybook-images/200mg_EUbottle_jan30@2x.png 1080w
                                            "
                                            />
                                            </a>
                                    </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
           
            <ExternalLikPopup modalID="sampModal"/>

           <div className="footer section">
                {/* START Footer component markup, Copy from here */}
                <footer className="footer__inner" id="footer__inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="headline-text cmp">
                                    <div className="mb-0">
                                        <div className=" cmp-text">
                                            <p><b>INDICATION</b></p>
                                            <p>
                                                BRAND X (filgotinib) is indicated as monotherapy or in
                                                combination with methotrexate (MTX) or other conventional
                                                synthetic disease-modifying antirheumatic drugs (csDMARDs) for
                                                the treatment of adult patients with moderately to severely
                                                active rheumatoid arthritis (RA) who have had an inadequate
                                                response to, or who are intolerant to, one or more DMARDs.
                                            </p>
                                            <p>
                                                BRAND X is indicated as monotherapy for the treatment of adult
                                                patients with moderately to severely active RA who have highly
                                                active and early progressive (erosive) disease, were not
                                                previously treated with MTX, and for whom treatment with MTX
                                                is inappropriate.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="headline-text cmp">
                                    <div className="mb-0">
                                        <div className=" cmp-text">
                                            <p><b>WARNING: SERIOUS INFECTIONS AND MALIGNANCY</b></p>
                                            <p>
                                                <em className="d-inline-block"
                                                >See Full Prescribing Information for complete boxed
                                    warning. </em
                                                ><br />Serious infections leading to hospitalization or death,
                                including tuberculosis and bacterial, invasive fungal, viral,
                                and other opportunistic infections, have occurred in patients
                                receiving BRAND&nbsp;X. If a serious infection develops,
                                interrupt BRAND&nbsp;X until the infection is controlled.
                                Prior to starting BRAND&nbsp;X, perform a test for latent
                                tuberculosis; if it is positive, start treatment for
                                tuberculosis prior to starting BRAND&nbsp;X. Monitor all
                                patients for active tuberculosis during treatment, even if the
                                initial latent tuberculosis test is negative. Lymphoma and
                                other malignancies have been observed in patients treated with
                                BRAND X.
                                </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-image section">
                                    <section className="text-image__wrapper ">
                                        <div className="text-image__image  ">
                                            <div className="image-extension section">
                                                <div className="undefined image-container">
                                                    <a className=""
                                                    ><img
                                                            className=" d-none d-lg-block img-fluid"
                                                            src="storybook-images/GILEAD_logo.png"
                                                            srcset="
                                        storybook-images/GILEAD_logo.png 1920w,
                                        storybook-images/GILEAD_logo.png 1440w,
                                        storybook-images/GILEAD_logo.png 1080w
                                        "
                                                            alt="Desktop Image" /><img
                                                            className=" d-none d-md-block d-lg-none img-fluid"
                                                            src="storybook-images/GILEAD_logo.png"
                                                            srcset="
                                        storybook-images/GILEAD_logo.png 1920w,
                                        storybook-images/GILEAD_logo.png 1440w,
                                        storybook-images/GILEAD_logo.png 1080w
                                        "
                                                            alt="Tablet Image" /><img
                                                            className=" d-md-none img-fluid"
                                                            src="storybook-images/GILEAD_logo.png"
                                                            srcset="
                                        storybook-images/GILEAD_logo.png 1300w,
                                        storybook-images/GILEAD_logo.png  975w,
                                        storybook-images/GILEAD_logo.png  730w
                                        "
                                                            alt="Mobile Image"
                                                        /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-image__body ">
                                            <div className="headline-text cmp">
                                                <div className="mb-0">
                                                    <div className=" cmp-text">
                                                        <p>
                                                            <b
                                                            >Adverse events should be reported. Reporting forms
                                        and information can be found at &nbsp;<a
                                                                    href="https://yellowcard.mhra.gov.uk"
                                                                >www.mhra.gov.uk/yellowcard</a
                                                                >
                                        or search for MHRA Yellow Card in the Google Play or
                                        Apple App Store.Adverse events should also be reported
                                        to Gilead Sciences, Inc.</b
                                                            >
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="footer__bottom">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-12">
                                            <nav className="footer-links">
                                                <div className="button-link section">
                                                    <a
                                                        className="btn btn-link"
                                                        href="http://localhost:8000/iframe.html?id=molecules-anchor-navigation--anchor-navigation-test/#test3"
                                                        target=""
                                                        title=""
                                                        role="button"
                                                    >Privacy Policy</a
                                                    >
                                                </div>
                                                <div className="button-link section">
                                                    <a
                                                        className="btn btn-link"
                                                        href=""
                                                        target=""
                                                        title=""
                                                        role="button"
                                                    >
                                                        Terms of Use</a
                                                    >
                                                </div>
                                                <div className="button-link section">
                                                    <a
                                                        className="btn btn-link"
                                                        href=""
                                                        target=""
                                                        title=""
                                                        role="button"
                                                    >Site Map
                                                    </a>
                                                </div>
                                                <div className="button-link section">
                                                    {/* Start button-link component markup, Copy from here */}
                                                    <a
                                                        className="btn btn-link"
                                                        href=""
                                                        target=""
                                                        title=""
                                                        role="button"
                                                    >Contact Us</a
                                                    >
                                                    {/* End button-link component markup  */}
                                                </div>
                                                <div className="button-link section">
                                                    {/* Start button-link component markup, Copy from here  */}
                                                    <a
                                                        className="btn btn-link"
                                                        href=""
                                                        target=""
                                                        title=""
                                                        role="button"
                                                    >About Gilead</a
                                                    >
                                                    {/* End button-link component markup  */}
                                                </div>
                                            </nav>
                                        </div>
                                        <div className="col-xl-6 col-lg-12 text-left text-md-right">
                                            <div className="legal-text text-left text-xl-right">
                                                <div className="headline-text cmp">
                                                    {/* Start headline-text component markup, Copy from here  */}
                                                    <div className="mb-0">
                                                        <div className=" cmp-text">
                                                            <p>
                                                                BRAND X, GILEAD, and the GILEAD logo are trademarks of
                                                                Gilead Sciences, Inc., or one of its related
                                        companies. <br />© 2020 Gilead Sciences, Inc. All
                                        rights reserved.
                                        </p>
                                                        </div>
                                                    </div>
                                                    {/* End headline-text component markup, */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* END Footer component markup, Copy from here */}
            </div>
        
            <div className="sticky-footer section">
                <div className="sticky-footer__inner">
                    <div className="sticky-footer__content">
                    <a
                        className="sticky-footer__expand-icon collapsed"
                        data-toggle="collapse"
                        href="#isiCollapseContent"
                        role="button"
                        aria-expanded="false"
                        aria-controls="isiCollapseContent"
                        ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 18 18"
                        >
                        <path
                            d="M9 6l-4.5 4.5 1.06 1.06L9 8.12l3.44 3.44 1.06-1.06z"
                        ></path></svg></a
                    ><a href="#footer__inner"
                        ><div className="headline-text cmp">
                        <div className="mb-0">
                            <div className=" cmp-text">
                            <p><b>INDICATION</b></p>
                            <p>
                                BRAND X (filgotinib) is indicated as monotherapy or in
                                combination with methotrexate (MTX) or other conventional
                                synthetic disease-modifying antirheumatic drugs (csDMARDs) for
                                the treatment of adult patients with moderately to severely
                                active rheumatoid arthritis (RA) who have had an inadequate
                                response to, or who are intolerant to, one or more DMARDs.
                            </p>
                            </div>
                        </div>
                        </div></a>
                    <div className="collapse" id="isiCollapseContent">
                        <a href="#footer__inner"
                        ><div className="headline-text cmp">
                            <div className="mb-0">
                            <div className=" cmp-text">
                                <p>
                                BRAND X is indicated as monotherapy for the treatment of adult
                                patients with moderately to severely active RA who have highly
                                active and early progressive (erosive) disease, were not
                                previously treated with MTX, and for whom treatment with MTX
                                is inappropriate.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="headline-text cmp">
                            <div className="mb-0">
                            <div className=" cmp-text">
                                <p><b>WARNING: SERIOUS INFECTIONS AND MALIGNANCY</b>
                                <br></br>
                                <i><b>See Full Prescribing Information for complete boxed warning. </b></i><br />Serious infections leading to hospitalization or death,
                                including tuberculosis and bacterial, invasive fungal, viral,
                                and other opportunistic infections, have occurred in patients
                                receiving BRAND&nbsp;X. If a serious infection develops,
                                interrupt BRAND&nbsp;X until the infection is controlled.
                                Prior to starting BRAND&nbsp;X, perform a test for latent
                                tuberculosis; if it is positive, start treatment for
                                tuberculosis prior to starting BRAND&nbsp;X. Monitor all
                                patients for active tuberculosis during treatment, even if the
                                initial latent tuberculosis test is negative. Lymphoma and
                                other malignancies have been observed in patients treated with
                                BRAND X.
                                </p>
                            </div>
                            </div>
                        </div></a>
                    </div>
                    </div>
                </div>
            </div>
        
            <div className="cookie-toolbar section">
                <div className="cookie-toolbar__box ">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col d-flex flex-column flex-sm-row">
                            <div className="headline-text cmp">
                                <div className="mb-0">
                                <div className=" cmp-text">
                                    <p>
                                    We use cookies to offer you a better browsing experience,
                                    analyze site traffic, personalize content, and serve focused
                                    advertisements. Read about how we use cookies and how you can
                                    control them by <a href="#">clicking here</a>.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="cookie-toolbar__btn">
                                <div className="button-link section">
                                    <a
                                    className="btn btn-cookie   "
                                    data-type=""
                                    href=""
                                    target=""
                                    title=""
                                    role="button"
                                    >Accept Cookies</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="cookie-toolbar__close"></div>
                </div>
            </div>
        </>
    )
}

CommonTemplate.propTypes = {

};

CommonTemplate.defaultProps = {

};

export default CommonTemplate;