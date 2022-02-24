import React from 'react';
import PropTypes from 'prop-types';

const H5 = (props) => (
    <h5>{props.content}</h5>
);

H5.defaultProps = {
    content: 'Heading 5'
}

H5.propTypes = {
    /** Headline 5  */
    content: PropTypes.string.isRequired,
}




export default H5;