import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchResultPage from '../../components/pages/search-result';
import Homepage from '../../components/pages/homepage';

storiesOf('Page | Homepage', module)
    .add('Homepage', () => {
        return (
            <div>
                <Homepage/>
            </div>
        )
    })