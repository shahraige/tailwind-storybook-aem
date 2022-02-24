import React from 'react';
import { storiesOf } from '@storybook/react';
import H4 from '../../components/atoms/h4/h4';
import { text } from '@storybook/addon-knobs';

storiesOf('Atoms | h4', module)
   .addParameters({
      info: {
         text: `
         HTML headings are defined with the <h4>

         ~~~js
         <h4>Heading 4</h4>
         ~~~
       `,
      },
   })
   .add("h4", () => {
      const headline = text('Alert Text', 'A simple primary alert with an example link. Give it a click if you like.');
      return (<H4 content={headline} />)
   });