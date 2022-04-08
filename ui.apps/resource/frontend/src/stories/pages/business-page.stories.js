import React from 'react';
import BusinessPage from '../../components/templates/business-page';

export default {
   title: 'Pages/BusinessPage',
   component: BusinessPage,
   argTypes: {}
};

const Template = (args) => <BusinessPage  {...args}/>;

export const BusinessPage_default = Template.bind({});

