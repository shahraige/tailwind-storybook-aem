import react from 'react';
import HomePage from '../../components/templates/home-page';


export default {
   title: 'Pages/HomePage',
   component: HomePage,
   argTypes: {}
};

const Template = (args) => <HomePage  {...args}/>;

export const HomePage_default = Template.bind({});

