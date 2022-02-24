import React from 'react';
import PropTypes from 'prop-types';
import HtmlComment from '../../particles/html-comment/HtmlComment';
import HeadlineText from '../headline-text/HeadlineText';

const BlockQuote = (props) => {

    const { quote_text, quote_sub_text } = props;
    return (
        <div className="block-quote section">
            <HtmlComment text="Start box component markup, Copy from here" />
            <div className="block-quote__wrapper">
                <div className="block-quote__img"></div>
                <div className="block-quote__details">
                    <HeadlineText>
                        <h2><span className="verveine-text"><span className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel risus in risus ullamcorper molestie nec vel eros. In eu commodo felis. Donec in ligula est. Nam vitae mauris gravida, accumsan magna nec, volutpat orci.<sup>”</sup></span></span></h2>
                    </HeadlineText>

                    <div className="block-quote__details-source">
                        <HeadlineText>
                            <p>[Quote from a patient experience]</p>
                        </HeadlineText>
                    </div>
                </div>
            </div>
            <HtmlComment text="Start box component markup, Copy from here" />
        </div>
    );
}

BlockQuote.propTypes = {

};

BlockQuote.defaultProps = {

};

export default BlockQuote;