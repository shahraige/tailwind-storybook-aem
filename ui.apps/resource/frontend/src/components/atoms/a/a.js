import React from 'react';
import PropTypes from 'prop-types';

const A = (props) => (
    <a href="#">{props.content}</a>
);

A.defaultProps = {
    content: 'link'
}

A.propTypes = {
    /** Links allow users to click their way from page to page.  */
    content: PropTypes.string.isRequired,
}




export default A;