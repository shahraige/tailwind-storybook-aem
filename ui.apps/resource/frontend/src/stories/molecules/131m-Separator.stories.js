import React from 'react';
import { storiesOf } from '@storybook/react';
import Separator from '../../components/molecules/separator/separator';
import { text, select, boolean } from '@storybook/addon-knobs';

const borderColorLabel = 'Border Color';
const borderColor = {
   Default: '',
   Primary: 'border-primary',
   Secondary: 'border-secondary',
   Success: 'border-success',
   Info: 'border-info',
   Warning: 'border-warning',
   Danger: 'border-danger',
   Light: 'border-light',
   Dark: 'border-dark',
   Transparent: 'border-transparent'
};
const defaultBorderColor = '';

const borderSizeLabel = 'Border Size';
const borderSize = {
   1: 'size-1',
   2: 'size-2',
   3: 'size-3',
   4: 'size-4',
   5: 'size-5'
};
const defaultborderSize = 'size-2';

const marginYLabel = 'Vertical Margin';
const marginY = {
   0: 'marginY-0',
   1: 'marginY-1',
   2: 'marginY-2',
   3: 'marginY-3',
   4: 'marginY-4',
   5: 'marginY-5',
};
const defaultmarginY = 'marginY-5';

storiesOf('Molecules | Separator', module)
   .addParameters({
      info: {
         text: `
         HTML Separator are defined with the <label>

         ~~~js
         <!-- borderColor value are border-primary, border-secondary, border-success, border-info, border-warning, border-danger, border-light, border-dark -->
         <!-- size value are size-1, size-2, size-3, size-4, size-5-->
         <!-- marginY value are my-0, my-1, my-2, my-3, my-4, my-5-->
         ~~~
       `,
      },
   })
   .add("Separator", () => {
      const border_color = select(borderColorLabel, borderColor);
      const border_size = select(borderSizeLabel, borderSize, defaultborderSize);
      const margin_size = select(marginYLabel, marginY,defaultmarginY);
      return (
         <Separator 
         borderColor={border_color}
          size={border_size} 
          marginY={margin_size}
          tabMarginNone={boolean("Margin zero in tab", false)}/>
      )
   });