import React from 'react';
import Quote from '../../components/templates/quote';

export default {
   title: 'Templates/Quote',
   component: Quote,
   argTypes: {}
};

const Template = (args) => <Quote  {...args}/>;

export const Quote_default = Template.bind({});
