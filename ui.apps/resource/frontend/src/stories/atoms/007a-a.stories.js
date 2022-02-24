import React from 'react';
import { storiesOf } from '@storybook/react';
import A from '../../components/atoms/a/a';
import { text } from '@storybook/addon-knobs';

storiesOf('Atoms | a', module)
   .addParameters({
      info: {
         text: `
         Links are found in nearly all web pages. Links allow users to click their way from page to page.

         ~~~js
         <a href="url">link text</a>
         ~~~
       `,
      },
   })
   .add("a", () => {
      const content = text('Content', 'Read More');
      return (<A content={content} />)
   });