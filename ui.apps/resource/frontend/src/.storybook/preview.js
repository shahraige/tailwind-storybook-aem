import { configure, addDecorator, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import crfTheme from "./crfTheme";

// global scss  
import "../styles/hbk-111/storybook.scss";
import "../styles/hbk-111/tailwind-dev.scss";

// //viewport addons
addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});
addParameters({
    options: {
        theme: crfTheme,
    },
});

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
    require("./welcomeStory");
    req.keys().forEach((filename) => req(filename));
}
configure(loadStories, module);
