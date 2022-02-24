import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import InputField from '../../components/molecules/input-field/InputField';
import Select from '../../components/atoms/select/select';
import { text, boolean, select } from '@storybook/addon-knobs';

storiesOf('Molecules | Select', module)
    .add('Select', () => {
        return (
            <Select
            id={text('Id', "select1")}
            labelText={text("Cetagory", 'Cetagory')}
            name={text("name", 'select1')}
            disabled={boolean('disabled', false)}
            options={[
              {
                displayValue: 'select one',
                id: 0,
                selected: true,
                value: ''
              },
              {
                displayValue: 'MR.',
                id: 1,
                selected: false,
                value: 'MR.'
              },
              {
                displayValue: 'KR',
                id: 2,
                selected: false,
                value: 'KR'
              },
              {
                displayValue: 'AA',
                id: 3,
                selected: false,
                value: 'AA'
              },
              {
                displayValue: 'SS',
                id: 4,
                selected: false,
                value: 'SS'
              }
            ]}
            requiredText=""
          />          
        )
    })
