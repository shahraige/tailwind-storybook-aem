import React from 'react';
import CardGroup from '../../components/molecules/card/card-group';

const card_types = {
   "default" : "default",
   "card-icon" : "card-icon",
   "card-blog-image" : "card-blog-image",
   "card-blog" : "card-blog",
}

export default {
   title: 'Molecules/Card',
   component: CardGroup,
   argTypes: {
      padding : {
         name: "Padding",
         control: { type: "text" },
      },
      type : {
         name: "Type",
         control: { type: "select" , options :  card_types},
      },
   }
};

const Template = (args) => <CardGroup {...args}/>;

export const Card_icon = Template.bind({});

Card_icon.args = {
   padding : "p-8",
   type : "card-icon"
}

export const Card_blog_image = Template.bind({});

Card_blog_image.args = {
   padding : "px-8 pb-14 pt-8",
   type : "card-blog-image"
}

export const Card_blog = Template.bind({});

Card_blog.args = {
   type : "card-blog"
}


