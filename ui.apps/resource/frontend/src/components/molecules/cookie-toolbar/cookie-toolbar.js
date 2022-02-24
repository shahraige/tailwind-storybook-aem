import React, {  useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HtmlComment from '../../particles/html-comment/HtmlComment';
import ButtonLink from '../button-link/ButtonLink';
import HeadlineText from '../../molecules/headline-text/HeadlineText';

const CookieToolbar = (props) => {
    const { } = props;
    const [isTrue, setisTrue] = useState(false);
    
    useEffect(() => {
        setisTrue(true);
    },[]);

    return (
        <div className="cookie-toolbar section">
            <HtmlComment text="START Cookie Toolbar component markup, Copy from here" />
            <div className={`cookie-toolbar__box ${isTrue ? 'show' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 d-flex flex-column flex-sm-row align-items-center">
                            <HeadlineText>
                                <p>
                                    We use cookies to help us improve your browsing experience and understand how people use our website. Our <a href="#">privacy</a> explains how we use cookies, and how to change your cookie settings.
                                </p>
                            </HeadlineText>
                            
                             
                        </div>
                        <div className="col-md-2 col-6 d-flex flex-column flex-sm-row align-items-center">
                            <div className="cookie-toolbar__btn w-100">
                                <ButtonLink button_styles='outline-primary' btn_text='DECLINE'/>
                            </div>
                        </div>

                        <div className="col-md-2 col-6 d-flex flex-column flex-sm-row align-items-center">
                            <div className="cookie-toolbar__btn w-100">
                                <ButtonLink button_styles='primary' btn_text='OK'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HtmlComment text="END Cookie Toolbar component markup, Copy from here" />
        </div>
    )
}

CookieToolbar.propTypes = {
    //container_type: PropTypes.node.isRequired,
};

CookieToolbar.defaultProps = {
    //container_type: 'conatiner'
};

export default CookieToolbar;