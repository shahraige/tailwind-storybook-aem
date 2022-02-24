import React from 'react';
import { storiesOf } from '@storybook/react';
import H5 from '../../components/atoms/h5/h5';
import { text } from '@storybook/addon-knobs';

storiesOf('Atoms | h5', module)
   .addParameters({
      info: {
         text: `
         HTML headings are defined with the <h5>

         ~~~js
         <h5>Heading 5</h5>
         ~~~
       `,
      },
   })
   .add("h5", () => {
      const headline = text('Alert Text', 'A simple primary alert with an example link. Give it a click if you like.');
      return (<H5 content={headline} />)
   });