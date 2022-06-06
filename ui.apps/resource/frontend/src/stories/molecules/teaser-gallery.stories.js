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
                    "teaser-vertical" : "teaser-vertical",
                    "teaser-text" : "teaser-text",
                    "teaser-stage" : "teaser-stage",
                }
           },
       }
   }
};

const Template = (args) => <TeaserGallery  {...args}/>;

export const teaser_Vertical = Template.bind({});

teaser_Vertical.args = {
    teaser_type : "teaser-vertical"
}

export const teaserText = Template.bind({});

teaserText.args = {
    teaser_type : "teaser-text"
}

export const teaser_stage = Template.bind({});

teaser_stage.args = {
    teaser_type : "teaser-stage"
}


