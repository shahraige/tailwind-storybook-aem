import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import ConditionUnlisted from '../../components/molecules/condition-unlisted/condition-unlisted';

storiesOf('Molecules | Condition Unlisted', module)
    .add('default', () => {
        return (
            <ConditionUnlisted/>
        )
    })
