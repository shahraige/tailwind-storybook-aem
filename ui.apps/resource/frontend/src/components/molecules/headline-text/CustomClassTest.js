import React from 'react';
import PropTypes from 'prop-types';
import HtmlComment from '../../particles/html-comment/HtmlComment';


const CustomClassTest = (props) => (
  <div className="headline-text cmp">
    <HtmlComment text="Start headline-text component markup, Copy from here" />
    <div className="mb-0">
      <div className={`${props.customClass} cmp-text`}>
        <p>
          <span className={`${props.customClassAdd}`}>  
            {props.children}
          </span>
        </p>
      </div>
    </div>
    <HtmlComment text="End headline-text component markup," />
  </div>
);

CustomClassTest.propTypes = {
  children: PropTypes.node.isRequired,
  /** The custom class for text */
  customClass: PropTypes.string
};

CustomClassTest.defaultProps = {
  customClass: ''
};

export default CustomClassTest;
