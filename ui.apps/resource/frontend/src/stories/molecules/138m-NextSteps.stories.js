import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import NextSteps from '../../components/molecules/next-steps/next-steps';

storiesOf('Molecules | Next Steps', module)
    .add('default', () => {
        return (
            <NextSteps />
        )
    })
