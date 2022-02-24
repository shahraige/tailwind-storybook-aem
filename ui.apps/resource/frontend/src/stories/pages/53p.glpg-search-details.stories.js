import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchDetailsPage from '../../components/pages/search-details';

storiesOf('Page | Search Details', module)
    .add('Search Details', () => {
        return (
            <div style={{backgroundColor: "#f3f5f8"}}>
                <SearchDetailsPage/>
            </div>
        )
    })