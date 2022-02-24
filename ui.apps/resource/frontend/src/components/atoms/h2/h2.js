import React from 'react';
import PropTypes from 'prop-types';

const H2 = (props) => (
    <h2>{props.content}</h2>
);

H2.defaultProps = {
    content: 'Heading 1'
}

H2.propTypes = {
    /** Headline 2  */
    content: PropTypes.string.isRequired,
}




export default H2;