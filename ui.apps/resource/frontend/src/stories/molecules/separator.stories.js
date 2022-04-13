import React from 'react';
import Separator from '../../components/molecules/separator/separator';

const borderColor = {
    Default: '',
    Primary: 'border-primary',
    Secondary: 'border-secondary',
    Light: 'border-white',
 };

 const borderHeight = {
    'h-px' : 'h-px',
    'h-0.5' : 'h-0.5',
    'h-1' : 'h-1',
    'h-1.5' : 'h-1.5',
    'h-2' : 'h-2',
    'h-2.5' : 'h-2.5',
    'h-3' : 'h-3',
    'h-3.5' : 'h-3.5',
    'h-4' : 'h-4',
 }

 const margin_y_options = {
    'my-px' : 'my-px',
    'my-0.5' : 'my-0.5',
    'my-1' : 'my-1',
    'my-1.5' : 'my-1.5',
    'my-2' : 'my-2',
    'my-2.5' : 'my-2.5',
    'my-3' : 'my-3',
    'my-3.5' : 'my-3.5',
    'my-4' : 'my-4',
    'my-5' : 'my-5',
    'my-6' : 'my-6',
 }


export default {
   title: 'Molecules/Separator',
   component: Separator,
   argTypes: {
       border_size : {
        name: "Border size",
        defaultValue: "",
        control: { 
            type: "select", 
            options: {
                    "border-t" : "border-t",
                    "border-t-2" : "border-t-2",
                    "border-t-4" : "border-t-4",
                    "border-t-8" : "border-t-8",
                }
         },
       },

       border_color : {
        name: "Border color",
        defaultValue: "",
        control: { 
            type: "select", 
            options: borderColor
         },
       },

       border_gradient : {
        name: "Border gradient",
        defaultValue: false,
        control: { type: "boolean" },
        table: {
            category: 'Gradient border'
        }
       },

       border_gradient_width : {
        name: "Border gradient width",
        control: { type: "select" , options : borderHeight },
        
        table: {
            category: 'Gradient border'
        }
       },

       marginY : {
        name: "Margin",
        defaultValue: "my-6",
        control: { 
            type: "select", 
            options: margin_y_options
         },
       },
   }
};

const Template = (args) =>
    <Separator  {...args}/>;

export const Separator_default = Template.bind({});
export const Separator_gradient = Template.bind({});
Separator_gradient.args = {
    border_gradient : true
}

