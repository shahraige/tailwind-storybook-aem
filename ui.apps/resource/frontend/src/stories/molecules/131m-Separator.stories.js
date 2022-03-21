import React from 'react';
import Separator from '../../components/molecules/separator/separator';


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

const size = {
   1: 'size-1',
   2: 'size-2',
   3: 'size-3',
   4: 'size-4',
   5: 'size-5'
};


const marginY = {
   0: 'my-0',
   1: 'my-1',
   2: 'my-2',
   3: 'my-3',
   4: 'my-4',
   5: 'my-5',
};

export default {
   title: 'Molecules/Separator',
   component: Separator,
   argTypes: {
      borderColor: {
         defaultValue:'border-primary',
         control: { type: "select", options: borderColor }
     },

     size: {
         defaultValue:'size-1',
         control: { type: "select", options: size }
     },

     marginY: {
        defaultValue:'my-3',
        control: { type: "select", options: marginY }
      },
      seperatorWidth: {
         name: "Seperaor width",
      },
      only_sm: {
         control: { 
            type: "inline-radio", 
            options: {"enable": "only-sm" ,  "disable":""} 
         }
      }
   }
};

const Template = (args) => <Separator {...args} />

export const Horizontal_separator = Template.bind({});
Horizontal_separator.args = {
   seperatorWidth: "100%",
   only_sm: ''
}

