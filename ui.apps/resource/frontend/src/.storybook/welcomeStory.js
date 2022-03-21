import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome", module).add("index", () => (
    <div className="px-4 py-5 my-5 text-center">
        <div>
            <img
                className="img img-fluid mx-auto"
                src="images/hbk-logo.png"
            />
        </div>
        <h1 className="p-6 my-5">
            Welcome to AEM Bulletproof UI components
        </h1>
        <h6>
            Quickly design and customize responsive mobile-first sites with
            Storybook.
            <br />
            Featuring Bootstrap Sass variables and mixins, responsive grid
            system, extensive prebuilt components, and powerful JavaScript
            plugins.
        </h6>
        <hr className="my-4" />
        <p className="mb-12">
            Storybook is an open source tool for developing UI components in
            isolation for React, Vue, and Angular. It makes building stunning
            UIs organized and efficient.
        </p>
        <a
            className="bg-blue-900 p-5 text-white"
            href="https://storybook.js.org/"
            target="_blank"
            role="button"
        >
            Learn more
        </a>
    </div>
));
