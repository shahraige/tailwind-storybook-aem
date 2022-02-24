import React from 'react';
import PropTypes from 'prop-types';

const Img = (props) => (
    <img src={props.img_path} alt={props.alternate_text} />
);

Img.defaultProps = {
    img_path: 'images/galapagos.png',
    title: 'images'
}

Img.propTypes = {
    /** Specifies the path to the image  */
    img_path: PropTypes.string.isRequired,
    /**  Specifies an alternate text for the image   */
    alternate_text: PropTypes.string.isRequired,
}

export default Img;