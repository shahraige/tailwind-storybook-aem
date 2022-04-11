import React from 'react';
import HtmlComment from '../../particles/html-comment/HtmlComment';

const ImageExtension = (props) => (
  <div className="image-extension section">
    <HtmlComment text="Start image-extension component markup, Copy from here" />

    <div className={`${props.image_position || ''} image-container flex`}>

      <a href={props.image_href} className={props.image_size}>
        {/* For Desktops && lAPTOP  */}
        <img className={`${props.bottom_gap} w-full hidden lg:block max-w-full h-auto`}
          src={props.lg_image_src ? props.lg_image_src : props.image_src}
          srcSet={`${props.lg_image_src ? props.lg_image_src : props.image_src} 1920w, ${props.lg_image_src ? props.lg_image_src : props.image_src} 1440w, ${props.lg_image_src ? props.lg_image_src : props.image_src} 1080w`}
          alt="Desktop Image" />

        {/* For TABLET  */}
        <img className={`${props.bottom_gap} w-full hidden md:block lg:hidden max-w-full h-auto`}
          src={props.md_image_src ? props.md_image_src : props.image_src}
          srcSet={`${props.md_image_src ? props.md_image_src : props.image_src} 1920w, ${props.md_image_src ? props.md_image_src : props.image_src} 1440w, ${props.md_image_src ? props.md_image_src : props.image_src} 1080w`}
          alt="Tablet Image" />

        {/* For Moblie  */}
        <img className={`${props.bottom_gap} w-full md:hidden max-w-full h-auto`}
          src={props.sm_image_src ? props.sm_image_src : props.image_src}
          srcSet={`${props.sm_image_src ? props.sm_image_src : props.image_src} 1300w, ${props.sm_image_src ? props.sm_image_src : props.image_src} 975w, ${props.sm_image_src ? props.sm_image_src : props.image_src} 730w`}
          alt="Mobile Image" />

      </a>
    </div>

    <HtmlComment text="End image-extension component markup" />
  </div>
);

export default ImageExtension;
