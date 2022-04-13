import React from 'react';
import TeaserGallery from '../../components/molecules/teaser-gallery/teaser-gallery';

export default {
   title: 'Molecules/TeaserGallery',
   component: TeaserGallery,
   argTypes: {
       teaser_type : {
        name: "Type",
        defaultValue: "",
        control: { 
            type: "select", 
            options: 
                {
                    "default" : "default",
                    "hover-card" : "hover-card"
                }
           },
       }
   }
};

const Template = (args) => <TeaserGallery  {...args}/>;

export const TeaserGallery_default = Template.bind({});

TeaserGallery_default.args = {
    teaser_type : "default"
}

export const hoverCard = Template.bind({});

hoverCard.args = {
    teaser_type : "hover-card"
}

