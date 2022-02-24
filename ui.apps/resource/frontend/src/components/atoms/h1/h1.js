import React from 'react';
import PropTypes from 'prop-types';

const H1 = (props) => (
    <h1>{props.content}</h1>
);

H1.defaultProps = {
    content: 'Heading 1'
}

H1.propTypes = {
    /** Headline 1  */
    content: PropTypes.string.isRequired,
}




export default H1;