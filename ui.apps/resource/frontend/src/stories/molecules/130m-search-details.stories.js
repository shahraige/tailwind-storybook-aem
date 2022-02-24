import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import SearchDetails from '../../components/molecules/search-details/search-details';

storiesOf('Molecules | Search Details', module)
    .add('default', () => {
        return (
            <SearchDetails />
        )
    })
