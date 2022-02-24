import React from 'react';
import PropTypes from 'prop-types';
import HtmlComment from '../../particles/html-comment/HtmlComment';


const ImageExtensionTest = (props) => (
  <div className="image-extension section">
    <HtmlComment text="Start image-extension component markup, Copy from here" />

    <div className="justify-content-start image-container">

      <a href="#" className="w-100">
        {/* For Desktops && lAPTOP */}
        <img className="d-none d-lg-block img-fluid"
          src="storybook-images/test-img/desktop-1080.jpg"
          srcSet="storybook-images/test-img/desktop-1920.jpg 1920w, storybook-images/test-img/desktop-1440.jpg 1440w, storybook-images/test-img/desktop-1080.jpg 1080w"
          alt="Desktop Image" />
        
        {/* For TABLET */}
        <img className="d-none d-md-block d-lg-none img-fluid" 
          src="storybook-images/test-img/desktop-1080.jpg"
          srcSet="storybook-images/test-img/tablet-1920.jpg 1920w, storybook-images/test-img/tablet-1440.jpg 1440w, storybook-images/test-img/tablet-1080.jpg 1080w"
          alt="Tablet Image" />
        
        {/* For Moblie */}
        <img className="d-md-none img-fluid" 
          src="storybook-images/test-img/mobile-730.jpg"
          srcSet="storybook-images/test-img/mobile-1300.jpg 1300w, storybook-images/test-img/mobile-975.jpg 975w, storybook-images/test-img/mobile-730.jpg 730w"
        alt="Mobile Image" />

      </a>
    </div>

    <HtmlComment text="End image-extension component markup" />
  </div>
);

ImageExtensionTest.propTypes = {
  /** The custom class for set width */
  image_size: PropTypes.string,
  /** The custom class for set bottom gap */
  bottom_gap: PropTypes.string
};

ImageExtensionTest.defaultProps = {
  image_size: '',
  bottom_gap: ''
};

export default ImageExtensionTest;
