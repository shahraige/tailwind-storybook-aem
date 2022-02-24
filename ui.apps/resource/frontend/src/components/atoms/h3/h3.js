import React from 'react';
import PropTypes from 'prop-types';

const H3 = (props) => (
    <h3>{props.content}</h3>
);

H3.defaultProps = {
    content: 'Heading 3'
}

H3.propTypes = {
    /** Headline 3  */
    content: PropTypes.string.isRequired,
}




export default H3;