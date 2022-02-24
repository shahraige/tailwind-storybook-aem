import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../../components/atoms/input/input';
import { select, text } from '@storybook/addon-knobs';

// ------------- select dropdown for knobs -----------
// input_type
const input_type_lbl = 'Input type';
const input_type_options = {
    "Text": 'text',
    "Email": 'email',
    "Password": 'password',
};
const input_type_defaultValue = 'text';

// input_width
const input_width_lbl = 'Input width';
const input_width_options = {
    "Auto": '',
    "w-50": 'w-50',
    "w-100": 'w-100'
};
const input_width_defaultValue = '';

storiesOf('Atoms | Input', module)
    .add('Input', () => {

        const inputType = select(input_type_lbl, input_type_options, input_type_defaultValue)
        const width = select(input_width_lbl, input_width_options, input_width_defaultValue)
        const value = text('Input Value', 'Input value');
        const feedBack = text('Feedback Text', 'Enter your UUID');
        const id = text('Input ID', '');
        const name = text('Input Name', '');

        return (
            <Input
                id={id}
                width={width}
                value={value}
                name={name}
                inputType={inputType}
                feedBack={feedBack}
            />
        )
    })
