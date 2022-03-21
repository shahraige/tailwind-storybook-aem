import React from 'react';
import ImageExtension from '../../components/molecules/image-extension/ImageExtension';

const image_size = {
   "width 25": 'w-25',
   "Half width": 'w-50',
   "Width 75": 'w-75',
   "Full Width": 'w-100'
}

const bottom_gap={
   "normal": '',
   "No Gap": 'no-bgap',
}

const image_position={
   "Start": 'justify-content-start',
   "Center": 'justify-content-center',
   "End": 'justify-content-end'
}

export default {
   title: 'Molecules/ImageExtension',
   component: ImageExtension,
   argTypes: {
      image_size: {
         control: { type: "select", options: image_size }
      },
      bottom_gap: {
         control: { type: "select", options: bottom_gap }
      },
      image_position: {
         control: { type: "select", options: image_position }
      }
   }
};

const Template = (args) => <ImageExtension {...args}/>;

export const Image_Extension = Template.bind({});
Image_Extension.args = {
   image_src : "storybook-images/test-img/desktop-1080.jpg" 
}

