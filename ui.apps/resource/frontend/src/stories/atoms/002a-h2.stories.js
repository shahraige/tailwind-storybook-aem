import React from 'react';
import { storiesOf } from '@storybook/react';
import H2 from '../../components/atoms/h2/h2';
import { text } from '@storybook/addon-knobs';

storiesOf('Atoms | h2', module)
   .addParameters({
      info: {
         text: `
         HTML headings are defined with the <h2>

         ~~~js
         <h2>Heading 2</h2>
         ~~~
       `,
      },
   })
   .add("h2", () => {
      const headline = text('Text', 'A simple primary alert with an example link. Give it a click if you like.');
      return (<H2 content={headline} />)
   });