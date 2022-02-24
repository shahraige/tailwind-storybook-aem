import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import CookieToolbar from '../../components/molecules/cookie-toolbar/cookie-toolbar';


storiesOf('Molecules | Cookie Toolbar', module)
    .add('Cookie Toolbar', () => {
        return (
            <> 
               <CookieToolbar/>
            </>
        )
    })