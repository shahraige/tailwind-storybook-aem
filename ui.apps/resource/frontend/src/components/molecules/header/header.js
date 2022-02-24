import React from 'react';
import HtmlComment from '../../particles/html-comment/HtmlComment';
import ImageExtension from '../image-extension/ImageExtension';
import MainNavigation from '../main-navigation/main-navigation';

const items = [
    {
        id: 0,
        title: '',
        linkUrl: '#',
        clickToCall: '',
        children: [],
        viewportType: 'home-icon'
    },
    {
        id: 1,
        title: 'For patients and caregivers',
        linkUrl: '#',
        clickToCall: '',
        viewportType: '',
        children: [{
            id: 101,
            title: 'Wir sind Galapagos',
            linkUrl: '#',
            clickToCall: '', 
            children: []
        },
        {
            id: 102,
            title: 'Galapagos in Deutschland',
            linkUrl: '#',
            clickToCall: '', 
            children: []
        }]
    },
    {
        id: 2,
        title: 'For healthcare professionals',
        linkUrl: '#',
        clickToCall: '',
        children: [],
        viewportType: 'desktop-only'
    },
    {
        id: 4,
        title: 'Who are Galapagos?',
        linkUrl: '#',
        clickToCall: '',
        children: [],
        viewportType: 'mobile-only'
    },
    {
        id: 3,
        title: 'Find a clinical trial',
        linkUrl: '#',
        clickToCall: 'clickToOverlay',
        children: [],
        viewportType: ''
    }
]

const Header = props => {

    return (
        <header className="header section">

            <HtmlComment text="Start Header component markup, Copy from here" />
            <div className={`header__wrapper`}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className='header__inner'>
                                <div className='logo'>
                                    <ImageExtension
                                        image_href="#"
                                        image_src="images/Logo-positive_DT.svg"
                                        image_size='w-100' 
                                        bottom_gap='mb-0' 
                                        image_position='justify-content-start'
                                    />
                                </div>

                                <div className='header-right'>
                                    <span className="clickToOverlay clinical-trials">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#004C45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        <span className="trials">Trials</span>
                                    </span>
                                    <span className="hamburger-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 24 24" fill="none" stroke="#004C45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                                        <span className="menu">Menu</span>
                                    </span>
                                    <MainNavigation items={items} />
                                </div>
                            </div>
                        </div>   
                    </div>    
                </div>   
            </div>
            <HtmlComment text="End header component markup, Copy from here" />

        </header>

    );
}

export default Header;
