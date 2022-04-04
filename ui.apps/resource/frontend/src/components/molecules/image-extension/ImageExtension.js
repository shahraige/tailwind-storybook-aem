import React from 'react';
import HtmlComment from '../../particles/html-comment/HtmlComment';

const ImageExtension = (props) => (
  <div className="image-extension section mb-11">
    <HtmlComment text="Start image-extension component markup, Copy from here" />

    <div className={`${props.image_position || ''} image-container flex`}>

      <a href={props.image_href} className={props.image_size}>
        {/* For Desktops && lAPTOP  */}
        <img className={`${props.bottom_gap} w-full hidden lg:block max-w-full h-auto`}
          src={props.image_src}
          srcSet={`${props.image_src} 1920w, ${props.image_src} 1440w, ${props.image_src} 1080w`}
          alt="Desktop Image" />

        {/* For TABLET  */}
        <img className={`${props.bottom_gap} w-full hidden md:block lg:hidden max-w-full h-auto`}
          src={props.image_src}
          srcSet={`${props.image_src} 1920w, ${props.image_src} 1440w, ${props.image_src} 1080w`}
          alt="Tablet Image" />

        {/* For Moblie  */}
        <img className={`${props.bottom_gap} w-full md:hidden max-w-full h-auto`}
          src={props.image_src}
          srcSet={`${props.image_src} 1300w, ${props.image_src} 975w, ${props.image_src} 730w`}
          alt="Mobile Image" />

      </a>
    </div>

    <HtmlComment text="End image-extension component markup" />
  </div>
);

export default ImageExtension;