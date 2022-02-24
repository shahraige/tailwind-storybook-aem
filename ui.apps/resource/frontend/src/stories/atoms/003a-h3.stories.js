import React from 'react';
import { storiesOf } from '@storybook/react';
import H3 from '../../components/atoms/h3/h3';
import { text } from '@storybook/addon-knobs';

storiesOf('Atoms | h3', module)
   .addParameters({
      info: {
         text: `
         HTML headings are defined with the <h3>

         ~~~js
         <h3>Heading 3</h3>
         ~~~
       `,
      },
   })
   .add("h3", () => {
      const headline = text('Text', 'A simple primary alert with an example link. Give it a click if you like.');
      return (<H3 content={headline} />)
   });