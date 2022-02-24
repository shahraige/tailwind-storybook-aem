import React from 'react';
import PropTypes from 'prop-types';

const H4 = (props) => (
    <h4>{props.content}</h4>
);

H4.defaultProps = {
    content: 'Heading 4'
}

H4.propTypes = {
    /** Headline 4  */
    content: PropTypes.string.isRequired,
}




export default H4;