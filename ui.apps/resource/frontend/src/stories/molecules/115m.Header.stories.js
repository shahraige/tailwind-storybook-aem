import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, boolean } from '@storybook/addon-knobs';
import Header from '../../components/molecules/header/header';
import SearchFilterOverlay from '../../components/molecules/search-filter-overlay/search-filter-overlay';

storiesOf('Molecules | Header', module)
    .add('Header default', () => {
        return (
            <>
                <Header />

                <SearchFilterOverlay/>
            </>
        );
    })

