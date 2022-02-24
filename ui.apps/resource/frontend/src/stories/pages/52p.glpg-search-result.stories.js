import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchResultPage from '../../components/pages/search-result';

storiesOf('Page | Search Result', module)
    .add('Search Result', () => {
        return (
            <div style={{backgroundColor: "#f3f5f8"}}>
                <SearchResultPage/>
            </div>
        )
    })