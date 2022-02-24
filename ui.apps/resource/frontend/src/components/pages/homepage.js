import React from 'react';
import Footer from '../molecules/footer/footer';
import Header from '../molecules/header/header';
import HeroHeader from '../molecules/hero-header/hero-header';
import ItemGallery from '../molecules/item-gallery/item-gallery';
import Separator from '../molecules/separator/separator';
import ButtonLink from '../molecules/button-link/ButtonLink'
import HeadlineText from '../molecules/headline-text/HeadlineText';
import CarouselHcp from '../molecules/carousel-hcp/carousel-hcp';
import SearchFilterOverlay from '../molecules/search-filter-overlay/search-filter-overlay';
import CookieToolbar from '../molecules/cookie-toolbar/cookie-toolbar';
import BackToTop from '../molecules/back-to-top/back-to-top';
import SelectionModal from '../molecules/selection-modal/selection-modal';

const Homepage = (props) => {

    const { } = props;
    return (
        <>
            <Header/>
            <HeroHeader 
                heroHeight= {'Height:', '794'}
                heroImageUrl={'storybook-images/Header-image.png'}
                heroTabImageUrl={'storybook-images/Hero-home-image.png'}
            />
            <Separator 
                size="size-1"
                marginY="my-5"
                borderColor="border-transparent"
            />
            <SelectionModal/>
            <div className="column-control section">
                <div className="column-control-wrapper">
                    <div className="bg-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">

                                    <HeadlineText>
                                        <h1 style={{color: '#004C45'}}>
                                            <span class="verveine-text">
                                                About clinical trials
                                            </span>
                                        </h1>
                                        <p>Clinical trials are <span data-custom-text="study description tooltip" data-text-type="glossary" className="text-tooltip" rel="tooltip" data-toggle="tooltip" data-html="true" title="A clinical trial (also called clinical research) is a research study in human volunteers to answer specific health questions. Carefully conducted clinical trials are the fastest and safest way to find treatments that work in people and ways to improve health. Interventional trials determine whether experimental treatments or new ways of using known therapies are safe and effective under controlled environments. Observational trials address health issues in large groups of people or populations in natural settings.">studies</span> that can help us develop new treatments for medical conditions and therefore improve people’s health. This site is a comprehensive resource for patients, carers and healthcare professionals, where you can find information on what clinical trials are, what is involved and how to take part. </p>
                                    </HeadlineText>

                                    <Separator 
                                        size="size-1"
                                        marginY="my-3"
                                        borderColor="border-transparent"
                                    />

                                    <div className="teaser-gellary section">
                                        <div className="teaser-gellary__inner">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="gellary-item">
                                                        <div className="gellary-item__img">
                                                            <img src="storybook-images/patients.png" alt="" />
                                                        </div>
                                                        <div className="gellary-item__overlay">                            
                                                            <ButtonLink button_styles='info' btn_text='Startseite' />                         
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="gellary-item">
                                                        <div className="gellary-item__img">
                                                            <img src="storybook-images/patients.png" alt="" />
                                                        </div>
                                                        <div className="gellary-item__overlay">                            
                                                            <ButtonLink button_styles='info' btn_text='FOR HEALTHCARE PROFESSIONALS' />                         
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Separator 
                size="size-1"
                marginY="my-5"
                borderColor="border-transparent"
            />

            <div className="column-control section">
                <div className="column-control-wrapper">
                    <div className="bg-container bg-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <Separator 
                                        size="size-1"
                                        marginY="my-4"
                                        borderColor="border-transparent"
                                    />

                                    <HeadlineText>
                                        <h1 style={{color: '#004C45'}}>
                                            <span class="verveine-text">
                                                Clinical trials stories
                                            </span>
                                        </h1>
                                        <p>Each clinical trial journey is a personal experience. Hear what it’s like to take part in a clinical trial from different perspectives, including people’s thoughts and feelings throughout the process, and any advice they have for others who are considering whether it could be an option for them. </p>
                                    </HeadlineText>

                                    <Separator 
                                        size="size-1"
                                        marginY="my-3"
                                        borderColor="border-transparent"
                                    />

                                    <CarouselHcp/>

                                    <Separator 
                                        size="size-1"
                                        marginY="my-5"
                                        borderColor="border-transparent"
                                    />
                                    <Separator 
                                        size="size-1"
                                        marginY="my-5"
                                        borderColor="border-transparent"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="column-control section">
                <div className="column-control-wrapper">
                    <div className="bg-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">

                                    <Separator 
                                        size="size-1"
                                        marginY="my-5"
                                        borderColor="border-transparent"
                                    />

                                    <div class="item-gellary section">
                                        <div class="item-gellary__inner">
                                            <div class="card section">
                                                <div class="card__inner">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <a href="#">
                                                                <div class="card__inner__item">
                                                                    <div class="icon">
                                                                        <img
                                                                            src="storybook-images/GLPG-icon-1.svg"
                                                                            alt="transparency-icon"
                                                                        />
                                                                    </div>
                                                                    <div class="title">Who are Galapagos?</div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <a href="#">
                                                                <div class="card__inner__item">
                                                                    <div class="icon">
                                                                        <img
                                                                            src="storybook-images/transparency-icon-2.png"
                                                                            alt="transparency-icon"
                                                                        />
                                                                    </div>
                                                                    <div class="title">Who are Galapagos?</div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <a href="#">
                                                                <div class="card__inner__item">
                                                                    <div class="icon">
                                                                        <img
                                                                            src="storybook-images/transparency-icon-2.png"
                                                                            alt="transparency-icon"
                                                                        />
                                                                    </div>
                                                                    <div class="title">Who are Galapagos?</div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Separator 
                                        size="size-1"
                                        marginY="my-5"
                                        borderColor="border-transparent"
                                    />

                                    <div className="column-control section">
                                        <div className="column-control-wrapper">
                                            <div className="bg-container">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-3"></div>
                                                        <div className="col-md-6">

                                                            <ButtonLink 
                                                                button_styles='primary' 
                                                                btn_text='FIND A CLINICAL TRIAL' 
                                                                button_textColor='white'
                                                                buttonlink_href=''
                                                                buttonlink_target=''
                                                                buttonlink_title='FIND A CLINICAL TRIAL' 
                                                                button_type='' 
                                                                button_width='w-100'
                                                            />
                                                        </div>
                                                        <div className="col-md-3"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Separator 
                                        size="size-1"
                                        marginY="my-5"
                                        borderColor="border-transparent"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BackToTop/>
            
            <CookieToolbar/>

            <Footer/>

            <SearchFilterOverlay/>
        </>
    );
}

Homepage.propTypes = {
    //container_type: PropTypes.node.isRequired,
};

Homepage.defaultProps = {
    //container_type: 'conatiner'
};

export default Homepage;
