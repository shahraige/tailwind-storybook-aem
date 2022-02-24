import React from 'react';
import { storiesOf } from '@storybook/react';
import H1 from '../../components/atoms/h1/h1';
import { text } from '@storybook/addon-knobs';

storiesOf('Atoms | h1', module)
   .addParameters({
      info: {
         text: `
         HTML headings are defined with the <h1>

         ~~~js
         <h1>Heading 1</h1>
         ~~~
       `,
      },
   })
   .add("h1", () => {
      const headline = text('Text', 'A simple primary alert with an example link. Give it a click if you like.');
      return (<H1 content={headline} />)
   });