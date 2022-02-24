import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import CountrySelect from '../../components/molecules/country-select/country-select';


storiesOf('Molecules | Country Select', module)
    .add('Country Select', () => {
        return (
            <CountrySelect/>
        )
    })
