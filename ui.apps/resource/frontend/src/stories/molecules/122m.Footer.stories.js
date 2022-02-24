import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from '../../components/molecules/footer/footer';

storiesOf('Molecules | Footer', module)
    .add('Footer default', () => {
        return (
            <Footer/>
        );
    })

