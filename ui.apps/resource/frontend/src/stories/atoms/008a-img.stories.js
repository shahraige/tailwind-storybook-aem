import React from 'react';
import { storiesOf } from '@storybook/react';
import Img from '../../components/atoms/img/img';
import { text } from '@storybook/addon-knobs';

storiesOf('Atoms | img', module)
   .addParameters({
      info: {
         text: `
         The HTML <img> tag is used to embed an image in a web page.
         Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.

         ~~~js
         <img src="url" alt="alternatetext">
         ~~~
       `,
      },
   })
   .add("img", () => {
      const img_path = text('Img path', 'images/galapagos.png');
      const alternate_text = text('Alternate Text', 'Logo');
      return (<Img img_path={img_path} alternate_text={alternate_text} />)
   });