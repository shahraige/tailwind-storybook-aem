import React from 'react';
import HeroCarousel from '../../components/molecules/hero-carousel/hero-carousel';

export default {
   title: 'Molecules/HeroCarousel',
   component: HeroCarousel,
   argTypes: {}
};

const Template = (args) => <HeroCarousel  {...args}/>;

export const HeroCarousel_default = Template.bind({});

