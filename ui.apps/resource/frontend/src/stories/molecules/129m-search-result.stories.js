import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import SearchResult from '../../components/molecules/search-result/search-result';
import SearchResultMobile from '../../components/molecules/search-result/search-result-mobile';

storiesOf('Molecules | Search Result', module)
    .add('Search Result', () => {
        return (
            <>
                <SearchResult/>
            </>
        )
    })
