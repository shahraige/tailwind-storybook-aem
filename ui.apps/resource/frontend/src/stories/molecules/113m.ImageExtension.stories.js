import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageExtension from '../../components/molecules/image-extension/ImageExtension';
import { text, select } from '@storybook/addon-knobs';


// ------------- select dropdown for knobs -----------

const image_size_lbl = 'Image Size';
const image_size_options = {
   "width 25": 'w-25',
   "Half widht": 'w-50',
   "Width 75": 'w-75',
   "Full Width": 'w-100'
};
const image_size_defaultValue = "w-100";


const bottom_gap_lbl = 'Bottom Gap';
const bottom_gap_options = {
   "normal": '',
   "No Gap": 'no-bgap',
};
const bottom_gap_defaultValue = "no-bgap";


const image_position_lbl = 'Image Position';
const image_position_options = {
   "Start": 'justify-content-start',
   "Center": 'justify-content-center',
   "End": 'justify-content-end'
};
const image_position_defaultValue = "justify-content-start";



storiesOf('Molecules | Image Extension', module)
   .add('Image Extension', () => {
      const image_size = select(image_size_lbl, image_size_options, image_size_defaultValue);
      const bottom_gap = select(bottom_gap_lbl, bottom_gap_options, bottom_gap_defaultValue);
      const image_position = select(image_position_lbl, image_position_options, image_position_defaultValue);
      return (
         <ImageExtension image_src="storybook-images/test-img/desktop-1080.jpg" image_size={image_size} bottom_gap={bottom_gap} image_position={image_position} />
      )
   })
