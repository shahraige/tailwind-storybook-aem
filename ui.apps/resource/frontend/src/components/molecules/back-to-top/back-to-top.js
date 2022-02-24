import React from 'react';
import HtmlComment from '../../particles/html-comment/HtmlComment';

const BackToTop = (props) => {
    return (
        <div className="back-to-top section">
            <HtmlComment text="Start back-to-top component markup, Copy from here" />
            <div className="back-to-top__inner back-to-top-id">
                <img  src="images/icons/icon-arrow-up.svg" alt="Back to top"/>
            </div>
            <HtmlComment text="Start back-to-top component markup, Copy from here" />
        </div>
    )
}

export default BackToTop;