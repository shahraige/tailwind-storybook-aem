import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Welcome', module)
    .add('index', () =>
        <div className="jumbotron text-center">
            <img src="images/galapagos.png"  />
            <h1 className="display-4 my-5">Welcome to Galapagos Bulletproof UI components faster</h1>
            <p className="lead">Quickly design and customize responsive mobile-first sites with Storybook.<br/>Featuring Bootstrap Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <hr className="my-4" />
                <p>Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient.</p>
                <a className="btn btn-primary btn-lg" href="https://storybook.js.org/" target="_blank" role="button">Learn more</a>
        </div>
    )