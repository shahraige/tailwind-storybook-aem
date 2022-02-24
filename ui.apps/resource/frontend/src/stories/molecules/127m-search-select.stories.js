import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import SearchSelect from '../../components/molecules/search-select/search-select';

storiesOf('Molecules | Search Select', module)
    .add('Search Select', () => {
        return (
            <SearchSelect
            id={text('Id', "select21")}
            DatalistId={text('DatalistId', "search")}
            //placeHolder={text('placeHolder','Search by medical condition')}
            labelText={text("Cetagory", 'Search by medical condition')}
            name={text("name", 'select')}
            disabled={boolean('disabled', false)}
            options={[
              {
                displayValue: 'Apple',
                id: 1,
                selected: false,
                value: 'apple'
              },
              {
                displayValue: 'Black Berry',
                id: 2,
                selected: false,
                value: 'berry'
              },
              {
                displayValue: 'Coconut',
                id: 3,
                selected: false,
                value: 'coconut'
              },
              {
                displayValue: 'Dragon Fruit',
                id: 4,
                selected: false,
                value: 'dragon'
              },
              {
                displayValue: 'Elderberries',
                id: 5,
                selected: false,
                value: 'elderberries'
              },
              {
                displayValue: 'Figs',
                id: 6,
                selected: false,
                value: 'figs'
              },
              {
                displayValue: 'Grapefruit',
                id: 6,
                selected: false,
                value: 'grape'
              }
            ]}
            requiredText=""
          />          
        )
    })
