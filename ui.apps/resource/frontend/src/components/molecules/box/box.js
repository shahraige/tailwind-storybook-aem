import React from 'react';
import PropTypes from 'prop-types';
import HtmlComment from '../../particles/html-comment/HtmlComment';

const Box = (props) => {

    const { box_border, box_bg, box_padding, box_margin } = props;
    return (
        <div className="box section">
            <HtmlComment text="Start box component markup, Copy from here" />
            <div className={`box__inner box-100 ${box_bg} ${box_padding} ${box_margin}`}>
                {props.children}
            </div>
            <HtmlComment text="Start box component markup, Copy from here" />
        </div>
    );
}

Box.propTypes = {
    box_border: PropTypes.string.isRequired,
    box_bg: PropTypes.string.isRequired,
    box_padding: PropTypes.string.isRequired,
    box_margin: PropTypes.string.isRequired,
    box_opacity: PropTypes.string.isRequired,
};

Box.defaultProps = {
    box_bg: 'box-default',
    box_padding: 'p-4',
    box_margin: '',
    box_opacity: 'opacity-0'
};

export default Box;