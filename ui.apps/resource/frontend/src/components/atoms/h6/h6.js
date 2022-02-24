import React from 'react';
import PropTypes from 'prop-types';

const H6 = (props) => (
    <h6>{props.content}</h6>
);

H6.defaultProps = {
    content: 'Heading 6'
}

H6.propTypes = {
    /** Headline 6  */
    content: PropTypes.string.isRequired,
}

export default H6;