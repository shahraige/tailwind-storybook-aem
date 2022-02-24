import React from 'react';
import PropTypes from 'prop-types';
import HeadlineText from '../headline-text/HeadlineText';
import HtmlComment from '../../particles/html-comment/HtmlComment';
import ImageExtension from '../image-extension/ImageExtension';

const TextImage = props => {
    const { ti_image_size, image_position, text_position, row_reverse } = props;
    return (
        <div className="text-image section">
            <HtmlComment text="Start Text image component markup, Copy from here" />
            <section className={`text-image__wrapper ${row_reverse ? row_reverse : ''}`}>

                <div className={`text-image__image ${image_position ? image_position : ''} ${ti_image_size ? ti_image_size : ''}`}>
                    <ImageExtension image_src="images/galapagos.png" />
                </div>

                <div className={`text-image__body ${text_position ? text_position : ''}`}>

                    <HeadlineText>
                        {props.children}
                    </HeadlineText>

                </div>
            </section>
            <HtmlComment text="End Text image component markup, Copy from here" />
        </div>
    );
}

TextImage.propTypes = {
    ti_image_size: PropTypes.string,
    image_position: PropTypes.string,
    text_position: PropTypes.string
};

TextImage.defaultProps = {
    //ti_image_size: 'img-original'
};

export default TextImage;
