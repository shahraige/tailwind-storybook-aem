import React from 'react';
import { storiesOf } from '@storybook/react';
import H6 from '../../components/atoms/h6/h6';
import { text } from '@storybook/addon-knobs';

storiesOf('Atoms | h6', module)
   .addParameters({
      info: {
         text: `
         HTML headings are defined with the <h6>

         ~~~js
         <h6>Heading 6</h6>
         ~~~
       `,
      },
   })
   .add("h6", () => {
      const headline = text('Text', 'A simple primary alert with an example link. Give it a click if you like.');
      return (<H6 content={headline} />)
   });