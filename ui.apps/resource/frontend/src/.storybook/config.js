import { configure,addDecorator,addParameters   } from '@storybook/react';
import {withKnobs } from "@storybook/addon-knobs";
import { withHTML } from '@whitespace/storybook-addon-html/react';
import { withInfo } from '@storybook/addon-info';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import crfTheme from './crfTheme';
// golbal scss  
import "../styles/glpg-ctp-112/storybook.scss";
import "../tailwind.css";

//--------- addons--------
addDecorator(withKnobs({
  escapeHTML: false,
}));
addDecorator(withHTML);
addDecorator(withInfo); 
//------- custom theme -------
addParameters({
  options: {
    theme: crfTheme
  }
})


//viewport addons
addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS
    },
  });

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
    require('./welcomeStory');
    req.keys().forEach(filename => req(filename));
    document.body.setAttribute('data-site-id', 'glpg-ctp-112');
}
configure(loadStories, module);