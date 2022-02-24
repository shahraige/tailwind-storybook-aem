import React from 'react';
import { storiesOf } from '@storybook/react';
import NextStepsPage from '../../components/pages/next-steps';

storiesOf('Page | Next Steps', module)
    .add('default', () => {
        return (
            <div style={{backgroundColor: "#f3f5f8"}}>
                <NextStepsPage />
            </div>
        )
    })